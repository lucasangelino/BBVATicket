import * as React from "react";
import { Navigate } from "react-router-dom";
import { Button, Col, Divider, Row, Typography, Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { getUserStorage } from "../../helpers/getUserStorage";
import { SocketContext } from "../../context/SocketContext";
const { Title, Text } = Typography;

export default function Desk() {
  const [user] = React.useState(() => getUserStorage());
  const [currentTicket, setCurrentTicket] = React.useState(null);
  const { socket } = React.useContext(SocketContext);

  const closeDesk = () => {
    localStorage.clear();
    return <Navigate to="/" />;
  };

  const nextTicket = () => {
    socket.emit("get-next-ticket", user, (ticket) => {
      setCurrentTicket(ticket);
    });
  };

  if (!user.agente || !user.escritorio) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>On desk number </Text>
          <Text type="succes">{user.escritorio}</Text>
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
        <Col offset={18} span={6} align="right">
          <Button type="primary" shape="round" onClick={nextTicket}>
            Next Ticket
          </Button>
        </Col>
        {currentTicket && (
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
                <Text style={{ fontSize: 60 }}>{currentTicket.number}</Text>
              </Card>
            </div>
          </Col>
        )}
      </Row>
      <Row></Row>
    </>
  );
}
