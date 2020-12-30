import InputField from 'components/generic/inputField';

import { useContext, useEffect, useState } from 'react';
import { GlobalContext, IState } from 'stores';
import GoogleConsoleAPI, { ILatlng, IGetLatLngFromAddress } from 'lib/api/googleConsole/googleConsoleAPI';

const AddressField = (): JSX.Element => {
  // TODO: to resolve
  const [state, dispatch] = useContext<IState>(GlobalContext);
  const [latlng, setLatlng] = useState<ILatlng>({} as ILatlng);

  const handleClickEvent = (value: string) => {
    dispatch({ type: 'setAddress', payload: value });
  };

  useEffect(() => {
    // ignore default (on load)
    if (state.address !== '') {
      // make api call to google console
      const queries: IGetLatLngFromAddress = {
        address: state.address
      };
      GoogleConsoleAPI(queries).then((response) => {
        setLatlng(response);
      });
    }
  }, [state]);

  useEffect(() => {
    // if (Object.keys(latlng).length > 0) {
    console.log(latlng);
    // }
  }, [latlng]);

  return (
    <InputField
      className='address-field'
      placeholder='Enter an address to query (full address/postal code/building name etc...)'
      onClick={handleClickEvent}
    />
  );
};

export default AddressField;
