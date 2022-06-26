import {
  SolutionOutlined,
  GithubOutlined,
  LikeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Card,
  Progress,
  Divider,
  Space,
  Tag,
  Col,
  Row,
  Statistic,
  Timeline,
  Rate,
  Popover,
  List,
} from 'antd';
import { useState } from 'react';
const { Meta } = Card;

const data = [
  {
    t: '基础体系',
    c: [
      {
        title: 'Front-End Developer Roadmap',
        des: 'This repository aims to collect the most important concepts of front-end.',
        link: 'https://github.com/Z8264/frontend-developer-roadmap',
        progress: 100,
        rate: 4,
        stars: 500,
        v: 2022,
        todo: ['增加 ES 知识概念图谱', '图书/项目推荐', '增加中文版本'],
      },
      {
        title: 'Design Patterns (GoF)',
        des: 'Design patterns (GoF) implemented in ECMAScript.',
        link: 'https://github.com/Z8264/frontend-developer-roadmap',
        progress: 60,
        rate: 2,
        stars: 12,
        v: 2022,
      },
      {
        title: 'Algorithms',
        des: 'This repository contains EcmaScript based examples of many popular algorithms.',
        link: 'https://github.com/Z8264/algorithms-ecmascript',
        progress: 20,
        rate: 2,
        stars: 0,
        v: 0.1,
      },
      {
        title: 'Data Structures',
        des: '暂无描述',
        link: 'https://github.com/Z8264/algorithms',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
    ],
  },
  {
    t: '领域体系',
    c: [
      {
        title: '中后台',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '低代码',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '工程化：DevOps',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '工程化：FrameWorks',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '工程化：IDE',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '体验经济',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '多媒体',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '智能化',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '图形互动',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
      {
        title: '数据可视化',
        des: '暂无描述',
        link: '',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
    ],
  },
  {
    t: '综合体系',
    c: [
      {
        title: 'Front-End Job Model',
        des: '紧跟行业发展，打造行业 Job Model，助力企业人才梯队建设。',
        link: 'https://github.com/Z8264/frontend-job-model',
        progress: 0,
        rate: 0,
        stars: 0,
        v: 0.1,
      },
    ],
  },
];

const App = () => {
  return (
    <>
      <div style={{ width: 920, margin: '0 auto' }}>
        <h2>知识体系</h2>
        <p>面向前端工程师 (Front-End Developer)， 打造前瞻性的知识体系。</p>
        {data.map((group) => (
          <>
            <Divider>{group.t}</Divider>

            <Space size={[10, 10]} wrap>
              {group.c.map((el) => (
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  actions={[
                    <a href={el.link} target="_blank">
                      <GithubOutlined key="setting" />
                    </a>,
                    <Popover
                      content={
                        <List
                          size="small"
                          dataSource={el.todo}
                          renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                      }
                      title="TODO"
                      trigger="click"
                    >
                      <UnorderedListOutlined /> {el.todo?.length}
                    </Popover>,
                  ]}
                >
                  <h3>{el.title}</h3>

                  <p
                    style={{
                      fontSize: 12,
                      height: 32,
                      lineHeight: '16px',
                      overflow: 'hidden',
                    }}
                  >
                    {el.des}
                  </p>

                  <Rate disabled value={el.rate} />

                  <Row gutter={10}>
                    <Col span={8}>
                      <LikeOutlined /> stars
                      <p>{el.stars}</p>
                    </Col>
                    <Col span={8}>
                      <GithubOutlined /> version
                      <p>{el.v}</p>
                    </Col>
                    <Col span={8}>
                      <SolutionOutlined /> progress
                      <p>
                        <Progress
                          percent={el.progress}
                          status="active"
                          steps={5}
                          showInfo={false}
                        />
                      </p>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Space>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
