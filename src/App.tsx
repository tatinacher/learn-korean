import { Layout, Menu } from "antd";

const { Header, Footer, Content, Sider } = Layout;

function App() {
  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  return (
    <Layout>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
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
            Content
          </div>
        </Content>
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
