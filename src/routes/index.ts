/* eslint-disable no-unused-vars */
import React from 'react';
import LoginPage from '../pages/login';
import DealersPage from '../pages/dealers';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  child?: boolean;
  titleName: string;
}

export enum RouteNames {
  DEALERS = '/dealers',
  LOGIN = '/login',
  LOGUT = '/logout',
  SIGN_UP = '/sign-up'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: LoginPage, titleName: 'Login' }
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: LoginPage, titleName: 'Login' },
  { path: RouteNames.DEALERS, component: DealersPage, titleName: 'Dealers' }
];
