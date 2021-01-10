import ButtonGroup from 'components/generic/buttonGroup';

import { useContext } from 'react';
import { ParamsContext, EateryTypes } from 'stores/ParamsStore';

const EateryType = (): JSX.Element => {
  const types = Object.keys(EateryTypes);
  const { state: paramsState, dispatch: paramsDispatch } = useContext(ParamsContext);

  const handleClickEvent = (e) => {
    paramsDispatch({ type: 'setType', payload: EateryTypes[e.target.value] });
  };

  const focussed = Object.keys(EateryTypes).find((key) => EateryTypes[key] === paramsState.type);

  return <ButtonGroup className='eatery-type' buttons={types} conditional={true} onClick={handleClickEvent} focussed={focussed ? focussed : ''} />;
};

export default EateryType;
