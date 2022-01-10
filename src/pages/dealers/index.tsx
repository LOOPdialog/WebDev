import React, { useEffect, useState } from 'react';
import clasess from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';
import DealersDetailSection from './sections/dealersDetailSection';
import NavMenuLeft from '../../components/navMenuLeft/index';
import { useQuery } from '@apollo/client';
import COMPANY_SUCTOMERS from '../../gql/query/companyCustomers';

const DealersPage = (): React.ReactElement => {
  const [moreDetail, setMoreDetail] = useState({ open: false, id: null });
  const [variables, setVariables] = useState({});
  const { loading, error, data, refetch } = useQuery(COMPANY_SUCTOMERS, {
    variables
  });
  console.log('2', loading, error?.graphQLErrors, data);

  useEffect(() => {
    if (moreDetail.open) {
      refetch(variables); // eslint-disable-line @typescript-eslint/no-floating-promises
    }
  }, [refetch, variables, moreDetail.open]);

  const links = [
    {
      component: (<span>Händler</span>)
    }
  ];
  return (
    <ContentFixWidrh>
      <NavMenuLeft />
      <ContentTopHader
        links={links}
      />
      <div className={clasess.mainWrapperDealersPageWrapper}>

        <div className={`${clasess.mainWrapperDealersPage} ${moreDetail.open && clasess.w_60}`}>
          <FirstSection />
          <SecondSection onOpen={setMoreDetail} setVariables={setVariables} />
        </div>
        {moreDetail.open &&
          <div className={`${clasess.mainWrapperDealersDetailPage}`}>
            <DealersDetailSection
              deal={{
                id: `${data?.companyCustomers[0].customerType.id || ''}`,
                name: `${data?.companyCustomers[0].customerType.name || ''}`,
                standorte: data?.companyCustomers[0].opportunitiesCount,
                status: '',
                lastDate: ''
              }}
              person={{
                address: '',
                birthday: '',
                firma: '',
                fullname: '',
                shops: []
              }}
            />
          </div>
        }
      </div>
    </ContentFixWidrh>
  );
};

export default DealersPage;
