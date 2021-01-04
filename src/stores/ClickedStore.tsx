import { createContext, useReducer, Context } from 'react';
import { ClickedReducer } from 'reducers';

export interface IClickedState {
  clicked: boolean;
}

const initialState: IClickedState = {
  clicked: false
};

export const ClickedContext: Context<IClickedState> = createContext<IClickedState>(initialState);

const ClickedProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(ClickedReducer, initialState);

  // TODO: to resolve
  return <ClickedContext.Provider value={[state, dispatch]}>{children}</ClickedContext.Provider>;
};

export default ClickedProvider;
