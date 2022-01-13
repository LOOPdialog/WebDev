import React, { useEffect, useState } from 'react';
import clasess from './index.module.scss';
import ContentFixWidrh from '../../components/contentFixWidth/index';
import ContentTopHader from '../../components/contentTopHader/index';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';
import DealersDetailSection from './sections/dealersDetailSection';
import NavMenuLeft from '../../components/navMenuLeft/index';
import { useQuery } from '@apollo/client';
import COMPANY_CUSTOMERS_USER_BY_ID from '../../gql/query/companyCustomersUserbyId';

const DealersPage = (): React.ReactElement => {
  const [moreDetail, setMoreDetail] = useState({ open: false, id: null });
  const [variables, setVariables] = useState({ id: null });
  const { loading, error, data, refetch } = useQuery(COMPANY_CUSTOMERS_USER_BY_ID, {
    variables: {
      user_id: variables.id,
      company_id: process.env.REACT_APP_GRAPHQL_COMPANY_ID || ''
    }
  });
  console.log('2', loading, error?.graphQLErrors, data);

  useEffect(() => {
    if (moreDetail.open) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      refetch({
        user_id: variables.id
      });
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
                id: `${data?.customerDetails?.id || ''}`,
                name: `${data?.customerDetails?.profile?.firstName || ''}`,
                standorte: data?.customerDetails?.opportunitiesCount,
                status: data?.customerDetails?.internalNotes?.read || 'Unknow',
                lastDate: data?.customerDetails?.birthday || null
              }}
              person={{
                address: `${data?.customerDetails?.address?.street || ''}\
                ${data?.customerDetails?.address?.streetNumber || ''}\
                ${data?.customerDetails?.address?.zimCode || ''}\
                ${data?.customerDetails?.address?.city || ''}\
                `,
                birthday: data?.customerDetails?.birthday || null,
                firma: data?.customerDetails?.internalNotes?.title || '',
                fullname: `${data?.customerDetails?.profile?.lastName || ''}`,
                shops: (data?.customerDetails?.opportunities?.customer && data?.customerDetails?.opportunities.map(item => ({
                  name: item?.profile?.firstName,
                  address: `${item?.street || ''}\
                  ${item?.streetNumber || ''}\
                  ${item?.zimCode || ''}\
                  ${item?.city || ''}\
                  `
                }))) || []
              }}
            />
          </div>
        }
      </div>
    </ContentFixWidrh>
  );
};

export default DealersPage;
