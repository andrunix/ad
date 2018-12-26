const AD = require('../index.js');

const ad = new AD({
  url: 'ldaps://ciam-dev.bcbst.com:2636',
  // nuser: "cn=SI_DarkWebMgmt_D,ou=Service Accounts,o=external,dc=bcbst,dc=com",
  user: 'cn=SI_DXMbmr_D,ou=Service Accounts,o=external,dc=bcbst,dc=com',
  pass: 'Zy$rnMpR*b7_nL7D', //  'ChangemeNow',
  baseDN: 'ou=members,o=external,dc=bcbst,dc=com'
  // baseDN: 'ou=public,o=external,dc=bcbst,dc=com'
  // baseDN: 'ou=public,o=external,dc=bcbst,dc=com'
});

// const user = 'SI_DXPblc_D';
// const user = 'SI_DarkWebMgmt_D';
const user = 'dx9devmember1';

(async () => {
  try {
    let u = await ad.user(user).get();
    console.log('u: ', u);
  } catch (e) {
    console.log('error: ', e);
  }
})();
