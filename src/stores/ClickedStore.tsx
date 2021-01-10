import { createContext, useReducer } from 'react';
import ClickedReducer, { IClickedAction } from 'reducers/ClickedReducer';

export interface IClickedState {
  clicked: boolean;
}

const initialState: IClickedState = {
  clicked: false
};

export const ClickedContext = createContext<{
  state: IClickedState;
  dispatch: (action: IClickedAction) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

export const ClickedProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(ClickedReducer, initialState);

  return <ClickedContext.Provider value={{ state, dispatch }}>{children}</ClickedContext.Provider>;
};
