import { Button, Form, Input, Card, Flex } from 'antd';
import useAPI, { getApiUrl } from '../../hooks/useAPI';

type RegisterProps = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  first_name?: string;
  last_name?: string;
};

export default function Register() {

  const [form] = Form.useForm();

  const {call, loading} = useAPI({
    url: getApiUrl('member/register'),
    method: "POST",
    displayNotification:true
  });

  const handleRegister = (values: RegisterProps) => {
    const { confirmPassword, ...rest } = values;
    call({
      body: rest
    });
  };

  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Card style={{ width: 500, borderRadius: 10 }}>
        <Form
          form={form}
          onFinish={handleRegister}
          layout="vertical"
        >
          <Form.Item<RegisterProps> 
            label="E-mail" 
            name="email" 
            rules={[
              { required: true, message: "Podaj e-mail!" },
              { type: "email", message: "Podaj poprawny e-mail!" },
              { max: 100, message: 'E-mail może mieć maksymalnie 100 znaków' }
            ]}
          >
            <Input size='large'/>
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Imię" 
            name="first_name" 
            rules={[
              { required: true, message: "Podaj imię!" },
              { max: 50, message: 'Imię może mieć maksymalnie 50 znaków' }
            ]}
          >
            <Input size='large'/>
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Nazwisko" 
            name="last_name" 
            rules={[
              { required: true, message: "Podaj nazwisko!" },
              { max: 50, message: 'Nazwisko może mieć maksymalnie 50 znaków' }
            ]}
          >
            <Input size='large'/>
          </Form.Item>

          <Form.Item<RegisterProps> 
            label="Hasło" 
            name="password" 
            rules={[
              { required: true, message: "Podaj hasło!" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: "Hasło musi mieć min. 8 znaków, małą i wielką literę, cyfrę i znak specjalny"
              }
            ]}
            hasFeedback
          >
            <Input.Password size='large'/>
          </Form.Item>

          <Form.Item<RegisterProps>
            label="Powtórz hasło"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Powtórz hasło!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Hasła nie są takie same!'));
                },
              }),
            ]}
          >
            <Input.Password size='large'/>
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: "center" }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
            >
              Zarejestruj się
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}
