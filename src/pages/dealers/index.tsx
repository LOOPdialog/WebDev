import React, { useState } from 'react';
import clasess from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';
import DealersDetailSection from './sections/dealersDetailSection';
import NavMenuLeft from '../../components/navMenuLeft/index';

const DealersPage = (): React.ReactElement => {
  const links = [
    {
      component: (<span>Händler</span>)
    }
  ];
  const [moreDetail, setMoreDetail] = useState(false);
  return (
    <ContentFixWidrh>
      <NavMenuLeft />
      <ContentTopHader
        links={links}
      />
      <div className={clasess.mainWrapperDealersPageWrapper}>

        <div className={`${clasess.mainWrapperDealersPage} ${moreDetail && clasess.w_60}`}>
          <FirstSection />
          <SecondSection onOpen={setMoreDetail} />
        </div>
        {moreDetail &&
          <div className={`${clasess.mainWrapperDealersDetailPage}`}>
            <DealersDetailSection />
          </div>
        }
      </div>
    </ContentFixWidrh>
  );
};

export default DealersPage;
