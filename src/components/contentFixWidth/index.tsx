import React from 'react';
import classes from './index.module.scss';

interface IContentFixWidrh {
  children?: React.ReactNode;
}

const ContentFixWidrh = ({ children }: IContentFixWidrh): React.ReactElement => {
  return (
    <div className={classes.widthWrapper}>
      <div className={classes.widthWrapperContent}>
        {children}
      </div>
    </div>
  );
};

export default ContentFixWidrh;
