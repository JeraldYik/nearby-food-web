import InputField from 'app/components/generic/inputField';

import { useContext, useEffect } from 'react';
import { GlobalContext, IState } from 'app/stores';

const AddressField = (): JSX.Element => {
  // TODO: to resolve
  const [state, dispatch] = useContext<IState>(GlobalContext);

  const handleClickEvent = (value: string) => {
    dispatch({ type: 'setAddress', payload: value });
  };

  useEffect(() => {
    // ignore default (on load)
    if (state.address !== '') {
      // make api call to google console
    }
  }, [state]);

  return (
    <InputField
      className='address-field'
      placeholder='Enter an address to query (full address/postal code/building name etc...)'
      onClick={handleClickEvent}
    />
  );
};

export default AddressField;
