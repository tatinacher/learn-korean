import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

export const HangulPage = () => {
  return (
    <div>
      <Title>Хангыль</Title>
      <div>
        <Title level={2}>Гласные</Title>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Card title="ㅏ" bordered={false}>
              A
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅑ" bordered={false}>
              Я
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅓ" bordered={false}>
              О
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅕ" bordered={false}>
              Ё
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅗ" bordered={false}>
              О
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅛ" bordered={false}>
              Ё
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅜ" bordered={false}>
              У
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅠ" bordered={false}>
              Ю
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Title level={2}>Согласные</Title>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Card title="ㄱ" bordered={false}>
              К, Г
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㄴ" bordered={false}>
              Н
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㄷ" bordered={false}>
              Т, Д
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㄹ" bordered={false}>
              Л, Р
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅁ" bordered={false}>
              M
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅂ" bordered={false}>
              П, Б
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅅ" bordered={false}>
              С, Щ
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅇ" bordered={false}>
              -, ng
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅈ" bordered={false}>
              Ч, ДЖ
            </Card>
          </Col>
          <Col span={4}>
            <Card title="ㅎ" bordered={false}>
              Х
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
