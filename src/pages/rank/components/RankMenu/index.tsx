import { Key, useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import { Drawer, Row, Col, List, Button, Alert } from 'antd';
import './style.less';

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
        <p className="rank-menu-info">
          <strong>前端细分领域，最佳技术榜单。</strong>
          该榜单由来自国内
          <span>50+</span> 互联网企业，
          <span>1000+</span>
          前端工程师参与调研。排名先后仅代表个人观点。
        </p>
      </div>

      <Drawer
        placement="left"
        closable={false}
        width={400}
        onClose={onClose}
        visible={visible}
      >
        {data.map((obj, i) => (
          <nav className="pmenu" key={i}>
            <h3 className="pmenu-title">{obj.title}</h3>
            {obj.menu.map((item, j) => (
              <a
                className={
                  item.cn === current.cn
                    ? 'pmenu-item pmenu-active'
                    : 'pmenu-item'
                }
                href="#"
                key={j}
                onClick={() => onClick(item)}
              >
                <span className="pmenu-item-name">{item.cn}</span>
                <span className="pmenu-item-label">{item.en}</span>
              </a>
            ))}
          </nav>
        ))}
      </Drawer>
    </>
  );
}

export default RankMenu;
