import { words1, words2 } from "../../addons/words";
import { WordsSection } from "../../features/words";

export const Words_1_2_Page = () => {
  return (
    <div>
      <WordsSection title="1-1 모음 (Гласные)" words={words1} />
      <WordsSection title="1-2 자음 (Согласные)" words={words2} />
    </div>
  );
};
