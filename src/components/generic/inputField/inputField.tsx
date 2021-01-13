import { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
interface IProps {
  className: string;
  placeholder: string;
  label?: string;
  labelPosition?: 'left' | 'right' | undefined;
  onClick: (string) => void;
  clicked: boolean;
}

const InputField = (props: IProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChangeEvent = (e) => {
    setValue(e.target.value);
  };

  const handleClickEvent = () => {
    props.onClick(value);
  };

  return (
    <div className={`input-div ${props.className}`}>
      <Input
        label={props.label}
        labelPosition={props.labelPosition}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChangeEvent}
        style={{ width: '85%' }}
      />
      <Button primary size='large' onClick={handleClickEvent} disabled={props.clicked || value === ''}>
        Submit
      </Button>
    </div>
  );
};

export default InputField;
