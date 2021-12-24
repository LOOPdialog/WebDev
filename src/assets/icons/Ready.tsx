import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const ReadySvg = (props: IPropsIcon) => (
  <svg
    width={props.width ? props.width : '16'}
    height={props.height ? props.height : '12'}
    className={props.className || ''}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5252 11.657L0.575195 6.70702L1.9892 5.29302L5.5267 8.82652L5.5252 8.82802L14.0102 0.343018L15.4242 1.75702L6.9392 10.243L5.5262 11.656L5.5252 11.657Z" fill={props.fill ? props.fill : '#1548D1'} />
  </svg>
);

export const BReadySvgIcon = (props: IPropsIcon) => (
  <Icon component={ReadySvg} {...props} />
);
