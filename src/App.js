import React from 'react';
import Nav from './components/nav-bar/Nav'
import GlobalSummary from './components/global-summary/GlobalSummary';
import CountryDetailsContainer from './components/country-details/CountryDetailsContainer';
import Footer from './components/nav-bar/Footer';

function App() {
  const appTitlePrimary = 'Covid-19 Tracker';
  const appTitleSecondary = 'Global'
  
  return (
    <>
      <Nav title={appTitlePrimary} sub={appTitleSecondary} />
      <div style={{padding:'10px'}}>
        <GlobalSummary />
        <CountryDetailsContainer />
      </div>
      <Footer />
    </>
  );

}

export default App;
