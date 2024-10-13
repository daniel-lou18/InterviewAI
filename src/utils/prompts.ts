import { Question } from "@/types/interview";

const INSTRUCTIONS = `Compare la réponse de l'utilisateur à la réponse souhaitée : dans quelle mesure correspondent-elles ? Quelles sont les parties de la réponse qui sont correctes ou incorrectes? La réponse est-elle exhaustive et complète? Quelles sont les informations manquantes?
Formule une évaluation motivée, donne une note sur 10 basée sur cette évaluation (calcul du nombre de points : si l'utilisateur nomme 1 des 3 réponses demandées 3/10, si l'utilisateur nomme 3 des 5 réponses demandées 6/10, etc.), ainsi que du feedback dans le format suivant: *Note*: $note/10, *Motivation*: $texte, *Feedback*: $texte.
Le format, le style, la syntaxe, la formulation, etc. de la réponse sont moins importants. Concentre-toi sur le contenu de la réponse`;

export function createAnswerInput(
  submittedAnswer: string,
  currentQuestion: Question
) {
  const question = currentQuestion.question;
  const expectedResponse = currentQuestion.correctAnswer;

  return `
      Question: ${question}
      Réponse souhaitée: ${expectedResponse}
      Réponse de l'utilisateur: ${submittedAnswer}
      Instructions: ${INSTRUCTIONS}
      `;
}
