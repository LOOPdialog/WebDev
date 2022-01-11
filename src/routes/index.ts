/* eslint-disable no-unused-vars */
import React from 'react';
import LoginPage from '../pages/login';
import DealersPage from '../pages/dealers';
import AnalyticsPage from '../pages/analytics/index';
import OnboardingPage from '../pages/onboarding/index';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  child?: boolean;
  titleName: string;
}

export enum RouteNames {
  DEALERS = '/dealers',
  ANALYTICS = '/analytics',
  ONBOARDING = '/onboarding',
  QUICK_REPLY = '/QuickReply',
  PROCESS = '/process',
  LOGIN = '/login',
  LOGUT = '/logout',
  SIGN_UP = '/sign-up'
}

export enum RouteNamesByLink {
  '/dealers' = 'dealers',
  '/analytics' = 'analytics',
  '/onboarding' = 'onboarding',
  '/login' = 'login',
  '/logout' = 'logout',
  '/sign-up' = 'sign-up'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: LoginPage, titleName: 'Login' }
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.ANALYTICS, component: AnalyticsPage, titleName: 'Analytics' },
  { path: RouteNames.ONBOARDING, component: OnboardingPage, titleName: 'Onboarding' },
  { path: RouteNames.DEALERS, component: DealersPage, titleName: 'Dealers' }
];
