import React from 'react';
import CardDealFactItem, { moreProcentClass } from '../../../components/cardDealFactItem/index';
import classes from './firstSection.module.scss';
import RightContentWrapper from '../../../components/rightContentWrapper/index';

const FirstSection = (): React.ReactElement => {
  const arrData:
    Array<{
      title: string;
      bigNumber: number;
      bigNumberText: string;
      moreProcent: string;
      moreProcentClass: moreProcentClass;
    }> = [
      {
        title: 'Händler',
        bigNumber: 17,
        bigNumberText: '',
        moreProcent: '+2%',
        moreProcentClass: 'gray'
      },
      {
        title: 'Offene Vorgänge',
        bigNumber: 18,
        bigNumberText: '',
        moreProcent: '+3%',
        moreProcentClass: 'green'
      },
      {
        title: 'Neue Kontakte',
        bigNumber: 7,
        bigNumberText: '',
        moreProcent: '-2%',
        moreProcentClass: 'red'
      },
      {
        title: 'Reaktionszeit',
        bigNumber: 32,
        bigNumberText: 'Min',
        moreProcent: '-24%',
        moreProcentClass: 'green'
      },
      {
        title: 'Vorgangsdauer',
        bigNumber: 17,
        bigNumberText: 'Tage',
        moreProcent: '-4%',
        moreProcentClass: 'gray'
      }
    ];
  return (
    <RightContentWrapper title='Kennzahlen'>
      <div className={classes.mainWrapperAnalyticsPageFirst}>
        {
          arrData.map((item, index) => (
            <CardDealFactItem
              key={`${index}_CardDealFactItem`}
              title={item.title}
              bigNumber={item.bigNumber}
              bigNumberText={item.bigNumberText}
              moreProcent={item.moreProcent}
              moreProcentClass={item.moreProcentClass}
            />
          ))
        }
      </div>
    </RightContentWrapper>
  );
};

export default FirstSection;
