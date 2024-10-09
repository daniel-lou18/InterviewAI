export function createAnswerInput(submittedAnswer: string) {
  const expectedResponse = `1. Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props.
2. Changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.
3. Changement de contexte : Lorsque le contexte d'un composant React change, React peut déclencher un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela peut se produire lorsque le contexte est modifié par un composant parent ou par une bibliothèque tierce.`;

  // const currentResponse = `Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props. Aussi un changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.`;

  const instructions = `Compare currentResponse à expectedResponse: dans quelle mesure currentResponse correspond à la expectedResponse? Quelles sont les parties de la réponse qui sont correctes ou incorrectes? La réponse est-elle exhaustive et complète? Quelles sont les informations manquantes? Formule une évaluation motivée, donne une note sur 10 basée sur cette évaluation (3 = 1 des 3 raisons, 6 = 2 des 3 raisons, 9 = 3 des 3 raisons), ainsi que du feedback dans le format suivant: *Note*: $note/10, *Motivation*: $texte, *Feedback*: $texte. Le format, le style, la syntaxe, la formulation, etc. de la réponse sont moins importants. Concentre-toi sur le contenu de la réponse`;
  //   const instructions2 = `
  // Instructions pour l'évaluation
  // Comparez la Réponse de l'utilisateur à la Réponse souhaitée en suivant ces critères :

  // Exactitude du contenu : Évaluez dans quelle mesure les points mentionnés par le candidat correspondent aux trois raisons principales attendues.
  // Exhaustivité : Vérifiez si le candidat a fourni au moins trois raisons distinctes comme demandé.
  // Compréhension des concepts : Évaluez la profondeur de compréhension démontrée pour chaque raison mentionnée.
  // Clarté de l'explication : Considérez la clarté et la concision des explications fournies.
  // Exemples ou détails supplémentaires : Notez positivement toute information pertinente supplémentaire ou exemples fournis.

  // Grille de notation

  // 9-10 : Réponse exceptionnelle, couvrant tous les points attendus avec une compréhension approfondie
  // 7-8 : Très bonne réponse, couvrant la plupart des points avec une bonne compréhension
  // 5-6 : Réponse acceptable, couvrant les points essentiels avec une compréhension de base
  // 3-4 : Réponse incomplète ou avec des inexactitudes significatives
  // 1-2 : Réponse largement incorrecte ou hors sujet

  // Format de l'évaluation
  // Veuillez fournir votre évaluation dans le format suivant :
  // Note : [X]/10
  // Points forts :

  // [Liste des aspects positifs de la réponse]

  // Points à améliorer :

  // [Liste des aspects manquants ou incorrects]

  // Feedback détaillé :
  // [Fournissez une analyse détaillée de la réponse, en expliquant les raisons de la note attribuée et en offrant des suggestions d'amélioration spécifiques]
  // `;

  return `
      Réponse souhaitée: ${expectedResponse}
      Réponse de l'utilisateur: ${submittedAnswer}
      Instructions: ${instructions}
      `;
}
