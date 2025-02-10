import { Col, Layout, Row, Flex, Typography, Space } from 'antd';
import logo from '../../assets/logoKneb.png';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

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
          <Flex align="center" justify="center" gap="small">
            <img src={logo} alt="Logo KNeB" style={{ width: '6rem' }} />
            <Space direction="vertical" size="small" style={{ textAlign: 'left' }}>
              <Title level={4} style={{ color: '#0071BC', margin: 0 }}>KOŁO NAUKOWE</Title>
              <Title level={4} style={{ color: '#000000', margin: 0 }}>E-BIZNESU</Title>
            </Space>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
}