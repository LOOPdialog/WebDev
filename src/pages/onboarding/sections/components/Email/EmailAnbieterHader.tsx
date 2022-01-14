import { Typography } from 'antd';
import React from 'react';
import { RightOutlined } from '@ant-design/icons';

const EmailAnbieterHader = ({ classes, nameFirst, nameSecond, clickFirst }:
  {
    classes: { [key: string]: string };
    nameFirst?: string;
    nameSecond?: string;
    clickFirst?: () => void;
  }): React.ReactElement => {
  return (
    <div className={classes.EmailAnbieterHader}>
      <Typography.Title level={3} className={classes.first} onClick={clickFirst}>{nameFirst || ''}</Typography.Title>
      <RightOutlined className={classes.icon} />
      <Typography.Title level={3} className={`${classes.second}`}>{nameSecond || ''}</Typography.Title>
    </div>
  );
};

export default EmailAnbieterHader;
