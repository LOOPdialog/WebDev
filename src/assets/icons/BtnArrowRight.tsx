import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const BtnArrowRightSvg = (props: IPropsIcon) => (
  <svg
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '14'}
    viewBox='0 0 24 14'
    fill={props.fill ? props.fill : 'currentColor'}
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.5 13.5L24 7L17.5 0.5L16.793 1.207L22.086 6.5L0 6.5V7.5L22.086 7.5L16.793 12.793L17.5 13.5Z'
      fill={props.fill ? props.fill : 'currentColor'}
    />
  </svg>
);

export const BtnArrowRightSvgIcon = (props: IPropsIcon) => (
  <Icon component={BtnArrowRightSvg} {...props} />
);
