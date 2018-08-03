import http from '@/util/http';
import * as api from '@/config/api';

const Act = {
  async getConfig(qrcode_id) {
    const form = new FormData();
    form.append('qrcode_id', qrcode_id);
    return http.post(api.act.config, form, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then(({status, data}) => (data))
    .catch(({ response }) => ({ status: response.status, data: response.data }));
  },

  async receiveCoupon(params) {
    const form = new FormData();
    Object.entries(params).forEach(item => {
      form.append(item[0], item[1]);
    });
    return http.post(api.act.coupon, form,  {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then(({status, data}) => ({status, data}))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  },
};

export default Act;
