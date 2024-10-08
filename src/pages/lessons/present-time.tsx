import { Divider, Table, Tooltip, Typography } from "antd";
import { InfoCircleOutlined, TranslationOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const columns = [
  {
    title: "Инфинитив",
    dataIndex: "infinitive",
    key: "infinitive",
  },
  {
    title: "Настоящее время",
    dataIndex: "present",
    key: "present",
  },
  {
    title: "Перевод",
    dataIndex: "translation",
    key: "translation",
  },
];

const dataSource = [
  {
    key: "1",
    infinitive: "가다",
    present: "가요",
    translation: "идти",
  },
  {
    key: "2",
    infinitive: "보다",
    present: "봐요",
    translation: "смотреть",
  },
  {
    key: "3",
    infinitive: "먹다",
    present: "먹어요",
    translation: "кушать",
  },
  {
    key: "4",
    infinitive: "마시다",
    present: "마셔요",
    translation: "пить",
  },
  {
    key: "5",
    infinitive: "읽다",
    present: "읽어요",
    translation: "читать",
  },
  {
    key: "6",
    infinitive: "만들다",
    present: "만들어요",
    translation: "готовить (конкретную еду)",
  },
  {
    key: "7",
    infinitive: "공부하다",
    present: "공부해요",
    translation: "учиться",
  },
  {
    key: "8",
    infinitive: "전화하다",
    present: "전화해요",
    translation: "звонить по телефону",
  },
  {
    key: "9",
    infinitive: "요리하다",
    present: "요리해요",
    translation: "готовить еду",
  },
  {
    key: "10",
    infinitive: "하다",
    present: "해요",
    translation: "делать",
  },
];

export const PresentTensePage = () => {
  return (
    <div style={{ background: "#fff", padding: "40px" }}>
      <Title>⏰ Настоящее время - 현재시제</Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
      <Title>Как привести глагол в настоящее время?</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          padding: "20px 0",
        }}
      >
        <Title level={3} style={{ paddingRight: "30px" }}>
          <div>Основа Глагола</div>
          <div>Основа Прилагательного</div>
        </Title>
        <Tooltip placement="top" title="окончание настоящего времени">
          <div style={{ display: "flex" }}>
            <Title level={2}>+ 아요 / 어요 / 해요</Title>
            <InfoCircleOutlined />
          </div>
        </Tooltip>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title level={3}>
            <div>1. ОГ или ОП ㅏ или ㅜ + 아요</div>
          </Title>
        </div>
        <div>
          <b>Пример:</b>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2} style={{ display: "flex" }}>
              • 가<div style={{ color: "red" }}>다</div> → 가 + 아요 → 가아요 →
              가요
            </Title>
            <Tooltip placement="top" title="가다 - идти, 가요 - идет">
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 보다 → 보 + 아요 → 보아요 → 봐요</Title>
            <Tooltip placement="top" title="보다 - смотреть, 봐요 - смотрит">
              <TranslationOutlined />
            </Tooltip>
          </div>
        </div>
      </div>
      <Divider variant="dotted" style={{ borderColor: "#7cb305" }} />
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title level={3}>
            <div>
              2. ОГ или ОП все остальные гласные, кроме ㅏ или ㅜ + 아요
            </div>
          </Title>
        </div>
        <div>
          <b>Пример:</b>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 막다 → 막 + 어요 → 막어요</Title>
            <Tooltip
              placement="top"
              title="막다 - есть, кушать, 막어요 - ест, кушает"
            >
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 마시다 → 마시 + 어요 → 마시어요 → 마셔요</Title>
            <Tooltip placement="top" title="마시다 - пить, 마셔요 - пьет">
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 읽다 → 읽 + 어요 → 읽어요</Title>
            <Tooltip placement="top" title="읽다 - читать, 읽어요 - читает">
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 민들다 → 만들 + 어요 → 만들어요</Title>
            <Tooltip
              placement="top"
              title="민들다 - готовить (конкретное), 만들어요 - готовит"
            >
              <TranslationOutlined />
            </Tooltip>
          </div>
        </div>
      </div>
      <Divider variant="dotted" style={{ borderColor: "#7cb305" }} />
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title level={3}>
            <div>3. ОГ или ОП для слов с 하다 </div>
          </Title>
          <Title level={2}>+ 해요</Title>
        </div>
        <div>
          <b>Пример:</b>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 공부하다 → 공부해요</Title>
            <Tooltip
              placement="top"
              title="공부하다 - учиться, 공부해요 - учится"
            >
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 전화하다 → 전화해요</Title>
            <Tooltip
              placement="top"
              title="전화하다 - звонить по телефону, 전화해요 - звонит по телефону"
            >
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 요리하다 → 요리해요</Title>
            <Tooltip
              placement="top"
              title="요리하다 - готовить еду, 요리해요 - готовит еду"
            >
              <TranslationOutlined />
            </Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={2}>• 하다 → 해요</Title>
            <Tooltip placement="top" title="하다 - делать, 해요 - делает">
              <TranslationOutlined />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
