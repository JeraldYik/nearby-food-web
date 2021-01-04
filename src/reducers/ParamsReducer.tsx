import { Dispatch } from 'react';
import { IParamsState } from 'stores/ParamsStore';

export interface IParamsAction {
  type: string;
  payload: string;
}

const ParamsReducer = (state: IParamsState, action: IParamsAction) => {
  console.log(state, action);
  switch (action.type) {
    case 'setAddress':
      return { ...state, address: action.payload };
    case 'setType':
      // TODO: to resolve
      return { ...state, type: action.payload };
    case 'setRating':
      return { ...state, rating: parseFloat(action.payload) };
    case 'setDollar':
      return { ...state, minPrice: parseInt(action.payload[0]), maxPrice: parseInt(action.payload[1]) };
    case 'setRadius':
      return { ...state, radius: parseFloat(action.payload) * 1000 };
    default:
      return state;
  }
};

export default ParamsReducer;
