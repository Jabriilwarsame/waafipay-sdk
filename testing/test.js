const waafipay = require('waafipay-sdk');
let data = {
    loginId: 'TestDistributor',
    password: 'dxbsafarifone',
    userTypeId: 20
}
waafipay.authentication(data).then((res) => {
  console.log(res);
});