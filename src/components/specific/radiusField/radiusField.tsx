import SliderComponent from 'components/generic/slider';

import { useContext } from 'react';
import { ParamsContext, IParamsState } from 'stores/ParamsStore';

const RadiusField = (): JSX.Element => {
  // TODO: to resolve
  const [_, dispatch] = useContext<IParamsState>(ParamsContext);

  const handleChangeEvent = (value: number) => {
    dispatch({ type: 'setRadius', payload: value });
  };

  return (
    <SliderComponent
      className='radius-within'
      start={2}
      min={0}
      max={5}
      step={0.01}
      discrete={false}
      onChange={handleChangeEvent}
      label={` km`}
      labelLeft={false}
    />
  );
};

export default RadiusField;
