import { IClickedState } from 'stores/ClickedStore';

export interface IClickedAction {
  type: 'setClicked';
  payload: boolean;
}

const ResultsReducer = (state: IClickedState, action: IClickedAction): IClickedState => {
  // console.log(state, action);
  switch (action.type) {
    case 'setClicked':
      return { ...state, clicked: action.payload };
    default:
      throw new Error('Unrecognised action!');
  }
};

export default ResultsReducer;
