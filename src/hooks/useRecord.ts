import { useEffect, useState } from "react";
import AudioRecorder from "@/services/AudioRecordingService";
import { getTextFromSpeech } from "@/services/SpeechToTextService";

export default function useRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<AudioRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function initRecorder() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setRecorder(
        new AudioRecorder(stream, { mimeType: "audio/webm; codecs=opus" })
      );
    }

    initRecorder();
  }, []);

  const handleStartRecording = () => {
    setIsRecording(true);
    setError("");
    recorder?.startRecording();
  };

  const handleStopRecording = async () => {
    setIsRecording(false);
    if (recorder) {
      const audioBlob = await recorder.stopRecording();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      const audio = new Audio(audioUrl);
      setAudio(audio);

      const result = await getTextFromSpeech(audioBlob);

      if ("error" in result) {
        setError(result.error.message);
      } else {
        console.log(result.text);
      }
    }
  };

  const handlePlayAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  return {
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    isRecording,
    audioUrl,
    error,
  };
}
