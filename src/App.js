import React from 'react';
import Nav from './components/nav-bar/Nav'
import GlobalSummaryContainer from './components/global-summary/GlobalSummaryContainer';
import CountryDetailsContainer from './components/country-details/CountryDetailsContainer';
import Footer from './components/nav-bar/Footer';

function App() {
  const appTitlePrimary = 'Covid-19 Tracker';
  const appTitleSecondary = 'Global'
  
  return (
    <>
      <Nav title={appTitlePrimary} sub={appTitleSecondary} />
      <div style={{padding:'10px', minHeight: '90vh'}}>
        <GlobalSummaryContainer />
        {/* <CountryDetailsContainer /> */}
      </div>
      <Footer />
    </>
  );

}

export default App;
