import { Collapse, Table } from "antd";
import Title from "antd/es/typography/Title";
import { words1, words2 } from "../../addons/words";
import { Quiz } from "../../features/quiz";
import { useMemo } from "react";

type ColumnsType = {
  title: string;
  dataIndex: string;
  key: string;
};

type WordsType = {
  key: number;
  word: string;
  translation: string;
};

interface WordsSectionProps {
  title: string;
  columns: ColumnsType[];
  words: WordsType[];
}

const columns = [
  {
    title: "Слово",
    dataIndex: "word",
    key: "word",
  },
  {
    title: "Перевод",
    dataIndex: "translation",
    key: "translation",
  },
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
  },
];

const boxStyle = {
  padding: "30px 0 60px",
};

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const Words_1_2_Page = () => {
  return (
    <div>
      <WordsSection
        title="1-1 모음 (Гласные)"
        columns={columns}
        words={words1}
      />
      <WordsSection
        title="1-1 모음 (Гласные)"
        columns={columns}
        words={words2}
      />
    </div>
  );
};

function WordsSection({ title, columns, words }: WordsSectionProps) {
  const cards = useMemo(
    () =>
      words.map(({ key, word, translation }) => {
        return {
          id: key,
          frontHTML: (
            <div style={cardStyle}>
              <Title>{word}</Title>
            </div>
          ),
          backHTML: (
            <div style={cardStyle}>
              <Title>{translation}</Title>
            </div>
          ),
        };
      }),
    [words]
  );
  return (
    <div style={boxStyle}>
      <Title>{title}</Title>
      <Table columns={columns} dataSource={words} pagination={false} />
      <br />
      <Collapse
        items={[
          {
            key: "1",
            label: "Учить слова",
            children: (
              <div style={cardStyle}>
                <Quiz cards={cards} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
