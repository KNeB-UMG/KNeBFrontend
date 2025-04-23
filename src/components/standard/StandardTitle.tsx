import React from 'react';
import { Typography } from 'antd';
import { CSSProperties } from 'styled-components';

type StandardTitleProps = {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  style?: CSSProperties;
  
}

const StandardTitle: React.FC<StandardTitleProps> = ({ children, level = 1, ...props }) => {
  return (
    <Typography.Title level={level} {...props}>
      {children}
    </Typography.Title>
  );
};

export default StandardTitle;
