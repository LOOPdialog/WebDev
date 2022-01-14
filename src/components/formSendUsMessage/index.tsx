import React from 'react';
import { Form, Input, FormInstance } from 'antd';
import { FormBtn } from '../buttonForm';
import { InfoIconSvg } from '../../assets/icons/InfoIcon';
import { ReadySvg } from '../../assets/icons/Ready';
import classes from './formSendUsMessage.module.scss';

export interface IFormRenderData {
  placeholder: string;
  type: string;
  rows?: number;
  itemName: string;
  titleName?: string;
  labelName?: string;
  rules?: any;
  dependencies?: Array<string>;
  initialValue?: string | Array<string>;
  disabled?: boolean;
  readyIcon?: boolean;
}

interface IProps {
  formRenderData: Array<IFormRenderData>;
  btnText: string;
  btnClass?: string;
  labelClass?: string;
  disabled?: boolean;
  beforeBtn?: React.ReactElement;
  form: FormInstance;
  onSubmit: any;
  filedBgColor?: boolean;
  componentItem?: {
    component: React.ReactElement;
    indexAfter: number;
  }
}

export enum EFormInput {
  /* eslint-disable no-unused-vars */
  textArea = 'textArea',
  password = 'password',
}

export const FormSendUsMessage = (props: IProps): React.ReactElement => {
  const { form, formRenderData, btnText, onSubmit, filedBgColor, componentItem, btnClass, beforeBtn, disabled, labelClass } = props;
  const renderItemType = (item: any): { input: React.ReactElement, title?: React.ReactElement, icon?: React.ReactElement } => {
    const title = item.titleName ? <span className={classes.inputFieldTitle}>{item.titleName}</span> : null;

    const infoIcon = <InfoIconSvg className={classes.inputFieldInfoIcon} />;

    switch (item.type) {
      case EFormInput.textArea:
        return {
          input: <Input.TextArea
            className={
              filedBgColor ? classes.inputFieldWithSecondBg : classes.inputField}
            placeholder={item.placeholder}
            rows={item.rows}
          />,
          title: title,
          icon: infoIcon
        };
      case EFormInput.password:
        return {
          input: <Input.Password
            className={
              filedBgColor ? classes.inputFieldWithSecondBg : classes.inputField}
            placeholder={item.placeholder}
          />,
          title: title,
          icon: infoIcon
        };
      default:
        return {
          input: <Input
            className={
              filedBgColor ? classes.inputFieldWithSecondBg : classes.inputField}
            placeholder={item.placeholder}
            disabled={item?.disabled || false} />,
          title: title,
          icon: infoIcon
        };
    }
  };

  return (
    <Form
      className={classes.formWrapper}
      form={form}
      autoComplete='off'
      onFinish={onSubmit}
    >
      {formRenderData?.map((item: any, index: number) => {
        const renderType = renderItemType(item);
        const formRender = <>
        {!!item.labelName && <div className={`${classes.formLabel} ${labelClass || ''}`}>{item.labelName}</div>}
        <Form.Item
          className={classes.formItemWrapper}
          name={item.itemName}
          rules={item.rules}
          key={`${index + Date.now()}`}
          initialValue={item.initialValue || ''}
          dependencies={item.dependencies || []}
        >
          {renderType.input}
        </Form.Item>
          {renderType.title}
          {renderType.icon}
          {
            item.readyIcon &&
            <span className={`${classes.ItemSvg} formInputReadySvg`}>
              <ReadySvg fill="#8aa3e8" />
              <ReadySvg fill="#1548D1" />
            </span>
          }
        </>;
        let render = <div key={index} className='fromItemParrent'>
          {formRender}
        </div>;

        if (componentItem && componentItem.indexAfter === index) {
          render = <div
            key={index}
            className='fromItemParrent'
          >
            {formRender}
            {componentItem.component}
          </div>;
        }
        return (
          render
        );
      })}
      <Form.Item className={`${classes.formItemBtnWrapper} ${btnClass || ''}`}>
        {
          beforeBtn || ''
        }
        <FormBtn
          text={btnText || 'Submit'}
          isBlue
          maxWidth
          isSubmit
          disabled={disabled}
        />
      </Form.Item>
    </Form>
  );
};
