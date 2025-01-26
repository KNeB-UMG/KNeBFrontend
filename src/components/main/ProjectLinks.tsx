import { Col, Row, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

export default function ProjectLinks() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <Row style={{ padding: '20px', textAlign: 'center' }}>
                <Col span={24}>
                    <Title>Nasze Projekty</Title>
                    <Title level={4}>Projekty stworzone przez członków naszego koła</Title>
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center"  style={{ width: isLargeScreen ? '60%' : '100%', margin: '0 auto' }}>
                {[...Array(6)].map((_, index) => (
                    <Col
                        xs={24} sm={24} md={9} lg={9} xl={9}
                        key={index}
                        style={{
                            boxShadow: '0px 4px 19.9px 0px #00000040',
                            borderRadius: '25px',
                            padding: '10px',
                            backgroundColor: 'white',
                            margin: '10px'
                        }}
                    >
                        <Row align="middle">
                            <Col span={21}>
                                <Title level={4}>Nazwa projektu</Title>
                                <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na świecie a nawet wszechświecie</Text>
                            </Col>
                            <Col span={3} style={{ textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faChevronRight} size='2x' color='grey' />
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
