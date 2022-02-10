import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Divider, List, Card, Tag } from "antd";
import { SocketContext } from "../../context/SocketContext";
import getLastTickets from "../../helpers/getLastTickets";
const { Title, Text } = Typography;

export default function Queue() {
  const [ticketList, setTicketList] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("ticket-assigned", (ticketList) => {
      setTicketList(ticketList);
    });
    return () => socket.off("ticket-assigned");
  }, [socket]);

  useEffect(() => {
    getLastTickets().then(setTicketList);
  }, []);

  return (
    <>
      <Title level={1}>Current Number</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={ticketList.slice(0, 3)}
            renderItem={(ticket) => {
              return (
                <List.Item>
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <Tag color="volcano">{ticket.agent}</Tag>,
                      <Tag color="magenta">Desk: {ticket.desk}</Tag>,
                    ]}
                  >
                    <Title>Ticket {ticket.number}</Title>
                  </Card>
                </List.Item>
              );
            }}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={ticketList.slice(3)}
            renderItem={(ticket) => (
              <List.Item.Meta
                title={`Ticket No. ${ticket.number}`}
                description={
                  <>
                    <Text type="secondary">
                      {`On Desk `}
                      <Tag color="magenta">{ticket.desk}</Tag>
                    </Text>
                    {`- by: `}
                    <Tag color="volcano">{ticket.agent}</Tag>
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
