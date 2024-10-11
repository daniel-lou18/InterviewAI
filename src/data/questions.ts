import { Question } from "@/types/interview";

export const questions: Question[] = [
  {
    id: 1,
    question:
      "Citez au moins 3 raisons distinctes pour lesquelles un composant React pourrait être re-rendu.",
    correctAnswer: `
      1. Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props.
      2. Changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.
      3. Changement de contexte : Lorsque le contexte d'un composant React change, React peut déclencher un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela peut se produire lorsque le contexte est modifié par un composant parent ou par une bibliothèque tierce.`,
  },
  {
    id: 2,
    question:
      "Quels sont les concepts clés en React ? Pouvez-vous en nommer au moins 5 ?",
    correctAnswer: `
      1. Composants : contiennent la logique et l’UI, et permettent un découpage en unités réutilisables et modulaires.
      2. État : données internes d’un composant, gérées avec des hooks comme useState, useRef ou useReducer.
      3. Props : données transmises par le composant parent de manière unidirectionnelle vers l’enfant, comme les paramètres d’une fonction.
      4. Hooks : fonctions spéciales pour gérer l’état local, les effets secondaires et d’autres comportements liés au cycle de vie du composant.
      5. Syntaxe déclarative JSX : décrire à quoi l’UI devrait ressembler plutôt que comment manipuler le DOM directement.
      6. Cycle de vie des composants : série de méthodes ou d'étapes par lesquelles un composant passe lors de son rendu et de sa mise à jour (plus utilisé avec les composants basés sur des classes, mais des hooks comme useEffect peuvent gérer ces étapes).
      7. Composants : éléments de base représentant une partie de l’interface utilisateur.
      8. Déclaratif : on décrit à quoi l’interface utilisateur doit ressembler, en se concentrant sur le résultat souhaité (le "quoi" plutôt que le "comment").
      9. On fait cela à l’aide d’une syntaxe déclarative appelée JSX : un mélange de HTML, JavaScript et CSS, ainsi que des références vers d’autres composants JSX.
      10. Abstraction : on n'interagit pas directement avec le DOM.
      11. Piloté par l’état : React va rendre/afficher l’UI en se basant sur l’état initial d’un composant. Puis, React va "réagir" à chaque changement d’état en mettant à jour l’UI grâce à un re-render. C’est de là que vient le nom “React”.  `,
  },
];

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
