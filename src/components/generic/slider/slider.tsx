import { useState } from 'react';
import { Slider } from 'react-semantic-ui-range';
import { Label, Grid } from 'semantic-ui-react';

export interface IProps {
  className: string;
  start: number | number[];
  min: number;
  max: number;
  step: number;
  discrete: boolean;
  onChange: (string) => void;
  label?: string;
  labelLeft?: boolean;
}

const SliderComponent = (props: IProps) => {
  const [values, setValues] = useState<number | number[]>(props.start);

  const settings = {
    start: props.start,
    min: props.min,
    max: props.max,
    step: props.step,
    onChange: (values: number | number[]) => {
      props.onChange(values);
      setValues(values);
    }
  };

  return (
    <Grid className={props.className}>
      <Grid.Column width={16}>
        <Slider multiple={Array.isArray(props.start)} discrete={props.discrete} value={values} color='blue' settings={settings} />
      </Grid.Column>
      <Grid.Column width={16}>
        {Array.isArray(values) ? (
          values.map((val, i) => (
            <Label key={i} color='blue'>
              {props.label ? (props.labelLeft ? props.label + val : val + props.label) : val}
            </Label>
          ))
        ) : (
          <Label color='blue'>{props.label ? (props.labelLeft ? props.label + values : values + props.label) : values}</Label>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default SliderComponent;
