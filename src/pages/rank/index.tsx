import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Affix } from 'antd';

import PageHeader from '@/components/PageHeader';

import RankList from './components/RankList';
import SideInfo from './components/SideInfo';
import RankMenu from './components/RankMenu';
import './style.less';

import Menu from './components/Menu';
import data from '@/RANK_DATA/index.js';

function Pages() {
  // const [current, setCurrent] = useState(data[0].menu[0]);
  const [current, setCurrent] = useState();
  return (
    <div style={{ background: '#f1f1f1' }}>
      <PageHeader />

      <div className="page">
        {!current ? (
          <Menu data={data} current={current} onChange={setCurrent} />
        ) : (
          <>
            <RankMenu data={data} current={current} onChange={setCurrent} />
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
