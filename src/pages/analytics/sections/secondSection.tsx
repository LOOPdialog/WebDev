import React from 'react';
import classes from './secondSection.module.scss';
import RightContentWrapper from '../../../components/rightContentWrapper/index';

const SecondSection = (): React.ReactElement => {
  return (
    <RightContentWrapper title='Statistiken'>
    <div className={classes.mainWrapperAnalyticsPageSecond}>
      seond
    </div>
  </RightContentWrapper>
  );
};

export default SecondSection;
