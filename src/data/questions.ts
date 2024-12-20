import { Question } from "@/types/interview";

export const questions: Question[] = [
  {
    id: "1",
    question:
      "Citez au moins 3 raisons distinctes pour lesquelles un composant React pourrait être re-rendu.",
    correctAnswer: `
      1. Changement de props : Lorsque les props d'un composant React sont modifiées, React déclenche un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est synchronisé avec les données passées en props.
      2. Changement d'état : Lorsqu'un composant React change son état interne, React déclenche également un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela permet de s'assurer que l'état de l'application est correctement affiché à l'utilisateur.
      3. Changement de contexte : Lorsque le contexte d'un composant React change, React peut déclencher un re-rendu pour mettre à jour l'interface utilisateur en conséquence. Cela peut se produire lorsque le contexte est modifié par un composant parent ou par une bibliothèque tierce.`,
  },
  {
    id: "2",
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
  {
    id: "3",
    question:
      "Expliquez le concept d'état (state) en React. Quelles sont ses caractéristiques principales et son rôle dans le cycle de vie d'un composant ?",
    correctAnswer: `
      1. Définition et rôle :
         - L'état est la mémoire d'un composant qui persiste entre les rendus
         - Il permet de stocker des données qui peuvent changer au fil du temps
         - Il est utilisé pour créer des interfaces utilisateur dynamiques

      2. Caractéristiques principales :
         - L'état est local et privé au composant
         - Une modification de l'état déclenche automatiquement un re-render
         - L'état persiste entre les rendus successifs du composant
         - Il est géré via des hooks comme useState dans les composants fonctionnels

      3. Relation avec l'interface utilisateur :
         - L'UI est une réflexion de l'état à un moment donné
         - Les mises à jour de l'état synchronisent automatiquement l'UI
         - Pour modifier l'affichage, il faut modifier l'état via des event handlers

      4. Cas d'utilisation :
         - Stockage de données dynamiques qui changent au fil du temps
         - Gestion des interactions utilisateur
         - Mise à jour de l'interface en réponse aux actions de l'utilisateur
         - Persistance des données entre les re-renders du composant`,
  },
  {
    id: "4",
    question:
      "Expliquez la prop spéciale 'children' en React. Quel est son rôle et comment permet-elle de créer des composants réutilisables ?",
    correctAnswer: `
      1. Définition de la prop 'children' :
         - 'children' est une prop spéciale réservée dans React qui permet de passer du JSX ou d'autres composants comme contenu enfant d'un composant.

      2. Avantages de 'children' :
         - Cela facilite la création de composants génériques, composables et réutilisables car le composant parent peut décider dynamiquement du contenu à afficher dans le composant enfant.

      3. Fonctionnement :
         - Le composant ne connaît pas à l'avance le contenu JSX qu'il va recevoir. Pour gérer cela, on utilise {children} dans le composant, ce qui agit comme un placeholder pour le contenu passé par le parent.

      4. Exemple d'utilisation :
         - On peut créer un composant 'Card' réutilisable où le contenu interne est fourni via la prop 'children'. Cela permet d'afficher divers types de contenu sans modifier la structure du composant 'Card'.

      5. Utilisation de {children} :
         - {children} est inséré dans le composant enfant à l'endroit désiré pour afficher le contenu dynamique transmis par le composant parent.
    `,
  },
  {
    id: "5",
    question:
      "Quelle est la différence entre l'état local et l'état global en React ? Comment sont-ils définis et utilisés ?",
    correctAnswer: `
      1. Définition :
         - **État local** : Il s'agit de l'état d'un composant ou d'un nombre limité de composants. Il est géré au sein du composant spécifique.
         - **État global** : C'est un état partagé et utilisé par plusieurs composants dans toute l'application. Il est souvent utilisé lorsque plusieurs composants doivent accéder aux mêmes données.

      2. Transmission :
         - **État local** : Il est transmis via les props, c'est-à-dire qu'un composant parent peut passer son état local à ses enfants en tant que props.
         - **État global** : Pour gérer l'état global, des outils spécifiques comme la Context API ou des bibliothèques comme Redux sont utilisés. Ces outils permettent une gestion centralisée de l'état et rendent l'état accessible à plusieurs composants sans devoir passer par les props.

      3. Accessibilité :
         - **État local** : Il est accessible uniquement à l'intérieur du composant où il est défini et à ses enfants directs via les props.
         - **État global** : Il est accessible à tous les composants de l'application, peu importe leur emplacement dans la hiérarchie des composants. Cela facilite la gestion de l'état partagé sans prop drilling (passage de props à plusieurs niveaux).
    `,
  },
  {
    id: "6",
    question:
      "Quelle est la différence entre le State et les Props en React ? Comment sont-ils gérés et utilisés dans les composants ?",
    correctAnswer: `
      1. Définition et portée :
         - **State** : Le state (état) est interne à un composant. Il représente les données qui peuvent changer au cours du cycle de vie du composant et est contrôlé par le composant lui-même.
         - **Props** : Les props sont externes et sont passées aux composants par leur parent. Elles permettent de transmettre des données d'un composant parent à ses enfants de manière unidirectionnelle.

      2. Mutabilité :
         - **State** : Le state est mutable, c'est-à-dire qu'il peut être modifié par le composant via des méthodes comme \`setState\` ou des hooks comme \`useState\` dans les composants fonctionnels.
         - **Props** : Les props sont immutables. Une fois reçues, elles ne peuvent pas être modifiées par le composant enfant. Seul le parent peut modifier les props et propager ces changements à l'enfant.

      3. Mise à jour :
         - **State** : Le state est mis à jour directement par le composant qui le possède, en utilisant une méthode comme \`setState\`. Chaque mise à jour du state entraîne un nouveau rendu du composant pour refléter ces changements.
         - **Props** : Les props sont mises à jour par le composant parent. Lorsque le parent met à jour la variable d'état qu'il passe en props à l'enfant, le composant enfant sera également re-rendu automatiquement pour refléter les nouvelles valeurs des props.

      4. Re-render :
         - Quand une variable d'état du composant parent est mise à jour et cette variable est passée au composant enfant via les props, cela déclenche un re-render du composant enfant. Comme pour le state, toute mise à jour des props entraîne une mise à jour de l'interface utilisateur.
    `,
  },
  {
    id: "7",
    question:
      "Quelles sont les phases du cycle de vie d'un composant en React et comment fonctionnent-elles ?",
    correctAnswer: `
      1. Montage (Mounting) - Rendu initial :
         - **Description** : C'est la phase où un composant est initialement créé et inséré dans le DOM. La fonction du composant est exécutée pour la première fois, générant l'instance du composant et son rendu initial.
         - **Exécution de la Fonction** : La fonction du composant est appelée pour créer l'interface utilisateur initiale (UI) et la rendre dans le DOM.

      2. Mises à Jour (Updating) :
         - **Description** : Cette phase est déclenchée chaque fois que l'état ou les props d'un composant changent. Cela entraîne un re-render pour refléter les nouvelles données dans l'interface utilisateur.
         - **Réexécution de la Fonction** : Le composant est re-rendu avec les nouveaux états ou props. React met à jour le DOM virtuel, et si nécessaire, le DOM réel est modifié pour correspondre à ces changements. Entre le montage et le démontage, le composant peut passer par plusieurs cycles de mise à jour (re-renders) lorsque ses états ou props changent.

      3. Démontage (Unmounting) :
         - **Description** : Cette phase survient lorsque le composant est retiré du DOM. Le composant est détruit et toutes les ressources associées (comme les abonnements, les timers, etc.) sont nettoyées.
         - **Nettoyage** : Les effets de nettoyage, tels que la désinscription de services ou l'annulation de timers, sont exécutés à ce stade pour éviter les fuites de mémoire.
    `,
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
