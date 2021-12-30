import React from 'react';
import classes from './firstSection.module.scss';
import CardDealFactItem from '../../../components/cardDealFactItem/index';
import Text from 'antd/lib/typography/Text';

const FirstSection = (): React.ReactElement => {
  return (
    <div className={classes.mainWrapperDealersPageFirst}>
      <div className={classes.mainWrapperDealersPageFirstContent}>
        <Text className={`${classes.DealersPageFirstTitle} smallTextBold`}>Kennzahlen</Text>
        <div className={classes.DealersPageFirstItems}>
          <CardDealFactItem
            title='Teilnahmequote'
            bigNumber={24}
            bigNumberText='%'
            moreProcent='+8%'
            moreProcentClass='green'
          />
          <CardDealFactItem
            title='Teammitglieder'
            bigNumber={3}
            bigNumberText='pro Team'
            moreProcent='+2%'
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
