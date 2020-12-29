import { createContext, useReducer, Context } from 'react';
import GlobalReducer from 'app/reducers';

export enum EateryTypes {
  Restaurant = 'restaurant',
  Café = 'cafe'
}

export interface IState {
  address: string;
  type: EateryTypes;
  rating: number;
  minPrice: number;
  maxPrice: number;
  radius: number;
  results: Array<any>;
}

const initialState: IState = {
  address: '',
  type: Object.values(EateryTypes)[0],
  rating: 3.5,
  minPrice: 1,
  maxPrice: 2,
  radius: 2000,
  results: []
};

export const GlobalContext: Context<IState> = createContext<IState>(initialState);

const GlobalProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  // <(IState, IAction) => IState, IState>
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // TODO: to resolve
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
