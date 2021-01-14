import { useState } from 'react';
import { Label, Grid } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range';
/** !NOTE!
 *  Slider from 'react-semnatic-ui-range' has some bugs:
 *  1. Sometimes Slider on first load will take ref to the global container, not the local container.
 *    Refreshing page will solve this (see componentWillMount)
 *  2. Slider is not responsive on scaling, with ref to Grid component
 */

export interface IProps {
  className: string;
  start: number | number[];
  min: number;
  max: number;
  step: number;
  discrete: boolean;
  onChange: (string) => void;
  width: 6 | 16;
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
      <Grid.Column width={props.width} style={{ overflow: 'hidden' }}>
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
