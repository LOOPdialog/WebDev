import React from 'react';
import classes from './index.module.scss';

interface IContentTopHader {
  links: Array<{
    component: React.ReactNode;
  }>;
  children?: React.ReactNode;
}

const ContentTopHader = ({ links }: IContentTopHader): React.ReactElement => {
  return (
    <div className={classes.contentTopHaderWrapper}>
      {links.map((item, index) => {
        const ComponentL = item.component;
        return (<div className={classes.contentTopHaderWrapperItem} key={`${index}_CTH`}>{ComponentL}</div>);
      })

      }
    </div>
  );
};

export default ContentTopHader;
