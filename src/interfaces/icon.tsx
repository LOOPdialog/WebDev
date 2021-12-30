import { CSSProperties } from 'react';

export interface IPropsIcon {
  className?: string;
  fill?: string;
  height?: number | string;
  style?: CSSProperties;
  width?: number | string;
  onClick?: () => void;
}
