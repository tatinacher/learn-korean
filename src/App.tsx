import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Menu } from "./ui";
import { useStyle } from "./addons/styles";

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
  const { styles } = useStyle();

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
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
    </ConfigProvider>
  );
}

export default App;
