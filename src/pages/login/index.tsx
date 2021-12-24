import React, { ReactNode } from 'react';
import classes from './index.module.scss';
import FirstSection from './sections/firstSection';
import SecondSection from './sections/secondSection';

interface ILoginPage {
  children?: ReactNode;
}

const LoginPage = (_props: ILoginPage): React.ReactElement => {
  return (
    <div className={classes.mainWrapperLoginPage}>
      <div className={classes.mainWrapperLoginPageBg}>
        <FirstSection />
        <SecondSection />
      </div>
    </div>
  );
};

export default LoginPage;
