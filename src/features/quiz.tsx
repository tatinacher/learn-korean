import { FlashcardArray } from "react-quizlet-flashcard";

type CardType = {
  id: number;
  frontHTML: string | JSX.Element;
  backHTML: string | JSX.Element;
};

interface QuizProps {
  cards: CardType[];
}

export function Quiz({ cards }: QuizProps) {
  //   const cards = [
  //     {
  //       id: 1,
  //       frontHTML: (
  //         <div>
  //           What is the capital of <u>Alaska</u>?
  //         </div>
  //       ),
  //       backHTML: <>Juneau</>,
  //     },
  //     {
  //       id: 2,
  //       frontHTML: <>What is the capital of California?</>,
  //       backHTML: <>Sacramento</>,
  //     },
  //     {
  //       id: 3,
  //       frontHTML: <>What is the capital of New York?</>,
  //       backHTML: <>Albany</>,
  //     },
  //     {
  //       id: 4,
  //       frontHTML: <>What is the capital of Florida?</>,
  //       backHTML: <>Tallahassee</>,
  //     },
  //     {
  //       id: 5,
  //       frontHTML: <>What is the capital of Texas?</>,
  //       backHTML: <>Austin</>,
  //     },
  //     {
  //       id: 6,
  //       frontHTML: <>What is the capital of New Mexico?</>,
  //       backHTML: <>Santa Fe</>,
  //     },
  //     {
  //       id: 7,
  //       frontHTML: <>What is the capital of Arizona?</>,
  //       backHTML: <>Phoenix</>,
  //     },
  //   ];
  return (
    <div className="storyContainer">
      <FlashcardArray cards={cards} />
    </div>
  );
}
