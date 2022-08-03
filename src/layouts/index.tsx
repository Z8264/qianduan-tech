import { Link, Outlet, history } from 'umi';
import {
  HomeOutlined,
  HddOutlined,
  BookOutlined,
  AppstoreOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import { Menu, Affix } from 'antd';
import { useState } from 'react';
import styles from './index.less';

import 'antd/dist/antd.css';

const items = [
  {
    label: '首页',
    key: '',
    icon: <HomeOutlined />,
  },
  {
    label: '视频',
    key: 'video',
    icon: <ClusterOutlined />,
  },
  {
    label: '榜单',
    key: 'rank',
    icon: <HddOutlined />,
  },
  {
    label: '教程',
    key: 'course',
    icon: <BookOutlined />,
    disabled: true,
  },
  {
    label: '孵化',
    key: 'apps',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];

export default function Layout() {
  const [current, setCurrent] = useState(
    history.location.pathname.replace('/', ''),
  );

  const onClick = (e) => {
    history.push(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>前端</div>
          <div className={styles.menu}>
            <Menu
              style={{ border: 'none' }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </div>
          <div className={styles.func}>封闭测试阶段</div>
        </div>
      </div>
      <Outlet />
      <div className={styles.footer}></div>
    </>
  );
}
