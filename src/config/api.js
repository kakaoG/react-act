let userHost = '';
let actHost = '';
const env = process.env.NODE_ENV;
const local = location.origin;
switch(env){
  case 'development':
    userHost = 'userApi';
    actHost = 'actApi';
    break;
  case 'production':
    userHost = `${local}/api/cgi.gstyun.cn`;
    actHost = `${local}/api/ec.gstzy.cn`;
    break;
  case 'testEnvironment':
    userHost = `${local}/api/cgi.gstyun.local`;
    actHost = `${local}/api/ec.gstyun.local`;
    break
}

export const user = {
  isRegisterPhone: `${userHost}/cgi-bin/user/userqueryregistandloginstatus`,
  imgCode: `${userHost}/cgi-bin/user/getpicsecurity`,
  smsCode: `${userHost}/cgi-bin/user/sendsecuritycodemessage`,
};

export const act = {
  config: `${actHost}/api/act-qrcode`,
  coupon: `${actHost}/api/act-qrcode/regist`,
};
