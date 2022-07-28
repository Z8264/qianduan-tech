import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Affix } from 'antd';
import RankList from './components/RankList';
import SideInfo from './components/SideInfo';
import RankMenu from './components/RankMenu';
import './style.less';

import data from '@/RANK_DATA/index.js';

function Pages() {
  const [current, setCurrent] = useState(data[0].menu[0]);
  return (
    <div style={{ background: '#f1f1f1' }}>
      {/* <Affix>
        <div
          style={{
            position: 'relative',
            background: '#fff',
            boxShadow: '0px 1px 2px rgba(0,0,0,.2)',
            height: 50,
            zIndex: 100,
          }}
        ></div>
      </Affix> */}

      <div className="page">
        <RankMenu data={data} current={current} onChange={setCurrent} />
        <Row>
          <Col span={18}>
            <RankList data={current} />
          </Col>
          <Col span={6}>
            <SideInfo data={current} />
          </Col>
        </Row>
      </div>

      <div style={{ background: '#333', height: 200 }}></div>
    </div>
  );
}

export default Pages;
