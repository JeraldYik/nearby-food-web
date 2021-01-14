import SliderComponent from 'components/generic/slider';

import { useContext } from 'react';
import { ParamsContext } from 'stores/ParamsStore';

const RadiusField = (): JSX.Element => {
  const { dispatch: paramsDispatch } = useContext(ParamsContext);

  const handleChangeEvent = (value: number) => {
    paramsDispatch({ type: 'setRadius', payload: value });
  };

  return (
    <SliderComponent
      className='radius-within'
      start={2}
      min={0}
      max={5}
      step={0.01}
      discrete={false}
      width={16}
      onChange={handleChangeEvent}
      label={` km`}
      labelLeft={false}
    />
  );
};

export default RadiusField;
