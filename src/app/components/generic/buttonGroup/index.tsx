import { Button } from 'semantic-ui-react';

interface IProps {
  className: string;
  buttons: string[];
  conditional: boolean;
  onClick: (string) => void;
  focussed: string;
}

const ButtonGroup = (props: IProps): JSX.Element => {
  var buttonsJSXArray = [] as JSX.Element[];
  props.buttons.map((button: string, key: number) => {
    buttonsJSXArray.push(
      button === props.focussed ? (
        // TODO: change inline style
        <Button key={key} onClick={props.onClick} value={button} style={{ backgroundColor: '#cce6ff' }}>
          {button}
        </Button>
      ) : (
        <Button key={key} onClick={props.onClick} value={button}>
          {button}
        </Button>
      )
    );
    if (props.conditional && key < props.buttons.length - 1) {
      buttonsJSXArray.push(<Button.Or key={`or-${key}`} />);
    }
  });

  return (
    <Button.Group className={props.className} size={'large'}>
      {buttonsJSXArray}
    </Button.Group>
  );
};

export default ButtonGroup;
