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

	EZPaySDK.loginWithEzPay({
		merchantInfo:{"apiKey":"","origin":"","parentMerchantId":"","firstName":"Shashi","lastName":"sharma","email":"", "mobileNumber":"", "address":"", "city":"", "state":"", "zipCode":"", "country":""},
		environment:"dev", //dev / alpha / prod
	    success: function(data) { console.log("success==>"+JSON.stringify(data)); },
	    error: function(data) { console.log("error==>"+JSON.stringify(data)); },
	});
```