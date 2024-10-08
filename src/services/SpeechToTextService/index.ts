import { requestApi } from "../requestApi";

const BASE_URL = import.meta.env.VITE_HF_API_URL;

type ApiSuccessResponse = { text: string };
type ApiErrorResponse = { error: { message: string } };

export async function getTextFromSpeech(
  audioBlob: Blob
): Promise<ApiSuccessResponse | ApiErrorResponse> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
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

console.log(BASE_URL);
