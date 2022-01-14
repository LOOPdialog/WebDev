import React from 'react';
import classes from './firstSection.module.scss';
import RightContentWrapper from '../../../components/rightContentWrapper/index';
import WhatsappStep from './components/WhatsappStep';
import EmailStep from './components/Email/EmailStep';

const FirstSection = ({ step }: { step: number }): React.ReactElement => {
  return (
    <RightContentWrapper title=''>
      {step === 0 &&
        <WhatsappStep classes={classes} />
      }
      {step === 1 &&
        <EmailStep classes={classes} />
      }
    </RightContentWrapper>
  );
};

export default FirstSection;
