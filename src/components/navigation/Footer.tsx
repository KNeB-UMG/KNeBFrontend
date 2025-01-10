import { Col, Layout, Row, Flex, Typography, Space } from 'antd';
import logo from '../../assets/logoKneb.png';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        padding: '2rem 10rem',
        boxShadow: '0px -4px 19.9px 0px #00000040',
      }}
    >
      <Row justify="space-between" gutter={[16, 16]} style={{alignItems: 'center'}}>
        <Col xs={24} sm={8} md={8} lg={8}>
        <Space direction='vertical'>
          <Text>
            Wydział Zarządzania i Nauk o Jakości
          </Text>
          <Text>
            ul. Morska 81-87 81-225
          </Text>
          <Text>
            Gdynia tel. (58) 6901-215
          </Text>
        </Space>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
        <Space direction="vertical">
          <Text>
            Przewodniczący Oskar Kacała
          </Text>
          <Text>
            <Link to="mailto:kneb@wznj.umg.edu.pl">kneb@wznj.umg.edu.pl</Link>
          </Text>
        </Space>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Flex justify='center' align='center'>
            <img
              src={logo}
              alt="Logo KNeB"
              style={{width: '7rem'}}
            />
            <Space direction="vertical">
              <Title level={3}
                style={{
                  color: '#0071BC',
                  lineHeight: '1',
                  margin: '0'
                }}
              >
                KOŁO NAUKOWE
              </Title>
              <Title level={3}
                style={{
                  color: '#000000',
                  lineHeight: '0.1',
                  margin: '0'
                }}
              >
                E-BIZNESU
              </Title>
            </Space>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
}
