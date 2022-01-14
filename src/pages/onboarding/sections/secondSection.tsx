import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { StepsInfo } from './data/dataSecondInfo';
import classes from './secondSection.module.scss';

interface ISecondSection extends StepsInfo {
  setIsInfo: Dispatch<SetStateAction<boolean>>;
}

const SecondSection = ({ setIsInfo, headerTitle, itemParagraph }: ISecondSection): React.ReactElement => {
  return (
    <div className={classes.mainWrapperOnboardingPageSecond}>
      <div className={classes.OnboardingPageSecondMenu}>
        <div className={classes.backIcon} onClick={() => setIsInfo(false)}>
          <RightOutlined />
        </div>
        <div className={classes.infoIcon}>
          <QuestionCircleOutlined />
        </div>
      </div>
      <div className={classes.OnboardingPageSecondContent}>
        <div className={classes.header}><Typography.Title level={2}>{headerTitle}</Typography.Title></div>
        {
          itemParagraph.map((item, index) => (
            <div key={`${index}`}>
              <div className={classes.title}>
                <Typography.Paragraph className='bold small-size'>{item.title}</Typography.Paragraph>
              </div>
              <div className={classes.text}>
                <Typography.Paragraph>{item.text}</Typography.Paragraph>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SecondSection;
