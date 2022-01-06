import Text from 'antd/lib/typography/Text';
import React from 'react';
import classes from './index.module.scss';
// import { MoreVerticalIconSvg } from '../../assets/icons/MoreVerticalIcon';
import { InfoCircleSvg } from '../../assets/icons/InfoCircleIcon';
import { TrendUpIconSvg } from '../../assets/icons/TrendUpIcon';

export type moreProcentClass = null | 'green' | 'gray' | 'red';

interface ICardDealFactItem {
  title: string;
  bigNumber: number;
  bigNumberText: string;
  moreProcent: string;
  moreProcentClass?: moreProcentClass;
  link?: string;
}

const CardDealFactItem = (props: ICardDealFactItem): React.ReactElement => {
  const { title, bigNumber, bigNumberText, moreProcent, moreProcentClass = 'gray' } = props;
  const moreProcentClassIcon = moreProcentClass === 'green' ? '#23BE77' : moreProcentClass === 'red' ? 'rgb(190, 35, 86)' : '#4A4D4E';
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
                className={`${classes.ProcentUpContentIcon}`}
                fill={`${moreProcentClassIcon}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDealFactItem;
