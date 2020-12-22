import ButtonGroup from 'app/components/generic/buttonGroup';

import { useContext } from 'react';
import { GlobalContext, IState } from 'app/stores';

const EateryType = (): JSX.Element => {
  const types = ['Restaurant', 'Café'];
  // TODO: to resolve
  const [state, dispatch] = useContext<IState>(GlobalContext);

  const handleClickEvent = (e) => {
    dispatch({ type: 'setType', payload: e.target.value });
  };

  return <ButtonGroup className='eatery-type' buttons={types} conditional={true} onClick={handleClickEvent} focussed={state.type} />;
};

export default EateryType;
