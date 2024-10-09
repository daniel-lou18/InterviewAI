import { requestApi } from "../requestApi";

const BASE_URL = import.meta.env.VITE_HF_API_URL;

type ApiSuccessResponse = { text: string };
type ApiErrorResponse = { error: { message: string } };

export async function evaluateResponse(
  inputs: string
): Promise<ApiSuccessResponse | ApiErrorResponse> {
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
    console.log(response);
    return { text: response[0].generated_text };
  } catch (err: unknown) {
    console.error(err);
    return {
      error: { message: err instanceof Error ? err.message : "Unknown error" },
    };
  }
}
