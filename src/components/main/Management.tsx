import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Typography, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons';

const { Title, Text } = Typography;

export default function Management() {
  return (
    <center>
      <div>
        <Title>Zarząd Koła</Title>
        <Space direction="horizontal" size={30} align="center">
          <div>
          <Space direction="vertical" size="small">
            <Avatar size={64} icon={<UserOutlined />} />
            <Text>Kacper Kmiecik</Text>
          </Space>
            <Divider />
            <Text strong>Przewodniczący</Text>
          </div>
          <div>
          <Space direction="vertical" size="small">
            <Avatar size={64} icon={<UserOutlined />} />
            <Text>Oskar Kacała</Text>
          </Space>
            <Divider />
            <Text strong>Zastępca</Text>
          </div>
          <div>
          <Space direction="vertical" size="small">
            <Avatar size={64} icon={<UserOutlined />} />
            <Text>Michał Wulkowicz</Text>
          </Space>
            <Divider />
            <Text strong>Skarbnik</Text>
          </div>
          <div style={{ textAlign: 'center' }}>
          <Space direction="vertical" size="small">
            <Avatar size={64} icon={<UserOutlined />} />
            <Text>Mgr Paweł Szyman</Text>
          </Space>
            <Divider />
            <Text strong>Opiekun Naukowy</Text>
          </div>
        </Space>
      </div>

      <div>
        <Title>Obserwuj nas!</Title>
        <Space direction="horizontal" size={30} align="center">
          <div>
            <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
            <Title level={3}>Facebook</Title>
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
            <Title level={3}>Instagram</Title>
          </div>
          <div>
            <FontAwesomeIcon icon={faShip} size="4x" />
            <Title level={3}>Uczelnia</Title>
          </div>
        </Space>
      </div>
    </center>
  )
}
