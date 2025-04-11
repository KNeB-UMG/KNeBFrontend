import useAPI, { getApiUrl } from '../../hooks/useAPI';
import { Avatar, Space, Typography, Divider, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useWindowSize } from '../../hooks/useWindowSize';

const { Title, Text } = Typography;

type Member = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  position_translated: string;
  description: string;
  photo_url: string;
};

export default function MemberDisplay() {
  const { data, loading } = useAPI({
    url: getApiUrl('members/all'),
    method: 'GET',
  }, true);

  const { isMobile } = useWindowSize();

  const members: Member[] = data?.members || [];

  const staff = members.filter(member => member.position !== 'Member');
  const restMembers = members.filter(member => member.position === 'Member');

  return (
    <Spin spinning={loading}>
      <center>
        <div>
          <Title>Zarząd Koła</Title>
          <Space direction="horizontal" size={40} align="center" wrap>
            {staff.map(member => (
              <div key={member.id} style={{ textAlign: 'center' }}>
                <Space direction="vertical" size="small">
                  <Avatar
                    size={isMobile ? 64 : 80}
                    icon={member.photo_url === 'DEFAULT-PROFILE-PICTURE' ? <UserOutlined /> : undefined}
                    src={member.photo_url !== 'DEFAULT-PROFILE-PICTURE' ? member.photo_url : undefined}
                  />
                  <Text style={{ fontSize: isMobile ? 14 : 16 }}>{member.full_name}</Text>
                </Space>
                <Divider />
                <Text strong style={{ fontSize: isMobile ? 14 : 16 }}>{member.position_translated}</Text>
              </div>
            ))}
          </Space>
        </div>

        <div>
          <Title level={2}>Członkowie Koła</Title>
          <Space direction="horizontal" size={30} align="center" wrap>
            {restMembers.map(member => (
              <div key={member.id} style={{ textAlign: 'center' }}>
                <Space direction="vertical" size="small">
                  <Avatar
                    size={isMobile ? 48 : 64}
                    icon={member.photo_url === 'DEFAULT-PROFILE-PICTURE' ? <UserOutlined /> : undefined}
                    src={member.photo_url !== 'DEFAULT-PROFILE-PICTURE' ? member.photo_url : undefined}
                  />
                  <Text style={{ fontSize: isMobile ? 12 : 14 }}>{member.full_name}</Text>
                </Space>
              </div>
            ))}
          </Space>
        </div>
      </center>
    </Spin>
  );
}