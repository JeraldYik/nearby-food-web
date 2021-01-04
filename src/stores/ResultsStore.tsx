import { createContext, useReducer, Context } from 'react';
import ResultsReducer from 'reducers/ResultsReducer';

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

export const ResultsContext: Context<IResultsState> = createContext<IResultsState>(initialState);

export const ResultsProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  // <(IResultsState, IAction) => IResultsState, IResultsState>
  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  // TODO: to resolve
  return <ResultsContext.Provider value={[state, dispatch]}>{children}</ResultsContext.Provider>;
};
