import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

// import './styles.scss';

interface IProps {
  className: string;
  placeholder: string;
  label?: string;
  labelPosition?: 'left' | 'right' | undefined;
}

const InputField = (props: IProps): JSX.Element => {
  return (
    <div className={`input-div ${props.className}`}>
      <Input label={props.label} labelPosition={props.labelPosition} placeholder={props.placeholder} />
      <Button size='large'>Submit</Button>
    </div>
  );
};

export default InputField;
