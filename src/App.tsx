import React from 'react';
import './css/app.scss';
import Navbar from './components/navbar';
import Menu from './components/menu';
import RightBar from './components/sidebars/rightbar';
import LeftBar from './components/sidebars/leftbar';
import Content from './components/content';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MyTask from './components/mytask';
import MyApplication from './components/myapplication';

function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        <div className="sidebar">
          <div className="bg-light menu">
            <Menu />
          </div>
          <div className="profile-box">
            <LeftBar />
          </div>
        </div>
        <div className="main">
          <Navbar />
          <div className="p-4">
            <div className="row">
              <div className="col-md-9">
                <Switch>
                  <Route path="/task" component={MyTask} />
                  <Route path="/app" component={MyApplication} />
                  <Route path="/" component={Content} />
                </Switch>
              </div>
              <div className="col-md-3">
                <RightBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
