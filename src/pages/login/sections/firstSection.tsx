import React from 'react';
import classes from './fisrtSection.module.scss';
import LogoVodafone from '../../../assets/images/LogoVodafone.png';
import { Image } from 'antd';

const FirstSection = () => {
  return (
    <div className={classes.mainWrapperLoginPageFirst}>
      <div className={classes.LoginPageFirstContent}>
        <div className={classes.LPFContentImage}>
          <Image
            width={86}
            preview={false}
            src={LogoVodafone}
          />
        </div>
        <div className={classes.LPFContentText}>
          CONNECT
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
