import { words5, words6 } from "../../addons/words";
import { WordsSection } from "../../features/words";

export const Words_5_6_Page = () => {
  return (
    <div>
      <WordsSection title="1-5 받침 (Падчим)" words={words5} />
      <WordsSection title="1-6 받침 (Падчим)" words={words6} />
    </div>
  );
};
