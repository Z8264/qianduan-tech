import { Key, useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import { Drawer, Row, Col, List, Button, Alert } from 'antd';
import './style.less';
import BaseMenu from '../BaseMenu';

function RankMenu(props) {
  const { data, current, onChange } = props;

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClick = (obj) => {
    onClose();
    onChange(obj);
  };

  return (
    <>
      <div className="rank-menu">
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<MenuUnfoldOutlined />}
          onClick={showDrawer}
        >
          选择榜单
        </Button>
      </div>

      <Drawer
        placement="left"
        closable={false}
        width={800}
        onClose={onClose}
        visible={visible}
      >
        <BaseMenu data={data} current={current} onChange={onClick} />
      </Drawer>
    </>
  );
}

export default RankMenu;
