!function(){"use strict";var e,t,r=window.location,o=window.document,n=window.localStorage,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(e=(t=(e=l).src.split("/"))[0],t=t[2],e+"//"+t+"/api/event"),p=n&&n.plausible_ignore,u=l&&l.getAttribute("data-exclude").split(",");function w(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==p)return w("localStorage flag");if(u)for(var n=0;n<u.length;n++)if("pageview"==e&&r.pathname.match(new RegExp("^"+u[n].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return w("exclusion rule");var a={};a.n=e,a.u=r.href,t&&t.u&&(a.u=t.u),a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var i=new XMLHttpRequest;i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=a;for(var d=0;d<i.length;d++)a.apply(this,i[d])}();