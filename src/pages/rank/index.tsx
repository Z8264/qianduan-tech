import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Affix } from 'antd';

import RankList from './components/RankList';
import SideInfo from './components/SideInfo';
import DrawerMenu from './components/DrawerMenu';
import './style.less';

import BaseMenu from './components/BaseMenu';
import data from '@/RANK_DATA/index.js';

function Pages() {
  // const [current, setCurrent] = useState(data[0].menu[0]);
  const [current, setCurrent] = useState();
  return (
    <div style={{ background: '#f1f1f1' }}>
      <div className="page">
        {!current ? (
          <>
            <p>Github 开源技术解决方案</p>
            <BaseMenu data={data} current={current} onChange={setCurrent} />
          </>
        ) : (
          <>
            <DrawerMenu data={data} current={current} onChange={setCurrent} />
            <Row>
              <Col span={18}>
                <RankList data={current} />
              </Col>
              <Col span={6}>
                <SideInfo data={current} />
              </Col>
            </Row>
          </>
        )}
      </div>

      <div style={{ background: '#333', height: 200 }}></div>
    </div>
  );
}

export default Pages;
