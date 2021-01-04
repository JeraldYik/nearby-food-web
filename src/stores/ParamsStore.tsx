import { createContext, useReducer, Context } from 'react';
import ParamsReducer from 'reducers/ParamsReducer';

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

export const ParamsContext: Context<IParamsState> = createContext<IParamsState>(initialState);

export const ParamsProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(ParamsReducer, initialState);

  // TODO: to resolve
  return <ParamsContext.Provider value={[state, dispatch]}>{children}</ParamsContext.Provider>;
};
