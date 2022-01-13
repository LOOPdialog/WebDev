import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import classes from './secondSection.module.scss';

const SecondSection = ({ setIsInfo }: { setIsInfo: Dispatch<SetStateAction<boolean>> }): React.ReactElement => {
  return (
    <div className={classes.mainWrapperOnboardingPageSecond}>
      <div className={classes.OnboardingPageSecondMenu}>
        <div className={classes.backIcon} onClick={() => setIsInfo(false)}>
          <RightOutlined />
        </div>
        <div className={classes.infoIcon}>
          <QuestionCircleOutlined />
        </div>
      </div>
      <div className={classes.OnboardingPageSecondContent}>
        <div className={classes.header}><Typography.Title level={2}>Anleitung</Typography.Title></div>
        <div className={classes.title}><Typography.Paragraph className='bold small-size'>WhatsApp Business API erstellen</Typography.Paragraph></div>
        <div className={classes.text}><Typography.Paragraph>Folgen Sie der Anleitung zum erstellen eines WhatsApp Business API Kontos bei unserem Partner 360 Dialog. Sie können eine bestehende Nummer nutzen oder eine Neue erstellen.</Typography.Paragraph></div>
        <div className={classes.title}><Typography.Paragraph className='bold small-size'>Schritt 2</Typography.Paragraph></div>
        <div className={classes.text}><Typography.Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</Typography.Paragraph></div>
        <div className={classes.title}><Typography.Paragraph className='bold small-size'>Schritt 3</Typography.Paragraph></div>
        <div className={classes.text}><Typography.Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</Typography.Paragraph></div>
      </div>
    </div>
  );
};

export default SecondSection;
