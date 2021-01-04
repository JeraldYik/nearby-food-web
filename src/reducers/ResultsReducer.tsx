import { IResultsState, IResult } from 'stores/ResultsStore';

export interface IResultsAction {
  type: string;
  payload: IResult[];
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
