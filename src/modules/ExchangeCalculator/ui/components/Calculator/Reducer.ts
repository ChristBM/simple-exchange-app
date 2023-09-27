import { ACTION_TYPE_CALC, CalcStateType } from './Interfaces';

export const CalcInitialState: CalcStateType = {
  amount: 0,
  from: {
    rate: 0,
    currency: '',
  },
  to: {
    rate: 0,
    currency: '',
  },
  conversion: undefined,
  exchangeRate: undefined,
  errorField: undefined,
};

export default function calcReducer(state: CalcStateType, action: ACTION_TYPE_CALC): CalcStateType {
  switch (action.type) {
    case 'SET_AMOUNT':
      return { ...state, amount: action.payload };
    case 'SET_FROM':
      return { ...state, from: { ...action.payload } };
    case 'SET_TO':
      return { ...state, to: { ...action.payload } };
    case 'SET_CONVERSION':
      return { ...state, conversion: { ...action.payload } };
    case 'SET_EXCHANGE_RATE':
      return { ...state, exchangeRate: { ...action.payload } };
    case 'SET_SELECT_ERRORS':
      return { ...state, errorField: { ...action.payload } };
    default: throw new Error();
  }
}
