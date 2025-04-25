import { Typography } from 'antd';
import type { TextProps } from 'antd/es/typography/Text';
import type { ReactNode } from 'react';

type StandardTextProps = Omit<TextProps, 'children'> & {
  children?: ReactNode;
};

const StandardText: React.FC<StandardTextProps> = ({ children, ...rest }) => {

  return (
    <Typography.Text {...rest}>
      {children}
    </Typography.Text>
  );
};

export default StandardText;
