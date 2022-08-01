import {
  HomeOutlined,
  HddOutlined,
  BookOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu, Affix } from 'antd';
import React, { useState } from 'react';

import './style.less';

const items = [
  {
    label: 'QianDuan.tech',
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: '榜单',
    key: 'rank',
    icon: <HddOutlined />,
  },
  {
    label: '教程',
    key: 'book',
    icon: <BookOutlined />,
    disabled: true,
  },
  {
    label: '社区',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];

const PageHeader = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Affix>
      <div className="page-header">
        <Menu
          className="page-menu"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </Affix>
  );
};

export default PageHeader;
