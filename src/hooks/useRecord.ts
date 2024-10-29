import { useCallback, useEffect, useState } from "react";
import AudioRecorder from "@/services/AudioRecordingService";
import { getTextFromSpeech } from "@/services/SpeechToTextService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { saveAudio, saveTranscription } from "@/slices/interviewSlice";
import { Transcription } from "@/types/interview";
import { useInterview } from "./useInterview";

export function useRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<AudioRecorder | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { currentQuestionId, currentAudio } = useInterview();
  const dispatch = useDispatch();

  const { mutate, reset } = useMutation({
    mutationFn: (audioBlob: Blob) => getTextFromSpeech(audioBlob),
    mutationKey: ["transcription"],
    onSuccess: (data) => {
      if (data && "text" in data && currentQuestionId) {
        const transcription: Transcription = {
          id: Date.now().toString(),
          questionId: currentQuestionId,
          text: data.text,
        };
        dispatch(saveTranscription(transcription));
      }
    },
  });

  useEffect(() => {
    async function initRecorder() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setRecorder(
        new AudioRecorder(stream, { mimeType: "audio/webm; codecs=opus" })
      );
    }

    initRecorder();
  }, []);

  const handleStartRecording = useCallback(() => {
    setIsRecording(true);
    recorder?.startRecording();
    reset();
  }, [recorder, reset]);

  const handleStopRecording = useCallback(async () => {
    setIsRecording(false);
    if (!recorder) return;

    const audioBlob = await recorder.stopRecording();
    const audioUrl = URL.createObjectURL(audioBlob);
    dispatch(saveAudio(audioUrl));

    mutate(audioBlob);

    const audio = new Audio();
    setAudio(audio);
  }, [recorder, mutate, dispatch]);

  const handlePlayAudio = useCallback(() => {
    if (!audio) return;

    audio.src = currentAudio?.audioUrl;
    audio.play();
  }, [audio, currentAudio?.audioUrl]);

  return {
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    isRecording,
    audioUrl: currentAudio?.audioUrl,
  };
}
