import { Button } from 'semantic-ui-react';

interface IProps {
  className: string;
  buttons: string[];
  conditional: boolean;
}

const ButtonGroup = (props: IProps): JSX.Element => {
  var buttonsJSXArray = [] as JSX.Element[];
  props.buttons.map((button: string, key: number) => {
    buttonsJSXArray.push(<Button key={key}>{button}</Button>);
    if (props.conditional && key < props.buttons.length - 1) {
      buttonsJSXArray.push(<Button.Or key={`or${key}`} />);
    }
  });

  return (
    <Button.Group className={props.className} size={'large'}>
      {buttonsJSXArray}
    </Button.Group>
  );
};

export default ButtonGroup;
