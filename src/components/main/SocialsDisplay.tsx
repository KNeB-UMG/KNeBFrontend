import { Space, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons';

const { Title } = Typography;

export default function SocialsDisplay() {
  return (
    <center>
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
  );
}