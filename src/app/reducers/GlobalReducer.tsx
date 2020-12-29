import { IState } from 'app/stores';

interface IAction {
  type: string;
  payload?: string;
}

const GlobalReducer = (state: IState, action: IAction): IState => {
  console.log(state, action);
  switch (action.type) {
    // TODO: to resolve
    case 'setAddress':
      return { ...state, address: action.payload };
    case 'setType':
      return { ...state, type: action.payload };
    case 'setRating':
      return { ...state, rating: parseFloat(action.payload) };
    case 'setDollar':
      return { ...state, minPrice: parseInt(action.payload[0]), maxPrice: parseInt(action.payload[1]) };
    case 'setRadius':
      return { ...state, radius: parseFloat(action.payload) * 1000 };
    case 'setResults':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
