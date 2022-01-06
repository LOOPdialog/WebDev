import React, { useEffect } from 'react';
import { privateRoutes, publicRoutes } from '.';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login';
import Page from '../components/page/index';
import { useQuery, useApolloClient } from '@apollo/client';
import GET_MAIN from '../gql/query/getMain';

const Router: React.FC = () => {
  const { data: query } = useQuery(GET_MAIN);
  const { isAuth } = query.main;
  const client = useApolloClient();

  useEffect(() => {
    client.writeQuery({
      query: GET_MAIN,
      data: {
        main: {
          ...query.main,
          isAuth: !!window.localStorage.getItem('token')
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RoutesLink = isAuth ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Routes>
        {RoutesLink.map((route) => {
          const ComponentL = route.component;
          return (
            <Route
              path={`${route.path}${route.child ? '/*' : ''}`}
              element={<Page title={route.titleName}><ComponentL /></Page>}
              key={route.path}
            />
          );
        }
        )}
        {
          !isAuth
            ? <Route
              path="*"
              element={<Page title='Login'><LoginPage /></Page>}
            />
            : <Route
              path="*"
              element={<Page title='Login'><LoginPage /></Page>}
            />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
