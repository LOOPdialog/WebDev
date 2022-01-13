import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const Email2IconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" >
    <path d="M20.8,2.25 C22.2645455,2.25 23.4814092,3.34410736 23.7110358,4.76354974 C23.738333,4.84254175 23.75087,4.92498569 23.7500946,5.00675073 L23.7449877,5.07461052 L23.7500946,5.25 L23.7500946,18.75 C23.7500946,20.3391314 22.5207728,21.6530502 20.9732146,21.7448746 L20.8,21.75 L3.2,21.75 C1.63011123,21.75 0.344816619,20.4928359 0.25501227,18.9253895 L0.25,18.75 L0.25,5.25 C0.25,5.19080307 0.251705732,5.13198804 0.255070112,5.07360385 C0.243327727,4.97028031 0.254381793,4.86434594 0.288307105,4.76280999 C0.508995614,3.40321997 1.63576203,2.34173915 3.01827528,2.25564281 L3.2,2.25 L20.8,2.25 Z M22.25,6.365 L12.4026566,12.6327461 C12.1876912,12.7695423 11.9204421,12.7866418 11.6924057,12.6840447 L11.5973434,12.6327461 L1.75,6.366 L1.75,18.75 C1.75,19.5283642 2.3328941,20.170292 3.06173808,20.2431196 L3.2,20.25 L20.8,20.25 C21.5453809,20.25 22.1721209,19.6538583 22.2432759,18.8942388 L22.25,18.75 L22.25,6.365 Z M20.8,3.75 L3.2,3.75 C2.60742219,3.75 2.08982836,4.12677646 1.86676547,4.66293313 L12,11.111 L22.1332345,4.66293313 C21.9273303,4.16801928 21.4704648,3.80890869 20.9353177,3.75658939 L20.8,3.75 Z" fill={props.fill ? props.fill : '#4A4D4E'}></path>
  </svg>
);

export const Email2IconSvgIcon = (props: IPropsIcon) => (
  <Icon component={Email2IconSvg} {...props} />
);
