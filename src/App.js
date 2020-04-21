import React from 'react';
import Nav from './components/nav-bar/Nav'
import GlobalSummary from './components/global-summary/GlobalSummary';

function App() {
  const appTitlePrimary = 'Covid-19 Tracker';
  const appTitleSecondary = 'Global'
  
  return (
    <>
      <Nav title={appTitlePrimary} sub={appTitleSecondary} />
      <div style={{padding:'10px'}}>
        <GlobalSummary />
      </div>
    </>
  );

}

export default App;
