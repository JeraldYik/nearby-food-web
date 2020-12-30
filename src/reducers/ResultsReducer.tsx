import { IResultsState } from 'stores/ResultsStore';

interface IAction {
  type: string;
  payload?: string;
}

const ResultsReducer = (state: IResultsState, action: IAction): IResultsState => {
  console.log(state, action);
  switch (action.type) {
    // TODO: to resolve
    case 'setResults':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default ResultsReducer;
