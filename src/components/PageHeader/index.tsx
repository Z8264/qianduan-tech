import {
  HomeOutlined,
  HddOutlined,
  BookOutlined,
  AppstoreOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import { Menu, Affix } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';

import './style.less';

const items = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '视频精讲',
    key: 'knowledge',
    icon: <ClusterOutlined />,
  },
  {
    label: '技术榜单',
    key: 'rank',
    icon: <HddOutlined />,
  },
  {
    label: '实战教程',
    key: 'book',
    icon: <BookOutlined />,
    disabled: true,
  },
  {
    label: '项目孵化',
    key: 'apps',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];

const PageHeader = (props) => {
  const { path } = props;
  const [current, setCurrent] = useState(path);

  const onClick = (e) => {
    history.push(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <Affix style={{ position: 'relative', zIndex: 100 }}>
      <div className="page-header">
        <div className="logo">QianDuan.tech</div>
        <Menu
          className="page-menu"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          // theme="dark"
        />
      </div>
    </Affix>
  );
};

export default PageHeader;
