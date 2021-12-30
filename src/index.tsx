import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import './assets/styles/styles.scss';
import './assets/styles/custom.module.scss';
import main from './gql/writeData/main';
import GET_MAIN from './gql/query/getMain';
import { setContext } from '@apollo/client/link/context';
import { ConfigProvider } from 'antd';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_CLIENT_URI || ''
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: process.env.REACT_APP_GRAPHQL_CLIENT_URI,
  cache: new InMemoryCache()
});

client.writeQuery({
  query: GET_MAIN,
  data: {
    main
  }
});

ConfigProvider.config({
  theme: {
    primaryColor: 'RGB(74, 77, 78)',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
    processingColor: 'blue'
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ConfigProvider direction="ltr">
      <App />
    </ConfigProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
