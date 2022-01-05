import React from "react";
import { Button, Col, Divider, Row, Typography, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function NewTicket() {
  const createTicket = () => {};
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={1}>Generate new Ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={createTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={1}>Your Ticket Number</Text>
          <br />
          <Text level={2} type="success" style={{ fontSize: 65 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
}
