import useAPI, { getApiUrl } from '../../hooks/useAPI';
import { Avatar, Space, Divider, Spin, Tooltip } from 'antd';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import StandardTitle from '../standard/StandardTitle';
import StandardText from '../standard/StandardText';

type Member = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  position: string;
  position_translated: string;
  description: string;
  photo: {
    data: string;
    id: number | null;
  }
};

//TODO: Wait for API to change photo display

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

  return (
    <Spin spinning={loading}>
      <center>
        <Space direction='vertical'>
          <div>
            <StandardTitle>Zarząd Koła</StandardTitle>
            <Space
              size={isMobile ? 20 : 40}
              wrap
              style={{ justifyContent: 'center' }}
            >
              {staff.map((member) => (
                <div key={member.id} style={{width: isMobile ? 100 : 120}}>
                  <Avatar size={avatarSizeStaff}>
                    {member.photo?.data !== 'DEFAULT-PROFILE-PICTURE' && member.photo?.data ? (
                      <img src={member.photo.data} />
                    ) : (
                      <FontAwesomeIcon icon={faUser} size="lg" />
                    )}
                  </Avatar>
                  <div style={{ marginTop: 8 }}>
                    <Tooltip title={member.first_name}>
                      <StandardText ellipsis style={{width: isMobile ? 90 : 110,}}>
                        {member.first_name}
                      </StandardText>
                    </Tooltip>
                    <br />
                    <Tooltip title={member.last_name}>
                      <StandardText ellipsis style={{width: isMobile ? 90 : 110,}}>
                        {member.last_name}
                      </StandardText>
                    </Tooltip>
                  </div>
                  <Divider style={{ borderBlockWidth: 3 }} />
                  <StandardText strong>{member.position_translated}</StandardText>
                </div>
              ))}
            </Space>
          </div>
          
          <div>
            <StandardTitle level={2}>Członkowie Koła</StandardTitle>
            <Space
              size={isMobile ? 20 : 30}
              wrap
              style={{ justifyContent: 'center' }}
            >
              {restMembers.map((member) => (
                <div key={member.id} style={{width: isMobile ? 100 : 120}}>
                  <Avatar size={avatarSizeMember}>
                    {member.photo?.data !== 'DEFAULT-PROFILE-PICTURE' && member.photo?.data ? (
                      <img src={member.photo.data} />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </Avatar>
                  <div style={{ marginTop: 8 }}>
                    <Tooltip title={member.first_name}>
                      <StandardText ellipsis>{member.first_name}</StandardText>
                    </Tooltip>
                    <br />
                    <Tooltip title={member.last_name}>
                      <StandardText ellipsis>{member.last_name}</StandardText>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </Space>
          </div>
        </Space>
      </center>
    </Spin>
  );
}