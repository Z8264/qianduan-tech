import React from 'react';
import { Card } from 'antd';
import './style.less';
function SideInfo(props) {
  const { data } = props;
  return (
    <div>
      <Card title="概念" size="small">
        <p className="rank-intro">{data.intro}</p>
      </Card>
      <Card title="教程" size="small" style={{ marginTop: 10 }}>
        <p className="rank-intro">暂无</p>
      </Card>
      <Card title="资讯" size="small" style={{ marginTop: 10 }}>
        <p className="rank-intro">暂无</p>
      </Card>
    </div>
  );
}

export default SideInfo;
