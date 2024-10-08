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
      key: "/lessons/first-words",
      label: `Первые слова 🐤`,
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
