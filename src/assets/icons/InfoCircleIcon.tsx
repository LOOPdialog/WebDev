import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const InfoCircleSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" >
    <path d="M12,0.25 C18.4893458,0.25 23.75,5.51065419 23.75,12 C23.75,18.4893458 18.4893458,23.75 12,23.75 C5.51065419,23.75 0.25,18.4893458 0.25,12 C0.25,5.51065419 5.51065419,0.25 12,0.25 Z M12,1.75 C6.33908131,1.75 1.75,6.33908131 1.75,12 C1.75,17.6609187 6.33908131,22.25 12,22.25 C17.6609187,22.25 22.25,17.6609187 22.25,12 C22.25,6.33908131 17.6609187,1.75 12,1.75 Z M12,10.25 C12.3796958,10.25 12.693491,10.5321539 12.7431534,10.8982294 L12.75,11 L12.75,17 C12.75,17.4142136 12.4142136,17.75 12,17.75 C11.6203042,17.75 11.306509,17.4678461 11.2568466,17.1017706 L11.25,17 L11.25,11 C11.25,10.5857864 11.5857864,10.25 12,10.25 Z M12,7 C12.4142136,7 12.75,7.33578644 12.75,7.75 C12.75,8.16421356 12.4142136,8.5 12,8.5 C11.5857864,8.5 11.25,8.16421356 11.25,7.75 C11.25,7.33578644 11.5857864,7 12,7 Z" fill={props.fill ? props.fill : '#A4A6A6'}></path>
  </svg>
);

export const InfoCircleSvgIcon = (props: IPropsIcon) => (
  <Icon component={InfoCircleSvg} {...props} />
);
