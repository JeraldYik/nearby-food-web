import InputField from 'app/components/generic/inputField';

import { useContext } from 'react';
import { GlobalContext, IState } from 'app/stores';

const AddressField = (): JSX.Element => {
  // TODO: to resolve
  const [_, dispatch] = useContext<IState>(GlobalContext);

  const handleClickEvent = (value: string) => {
    dispatch({ type: 'setAddress', payload: value });
  };

  return (
    <InputField
      className='address-field'
      placeholder='Enter an address to query (full address/postal code/building name etc...)'
      onClick={handleClickEvent}
    />
  );
};

export default AddressField;
