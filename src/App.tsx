import React from 'react';
import './css/app.css';
import Navbar from './components/navbar';
import Menu from './components/menu';
import RightBar from './components/sidebars/rightbar';
import LeftBar from './components/sidebars/leftbar';
import Content from './components/content';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Repository } from './pages/repositories';
import MyTask from './pages/task';

function App() {

  return (
    <HashRouter>
        <div className="bg-slate-100 menu">
          <Menu />
        </div>
        <div className="sidebar border-r">
          <div className="profile-box">
            <LeftBar />
          </div>
        </div>
        <div className="main">
          <Navbar />
            <div className="md:flex">
              <div className="md:w-3/4 px-4">
                <Switch>
                  <Route path="/task" component={MyTask} />
                  <Route path="/repositories" component={Repository} />
                  <Route path="/" component={Content} />
                </Switch>
              </div>
              <div className="md:w-1/4 px-2">
                <RightBar />
              </div>
            </div>
        </div>
    </HashRouter>
  );
}

export default App;
