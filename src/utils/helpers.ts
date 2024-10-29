export function parseEvaluation(evaluation: string) {
  const splitOnFeedback = evaluation.split("*Feedback*: ");
  const feedback = splitOnFeedback[splitOnFeedback.length - 1];
  const splitOnMotivation = splitOnFeedback[0].split("*Motivation*: ");
  const motivation = splitOnMotivation[splitOnMotivation.length - 1];
  const splitOnScore = splitOnMotivation[0].split("*Note*: ");
  const score = splitOnScore[splitOnScore.length - 1].split(",")[0];
  return { score, motivation, feedback };
}

export function formatTime(time: number) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
