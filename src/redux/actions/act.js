import { act } from '@/services/index';
import * as types from '../types';

export const getConfigInfo = (id) => {
  // const { data, status } = await act.getConfig(id);
  return function (dispatch) {
    return act.getConfig(id).then(res => {
      dispatch({
        type: types.GET_CONFIG_INFO,
        data: res.data,
      })
    });
  }
};
