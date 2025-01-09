import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare  } from '@fortawesome/free-brands-svg-icons';
import { Divider } from "antd";

export default function Management() {
  return (
    <center><div>
     <h1>Zarząd Koła</h1>
    <Space direction="horizontal" size={30} align="center">
    <div className='memberDetails' style={{ textAlign: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>Kacper Kmiecik</p>
        <Divider />
        <b><p>Przewodniczący</p></b>
      </div>
      <div className='memberDetails' style={{ textAlign: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>Oskar Kacała</p>
        <Divider />
        <b><p>Zastępca</p></b>
      </div>
      <div className='memberDetails' style={{ textAlign: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>Michał Wulkowicz</p>
        <Divider />
        <b><p>Skarbnik</p></b>
      </div>
      <div className='memberDetails' style={{ textAlign: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>Mgr Paweł Szyman</p>
        <Divider />
        <b><p>Opiekun Naukowy</p></b>
      </div>
    </Space>
    </div>

    <div>
    <h1>Obserwuj nas!</h1>
    <Space direction="horizontal" size={30} align="center">
    <div className='socialMedia' style={{ textAlign: 'center' }}>
    <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
    <h3>Facebook</h3>
    </div>
    <div className='socialMedia' style={{ textAlign: 'center' }}>
    <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
    <h3>Instagram</h3>
    </div>
    <div className='socialMedia' style={{ textAlign: 'center' }}>
    <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
    <h3>Linktree</h3>
    </div>
    </Space>
    </div>
    </center>
  
       
  )
}
