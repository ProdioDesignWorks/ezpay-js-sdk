try{window.EZPaySDK=function(t){"use strict";function e(t,e){var o=t[e];if(!o)throw e+" required";return o}window.navigator.userAgent,window.document,window.encodeURIComponent;var o="must pass an object";return{loginWithEzPay:function(t){if(!t)throw o;var n=e(t,"merchantInfo"),r=e(t,"success"),s=e(t,"error"),a=window.location.protocol,i=(a.substring(0,a.length-1),(a+"//"+window.location.host).toLowerCase(),"https://1kfkd7w1qi.execute-api.us-west-2.amazonaws.com/prod/merchant"),c=n,u=new XMLHttpRequest;u.onreadystatechange=function(){if(u.readyState===XMLHttpRequest.DONE)if(200===u.status){var t=JSON.parse(u.response);console.log("333"),r(t)}else console.log("2222"+JSON.stringify(u)),s({error:!0,message:"Internal Server Error."});else console.log("1111 "+JSON.stringify(u))},u.open("POST",i),u.setRequestHeader("Content-Type","application/json;charset=UTF-8"),u.send(JSON.stringify(c))},getEzPayLoginStatus:function(t){if(!t)throw o;e(t,"merchantId"),e(t,"token");var n=e(t,"success"),r=window.location.protocol;return r.substring(0,r.length-1),(r+"//"+window.location.host).toLowerCase(),n({success:!0})}}}()}catch(t){}