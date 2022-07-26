import { Row, Col, Space, Card } from 'antd';
import RankList from './components/RankList';
function Pages() {
  return (
    <div style={{ background: '#f1f1f1' }}>
      <div style={{ background: '#f1f1f1', height: 20 }}></div>
      <Row style={{ width: 960, margin: '0 auto' }}>
        <Col span={18}>
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
      <div style={{ background: '#333', height: 200 }}></div>
    </div>
  );
}

export default Pages;
