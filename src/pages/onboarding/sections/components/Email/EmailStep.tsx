import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { GmailIconSvg } from '../../../../../assets/icons/GmailIcon';
import { Office365IconSvg } from '../../../../../assets/icons/Office365Icon';
import { Email2IconSvg } from '../../../../../assets/icons/EmailIcon copy';
import { RightOutlined } from '@ant-design/icons';
import EmailStepAnbieterGoogle from './EmailStepAnbieterGoogle';
import EmailAnbieterHader from './EmailAnbieterHader';
import EmailStepAnbieterOffice from './EmailStepAnbieterOffice';
import EmailStepAnbieterAnderer from './EmailStepAnbieterAnderer';

const EmailStep = ({ classes }: { classes: { [key: string]: string } }): React.ReactElement => {
  const [emailSteps, setEmailSteps] = useState<null | number>(null);
  return (
    <div className={classes.mainWrapperOnboardingPageFirst}>
      <div className={classes.onboardingPageFirstTitle}>
        {(emailSteps === null) &&
          <><Typography.Title level={2}>Verknüpfen Sie Ihre WhatsApp Business Nummer</Typography.Title>
            <Typography.Paragraph className='small'>Folgen Sie dieser Anleitung Schritt für Schritt. Sobald Sie einen API-Key bekommen haben, kopieren Sie ihn in das Eingabefeld.</Typography.Paragraph></>
        }
        {emailSteps === 0 &&
          <EmailAnbieterHader classes={classes} nameFirst='Anbieter' nameSecond='Google Mail' clickFirst={() => setEmailSteps(null)} />
        }
        {emailSteps === 1 &&
          <EmailAnbieterHader classes={classes} nameFirst='Anbieter' nameSecond='Office 365' clickFirst={() => setEmailSteps(null)} />
        }
        {emailSteps === 2 &&
          <EmailAnbieterHader classes={classes} nameFirst='Anbieter' nameSecond='Anderer Anbieter' clickFirst={() => setEmailSteps(null)} />
        }
      </div>
      <div className={`${classes.onboardingPageFirstContent} ${classes.Email}`}>
        {(emailSteps === null) && <>
          <div className={classes.contentItemEmail}>
            <GmailIconSvg />
            <Typography.Paragraph className={classes.text}>Google Mail</Typography.Paragraph>
            <RightOutlined className={classes.iconNext} onClick={() => setEmailSteps(0)} />
          </div>
          <div className={classes.contentItemEmail}>
            <Office365IconSvg />
            <Typography.Paragraph className={classes.text}>Office365</Typography.Paragraph>
            <RightOutlined className={classes.iconNext} onClick={() => setEmailSteps(1)} />
          </div>
          <div className={classes.contentItemEmail}>
            <Email2IconSvg />
            <Typography.Paragraph className={classes.text}>Anderer Anbieter</Typography.Paragraph>
            <RightOutlined className={classes.iconNext} onClick={() => setEmailSteps(2)} />
          </div>
        </>}
        {emailSteps === 0 &&
          <EmailStepAnbieterGoogle classes={classes} />
        }
        {emailSteps === 1 &&
          <EmailStepAnbieterOffice classes={classes} />
        }
        {emailSteps === 2 &&
          <EmailStepAnbieterAnderer classes={classes} />
        }
      </div>
      <div className={classes.onboardingPageFirstFooter}>
        {(emailSteps === null) && <div className={classes.buttonNext}><Button disabled={emailSteps === null} onClick={() => setEmailSteps(null)} >Überspringen</Button></div>}
        {/* <div className={classes.button}><Button disabled>Weiter</Button></div> */}
      </div>
    </div>
  );
};

export default EmailStep;
