import { requestApi } from "../requestApi";

const BASE_URL = import.meta.env.VITE_HF_API_URL;

export type ApiSuccessResponse = { text: string };

export async function evaluateResponse(
  inputs: string
): Promise<ApiSuccessResponse> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs,
      parameters: { max_new_tokens: 1024, return_full_text: false },
    }),
  };

  try {
    const response = await requestApi<[{ generated_text: string }]>(
      `${BASE_URL}/mistralai/Mistral-Nemo-Instruct-2407`,
      options
    );
    return { text: response[0].generated_text };
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
