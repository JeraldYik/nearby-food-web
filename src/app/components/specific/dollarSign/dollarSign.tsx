import SliderComponent from 'app/components/generic/slider';

import { useContext } from 'react';
import { GlobalContext, IState } from 'app/stores';

const DollarSign = (): JSX.Element => {
  // TODO: to resolve
  const [_, dispatch] = useContext<IState>(GlobalContext);

  const handleChangeEvent = (values: number[]) => {
    dispatch({ type: 'setDollar', payload: values });
  };

  return (
    <SliderComponent
      className='dollar-sign'
      start={[1, 2]}
      min={1}
      max={5}
      step={1}
      discrete={true}
      onChange={handleChangeEvent}
      label={` $`}
      labelLeft={false}
    />
  );
};

export default DollarSign;
