import SliderComponent from 'components/generic/slider';

import { useContext } from 'react';
import { ParamsContext } from 'stores/ParamsStore';

const DollarSign = (): JSX.Element => {
  const { dispatch: paramsDispatch } = useContext(ParamsContext);

  const handleChangeEvent = (values: number[]) => {
    paramsDispatch({ type: 'setDollar', payload: values });
  };

  return (
    <SliderComponent
      className='dollar-sign'
      start={[1, 2]}
      min={1}
      max={5}
      step={1}
      discrete={true}
      width={6}
      onChange={handleChangeEvent}
      label={` $`}
      labelLeft={false}
    />
  );
};

export default DollarSign;
