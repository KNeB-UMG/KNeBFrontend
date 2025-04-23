import React from 'react';
import { Typography } from 'antd';
import { CSSProperties } from 'styled-components';

type StandardTextProps = {
  children?: React.ReactNode;
  center?: boolean;
  style?: CSSProperties;
  strong?: boolean;
  ellipsis?: boolean;
}

const StandardText: React.FC<StandardTextProps> = ({ children, ...props }) => {


  return (
    <Typography.Text {...props}>
      {children}
    </Typography.Text>
  );
};

export default StandardText;
