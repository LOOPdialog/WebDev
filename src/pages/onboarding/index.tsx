import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import NavMenuLeft from '../../components/navMenuLeft/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import { Typography } from 'antd';
import SecondSection from './sections/secondSection';
import { StepsInfo, WhatsaapStepInfo, EmailStepInfo } from './sections/data/dataSecondInfo';

const OnboardingPage = () => {
  const linkText = [
    'Whatsapp',
    'E-Mail',
    'Google My Business',
    'Terminbuchung'
  ];
  const [isInfo, setIsInfo] = useState(true);
  const [secondInfo, setSecondInfo] = useState<StepsInfo>({ headerTitle: '', itemParagraph: [] });
  const [step, setStep] = useState<number>(0);
  const links = [...linkText.map((item, index) => ({
    component: (<div className={`${classes.onboardingPageContentLink} ${(index === step && 'active') || ''}`} onClick={() => setStep(index)}>
      <span className={classes.linkIcon}></span>
      <Typography.Paragraph className={`${classes.text} bold`}>{item}</Typography.Paragraph>
    </div>)
  }))
  ];
  useEffect(() => {
    switch (step) {
      case 0:
        setSecondInfo(WhatsaapStepInfo);
        break;
      case 1:
        setSecondInfo(EmailStepInfo);
        break;
    }
  }, [step]);
  return (
    <ContentFixWidrh>
      <NavMenuLeft />
      <ContentTopHader
        links={links}
      />
      <div className={classes.mainWrapperOnboardingPage}>
        <>
          <FirstSection step={step} />
          {isInfo && <SecondSection setIsInfo={setIsInfo} headerTitle={secondInfo.headerTitle} itemParagraph={secondInfo.itemParagraph} />}
        </>
      </div>
    </ContentFixWidrh>
  );
};

export default OnboardingPage;
