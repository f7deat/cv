import React from 'react';
import './css/app.scss';
import Navbar from './components/navbar';
import Menu from './components/menu';
import RightBar from './components/sidebars/rightbar';
import LeftBar from './components/sidebars/leftbar';
import Content from './components/content';

function App() {
  return (
    <div className="row mx-0 h-100">
      <div className="col-md-3 h-100 fixed-top bg-white">
        <div className="row h-100">
          <div className="col-md-3 h-100 bg-light d-none d-md-block">
            <Menu />
          </div>
          <div className="col-md-9 border-right">
            <LeftBar />
          </div>
        </div>
      </div>
      <div className="col-md-9 offset-3">
        <Navbar />
        <div className="p-4">
          <div className="row">
            <div className="col-md-9">
              <Content />
            </div>
            <div className="col-md-3">
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
