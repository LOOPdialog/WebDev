import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const ProcessIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M12,7.25 C14.3681301,7.25 16.3315012,8.98297891 16.6911142,11.2499375 L23,11.25 C23.4142136,11.25 23.75,11.5857864 23.75,12 C23.75,12.3796958 23.4678461,12.693491 23.1017706,12.7431534 L23,12.75 L16.6909553,12.7510638 C16.3309231,15.0175314 14.3677814,16.75 12,16.75 C9.6322186,16.75 7.66907694,15.0175314 7.30904472,12.7510638 L1,12.75 C0.585786438,12.75 0.25,12.4142136 0.25,12 C0.25,11.6203042 0.532153882,11.306509 0.898229443,11.2568466 L1,11.25 L7.30888578,11.2499375 C7.66849879,8.98297891 9.63186994,7.25 12,7.25 Z M12,8.75 C10.2050746,8.75 8.75,10.2050746 8.75,12 C8.75,13.7949254 10.2050746,15.25 12,15.25 C13.7949254,15.25 15.25,13.7949254 15.25,12 C15.25,10.2050746 13.7949254,8.75 12,8.75 Z" fill={props.fill ? props.fill : '#4A4D4E'}></path>
  </svg>
);

export const ProcessIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={ProcessIconSvg} {...props} />
);
