!function(){"use strict";var e,t,a=window.location,r=window.document,n=window.localStorage,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(e=(t=(e=o).src.split("/"))[0],t=t[2],e+"//"+t+"/api/event"),w=n&&n.plausible_ignore;function i(e,t){var n,i;window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress||("true"!=w?((n={}).n=e,n.u=a.href,t&&t.u&&(n.u=t.u),n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1,(i=new XMLHttpRequest).open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}):console.warn("Ignoring Event: localStorage flag"))}var d=window.plausible&&window.plausible.q||[];window.plausible=i;for(var s=0;s<d.length;s++)i.apply(this,d[s])}();