!function(){"use strict";var t,e,a=window.location,o=window.document,n=window.localStorage,r=o.getElementById("plausible"),l=r.getAttribute("data-api")||(t=(e=(t=r).src.split("/"))[0],e=e[2],t+"//"+e+"/api/event"),s=n&&n.plausible_ignore;function w(t){console.warn("Ignoring Event: "+t)}function i(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==s)return w("localStorage flag");var n={};n.n=t,n.u=a.href,e&&e.u&&(n.u=e.u),n.d=r.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=JSON.stringify(e.props));var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4==i.readyState&&e&&e.callback&&e.callback()}}}var d=window.plausible&&window.plausible.q||[];window.plausible=i;for(var u=0;u<d.length;u++)i.apply(this,d[u])}();