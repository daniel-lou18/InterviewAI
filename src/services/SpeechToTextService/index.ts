import { requestApi } from "../requestApi";

const BASE_URL = import.meta.env.VITE_HF_API_URL;

type ApiSuccessResponse = { text: string };

export async function getTextFromSpeech(
  audioBlob: Blob
): Promise<ApiSuccessResponse> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: audioBlob,
  };

  try {
    const response = await requestApi<ApiSuccessResponse>(
      `${BASE_URL}/openai/whisper-large-v3`,
      options
    );
    return response;
  } catch (err: unknown) {
    console.error(err);
    let message: string;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = "Unknown error";
    }
    throw new Error(message);
  }
}
