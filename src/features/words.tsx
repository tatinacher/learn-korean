import { useMemo } from "react";
import { Collapse, Table } from "antd";

import Title from "antd/es/typography/Title";
import { Quiz } from "./quiz";

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
  words: WordsType[];
}

const boxStyle = {
  padding: "30px 0 60px",
};

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const columns: ColumnsType[] = [
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

export function WordsSection({ title, words }: WordsSectionProps) {
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
