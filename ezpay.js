try{window.EZPaySDK=function(t){"use strict";function e(t,e){var o=t[e];if(!o)throw e+" required";return o}window.navigator.userAgent,window.document,window.encodeURIComponent;var o="must pass an object";return{loginWithEzPay:function(t){if(!t)throw o;var n=e(t,"merchantInfo"),s=e(t,"success"),a=e(t,"error"),r=window.location.protocol,i=(r.substring(0,r.length-1),(r+"//"+window.location.host).toLowerCase(),"https://1kfkd7w1qi.execute-api.us-west-2.amazonaws.com/alpha/merchant"),c=n,u=new XMLHttpRequest;u.onreadystatechange=function(){if(u.readyState===XMLHttpRequest.DONE)if(200===u.status){var t=JSON.parse(u.response);console.log("333"),s(t)}else console.log("2222"+u.statusText),a(c);else console.log("1111 "+u.statusText)},u.open("POST",i),u.setRequestHeader("Content-Type","application/json;charset=UTF-8"),u.send(JSON.stringify(c))},getEzPayLoginStatus:function(t){if(!t)throw o;e(t,"merchantId"),e(t,"token");var n=e(t,"success"),s=window.location.protocol;return s.substring(0,s.length-1),(s+"//"+window.location.host).toLowerCase(),n({success:!0})}}}()}catch(t){}