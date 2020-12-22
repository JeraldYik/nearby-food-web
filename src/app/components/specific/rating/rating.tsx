import SliderComponent from 'app/components/generic/slider';
import { STAR_EMOJI } from 'app/assets/constants';

import { useContext } from 'react';
import { GlobalContext, IState } from 'app/stores';

const Rating = (): JSX.Element => {
  // TODO: to resolve
  const [_, dispatch] = useContext<IState>(GlobalContext);

  const handleChangeEvent = (values) => {
    dispatch({ type: 'setRating', payload: values });
  };

  return (
    <SliderComponent
      className='rating-above'
      start={3.5}
      min={0}
      max={5}
      step={0.1}
      discrete={false}
      onChange={handleChangeEvent}
      label={` ${STAR_EMOJI}`}
      labelLeft={false}
    />
  );
};

export default Rating;
