import React from 'react';
import classes from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import NavMenuLeft from '../../components/navMenuLeft/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';

const AnalyticsPage = (): React.ReactElement => {
  const links = [
    {
      component: (<span>Auswertungen</span>)
    }
  ];
  return (
    <ContentFixWidrh>
      <NavMenuLeft />
      <ContentTopHader
        links={links}
      />
      <div className={classes.mainWrapperAnalyticsPageWrapper}>
        <FirstSection />
        <SecondSection />
      </div>
    </ContentFixWidrh>
  );
};

export default AnalyticsPage;
