import { Flex, Space, Typography } from 'antd'
import logo from '../../assets/logoKneb.png';

const { Title } = Typography;

type Props = {
    size?: 'small' | 'medium' | 'large';
}

// TODO - add logic to download theme from redux 

export default function StandardKnebLogo({ size = 'medium' }: Props) {

    const imageSizes = {
        small: '3rem',
        medium: '6rem',
        large: '8rem'
    };

    const fontSizes = {
        small: 14,
        medium: 18,
        large: 22
    };

    return (
        <Flex align="center" justify="center" gap="small">
            <img src={logo} alt="Logo KNeB" style={{ width: imageSizes[size] }} />
            <Space direction="vertical" size="small" style={{ textAlign: 'left' }}>
                {/* <Title level={5} style={{ color: theme == 'light' ? '#0071BC' : "FFFFFF", margin: 0, fontSize: fontSizes[size] }}>KOŁO NAUKOWE</Title>
                <Title level={5} style={{ color: theme == 'light' ? '#000000' : "FFFFFF", margin: 0, fontSize: fontSizes[size] }}>E-BIZNESU</Title> */}
                <Title level={5} style={{ color: '#0071BC', margin: 0, fontSize: fontSizes[size] }}>KOŁO NAUKOWE</Title>
                <Title level={5} style={{ color: '#000000', margin: 0, fontSize: fontSizes[size] }}>E-BIZNESU</Title>
            </Space>
        </Flex>
    )
}

