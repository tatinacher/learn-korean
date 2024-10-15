import { words3, words4 } from "../../addons/words";
import { WordsSection } from "../../features/words";

export const Words_3_4_Page = () => {
  return (
    <div>
      <WordsSection title="1-3 자음 (Согласные)" words={words3} />
      <WordsSection title="1-4 모음 (Гласные)" words={words4} />
    </div>
  );
};
