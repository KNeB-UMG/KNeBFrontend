import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import type { FormProps } from 'antd';
import { Button, Form, Input, Card, Flex } from 'antd';


type Login = {
  userName?: string;
  password?: string;
}

export default function LoginPage() {
  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Card style={{ width: 500, borderRadius: 10 }}>
        <Form
          style={{ width: '100%' }}
        >
          <Form.Item<Login>
            label="Username"
            name="userName"
          >
            <Input />
          </Form.Item>
          <Form.Item<Login>
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              Zaloguj
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  )
}
