import React from 'react';
import { Form, FormInstance } from 'antd';
import { formRenderDataLoginPage } from '../../../helpers/Form/FormData';
import classes from './secondSection.module.scss';
import { FormSendUsMessage } from '../../../components/formSendUsMessage/index';
import Text from 'antd/lib/typography/Text';

const SecondSection = (): React.ReactElement => {
  const [form] = Form.useForm<FormInstance>();

  const handleFormSubmit = (_values: any): void => {
    // setFlagIsSend(true);
    // const { password, username } = values;
  };
  return (
    <div className={classes.mainWrapperLoginPageSecond}>
      <div className={classes.LoginPageSecondContent}>
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
          filedBgColor
        />
        <div className={classes.LoginPageSecondContentLink}>
          <Text>
            Passwort vergessen?
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
