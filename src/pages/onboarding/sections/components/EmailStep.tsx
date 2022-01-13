import React from 'react';
import { Button, Typography } from 'antd';
import { GmailIconSvg } from '../../../../assets/icons/GmailIcon';
import { Office365IconSvg } from '../../../../assets/icons/Office365Icon';
import { Email2IconSvg } from '../../../../assets/icons/EmailIcon copy';
import { RightOutlined } from '@ant-design/icons';
const EmailStep = ({ classes }: { classes: { [key: string]: string } }) => {
  return (
    <div className={classes.mainWrapperOnboardingPageFirst}>
      <div className={classes.onboardingPageFirstTitle}>
        <Typography.Title level={2}>Verknüpfen Sie Ihre WhatsApp Business Nummer</Typography.Title>
        <Typography.Paragraph className='small'>Folgen Sie dieser Anleitung Schritt für Schritt. Sobald Sie einen API-Key bekommen haben, kopieren Sie ihn in das Eingabefeld.</Typography.Paragraph>
      </div>
      <div className={`${classes.onboardingPageFirstContent} ${classes.Email}`}>
        <div className={classes.contentItemEmail}>
          <GmailIconSvg />
          <Typography.Paragraph className={classes.text}>Google Mail</Typography.Paragraph>
          <RightOutlined className={classes.iconNext}/>
        </div>
        <div className={classes.contentItemEmail}>
          <Office365IconSvg />
          <Typography.Paragraph className={classes.text}>Office365</Typography.Paragraph>
          <RightOutlined className={classes.iconNext}/>
        </div>
        <div className={classes.contentItemEmail}>
          <Email2IconSvg />
          <Typography.Paragraph className={classes.text}>Anderer Anbieter</Typography.Paragraph>
          <RightOutlined className={classes.iconNext}/>
        </div>
      </div>
      <div className={classes.onboardingPageFirstFooter}>
        <div className={classes.buttonNext}><Button>Überspringen</Button></div>
        {/* <div className={classes.button}><Button disabled>Weiter</Button></div> */}
      </div>
    </div>
  );
};

export default EmailStep;
