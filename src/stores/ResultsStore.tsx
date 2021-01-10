import { createContext, useReducer } from 'react';
import ResultsReducer, { IResultsAction } from 'reducers/ResultsReducer';

export interface IResult {
  name: string;
  rating: number;
  priceLevel: number;
  vicinity: string;
  url: string;
}

export interface IResultsState {
  results: Array<IResult>;
}

const initialState: IResultsState = {
  results: [] as Array<IResult>
};

export const ResultsContext = createContext<{
  state: IResultsState;
  dispatch: (action: IResultsAction) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

export const ResultsProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  return <ResultsContext.Provider value={{ state, dispatch }}>{children}</ResultsContext.Provider>;
};
