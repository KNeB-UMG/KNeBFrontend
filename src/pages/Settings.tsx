import { useEffect, useState } from 'react';
import { Table, Tooltip, Spin, Space, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAPI, { getApiUrl } from '../hooks/useAPI';
import { MemberEdit } from '../components/members/MemberEdit';
import { MemberVisibility } from '../components/members/MemberVisibility';

// TODO: add deactivaton member logic, wait for API

export type Member = {
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
  };
  visible: boolean;
};

export default function Settings() {

  const { data, loading } = useAPI({
    url: getApiUrl('members/all'),
    method: 'GET',
  }, true);

  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    if (data?.members) {
      setMembers(data.members);
    }
  }, [data]);

  const columns = [
    {
      title: 'Zdjęcie',
      key: 'photo',
      render: (member: Member) =>
        member.photo?.data && member.photo.data !== 'DEFAULT-PROFILE-PICTURE' ? (
          <img
            src={member.photo.data}
            alt="Zdjęcie członka"
          />
        ) : (
          <FontAwesomeIcon icon={faUser} size='2x' />
        ),
    },
    {
      title: 'Imię',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Nazwisko',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Rola',
      dataIndex: 'position_translated',
      key: 'position_translated',
    },
    {
      title: 'Opis',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Akcja',
      key: 'action',
      render: (record: Member) => (
        <Space>
          <MemberEdit member={record}/>
          <MemberVisibility member={record} />
            <Popconfirm
              title="Na pewno chcesz zdeaktywować tego członka?"
              okText="Tak"
              cancelText="Nie"
            >
              <Tooltip title="Deaktywacja">
                <Button danger type="text" icon={<DeleteOutlined />} />
              </Tooltip>
            </Popconfirm>
         </Space>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={members}
        columns={columns}
        rowKey="id"
      />
    </Spin>
  );
}