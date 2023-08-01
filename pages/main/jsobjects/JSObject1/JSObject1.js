export default {
  myVar1: [],
  myVar2: {},
  myFun1 () {
		storeValue('link_url','https://app.appsmith.com/app/billsonline/billsonline-64c6cee62d8f7a159ce65dc3?tenant_id=1&rent_paid_status=1');
		storeValue('st', 'https://api.callmebot.com/whatsapp.php?phone=+918885305097&text= ' + ShortenURL.data + '&apikey=3103785');
    storeValue('tabs_m', '0');
    storeValue('tabs_e', '1');
		storeValue('tabs_l', 'login1');
		//removeValue('tabs_l');

  },
  async myFun2 () {
    //	use async-await or promises
    //	await storeValue('varName', 'hello world')
  }
}