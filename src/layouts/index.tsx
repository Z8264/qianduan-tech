import {
  AppstoreOutlined,
  BookOutlined,
  ClusterOutlined,
  HddOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { history, Outlet } from 'umi';
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
    label: '教程',
    key: 'course',
    icon: <BookOutlined />,
  },
  {
    label: '开源图谱',
    key: 'rank',
    icon: <HddOutlined />,
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
