import React, { useEffect, useMemo, useState } from 'react';
import { formDataOnboardingEmailStepAnbieterAndererPage } from '../../../../../helpers/Form/FormData';
import { FormSendUsMessage } from '../../../../../components/formSendUsMessage/index';
import { getValidatorFunction, EFormDataKeywords, setRulesForm } from '../../../../../helpers/Form/Form';
import { Form, FormInstance } from 'antd';
import { useQuery } from '@apollo/client';
import GET_MAIN from '../../../../../gql/query/getMain';

const EmailStepAnbieterAnderer = ({ classes }: { classes: { [key: string]: string } }): React.ReactElement => {
  const [form] = Form.useForm<FormInstance>();
  const defaultErr = { username: '', password: '' };
  const [errorsRes, setErrorsRes] = useState(defaultErr);
  const { data: themed } = useQuery(GET_MAIN);
  const formRenderDataL = useMemo(() => {
    return setRulesForm(formDataOnboardingEmailStepAnbieterAndererPage, {
      email: getValidatorFunction(errorsRes.username, [EFormDataKeywords.EMAIL, EFormDataKeywords.UNKNOW, 'user', 'name']),
      password: getValidatorFunction(errorsRes.password, [EFormDataKeywords.PASSWORD, EFormDataKeywords.UNKNOW])
    });
  }, [errorsRes]);

  useEffect(() => {
    if (errorsRes.username !== '' || errorsRes.password !== '') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      form.validateFields(['email', 'password']);
    }
  }, [errorsRes, form]);

  const formKeyup = () => {
    if (errorsRes.username || errorsRes.password) {
      setErrorsRes(defaultErr);
    }
  };

  const handleFormSubmit = (_values: any): void => {
    //
  };

  return (
    <div className={classes.EmailStepAnbieterOffice}>
      <div className={classes.EmailStepAnbieterOfficeIframe} onKeyUp={formKeyup}>
        <FormSendUsMessage
          btnText='Konto verknüpfen'
          formRenderData={formRenderDataL}
          form={form}
          onSubmit={handleFormSubmit}
          btnClass={`${themed === 'vodafone' && classes.btnVodafone} ${classes.btn}`}
          filedBgColor
        />
      </div>
    </div>
  );
};

export default EmailStepAnbieterAnderer;
