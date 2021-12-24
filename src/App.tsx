import { Layout } from 'antd';
import React from 'react';
import './App.css';
import classes from './app.module.scss';
import Router from './routes/Router';

const App = function (): React.ReactElement {
  return (
    <Layout className={classes.layoutWrapper}>
      <Layout.Content>
        <Router />
      </Layout.Content>
    </Layout>
  );
};

export default App;
