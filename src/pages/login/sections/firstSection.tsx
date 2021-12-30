import React from 'react';
import classes from './fisrtSection.module.scss';
import LogoLoop from '../../../assets/images/LogoLoop.png';
import { Image, Typography } from 'antd';

const FirstSection = () => {
  return (
    <div className={classes.mainWrapperLoginPageFirst}>
      <div className={classes.LoginPageFirstContent}>
        <div className={classes.LPFContentImage}>
          <Image
            width={86}
            preview={false}
            src={LogoLoop}
          />
        </div>
        <div className={classes.LPFContentText}>
          <Typography.Title>
            LOOP
          </Typography.Title>
        </div>
      </div>
    </div >
  );
};

export default FirstSection;
