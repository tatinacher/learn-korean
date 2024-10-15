import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router-dom";
import { Menu } from "../../ui";

export const LessonsPage = () => {
  const items = [
    {
      key: "/lessons/hangul",
      label: `Корейский алфавит 🔤`,
    },
    {
      key: "/lessons/words-1-2",
      label: `Слова (1-1) 1+2 🐤`,
    },
    {
      key: "/lessons/words-3-4",
      label: `Слова (1-1) 3+4 🐤`,
    },
    {
      key: "/lessons/words-5-6",
      label: `Слова (1-1) 5+6 🐤`,
    },
    {
      key: "/lessons/words-7-8",
      label: `Слова (1-1) 7+8 🐤`,
    },
    {
      key: "/lessons/present-tense",
      label: `Настоящее время ⏰`,
    },
  ];

  return (
    <Layout>
      <Sider theme="light" style={{ marginTop: "1px" }}>
        <Menu items={items} />
      </Sider>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
