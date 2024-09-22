import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Menu } from "./ui";

const { Header, Footer } = Layout;

function App() {
  const items = [
    {
      key: "/",
      label: `Главная`,
    },
    {
      key: "/lessons",
      label: `Уроки корейского языка`,
    },
  ];

  return (
    <Layout>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <Menu items={items} isHorizontal />
        </Header>
        <Outlet />
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
