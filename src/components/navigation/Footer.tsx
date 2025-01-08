
import { Col, Layout, Row } from 'antd';
import logo from '../../assets/logoKneb.png';

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        bottom: 0,
        left: 0,
        padding: '20px 0',
        boxShadow: '0px -4px 19.9px 0px #00000040',
      }}
    >
      <Row justify="space-between" gutter={[16, 16]} style={{alignItems: 'center'}}>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div
            style={{
              paddingLeft: '100px',
              fontSize: '20px',
              lineHeight: '24px',
            }}
          >
            Wydział Zarządzania i Nauk o Jakości
            <br />
            ul. Morska 81-87 81-225
            <br />
            Gdynia tel. (58) 6901-215
          </div>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div
            style={{
              fontSize: '20px',
              paddingLeft: '100px',
            }}
          >
            Przewodniczący Kacper Kmiecik
            <br />
            <a href="mailto:kneb@wznj.umg.edu.pl">kneb@wznj.umg.edu.pl</a>
          </div>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img
              src={logo}
              alt="Koło Naukowe E-Biznesu Logo"
              style={{width: '211.29px', marginRight: '10px'}}
            />
            <div>
              <div
                style={{
                  fontSize: '29.2px',
                  fontWeight: 'bold',
                  color: '#0071BC',
                  lineHeight: '0',
                }}
              >
                KOŁO NAUKOWE
              </div>
              <div
                style={{
                  fontSize: '45.14px',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                E-BIZNESU
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout.Footer>
  );
}
