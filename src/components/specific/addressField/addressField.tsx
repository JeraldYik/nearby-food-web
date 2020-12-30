import InputField from 'components/generic/inputField';

import { useContext, useEffect, useState } from 'react';
import { GlobalContext, IState } from 'stores';
import GoogleConsoleAPI from 'lib/api/googleConsole/googleConsoleAPI';
import { ILatlng, IGetLatLngFromAddress, IGetResultsFromLatlng, IResult } from 'lib/api/googleConsole/interfaces';

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
      GoogleConsoleAPI.getLatLngFromAddress(queries).then((response: ILatlng) => {
        setLatlng(response);
      });
    }
  }, [state]);

  useEffect(() => {
    if (latlng && Object.keys(latlng).length > 0) {
      const queries: IGetResultsFromLatlng = {
        location: `${latlng.lat},${latlng.lng}`,
        type: state.type,
        rating: state.rating,
        minprice: state.minPrice,
        maxprice: state.maxPrice,
        radius: state.radius,
        opennow: ''
      };
      GoogleConsoleAPI.getResultsFromLatlng(queries).then((response: Array<IResult>) => {
        console.log(response);
      });
    }
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
