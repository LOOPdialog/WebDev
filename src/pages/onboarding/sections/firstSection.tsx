import React, { useState } from 'react';
import classes from './firstSection.module.scss';
import RightContentWrapper from '../../../components/rightContentWrapper/index';
import { Button, Typography } from 'antd';
import Search from 'antd/lib/input/Search';

const FirstSection = ({ step }: { step: number }): React.ReactElement => {
  const [keyValue, setKeyValue] = useState('');
  const onSearch = () => {
    navigator?.clipboard?.readText && navigator.clipboard.readText()
      .then(text => {
        setKeyValue(text);
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
  };
  return (
    <RightContentWrapper title=''>
      <div className={classes.mainWrapperOnboardingPageFirst}>
        <div className={classes.onboardingPageFirstTitle}>
          <Typography.Title level={2}>Verknüpfen Sie Ihre WhatsApp Business Nummer</Typography.Title>
          <Typography.Paragraph className='small'>Folgen Sie dieser Anleitung Schritt für Schritt. Sobald Sie einen API-Key bekommen haben, kopieren Sie ihn in das Eingabefeld.</Typography.Paragraph>
        </div>
        <div className={classes.onboardingPageFirstContent}>
          {step === 0 &&
            <iframe src="https://hub.360dialog.com/lp/whatsapp/yhkzyzPA" ></iframe>}
        </div>
        <div className={classes.onboardingPageFirstFooter}>
          <div className={classes.text}><Typography.Paragraph className='bold mb-0'>API-Key</Typography.Paragraph></div>
          <div className={classes.input}><Search
            className={classes.search}
            value={keyValue}
            onChange={e => setKeyValue(e.target.value)}
            placeholder="Key hier einfügen"
            allowClear
            enterButton="Einfügen"
            size="large"
            onSearch={onSearch}
          /></div>
          <div className={classes.button}><Button disabled>Konto verknüpfen</Button></div>
        </div>
      </div>
    </RightContentWrapper>
  );
};

export default FirstSection;
