import Text from 'antd/lib/typography/Text';
import React from 'react';
import classes from './index.module.scss';

const RightContentWrapperItem = ({ children, title }: { children?: React.ReactNode; title?: string; }): React.ReactElement => {
  return (
    <div className={classes.rightContentWrapperItem}>
      {title && <Text className={classes.rightContentWrapperItemTitle}>{title}</Text>}
      {children}
    </div>
  );
};

export default RightContentWrapperItem;
