import { IResultsState, IResult } from 'stores/ResultsStore';

export interface IResultsAction {
  type: 'setResults';
  payload: Array<IResult>;
}

const ResultsReducer = (state: IResultsState, action: IResultsAction): IResultsState => {
  // console.log(state, action);
  switch (action.type) {
    case 'setResults':
      return { ...state, results: action.payload };
    default:
      throw new Error('Unrecognised action!');
  }
};

export default ResultsReducer;
