import { Button, Form, Input, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Member } from '../../pages/Settings';
import useAPI, { getApiUrl } from '../../hooks/useAPI';
import { StandardModal, useStandardModal } from '../standard/StandardModal';

type Props = {
  member: Member;
};

export const MemberEdit = ({ member }: Props) => {

  const [form] = Form.useForm();
  const [ref, open, close] = useStandardModal();

  const { call, loading } = useAPI({
    url: getApiUrl(`admin/member/${member.id}/edit`),
    method: 'PUT',
    displayNotification: true,
  });

  const handleEdit = (values: Partial<Member>) => {
    call({ body: values }).then(() => {
      close();
    });
  };

  return (
    <>
      <Tooltip title="Edytuj">
        <Button type="text" icon={<EditOutlined />} onClick={open} />
      </Tooltip>

      <StandardModal
        ref={ref} 
        title="Edycja członka"
        onCancel={close}
        onOk={form.submit}
        loading={loading}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleEdit}
        >
          <Form.Item
            label="Imię"
            name="first_name"
            rules={[{ required: true, message: 'Proszę podać imię!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nazwisko"
            name="last_name"
            rules={[{ required: true, message: 'Proszę podać nazwisko!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Rola" name="position_translated">
            <Input />
          </Form.Item>
          <Form.Item label="Opis" name="description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </StandardModal>
    </>
  );
};