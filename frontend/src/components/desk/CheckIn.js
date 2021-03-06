import * as React from "react";
import { useNavigate, Navigate  } from "react-router-dom";
import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { getUserStorage } from "../../helpers/getUserStorage";

const { Title, Text } = Typography;

export default function CheckIn() {
  const history = useNavigate();
  const [user, _] = React.useState(() => getUserStorage() )

  const onFinish = (values) => {
    localStorage.setItem("agent", values.agente);
    localStorage.setItem("escritorio", values.desk);
    history("/desk");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (user.agente && user.escritorio) {
    return <Navigate to="/desk" replace={true} />
  }
  return (
    <>
      <Title level={3}>Check In</Title>
      <Text>Enter you Name and Desk number</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agente"
          name="agente"
          rules={[{ required: true, message: "Please input your username" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk"
          name="desk"
          rules={[{ required: true, message: "Please input your desk number" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Check in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
