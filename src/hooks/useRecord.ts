import { useCallback, useEffect, useState } from "react";
import AudioRecorder from "@/services/AudioRecordingService";
import { getTextFromSpeech } from "@/services/SpeechToTextService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { saveTranscription } from "@/slices/interviewSlice";
import { Transcription } from "@/types/interview";
import { useCurrent } from "./useCurrent";

export function useRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<AudioRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();
  const { currentQuestion } = useCurrent();

  const { mutate, reset } = useMutation({
    mutationFn: (audioBlob: Blob) => getTextFromSpeech(audioBlob),
    mutationKey: ["transcription"],
    onSuccess: (data) => {
      if (data && "text" in data && currentQuestion) {
        const transcription: Transcription = {
          id: Date.now(),
          questionId: currentQuestion.id,
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
    if (recorder) {
      const audioBlob = await recorder.stopRecording();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      const audio = new Audio(audioUrl);
      setAudio(audio);

      mutate(audioBlob);
    }
  }, [recorder, mutate]);

  const handlePlayAudio = useCallback(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  return {
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    isRecording,
    audioUrl,
  };
}
