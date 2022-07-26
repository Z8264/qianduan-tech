import { MenuUnfoldOutlined } from '@ant-design/icons';
import {
  Avatar,
  List,
  Space,
  Alert,
  Empty,
  Button,
  Tag,
  Progress,
  Row,
  Col,
  Form,
  Affix,
} from 'antd';

import './rank.less';

const data = [
  {
    href: 'https://ant.design',
    title: `ant design part `,
    avatar: 'https://avatars.githubusercontent.com/u/78011399?v=3&s=100 2x',
    description:
      'Move Fast and Break Nothing. End-to-end typesafe APIs made easy.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `0`,
    avatar: 'https://avatars.githubusercontent.com/u/78011399?v=3&s=100 2x',
    description: '牛逼的教学软件。',
    content: '中文评价',
  },
  {
    href: 'https://ant.design',
    title: `1`,
    avatar: 'https://avatars.githubusercontent.com/u/78011399?v=3&s=100 2x',
    description: '牛逼的教学软件。',
  },
  {
    href: 'https://ant.design',
    title: `2`,
    avatar: 'https://avatars.githubusercontent.com/u/78011399?v=3&s=100 2x',
    description:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
];

const Rank = () => (
  <div className="rank">
    <Affix offsetTop={0}>
      <div className="rank-header">
        <MenuUnfoldOutlined className="rank-menu" />
        <span className="rank-title">
          用户界面框架 <em>UI Frameworks</em>
        </span>

        <span className="rank-tag">技术榜单 2022</span>
      </div>
    </Affix>
    <div className="rank-des">
      <Alert message="用户界面框架（UI Frameworks），" type="warning" />
    </div>
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      footer={
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span>End</span>}
        />
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <ul className="score">
              <li className="score-li">
                <span className="score-label">Pop</span>
                <Progress percent={30} steps={10} format={(percent) => ''} />
              </li>
              <li className="score-li">
                <span className="score-label">Qua</span>
                <Progress percent={30} steps={10} format={(percent) => ''} />
              </li>
              <li className="score-li">
                <span className="score-label">Eco</span>
                <Progress percent={30} steps={10} format={(percent) => ''} />
              </li>
            </ul>
          }
        >
          <List.Item.Meta
            avatar={
              <a href={item.href} target="_blank">
                <Avatar src={item.avatar} />
              </a>
            }
            title={
              <>
                <a href={item.href} target="_blank">
                  {item.title}
                </a>
                <Space size={5} style={{ float: 'right' }}>
                  <Tag color="blue" style={{ margin: 0 }}>
                    114 contributors
                  </Tag>
                  <Tag color="blue" style={{ margin: 0 }}>
                    1.4k stars
                  </Tag>
                </Space>
              </>
            }
            description={item.description}
          />
          {item.content && <Alert description={item.content} />}
        </List.Item>
      )}
    />
  </div>
);

export default Rank;
