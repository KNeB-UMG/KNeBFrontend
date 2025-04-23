import { Button, Form, Input, Card, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAPI, { getApiUrl } from '../../hooks/useAPI';
type LoginProps = {
  email?: string;
  password?: string;
}

export default function Login() {
  const navigate = useNavigate()

  const [form] = Form.useForm();

  const { call, loading } = useAPI({
    url: getApiUrl('member/login'),
    method: "POST",
    displayNotification:true
  });

  const handleLogin = (values: LoginProps) => {
    call({
      body: values
    }).then((res: any) => {
      if (res.response.status === 200) {
        sessionStorage.setItem("token", res?.data?.token)
        navigate('/')
      }
    });
  };

  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Card style={{ width: 500, borderRadius: 10 }}>
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          form={form}
          onFinish={handleLogin}
        >
          <Form.Item<LoginProps>
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Login jest wymagany' },
              { min: 1, max: 50, message: 'Login może mieć maksymalnie 50 znaków' }
            ]}
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item<LoginProps>
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Hasło jest wymagane' },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: 'Hasło musi zawierać min. 8 znaków, małą i wielką literę, cyfrę oraz znak specjalny'
              }
            ]}
          >
            <Input.Password size='large' />
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
            >
              Zaloguj
            </Button>
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: 'center' }}>
            <Button
              type="link"
              onClick={() => navigate('/register')}
              size='small'
              disabled={loading}
              style={{ textAlign: 'center' }}
            >
              Nie mam konta członka, załóż konto
            </Button>
          </Form.Item>


        </Form>
      </Card>
    </Flex>
  )
}
