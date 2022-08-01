import { useState } from 'react';
import { Row, Col, Space, Card, Drawer, Button, List, Affix } from 'antd';

import PageHeader from '@/components/PageHeader';

function Home() {
  return (
    <div style={{ background: '#f1f1f1' }}>
      <PageHeader path="home" />
      <div style={{ background: '#333', height: 200 }}></div>
    </div>
  );
}

export default Home;
