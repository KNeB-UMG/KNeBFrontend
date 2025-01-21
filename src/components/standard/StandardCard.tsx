import React from 'react'
import { Card, Space } from 'antd'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

type StandardCardProps = {
  title?: string;
  content?: string;
  image?: string;
  date?: string;
};

const {Meta}=Card;

export const StandardCard= (props: StandardCardProps) => {
return(
  <>
  <Space>
  <Card hoverable style={{width: 250}}>
    <img style={{width:200}} src={props.image} alt="" />
    <Meta title = {props.title} description = {props.content} ></Meta>
    <div style={{marginTop: 10}}>{props.date}</div>
  </Card>
  </Space>
  </>
);
}

