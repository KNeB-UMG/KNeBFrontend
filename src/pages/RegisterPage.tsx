import React from 'react';
import { Button, Form, Input, Card, Flex } from 'antd';
import useAPI, { getApiUrl } from '../hooks/useAPI';

type RegisterProps = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
};

export default function RegisterPage() {

  const [form] = Form.useForm();

  const {call, loading, error, success} = useAPI({
    url: getApiUrl('member/register'),
    method: "POST",
    displayNotification: true
  });

  const handleRegister = (values: RegisterProps) => {
    call({
      body: values
    });
  };

  return (

    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Card style={{ width: 500, borderRadius: 10 }}>
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} form={form} onFinish={handleRegister}>
          <Form.Item<RegisterProps> 
            label="E-mail" 
            name="email" 
            rules={[{ required: true, type: "email", message: "Podaj poprawny e-mail!" }]}>
            <Input />
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Imię" 
            name="first_name" 
            rules={[{ required: true, message: "Podaj imię!" }]}>
            <Input />
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Nazwisko" 
            name="last_name" 
            rules={[{ required: true, message: "Podaj nazwisko!" }]}>
            <Input />
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Hasło" 
            name="password" 
            rules={[{ required: true, message: "Podaj hasło!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: "center" }}>
            <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}>
              Zarejestruj się
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}