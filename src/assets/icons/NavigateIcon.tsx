import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const NavigateIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M1.67893524,10.7958808 L1.57958671,10.8517358 C1.05458502,11.1986816 1.17284963,12.0399789 1.81809828,12.2012911 L9.802,14.197 L11.7987089,22.1819017 C11.96951,22.8651062 12.9026475,22.957505 13.2041192,22.3210648 L22.6778034,2.32106476 C22.979484,1.68418336 22.3158166,1.02051596 21.6789352,1.32219662 L1.67893524,10.7958808 Z M20.423,3.576 L12.745,19.785 L11.1486595,13.3970456 L11.1169451,13.2992025 C11.0281075,13.0781072 10.838079,12.9101217 10.6029544,12.8513405 L4.214,11.254 L20.423,3.576 Z" fill={props.fill ? props.fill : '#4A4D4E'}></path>
  </svg>
);

export const NavigateIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={NavigateIconSvg} {...props} />
);
