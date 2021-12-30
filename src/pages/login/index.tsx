import React, { ReactNode } from 'react';
import classes from './index.module.scss';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';
import { useQuery } from '@apollo/client';
import GET_MAIN from '../../gql/query/getMain';

interface ILoginPage {
  children?: ReactNode;
}

const LoginPage = (_props: ILoginPage): React.ReactElement => {
  const { data: themed } = useQuery(GET_MAIN);
  return (
    <div className={`${classes.mainWrapperLoginPage} ${themed === 'vodafone' && classes.vodafone}`}>
      <div className={classes.mainWrapperLoginPageBg}>
        <FirstSection />
        <SecondSection />
      </div>
    </div>
  );
};

export default LoginPage;
