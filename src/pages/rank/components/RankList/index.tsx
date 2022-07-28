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

import './style.less';

const d = [
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

const RankList = (props) => {
  const { data } = props;
  if (!data.cn || !data.list.length) return <></>;
  return (
    <div className="rank-list">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.list}
        header={
          <div className="rank-header">
            <span className="rank-header-title">
              {data.cn} <em>{data.en}</em>
            </span>
            <span className="rank-header-tag">卓越榜单 2022</span>
          </div>
        }
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
              <ul className="rank-score">
                <li className="rank-score-item">
                  <span className="rank-score-label">Pop</span>
                  <Progress
                    percent={item.score.pop}
                    steps={10}
                    format={(percent) => ''}
                  />
                </li>
                <li className="rank-score-item">
                  <span className="rank-score-label">Qua</span>
                  <Progress
                    percent={item.score.qua}
                    steps={10}
                    format={(percent) => ''}
                  />
                </li>
                <li className="rank-score-item">
                  <span className="rank-score-label">Eco</span>
                  <Progress
                    percent={item.score.eco}
                    steps={10}
                    format={(percent) => ''}
                  />
                </li>
              </ul>
            }
          >
            <List.Item.Meta
              avatar={
                <a href={item.href} target="_blank">
                  <Avatar
                    className="rank-logo"
                    shape="square"
                    size={50}
                    src={item.logo}
                  />
                </a>
              }
              title={
                <>
                  <a href={item.href} target="_blank">
                    {item.name}
                  </a>
                  <Space size={5} style={{ float: 'right' }}>
                    <Tag color="blue" style={{ margin: 0 }}>
                      {item.contributors} contributors
                    </Tag>
                    <Tag color="blue" style={{ margin: 0 }}>
                      {item.stars} stars
                    </Tag>
                  </Space>
                </>
              }
              description={item.des}
            />
            {item.comment && <Alert description={item.comment} />}
          </List.Item>
        )}
      />
    </div>
  );
};

export default RankList;
