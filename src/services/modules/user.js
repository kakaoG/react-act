import http from '@/util/http';
import * as api from '@/config/api';

const User = {
  async isRegisterPhone(params) {
    return http.post(api.user.isRegisterPhone, params)
      .then(({status, data}) => ({status, data}))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  },

  async getImgCode(params) {
    return http.get(api.user.imgCode, params)
        .then(({status, data}) => ({status, data}))
        .catch(({ response }) => ({ status: response.status, data: response.data }));
  },

  async getSmsCode(params) {
    return http.post(api.user.smsCode, params)
        .then(({status, data}) => ({status, data}))
        .catch(({ response }) => ({ status: response.status, data: response.data }));
  },
};

export default User;
