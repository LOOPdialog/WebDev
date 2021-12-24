import { Input } from 'antd';
import React from 'react';
import classes from './inputText.module.scss';

interface IInputText {
  filedBgColor?: boolean;
  options: {
    [key: string]: any;
    placeholder: string;
    disabled?: boolean;
  };
  className?: string;
}

const InputTextComponent = (props: IInputText): React.ReactElement => {
  const { filedBgColor, options, className } = props;
  return (
    <Input
      id={classes.inputTextField}
      className={
        `${filedBgColor ? classes.inputFieldWithSecondBg : classes.inputField} ${className || ''}`
      }
      placeholder={options.placeholder}
      disabled={options?.disabled || false} />
  );
};

export default InputTextComponent;
