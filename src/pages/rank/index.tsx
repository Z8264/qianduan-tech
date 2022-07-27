import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Affix } from 'antd';
import RankList from './components/RankList';
import SideInfo from './components/SideInfo';
import './style.less';

function Pages() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // const data = [
  //   'Racing car sprays burning fuel into crowd.',
  //   'Japanese princess to wed commoner.',
  //   'Australian walks 100km after outback crash.',
  //   'Man charged over missing wedding girl.',
  //   'Los Angeles battles huge wildfires.',
  // ];
  const data = [
    {
      title: 'bbbb',
      list: [
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
      ],
    },
    {
      title: 'aaaa',
      list: [
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
      ],
    },
    {
      title: 'header',
      list: [
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
      ],
    },
    {
      title: 'header',
      list: [
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
      ],
    },
    {
      title: 'header',
      list: [
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
        {
          cn: '用户界面框架',
          en: 'UI Framworks',
        },
      ],
    },
  ];

  return (
    <div style={{ background: '#f1f1f1' }}>
      <Affix>
        <div
          style={{
            position: 'relative',
            background: '#fff',
            boxShadow: '1px 1px 0 rgba(0,0,0,.2)',
            height: 50,
            zIndex: 100,
          }}
        ></div>
      </Affix>

      <div className="page">
        <Button type="primary" onClick={showDrawer}>
          Open drawer
        </Button>
        <Row>
          <Col span={18}>
            <RankList />
          </Col>
          <Col span={6}>
            <SideInfo />
          </Col>
        </Row>
      </div>

      <Drawer
        title="Drawer with extra actions"
        placement="left"
        closable={false}
        width={900}
        onClose={onClose}
        visible={visible}
      >
        <Row>
          {data.map((group) => (
            <Col span={8}>
              <List
                style={{ margin: 5 }}
                size="small"
                header={<h4>{group.title}</h4>}
                bordered
                dataSource={group.list}
                renderItem={(item) => (
                  <List.Item>
                    {item.cn} {item.en}
                  </List.Item>
                )}
              />
            </Col>
          ))}
        </Row>
      </Drawer>
      <div style={{ background: '#333', height: 200 }}></div>
    </div>
  );
}

export default Pages;
