import InputField from 'components/generic/inputField';

import { useContext, useEffect, useState } from 'react';
import { ParamsContext } from 'stores/ParamsStore';
import { IResult, ResultsContext } from 'stores/ResultsStore';
import { ClickedContext } from 'stores/ClickedStore';
import GoogleConsoleAPI from 'lib/api/googleConsole/googleConsoleAPI';
import { ILatlng, IGetLatLngFromAddress, IGetResultsFromLatlng } from 'lib/api/googleConsole/interfaces';
import { ErrorHandler } from 'hooks/useErrorHandler';

// const numResults = 20;
// const exampledata = new Array(numResults).fill({
//   name: 'HANS IM GLÜCK German Burgergrill | Singapore VIVO CITY',
//   rating: '4.4',
//   priceLevel: '2',
//   vicinity: '1 Harbourfront Walk, #01-57 Vivo City',
//   url: 'https://www.google.com/maps/search/?api=1&query=1.2644032,103.8222071&query_place_id=ChIJxwpVWuYb2jERae_-wJQNHI8'
// });

const AddressField = (): JSX.Element => {
  const { state: paramsState, dispatch: paramsDispatch } = useContext(ParamsContext);
  const { dispatch: resultsDispatch } = useContext(ResultsContext);
  const { state: clickedState, dispatch: clickedDispatch } = useContext(ClickedContext);
  const [latlng, setLatlng] = useState<ILatlng>({} as ILatlng);
  // to prevent running of useEffect before data is fetched and parsed completely
  const [internalClickState, setInternalClickState] = useState<boolean>(false);
  const useErrorHandler = useContext(ErrorHandler);

  const handleClickEvent = (value: string) => {
    paramsDispatch({ type: 'setAddress', payload: value });
    setInternalClickState(true);
  };

  // useEffect(() => {
  //   resultsDispatch({ type: 'setResults', payload: exampledata });
  // }, []);

  const submitButtonClicked = async (): Promise<void> => {
    if (paramsState.address !== '' && internalClickState) {
      clickedDispatch({ type: 'setClicked', payload: true });
      // make api call to google console
      const queries: IGetLatLngFromAddress = {
        address: paramsState.address
      };
      try {
        const response: ILatlng = await GoogleConsoleAPI.getLatLngFromAddress(queries);
        setLatlng(response);
      } catch (err) {
        useErrorHandler.sendError(err);
      }
      setInternalClickState(false);
    }
  };

  const setResults = async (): Promise<void> => {
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
      try {
        const response: Array<IResult> = await GoogleConsoleAPI.getResultsFromLatlng(queries);
        clickedDispatch({ type: 'setClicked', payload: false });
        resultsDispatch({ type: 'setResults', payload: response });
      } catch (err) {
        useErrorHandler.sendError(err);
      }
    }
  };

  useEffect(() => {
    void submitButtonClicked();
  }, [internalClickState]);

  useEffect(() => {
    void setResults();
  }, [latlng]);

  return (
    <InputField
      className='address-field'
      placeholder='Enter an address to query (full address/postal code/building name etc...)'
      onClick={handleClickEvent}
      clicked={clickedState.clicked}
    />
  );
};

export default AddressField;
