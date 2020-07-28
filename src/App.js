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
      <div className="col-md-1 h-100 bg-light d-none d-md-block">
        <Menu />
      </div>
      <div className="col-md-2 border-right">
        <LeftBar />
      </div>
      <div className="col-md-9">
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
