import useAPI, { getApiUrl } from '../../hooks/useAPI';
import { Avatar, Space, Typography, Divider, Spin, Tooltip } from 'antd';
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

  const avatarSizeStaff = isMobile ? 64 : 80;
  const avatarSizeMember = isMobile ? 48 : 64;

  const cardStyle = {
    width: isMobile ? 100 : 120,
    textAlign: 'center' as const,
  };

  const nameStyle = {
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    maxWidth: isMobile ? 90 : 110,
  };

  return (
    <Spin spinning={loading}>
      <center>
        <div>
          <Title>Zarząd Koła</Title>
          <Space
            direction="horizontal"
            size={isMobile ? 20 : 40}
            align="start"
            wrap
            style={{ justifyContent: 'center' }}
          >
            {staff.map(member => (
              <div key={member.id} style={cardStyle}>
                <Avatar
                  size={avatarSizeStaff}
                  icon={member.photo_url === 'DEFAULT-PROFILE-PICTURE' ? <UserOutlined /> : undefined}
                  src={member.photo_url !== 'DEFAULT-PROFILE-PICTURE' ? member.photo_url : undefined}
                />
                <div style={{ marginTop: 8 }}>
                  <Tooltip title={member.first_name}>
                    <Text style={{ ...nameStyle, fontSize: isMobile ? 13 : 15 }}>{member.first_name}</Text>
                  </Tooltip><br />
                  <Tooltip title={member.last_name}>
                    <Text style={{ ...nameStyle, fontSize: isMobile ? 13 : 15 }}>{member.last_name}</Text>
                  </Tooltip>
                </div>
                <Divider style={{ borderBlockWidth: 3 }} />
                <Text strong style={{ fontSize: isMobile ? 12 : 14 }}>
                  {member.position_translated}
                </Text>
              </div>
            ))}
          </Space>
        </div>

        <div style={{ marginTop: 40 }}>
          <Title level={2}>Członkowie Koła</Title>
          <Space
            direction="horizontal"
            size={isMobile ? 20 : 30}
            align="start"
            wrap
            style={{ justifyContent: 'center' }}
          >
            {restMembers.map(member => (
              <div key={member.id} style={cardStyle}>
                <Avatar
                  size={avatarSizeMember}
                  icon={member.photo_url === 'DEFAULT-PROFILE-PICTURE' ? <UserOutlined /> : undefined}
                  src={member.photo_url !== 'DEFAULT-PROFILE-PICTURE' ? member.photo_url : undefined}
                />
                <div style={{ marginTop: 8 }}>
                  <Tooltip title={member.first_name}>
                    <Text style={{ ...nameStyle, fontSize: isMobile ? 12 : 13 }}>{member.first_name}</Text>
                  </Tooltip><br />
                  <Tooltip title={member.last_name}>
                    <Text style={{ ...nameStyle, fontSize: isMobile ? 12 : 13 }}>{member.last_name}</Text>
                  </Tooltip>
                </div>
              </div>
            ))}
          </Space>
        </div>
      </center>
    </Spin>
  );
}