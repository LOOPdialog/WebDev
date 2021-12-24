import React from 'react';
import { Button } from 'antd';
import classes from './buttonForm.module.scss';

interface IProps {
  text: string,
  isArrow?: boolean,
  isBlue?: boolean,
  transparentBg?: boolean,
  maxWidth?: boolean,
  halfWidth?: boolean,
  isSubmit?: boolean,
  smallPadding?: boolean,
  disabled?: boolean,
  callback?: () => void;
}

export const FormBtn = (props: IProps) => {
  const {
    text, isArrow, isBlue, transparentBg,
    maxWidth, isSubmit, smallPadding, callback,
    halfWidth, disabled
  } = props;
  const styledClass = `${classes.btnWrapper} ${isBlue ? classes.btnBlue : classes.btnWhite
    } ${!!transparentBg && classes.btnGhost} ${!!smallPadding && classes.smallPadding}`;
  let isMaxWidth = maxWidth ? '100%' : 'auto';
  if (halfWidth) {
    isMaxWidth = '50%';
  }
  const btnHtmlType = isSubmit ? 'submit' : 'button';
  return (
    <Button
      className={styledClass}
      style={{ width: isMaxWidth }}
      onClick={callback}
      htmlType={btnHtmlType}
      disabled={disabled || false}
    >
      {text}
      {isArrow && {/* <BtnArrowRightSvgIcon /> */}}
    </Button>
  );
};
