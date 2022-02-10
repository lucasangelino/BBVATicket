import React, { useContext, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { SocketContext } from "../../context/SocketContext";
const { Title, Text } = Typography;

export default function NewTicket() {
  const [ticket, setTicket] = useState(null);
  const { socket } = useContext(SocketContext);

  const createTicket = () => {
    socket.emit("get-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };
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
        {ticket && (
          <Col span={14} offset={6} align="center">
            <Text level={2}>Your Ticket Number</Text>
            <br />
            <Text level={2} type="success" style={{ fontSize: 65 }}>
              {ticket.number}
            </Text>
          </Col>
        )}
      </Row>
    </>
  );
}
