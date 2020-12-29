import InputField from 'app/components/generic/inputField';

import { useState, useContext, useEffect, useCallback } from 'react';
import { GlobalContext, IState } from 'app/stores';

import GoogleConsoleAPI, { IGetLatLngFromAddress, IGetResultsFromLatlng } from 'app/api/googleConsole';
export interface ILatlng {
  lat: string;
  lng: string;
}

const AddressField = (): JSX.Element => {
  // TODO: to resolve
  const [state, dispatch] = useContext<IState>(GlobalContext);
  const [latlng, setLatlng] = useState<ILatlng>({} as ILatlng);

  const handleClickEvent = (value: string) => {
    dispatch({ type: 'setAddress', payload: value });
  };

  const callGoogleConsoleAPILatLng = useCallback(async (params: IGetLatLngFromAddress): Promise<void> => {
    const response = await GoogleConsoleAPI.getLatLngFromAddress(params);
    // TODO: to resolve
    setLatlng({
      lat: response.results[0].geometry.location.lat,
      lng: response.results[0].geometry.location.lng
    });
  }, []);

  const callGoogleConsoleAPIResults = useCallback(async (params: IGetResultsFromLatlng): Promise<void> => {
    const response = await GoogleConsoleAPI.getResultsFromLatlng(params);
  }, []);

  useEffect(() => {
    // ignore default (on load)
    if (state.address !== '') {
      // make api call to google console
      const params: IGetLatLngFromAddress = { address: state.address };
      callGoogleConsoleAPILatLng(params);
    }
  }, [state]);

  useEffect(() => {
    // ignore default (on load)
    if (Object.keys(latlng).length > 0) {
      console.log(latlng);
      const params: IGetResultsFromLatlng = {
        latlng: latlng,
        type: state.type,
        rating: state.rating,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        radius: state.radius
      };
      // make api call to google console
      callGoogleConsoleAPIResults(params);
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
