import ButtonGroup from 'components/generic/buttonGroup';

import { useContext } from 'react';
import { ParamsContext, IParamsState, EateryTypes } from 'stores/ParamsStore';

const EateryType = (): JSX.Element => {
  const types = Object.keys(EateryTypes);
  // TODO: to resolve
  const [state, dispatch] = useContext<IParamsState>(ParamsContext);

  const handleClickEvent = (e) => {
    dispatch({ type: 'setType', payload: EateryTypes[e.target.value] });
  };

  const focussed = Object.keys(EateryTypes).find((key) => EateryTypes[key] === state.type);

  // TODO: to resolve
  return <ButtonGroup className='eatery-type' buttons={types} conditional={true} onClick={handleClickEvent} focussed={focussed} />;
};

export default EateryType;
