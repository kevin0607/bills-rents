export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
    storeValue('appsmith_host','https://0a25-144-24-135-94.ngrok-free.app/');
		storeValue('rent_paid_status',appsmith.URL.queryParams['rent_paid_status']);
		storeValue('tenant_id',appsmith.URL.queryParams['tenant_id'])
		storeValue('tabs_l','login1');
		storeValue('tabs_m','0');
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}