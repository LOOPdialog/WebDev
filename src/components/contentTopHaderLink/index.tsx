import React from 'react';
import classes from './index.module.scss';

interface IContentTopHader {
  links: Array<{
    component: React.ReactNode;
  }>;
  children?: React.ReactNode;
}

const ContentTopHaderLink = ({ links }: IContentTopHader): React.ReactElement => {
  return (
    <div className={classes.contentTopHaderLinkWrapper}>
      {links.map((item, index) => {
        const ComponentL = item.component;
        return (<div className={classes.contentTopHaderWrapperItem} key={`${index}_CTH`}>{ComponentL}</div>);
      })

      }
    </div>
  );
};

export default ContentTopHaderLink;
