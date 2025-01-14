import { Col, Row, Typography, Flex} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const { Title, Text } = Typography;


export default function ProjectLinks() {
    return ( 
        
    <Row gutter={[32, 32]} >
        <Flex gap ='large' justify='center' wrap>
            <Col span={20}>
                <center>
                    <Title>Nasze Projekty</Title>
                    <Title level={4}>Projekty stworzone przez członków naszego koła</Title>
                </center>
            </Col>


            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie</Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>
            
            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie</Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>


            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie</Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>

            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie</Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>


            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie</Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>

            <Col span={10} style={{boxShadow: '0px -4px 19.9px 0px #00000040', borderRadius: "25px",}}>
                <Row align='middle'>
                    <Col span={21}>
                        <Title level={2}>Nazwa projektu</Title>
                        <Text strong>Krótki Opis projektu który jest niesamowity i wgl najlepszy na swiecie a nawet wszechświecie </Text>
                    </Col>
                    <Col span={3}>
                        <center>
                            <FontAwesomeIcon icon={faChevronRight} size='4x' color='grey'/>
                        </center>
                    </Col>
                </Row>
            </Col>

            
        </Flex>
        <br />
    </Row>  
  );
}