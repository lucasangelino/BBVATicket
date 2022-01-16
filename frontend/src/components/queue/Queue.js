import React from "react";
import { Row, Col, Typography, Divider, List, Card, Tag } from "antd";

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Carlos Castro",
  },
];

export default function Queue() {
  return (
    <>
      <Title level={1}>Current Number</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <Tag color="volcano">{item.agente}</Tag>,
                      <Tag color="magenta">Desk: {item.escritorio}</Tag>,
                    ]}
                  >
                    <Title>Ticket {item.ticketNo}</Title>
                  </Card>
                </List.Item>
              );
            }}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item.Meta
                title={`Ticket No. ${item.ticketNo}`}
                description={
                  <>
                    <Text type="secondary">
                      {`On Desk `}
                      <Tag color="magenta">{item.escritorio}</Tag>
                    </Text>
                    {`- by: `}
                    <Tag color="volcano">{item.agente}</Tag>
                  </>
                }
              />
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
}
