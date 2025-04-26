import { Tooltip, Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Member } from '../../pages/Settings';
import useAPI, { getApiUrl } from '../../hooks/useAPI';
import { useState } from 'react';

type Props = {
  member: Member;
};

export const MemberVisibility = ({ member }: Props) => {

  const [visible, setVisible] = useState(member.visible);

  const { call, loading } = useAPI({
    url: getApiUrl(`admin/member/${member.id}/visibility`),
    method: 'PUT',
    displayNotification: true,
  });

  const toggleVisibility = () => {
    const newVisibility = !visible;

    call({ body: { visible: newVisibility }}).then((res) => {
      if (res?.data?.user) {
        setVisible(res.data.user.visible);
      }
    });
  };

  return (
    <Tooltip title={visible ? 'Ukryj członka' : 'Pokaż członka'}>
      <Button
        type="text"
        icon={visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        onClick={toggleVisibility}
        loading={loading}
      />
    </Tooltip>
  );
};