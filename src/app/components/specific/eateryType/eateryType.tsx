import ButtonGroup from 'app/components/generic/buttonGroup';

import { useContext } from 'react';
import { GlobalContext, IState, EateryTypes } from 'app/stores';

const EateryType = (): JSX.Element => {
  const types = Object.keys(EateryTypes);

  // TODO: to resolve
  const [state, dispatch] = useContext<IState>(GlobalContext);

  const handleClickEvent = (e) => {
    dispatch({ type: 'setType', payload: EateryTypes[e.target.value] });
  };

  return <ButtonGroup className='eatery-type' buttons={types} conditional={true} onClick={handleClickEvent} focussed={state.type} />;
};

export default EateryType;
