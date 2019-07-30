import React from 'react';

import './Theme.css';
import './App.css';

import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';

import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <div id="site-wrap">
        <Header/>
        <Sidebar/>
        <div id="page-header"></div>
        <div id="sc-dimd"></div>
        <div id="xv-body" className="">
          <div className="lenssc">
            <div id="orgsel-wrap">
              <div id="orgsel"> </div>
            </div>
            <div id="scdiv" className="line scorecardUnit">
              <div className="sc-container">
                <Page1/>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
