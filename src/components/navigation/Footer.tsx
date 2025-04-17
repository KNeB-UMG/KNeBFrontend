import { Col, Layout, Row, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import StandardKnebLogo from '../standard/StandardKnebLogo';

const { Text } = Typography;

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        boxShadow: '0px -4px 19.9px 0px #00000040',
        textAlign: 'center',
      }}
    >
      <Row 
        gutter={[16, 16]} 
        style={{ alignItems: 'center'}}
      >
        <Col xs={24} sm={8} md={8} lg={8}>
          <Space direction="vertical" size="small">
            <Text>Wydział Zarządzania i Nauk o Jakości</Text>
            <Text>ul. Morska 81-87, 81-225 Gdynia</Text>
            <Text>tel. (58) 6901-215</Text>
          </Space>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Space direction="vertical" size="small">
            <Text>Przewodniczący Kacper Kmiecik</Text>
            <Text>
              <Link to="mailto:kneb@wznj.umg.edu.pl">kneb@wznj.umg.edu.pl</Link>
            </Text>
          </Space>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <StandardKnebLogo/>
        </Col>
      </Row>
    </Layout.Footer>
  );
}