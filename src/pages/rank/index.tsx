import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Typography } from 'antd';
import RankList from './components/RankList';
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
      <div style={{ background: '#f1f1f1', height: 20 }}></div>
      <Row style={{ width: 960, margin: '0 auto' }}>
        <Col span={18}>
          <Button type="primary" onClick={showDrawer}>
            Open drawer
          </Button>
          <RankList />
        </Col>
        <Col span={6}>
          <Card title="Card" size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Card" size="small" style={{ marginTop: 10 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Card" size="small" style={{ marginTop: 10 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

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
