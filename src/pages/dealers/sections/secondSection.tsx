import React from 'react';
import classes from './secondSection.module.scss';
import Text from 'antd/lib/typography/Text';
import TableDeal from '../../../components/tableDeal/index';

const FirstSection = ({ onOpen }: any): React.ReactElement => {
  return (
    <div className={classes.mainWrapperDealersPageSecond}>
      <div className={classes.mainWrapperDealersPageSecond}>
        <Text className={classes.DealersPageSecondTitle}>Händlerliste</Text>
        <TableDeal onOpen={onOpen}/>
      </div>
    </div>
  );
};

export default FirstSection;
