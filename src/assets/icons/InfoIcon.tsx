import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const InfoIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '20'}
    height={props.height ? props.height : '20'}
    style={props.style}
    onClick={props.onClick}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99 20C4.46846 19.9945 -0.00367557 15.5149 2.26684e-06 9.99334C0.00368465 4.47179 4.48179 -0.00183754 10.0033 5.66223e-07C15.5249 0.00183981 20 4.47845 20 10C19.9967 15.5254 15.5154 20.0022 9.99 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.6845 14.444 2.10977 10.0425 2.08599C5.64111 2.06245 2.04732 5.59876 2 10V10.172ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill={props.fill ? props.fill : '#A4A6A6'} />
  </svg>
);

export const InfoIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={InfoIconSvg} {...props} />
);
