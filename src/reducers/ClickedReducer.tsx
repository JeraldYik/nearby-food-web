import { IClickedState } from 'stores/ClickedStore';

interface IAction {
  type: string;
  payload: boolean;
}

const ResultsReducer = (state: IClickedState, action: IAction): IClickedState => {
  console.log(state, action);
  switch (action.type) {
    case 'setClicked':
      return { ...state, clicked: action.payload };
    default:
      return state;
  }
};

export default ResultsReducer;
