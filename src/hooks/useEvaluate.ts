import { evaluateResponse } from "@/services/EvalResponseService";
import { useState } from "react";
import { useEffect } from "react";

const expectedResponse = `1. Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props.
2. Changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.
3. Changement de contexte : Lorsque le contexte d'un composant React change, React peut déclencher un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela peut se produire lorsque le contexte est modifié par un composant parent ou par une bibliothèque tierce.`;

// const currentResponse = `Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props. Aussi un changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.`;

const instructions = `Compare currentResponse à expectedResponse: dans quelle mesure currentResponse correspond à la expectedResponse? Quelles sont les parties de la réponse qui sont correctes? Quelles sont les parties qui sont incorrectes? Quelles sont les informations manquantes? Donne une note sur 10 et formule une évaluation motivée et du feedback dans le format suivant: *Note*: $note/10, *Motivation*: $texte, *Feedback*: $texte. Le format, le style, la syntaxe, la formulation, etc. de la réponse sont moins importants. Concentre-toi sur le contenu de la réponse`;

export default function useEvaluate(userResponse: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    async function getFeedback() {
      setIsLoading(true);
      const inputs = `
      Réponse souhaitée: ${expectedResponse}
      Réponse de l'utilisateur: ${userResponse}
      Instructions: ${instructions}
      `;

      const result = await evaluateResponse(inputs);

      if ("error" in result) {
        setError(result.error.message);
        setIsLoading(false);
      } else {
        const feedback = result.text;
        console.log(feedback);
        setFeedback(feedback);
        setIsLoading(false);
      }
    }

    getFeedback();
  }, [userResponse]);

  return { isLoading, error, feedback };
}
