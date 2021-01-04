import { IClickedState } from 'stores/ClickedStore';

export interface IClickedAction {
  type: string;
  payload: boolean;
}

const ResultsReducer = (state: IClickedState, action: IClickedAction): IClickedState => {
  console.log(state, action);
  switch (action.type) {
    case 'setClicked':
      return { ...state, clicked: action.payload };
    default:
      return state;
  }
};

export default ResultsReducer;
