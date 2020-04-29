import React from 'react';
import Nav from './components/nav-bar/Nav'
import Footer from './components/nav-bar/Footer';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
import GlobalStatsContainer from './components/globalContent/GlobalStatsContainer';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <DefaultTabBar {...props} className="site-custom-tab-bar" />
);

function App() {
  const appTitlePrimary = 'Covid-19 Tracker';
  const appTitleSecondary = 'Global'
  
  return (
     <Layout>
       <Nav title={appTitlePrimary} sub={appTitleSecondary} />
        <div style={{padding:'10px', minHeight: '90vh'}} >
          <Tabs defaultActiveKey="1" tabPosition='top' size="large" renderTabBar={renderTabBar}>
            <TabPane tab="Global" key="1">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={24}>
                    <GlobalStatsContainer/>
                  </Col>
                 </Row>
            </TabPane>
            <TabPane tab="India" key="2">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                  <h3>Work in Progress</h3>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
        <Footer />
    </Layout>
  );

}

export default App;
