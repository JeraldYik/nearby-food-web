import { IParamsState } from 'stores/ParamsStore';

export interface IParamsAction {
  type: 'setAddress' | 'setType' | 'setRating' | 'setDollar' | 'setRadius';
  payload: any;
}

const ParamsReducer = (state: IParamsState, action: IParamsAction): IParamsState => {
  // console.log(state, action);
  switch (action.type) {
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
    default:
      throw new Error('Unrecognised action!');
  }
};

export default ParamsReducer;
