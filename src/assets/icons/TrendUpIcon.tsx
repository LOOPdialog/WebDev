import React from 'react';
import Icon from '@ant-design/icons';
import { IPropsIcon } from '../../interfaces/icon';

export const TrendUpIconSvg = (props: IPropsIcon) => (
  <svg
    className={props.className || ''}
    width={props.width ? props.width : '24'}
    height={props.height ? props.height : '24'}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8989542,6.25684662 L17.0007248,6.25 L21,6.25 L21.0694695,6.25317463 L21.0694695,6.25317463 L21.171367,6.26973472 L21.171367,6.26973472 L21.2392836,6.28898031 L21.2392836,6.28898031 L21.2981386,6.31160159 L21.2981386,6.31160159 L21.3690453,6.34686081 L21.3690453,6.34686081 L21.4514416,6.40096775 L21.4514416,6.40096775 L21.5315788,6.47091921 L21.5315788,6.47091921 C21.5682451,6.50758489 21.601252,6.54854937 21.6293508,6.59177382 L21.6813839,6.68611841 L21.6813839,6.68611841 L21.7177252,6.78184446 L21.7177252,6.78184446 C21.7290814,6.81893395 21.7377062,6.85807689 21.7431534,6.89822944 L21.75,7 L21.75,11.0749779 C21.75,11.4891914 21.4142136,11.8249779 21,11.8249779 C20.6203042,11.8249779 20.306509,11.542824 20.2568466,11.1767484 L20.25,11.0749779 L20.2499724,8.81 L14.5303301,14.5303301 C14.3835266,14.6771335 14.1837002,14.7554221 13.9791474,14.7497183 L13.8767008,14.7397954 L8.207,13.794 L3.46852129,17.5856516 C3.17447906,17.8208854 2.75769069,17.7989306 2.489933,17.5499846 L2.41434839,17.4685213 C2.17911461,17.1744791 2.20106942,16.7576907 2.45001539,16.489933 L2.53147871,16.4143484 L7.53147871,12.4143484 C7.67015685,12.3034059 7.84270932,12.2459929 8.01802624,12.2502123 L8.12329924,12.2602046 L13.742,13.196 L19.1879724,7.75 L17.0007248,7.75 C16.621029,7.75 16.3072338,7.46784612 16.2575714,7.10177056 L16.2507248,7 C16.2507248,6.62030423 16.5328787,6.30650904 16.8989542,6.25684662 Z" fill={props.fill ? props.fill : '#A4A6A6'}></path>
  </svg>
);

export const TrendUpIconSvgIcon = (props: IPropsIcon) => (
  <Icon component={TrendUpIconSvg} {...props} />
);
