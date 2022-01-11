import React, { useState } from 'react';
import classes from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import NavMenuLeft from '../../components/navMenuLeft/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import { Typography } from 'antd';
import SecondSection from './sections/secondSection';

const OnboardingPage = () => {
  const linkText = [
    'Whatsapp',
    'E-Mail',
    'Google My Business',
    'Terminbuchung'
  ];
  const [isInfo, setIsInfo] = useState(true);
  const [step, setStep] = useState<number>(0);
  const links = [...linkText.map((item, index) => ({
    component: (<div className={`${classes.onboardingPageContentLink} ${(index === step && 'active') || ''}`} onClick={() => setStep(index)}>
      <span className={classes.linkIcon}></span>
      <Typography.Paragraph className={`${classes.text} bold`}>{item}</Typography.Paragraph>
    </div>)
  }))
  ];
  return (
    <ContentFixWidrh>
      <NavMenuLeft />
      <ContentTopHader
        links={links}
      />
      <div className={classes.mainWrapperOnboardingPage}>
        <>
          <FirstSection step={step} />
          {isInfo && <SecondSection setIsInfo={setIsInfo} />}
        </>
      </div>
    </ContentFixWidrh>
  );
};

export default OnboardingPage;
