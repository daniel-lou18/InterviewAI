import { requestApi } from "../requestApi";

const BASE_URL =
  "https://api-inference.huggingface.co/models/openai/whisper-large-v3";

type ApiSuccessResponse = { text: string };
type ApiErrorResponse = { error: { message: string } };

export async function getTextFromSpeech(
  audioBlob: Blob
): Promise<ApiSuccessResponse | ApiErrorResponse> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer`,
      "Content-Type": "application/json",
    },
    body: audioBlob,
  };

  try {
    const response = await requestApi<ApiSuccessResponse>(BASE_URL, options);
    return response;
  } catch (err: unknown) {
    console.error(err);
    return {
      error: { message: err instanceof Error ? err.message : "Unknown error" },
    };
  }
}
