import { createContext, useReducer } from 'react';
import ParamsReducer, { IParamsAction } from 'reducers/ParamsReducer';

export enum EateryTypes {
  Restaurant = 'restaurant',
  Café = 'cafe'
}

export interface IParamsState {
  address: string;
  type: EateryTypes;
  rating: number;
  minPrice: number;
  maxPrice: number;
  radius: number;
}

const initialState: IParamsState = {
  address: '',
  type: Object.values(EateryTypes)[0],
  rating: 3.5,
  minPrice: 1,
  maxPrice: 2,
  radius: 2000
};

export const ParamsContext = createContext<{
  state: IParamsState;
  dispatch: (action: IParamsAction) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

export const ParamsProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(ParamsReducer, initialState);

  return <ParamsContext.Provider value={{ state, dispatch }}>{children}</ParamsContext.Provider>;
};
