import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const FacebookIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24" version="1.1"
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,17.5188703 20.2744112,22.1675828 15.2010458,23.5683251 L15.2,16.4 L18.05,16.4 L19,12.6 L15.2,12.6 L15.2,9.75 C15.2,9.22532949 15.6253295,8.8 16.15,8.8 L19,8.8 L19,5 L16.15,5 C13.5266474,5 11.4,7.12664744 11.4,9.75 L11.4,12.6 L8.55,12.6 L8.55,16.4 L11.4,16.4 L11.4008681,23.9853037 C5.05179356,23.6731205 0,18.426515 0,12 C0,5.372583 5.372583,0 12,0 Z" fill={props.fill ? props.fill : '#3B5998'}></path>
  </svg>
);

export const FacebookIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={FacebookIconSvg} {...props} />
);
