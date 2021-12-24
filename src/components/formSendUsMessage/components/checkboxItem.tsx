import React from 'react';
import { Checkbox } from 'antd';
import classes from './checkboxItem.module.scss';

interface ICheckboxItemComponent {
  title: string;
  secondary?: string;
  value: string;
}

const CheckboxItemComponent = (props: ICheckboxItemComponent): React.ReactElement => {
  const { title, secondary, value } = props;
  return (
    <Checkbox value={value}>
      <span className={classes.CheckboxTitle}>{title || ''}</span>
      <span className={classes.CheckboxSecondary}>{secondary || ''}</span>
    </Checkbox>
  );
};

export default CheckboxItemComponent;
