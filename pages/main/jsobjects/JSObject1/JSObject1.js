export default {
  myVar1: [],
  myVar2: {},
  myFun1 () {
		storeValue('appsmith_host','https://0a25-144-24-135-94.ngrok-free.app');
		storeValue('link_url',appsmith.store.appsmith_host + '/app/https://0a25-144-24-135-94.ngrok-free.app/app/billsrents/billsonline-64c9835099650e433ab41443?tenant_id=1&rent_paid_status=1&embed=');
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