import React from 'react';
import { Typography } from 'antd';
import type { TitleProps } from 'antd/es/typography/Title';
import type { ReactNode } from 'react';

type StandardTitleProps = Omit<TitleProps, 'children'> & {
  children?: ReactNode;
};

const StandardTitle: React.FC<StandardTitleProps> = ({ children, ...props }) => {
  return (
    <Typography.Title {...props}>
      {children}
    </Typography.Title>
  );
};

export default StandardTitle;
