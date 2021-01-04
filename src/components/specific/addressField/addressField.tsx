import InputField from 'components/generic/inputField';

import { useContext, useEffect, useState } from 'react';
import { ParamsContext, IParamsState } from 'stores/ParamsStore';
import { IResult, ResultsContext, IResultsState } from 'stores/ResultsStore';
import GoogleConsoleAPI from 'lib/api/googleConsole/googleConsoleAPI';
import { ILatlng, IGetLatLngFromAddress, IGetResultsFromLatlng } from 'lib/api/googleConsole/interfaces';

const numResults = 10;
const exampledata = new Array(numResults).fill({
  name: 'HANS IM GLÜCK German Burgergrill | Singapore VIVO CITY',
  rating: '4.4',
  priceLevel: '2',
  vicinity: '1 Harbourfront Walk, #01-57 Vivo City',
  url: 'https://www.google.com/maps/search/?api=1&query=1.2644032,103.8222071&query_place_id=ChIJxwpVWuYb2jERae_-wJQNHI8'
});

const AddressField = (): JSX.Element => {
  // TODO: to resolve
  const [paramsState, paramsDispatch] = useContext<IParamsState>(ParamsContext);
  const [resultsState, resultsDispatch] = useContext<IResultsState>(ResultsContext);
  const [latlng, setLatlng] = useState<ILatlng>({} as ILatlng);
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  // const handleClickEvent = (value: string) => {
  //   paramsDispatch({ type: 'setAddress', payload: value });
  //   setSubmitClicked(true);
  // };

  const handleClickEvent = (value: string) => {
    resultsDispatch({ type: 'setResults', payload: exampledata });
    setSubmitClicked(true);
  };

  /**useEffect(() => {
    // TODO: produce error message when address field is empty
    if (paramsState.address !== '' && submitClicked) {
      // make api call to google console
      const queries: IGetLatLngFromAddress = {
        address: paramsState.address
      };
      GoogleConsoleAPI.getLatLngFromAddress(queries).then((response: ILatlng) => {
        setLatlng(response);
      });
      setSubmitClicked(false);
    }
  }, [submitClicked]);

  useEffect(() => {
    // ignore default (on load)
    if (latlng && Object.keys(latlng).length > 0) {
      const queries: IGetResultsFromLatlng = {
        location: `${latlng.lat},${latlng.lng}`,
        type: paramsState.type,
        rating: paramsState.rating,
        minprice: paramsState.minPrice,
        maxprice: paramsState.maxPrice,
        radius: paramsState.radius,
        opennow: ''
      };
      GoogleConsoleAPI.getResultsFromLatlng(queries).then((response: Array<IResult>) => {
        resultsDispatch({ type: 'setResults', payload: response });
      });
    }
  }, [latlng]); */

  return (
    <InputField
      className='address-field'
      placeholder='Enter an address to query (full address/postal code/building name etc...)'
      onClick={handleClickEvent}
    />
  );
};

export default AddressField;
