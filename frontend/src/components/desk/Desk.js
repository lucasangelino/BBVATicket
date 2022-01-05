import React from "react";
import { Button, Col, Divider, Row, Typography, Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export default function Desk() {
  const closeDesk = () => {};

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Lucas</Title>
          <Text>On desk number </Text>
          <Text type="succes">3</Text>
        </Col>
        <Col span={4} align="right">
          <Button type="danger" shape="round" onClick={closeDesk}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Taking ticket number"
              bordered={false}
              style={{
                width: 300,
                textAlign: "center",
                backgroundColor: "#009EE5",
              }}
            >
              <Text style={{ fontSize: 60 }}>55</Text>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button type="primary" shape="round">
            Next Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
}
