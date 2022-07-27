import React from 'react';
import { Card } from 'antd';
function SideInfo() {
  return (
    <div>
      <Card title="概念" size="small">
        <p>用户界面框架 (UI Frameworks)，解决MVVP相关知识。</p>
      </Card>
      <Card title="教程" size="small" style={{ marginTop: 10 }}>
        <p>$10.00</p>
        <p>Card content</p>
      </Card>
      <Card title="资讯" size="small" style={{ marginTop: 10 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default SideInfo;
