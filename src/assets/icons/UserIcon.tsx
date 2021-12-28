import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const UserIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M17,14.25 C19.5504817,14.25 21.6314697,16.2601413 21.7451121,18.782572 L21.75,19 L21.75,22 C21.75,22.4142136 21.4142136,22.75 21,22.75 C20.6203042,22.75 20.306509,22.4678461 20.2568466,22.1017706 L20.25,22 L20.25,19 C20.25,17.2669685 18.8935452,15.8507541 17.1844239,15.7551448 L17,15.75 L7,15.75 C5.26696854,15.75 3.85075407,17.1064548 3.75514479,18.8155761 L3.75,19 L3.75,22 C3.75,22.4142136 3.41421356,22.75 3,22.75 C2.62030423,22.75 2.30650904,22.4678461 2.25684662,22.1017706 L2.25,22 L2.25,19 C2.25,16.4495183 4.26014129,14.3685303 6.782572,14.2548879 L7,14.25 L17,14.25 Z M12,0.25 C15.1756373,0.25 17.75,2.82436269 17.75,6 C17.75,9.17563731 15.1756373,11.75 12,11.75 C8.82436269,11.75 6.25,9.17563731 6.25,6 C6.25,2.82436269 8.82436269,0.25 12,0.25 Z M12,1.75 C9.65278981,1.75 7.75,3.65278981 7.75,6 C7.75,8.34721019 9.65278981,10.25 12,10.25 C14.3472102,10.25 16.25,8.34721019 16.25,6 C16.25,3.65278981 14.3472102,1.75 12,1.75 Z" fill={props.fill ? props.fill : '#4A4D4E'}></path>
  </svg>
);

export const UserIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={UserIconSvg} {...props} />
);