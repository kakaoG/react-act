import * as types from '@/redux/types';

export default function act(state={}, action) {
  switch (action.type) {
    case types.GET_CONFIG_INFO:
      return {...state, ...action.data};
    default:
      return state;
  }
}