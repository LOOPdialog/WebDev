import Text from 'antd/lib/typography/Text';
import React from 'react';
import classes from './index.module.scss';
// import { MoreVerticalIconSvg } from '../../assets/icons/MoreVerticalIcon';
import { InfoCircleSvg } from '../../assets/icons/InfoCircleIcon';
import { TrendUpIconSvg } from '../../assets/icons/TrendUpIcon';

interface ICardDealFactItem {
  title: string;
  bigNumber: number;
  bigNumberText: string;
  moreProcent: string;
  moreProcentClass?: 'green' | 'gray';
}

const CardDealFactItem = (props: ICardDealFactItem): React.ReactElement => {
  const { title, bigNumber, bigNumberText, moreProcent, moreProcentClass = 'gray' } = props;
  return (
    <div className={classes.cardDealFactItem}>
      <div className={classes.cardDealFactItemContent}>
        <div className={classes.cardDealFactItemContentHeader}>
          <div className={classes.cardDealFactItemContentHeaderText}>
            <Text>{title}</Text>
            <InfoCircleSvg
              className={classes.cardDealFactItemContentHeaderTextInfo}
              width={18}
              height={18}
            />
          </div>
          <div className={classes.cardDealFactItemContentMenu}>
            {/* <MoreVerticalIconSvg /> */}
          </div>
        </div>
        <div className={classes.cardDealFactItemContentFooter}>
          <div className={classes.cardDealFactItemContentFooterBigNumber}>
            <Text>{bigNumber}</Text>
          </div>
          <div className={classes.cardDealFactItemContentFooterBigNumberText}>
            <Text>{bigNumberText}</Text>
          </div>
          <div className={`${classes.cardDealFactItemContentFooterProcentUp} ${moreProcentClass}`}>
            <div className={`${classes.cardDealFactItemContentFooterProcentUpContent} ${moreProcentClass}`}>
              <Text className={classes.ProcentUpContentText}>{moreProcent}</Text>
              <TrendUpIconSvg
                className={classes.ProcentUpContentIcon}
                fill={`${moreProcentClass === 'green' ? '#23BE77' : '#4A4D4E'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDealFactItem;
