import { Question } from "@/types/interview";
import { requestApi } from "../requestApi";

const BASE_URL = "/questions.json";

type ApiSuccessResponse = Question[];

export async function getInterviewQuestions(): Promise<ApiSuccessResponse> {
  try {
    const result = await requestApi<ApiSuccessResponse>(BASE_URL);
    return result;
  } catch (err) {
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
