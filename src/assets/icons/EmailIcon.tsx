import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const EmailIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" >
    <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M4.99997057,10.374 L4.99997057,15.5 C4.99997057,16.5543618 5.81587518,17.4181651 6.85073748,17.4945143 L7,17.5 L17,17.5 C18.0543618,17.5 18.9181651,16.6841222 18.9945143,15.6492623 L19,15.5 L19,10.375 L13.5,14.5 L13.3398127,14.6107266 C12.577391,15.0951557 11.6154986,15.127451 10.8264808,14.7076125 L10.6601873,14.6107266 L10.5,14.5 L4.99997057,10.374 Z M17,6.5 L7,6.5 C5.9456382,6.5 5.08180807,7.31587779 5.00545649,8.35073766 L4.99997057,8.5 L4.99997057,9.124 L11.1,13.7 L11.2264452,13.7852071 C11.6542285,14.0429586 12.1801557,14.0687337 12.6275678,13.8625325 L12.7735548,13.7852071 L12.9,13.7 L19,9.125 L19,8.5 C19,7.4456382 18.1841222,6.58183488 17.1492623,6.50548574 L17,6.5 Z" fill={props.fill ? props.fill : '#4A4D4E'}></path>
  </svg>
);

export const EmailIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={EmailIconSvg} {...props} />
);
