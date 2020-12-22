import { createContext, useReducer, Context } from 'react';
import GlobalReducer from 'app/reducers';

export interface IState {
  address: string;
  type: 'Restaurant' | 'Café';
  rating: number;
  minPrice: number;
  maxPrice: number;
  radius: number;
}

const initialState: IState = {
  address: '',
  type: 'Restaurant',
  rating: 3.5,
  minPrice: 1,
  maxPrice: 2,
  radius: 2000
};

export const GlobalContext: Context<IState> = createContext<IState>(initialState);

const GlobalProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  // <(IState, IAction) => IState, IState>
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // TODO: to resolve
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
