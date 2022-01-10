import React, { useEffect, useMemo, useState } from 'react';
import { Form, FormInstance } from 'antd';
import { formRenderDataLoginPage } from '../../../helpers/Form/FormData';
import classes from './secondSection.module.scss';
import { FormSendUsMessage } from '../../../components/formSendUsMessage/index';
import Text from 'antd/lib/typography/Text';
import GET_MAIN from '../../../gql/query/getMain';
import { useQuery } from '@apollo/client';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../helpers/getNewToken';
import { EFormDataKeywords, getValidatorFunction, setRulesForm } from '../../../helpers/Form/Form';

const SecondSection = (): React.ReactElement => {
  const [form] = Form.useForm<FormInstance>();
  const defaultErr = { username: '', password: '' };
  const [errorsRes, setErrorsRes] = useState(defaultErr);
  const { data: themed } = useQuery(GET_MAIN);
  const formRenderDataL = useMemo(() => {
    console.log(errorsRes);
    return setRulesForm(formRenderDataLoginPage, {
      email: getValidatorFunction(errorsRes.username, [EFormDataKeywords.EMAIL, EFormDataKeywords.UNKNOW, 'user', 'name']),
      password: getValidatorFunction(errorsRes.password, [EFormDataKeywords.PASSWORD, EFormDataKeywords.UNKNOW])
    });
  }, [errorsRes]);

  useEffect(() => {
    if (errorsRes.username !== '' || errorsRes.password !== '') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      form.validateFields(['email', 'password']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorsRes]);

  const formKeyup = () => {
    if (errorsRes.username || errorsRes.password) {
      setErrorsRes(defaultErr);
    }
  };

  const handleFormSubmit = (values: any): void => {
    const { password, email }: { password: string; email: string } = values;

    initializeApp(firebaseConfig);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        user?.accessToken &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          window.localStorage.setItem('token', user?.accessToken);
        user?.stsTokenManager?.refreshToken &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          window.localStorage.setItem('rToken', user?.stsTokenManager.refreshToken);
        (user?.accessToken || user?.stsTokenManager?.refreshToken) &&
          window.location.reload();
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          setErrorsRes({ ...errorsRes, password: 'Invalid password' });
        } else if (errorCode === 'auth/user-not-found') {
          setErrorsRes({ ...errorsRes, username: 'User not found' });
        } else if (errorCode === 'auth/user-disabled') {
          setErrorsRes({ ...errorsRes, username: 'User disabled' });
        } else if (errorCode === 'auth/too-many-requests') {
          setErrorsRes({ password: 'Too many requests, try later', username: 'Too many requests, try later' });
        } else {
          setErrorsRes({ password: 'Unknow error', username: 'Unknow error' });
          console.error('Unknow error');
        }
        console.log(errorCode, errorMessage);
      });
  };

  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // auth?.currentUser?.getIdToken(true)
  //   .then(function (idToken) {
  //     console.log('idToken', idToken);
  //   }).catch(function (error) {
  //     console.log('EidToken', error);
  //   });
  return (
    <div className={classes.mainWrapperLoginPageSecond}>
      <div onKeyUp={formKeyup} className={`${classes.LoginPageSecondContent} shadow-3`}>
        <div className={classes.LoginPageSecondContentText}>
          <Text>
            Login
          </Text>
        </div>
        <FormSendUsMessage
          btnText='Login'
          formRenderData={formRenderDataL}
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
