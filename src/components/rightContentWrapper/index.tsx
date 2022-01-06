import React from 'react';
import classes from './index.module.scss';
import RightContentWrapperItem from './rightContentWrapperItem';

const RightContentWrapper = ({ children, title }: { children?: React.ReactNode; title?: string; }): React.ReactElement => {
  return (
    <div className={classes.rightContentWrapper}>
      <RightContentWrapperItem title={title}>
        {children}
      </RightContentWrapperItem>
    </div>
  );
};

export default RightContentWrapper;
