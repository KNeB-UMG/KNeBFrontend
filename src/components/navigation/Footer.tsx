import { Col, Layout, Row, Flex, Typography, Space } from 'antd';
import logo from '../../assets/logoKneb.png';

const { Text } = Typography;

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
          <Text>
            <br />
            Wydział Zarządzania i Nauk o Jakości
            <br />
            ul. Morska 81-87 81-225
            <br />
            Gdynia tel. (58) 6901-215
          </Text>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Text>
            Przewodniczący Oskar Kacała
            <br />
            <a href="mailto:kneb@wznj.umg.edu.pl">kneb@wznj.umg.edu.pl</a>
          </Text>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Flex justify='center' align='center'>
            <img
              src={logo}
              alt="Logo KNeB"
              style={{width: '7rem'}}
            />
            <Space direction="vertical">
              <Text strong 
                style={{
                  fontSize: '1.5rem',
                  color: '#0071BC',
                  lineHeight: '1',
                }}
              >
                KOŁO NAUKOWE
              </Text>
              <Text strong
                style={{
                  fontSize: '2.3rem',
                  color: '#000000',
                  lineHeight: '0.1',
                }}
              >
                E-BIZNESU
              </Text>
            </Space>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
}
