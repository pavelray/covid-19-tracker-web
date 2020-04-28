import React from 'react';
import Nav from './components/nav-bar/Nav'
import Footer from './components/nav-bar/Footer';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
import GlobalStatsContainer from './components/globalContent/GlobalStatsContainer';

function App() {
  const appTitlePrimary = 'Covid-19 Tracker';
  const appTitleSecondary = 'Global'
  
  return (
     <Layout>
       <Nav title={appTitlePrimary} sub={appTitleSecondary} />
      <div style={{padding:'10px', minHeight: '90vh'}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <GlobalStatsContainer/>
            </Col>
        </Row>
      </div>
      <Footer />
    </Layout>
  );

}

export default App;
