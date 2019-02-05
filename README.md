# ezpay-js-sdk

#### Example

	`<script type='text/javascript' src="ezpay.js"></script>`

```JSX
	EZPaySDK.getEzPayLoginStatus({
	    merchantId: 1,
	    token: 'asdfasf',
	    environment:"dev", //dev / alpha / prod
	    success: function (data) { 
	    	 console.log("data==>"+JSON.stringify(data));
	    }
	});

	let merchantInfo = {
					"apiKey":"",
					"origin":"",
					"name":"Ankush K",
					"business" : "",
					"phone": "",
					"address":"",
					"country":"",
					"state":"",
					"city":"",
					"zip":"",
					"logo":"",
					"email":"ankush@prodio.in"
				};

	EZPaySDK.loginWithEzPay({
		merchantInfo:merchantInfo,
		environment:"dev", //dev / alpha / prod
	    success: function(data) { console.log("success==>"+JSON.stringify(data)); },
	    error: function(data) { console.log("error==>"+JSON.stringify(data)); },
	});
```