import { Card, Col, Row, Tag } from 'antd';
import {
  MinusCircleOutlined,
} from '@ant-design/icons';
import styles from './index.less';

const { Meta } = Card;
const App = () => (
  <div className={styles.page}>
    <Row gutter={[10, 10]}>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/short_pic/2021/03/16/000023525633152443604-1615861784699.jpg?size=800x450" />}
        >
          <Meta title="OO6期 低代码（上）" description={(
            <>
              <Tag icon={<MinusCircleOutlined />}>
                低代码
              </Tag>
              <Tag icon={<MinusCircleOutlined />} >
                Low Code
              </Tag></>)} />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/special_column_pic/2020/09/28/16013021395661.jpg?size=0x0" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/short_pic/2021/03/16/000023525633152443604-1615861784699.jpg?size=800x450" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/special_column_pic/2020/09/28/16013021395661.jpg?size=0x0" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/short_pic/2021/03/16/000023525633152443604-1615861784699.jpg?size=800x450" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/special_column_pic/2020/09/28/16013021395661.jpg?size=0x0" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/short_pic/2021/03/16/000023525633152443604-1615861784699.jpg?size=800x450" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="https://zaaap-1254235226.cos.ap-guangzhou.myqcloud.com/special_column_pic/2020/09/28/16013021395661.jpg?size=0x0" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>

    </Row>


  </div>
);

export default App;