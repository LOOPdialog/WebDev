import React from 'react';
import { privateRoutes, publicRoutes } from '.';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login';

const Router: React.FC = () => {
  const isAuth = true;
  const RoutesLink = isAuth ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Routes>
        {RoutesLink.map((route) => {
          const ComponentL = route.component;
          return (
            <Route
              path={`${route.path}${route.child ? '/*' : ''}`}
              element={<ComponentL />}
              key={route.path}
            />
          );
        }
        )}
        {
          !isAuth
            ? <Route
              path="*"
              element={<LoginPage />}
            />
            : <Route
              path="*"
              element={<LoginPage />}
            />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
