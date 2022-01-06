import React from 'react';
import { Form, FormInstance } from 'antd';
import { formRenderDataLoginPage } from '../../../helpers/Form/FormData';
import classes from './secondSection.module.scss';
import { FormSendUsMessage } from '../../../components/formSendUsMessage/index';
import Text from 'antd/lib/typography/Text';
import GET_MAIN from '../../../gql/query/getMain';
import { useQuery } from '@apollo/client';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../helpers/getNewToken';

const SecondSection = (): React.ReactElement => {
  const [form] = Form.useForm<FormInstance>();
  const { data: themed } = useQuery(GET_MAIN);

  const handleFormSubmit = (values: any): void => {
    const { password, email }: { password: string; email: string } = values;

    initializeApp(firebaseConfig);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        console.log(user, user.stsTokenManager.expirationTime);
        user?.accessToken &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          window.localStorage.setItem('token', user?.accessToken);
        user?.stsTokenManager?.refreshToken &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          window.localStorage.setItem('rToken', user?.stsTokenManager.refreshToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth?.currentUser?.getIdToken(true)
    .then(function (idToken) {
      console.log('idToken', idToken);
    }).catch(function (error) {
      console.log('EidToken', error);
    });
  return (
    <div className={classes.mainWrapperLoginPageSecond}>
      <div className={`${classes.LoginPageSecondContent} shadow-3`}>
        <div className={classes.LoginPageSecondContentText}>
          <Text>
            Login
          </Text>
        </div>
        <FormSendUsMessage
          btnText='Login'
          formRenderData={formRenderDataLoginPage}
          form={form}
          onSubmit={handleFormSubmit}
          btnClass={`${themed === 'vodafone' && classes.btnVodafone}`}
          filedBgColor
        />
        {/* <div className={classes.LoginPageSecondContentLink}>
          <Text>
            Passwort vergessen?
          </Text>
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
