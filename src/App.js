import React from 'react';
import { Switch, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>

        <div className='footer' >
          <Typography.Title level={4} style={{color: 'var(--green)', textAlign: 'center'}}>
          <Link  style={{color: 'var(--green)', textAlign: 'center'}}><GithubOutlined /> Chhroot</Link> <br />
          </Typography.Title>
        </div>
        </div>
    </div>
  )
}

export default App;