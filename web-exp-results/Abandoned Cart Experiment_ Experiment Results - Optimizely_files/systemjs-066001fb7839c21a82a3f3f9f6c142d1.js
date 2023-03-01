/*
* SystemJS 6.12.1
*/
!function(){function e(e,t){return(t||"")+" (SystemJS Error#"+e+" https://git.io/JvFET#"+e+")"}function t(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(/\\/g,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var n,r=t.slice(0,t.indexOf(":")+1);if(n="/"===t[r.length+1]?"file:"!==r?(n=t.slice(r.length+2)).slice(n.indexOf("/")+1):t.slice(8):t.slice(r.length+("/"===t[r.length])),"/"===e[0])return t.slice(0,t.length-n.length-1)+e;for(var i=n.slice(0,n.lastIndexOf("/")+1)+e,o=[],s=-1,u=0;i.length>u;u++)-1!==s?"/"===i[u]&&(o.push(i.slice(s,u+1)),s=-1):"."===i[u]?"."!==i[u+1]||"/"!==i[u+2]&&u+2!==i.length?"/"===i[u+1]||u+1===i.length?u+=1:s=u:(o.pop(),u+=2):s=u;return-1!==s&&o.push(i.slice(s)),t.slice(0,t.length-n.length)+o.join("")}}function n(e,n){return t(e,n)||(-1!==e.indexOf(":")?e:t("./"+e,n))}function r(e,n,r,i,o){for(var c in e){var a=t(c,r)||c,f=e[c];if("string"==typeof f){var l=u(i,t(f,r)||f,o);l?n[a]=l:s("W1",c,f,"bare specifier did not resolve")}}}function i(e,t){if(t[e])return e;var n=e.length;do{var r=e.slice(0,n+1);if(r in t)return r}while(-1!==(n=e.lastIndexOf("/",n-1)))}function o(e,t){var n=i(e,t);if(n){var r=t[n];if(null===r)return;if(n.length>=e.length||"/"===r[r.length-1])return r+e.slice(n.length);s("W2",n,r,"should have a trailing '/'")}}function s(t,n,r,i){console.warn(e(t,"Package target "+i+", resolving target '"+r+"' for "+n))}function u(e,t,n){for(var r=e.scopes,s=n&&i(n,r);s;){var u=o(t,r[s]);if(u)return u;s=i(s.slice(0,s.lastIndexOf("/")),r)}return o(t,e.imports)||-1!==t.indexOf(":")&&t}function c(){this[E]={}}function a(e){return e.id}function f(e,t,n,r){if(e.onload(n,t.id,t.d&&t.d.map(a),!!r),n)throw n}function l(t,n,r){var i=t[E][n];if(i)return i;var o=[],s=Object.create(null);b&&Object.defineProperty(s,b,{value:"Module"});var u=Promise.resolve().then((function(){return t.instantiate(n,r)})).then((function(r){if(!r)throw Error(e(2,"Module "+n+" did not instantiate"));var u=r[1]((function(e,t){i.h=!0;var n=!1;if("string"==typeof e)e in s&&s[e]===t||(s[e]=t,n=!0);else{for(var r in e)t=e[r],r in s&&s[r]===t||(s[r]=t,n=!0);e&&e.__esModule&&(s.__esModule=e.__esModule)}if(n)for(var u=0;o.length>u;u++){var c=o[u];c&&c(s)}return t}),2===r[1].length?{import:function(e){return t.import(e,n)},meta:t.createContext(n)}:void 0);return i.e=u.execute||function(){},[r[0],u.setters||[]]}),(function(e){throw i.e=null,i.er=e,f(t,i,e,!0),e})),c=u.then((function(e){return Promise.all(e[0].map((function(r,i){var o=e[1][i];return Promise.resolve(t.resolve(r,n)).then((function(e){var r=l(t,e,n);return Promise.resolve(r.I).then((function(){return o&&(r.i.push(o),!r.h&&r.I||o(r.n)),r}))}))}))).then((function(e){i.d=e}))}));return i=t[E][n]={id:n,i:o,n:s,I:u,L:c,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0,p:void 0}}function d(){[].forEach.call(document.querySelectorAll("script"),(function(t){if(!t.sp)if("systemjs-module"===t.type){if(t.sp=!0,!t.src)return;System.import("import:"===t.src.slice(0,7)?t.src.slice(7):n(t.src,h)).catch((function(e){if(e.message.indexOf("https://git.io/JvFET#3")>-1){var n=document.createEvent("Event");n.initEvent("error",!1,!1),t.dispatchEvent(n)}return Promise.reject(e)}))}else if("systemjs-importmap"===t.type){t.sp=!0;var i=t.src?(System.fetch||fetch)(t.src,{integrity:t.integrity,passThrough:!0}).then((function(e){if(!e.ok)throw Error("Invalid status code: "+e.status);return e.text()})).catch((function(n){return n.message=e("W4","Error fetching systemjs-import map "+t.src)+"\n"+n.message,console.warn(n),"function"==typeof t.onerror&&t.onerror(),"{}"})):t.innerHTML;M=M.then((function(){return i})).then((function(i){!function(t,i,o){var s={};try{s=JSON.parse(i)}catch(u){console.warn(Error(e("W5","systemjs-importmap contains invalid JSON")+"\n\n"+i+"\n"))}!function(e,t,i){var o;for(o in e.imports&&r(e.imports,i.imports,t,i,null),e.scopes||{}){var s=n(o,t);r(e.scopes[o],i.scopes[s]||(i.scopes[s]={}),t,i,s)}for(o in e.depcache||{})i.depcache[n(o,t)]=e.depcache[o];for(o in e.integrity||{})i.integrity[n(o,t)]=e.integrity[o]}(s,o,t)}(L,i,t.src||h)}))}}))}var h,p="undefined"!=typeof Symbol,v="undefined"!=typeof self,m="undefined"!=typeof document,g=v?self:global;if(m){var y=document.querySelector("base[href]");y&&(h=y.href)}if(!h&&"undefined"!=typeof location){var w=(h=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==w&&(h=h.slice(0,w+1))}var S,b=p&&Symbol.toStringTag,E=p?Symbol():"@",O=c.prototype;O.import=function(e,t){var n=this;return Promise.resolve(n.prepareImport()).then((function(){return n.resolve(e,t)})).then((function(e){var t=l(n,e);return t.C||function(e,t){return t.C=function e(t,n,r,i){if(!i[n.id])return i[n.id]=!0,Promise.resolve(n.L).then((function(){return n.p&&null!==n.p.e||(n.p=r),Promise.all(n.d.map((function(n){return e(t,n,r,i)})))})).catch((function(e){if(n.er)throw e;throw n.e=null,f(t,n,e,!1),e}))}(e,t,t,{}).then((function(){return function e(t,n,r){function i(){try{var e=n.e.call(x);if(e)return e=e.then((function(){n.C=n.n,n.E=null,f(t,n,null,!0)}),(function(e){throw n.er=e,n.E=null,f(t,n,e,!0),e})),n.E=e;n.C=n.n,n.L=n.I=void 0}catch(r){throw n.er=r,r}finally{n.e=null,f(t,n,n.er,!0)}}if(!r[n.id]){if(r[n.id]=!0,!n.e){if(n.er)throw n.er;return n.E?n.E:void 0}var o;return n.d.forEach((function(i){try{var s=e(t,i,r);s&&(o=o||[]).push(s)}catch(u){throw n.e=null,n.er=u,f(t,n,u,!1),u}})),o?Promise.all(o).then(i):i()}}(e,t,{})})).then((function(){return t.n}))}(n,t)}))},O.createContext=function(e){var t=this;return{url:e,resolve:function(n,r){return Promise.resolve(t.resolve(n,r||e))}}},O.onload=function(){},O.register=function(e,t){S=[e,t]},O.getRegister=function(){var e=S;return S=void 0,e};var x=Object.freeze(Object.create(null));g.System=new c;var j,P,M=Promise.resolve(),L={imports:{},scopes:{},depcache:{},integrity:{}},C=m;if(O.prepareImport=function(e){return(C||e)&&(d(),C=!1),M},m&&(d(),window.addEventListener("DOMContentLoaded",d)),m){window.addEventListener("error",(function(e){I=e.filename,T=e.error}));var R=location.origin}O.createScript=function(e){var t=document.createElement("script");t.async=!0,e.indexOf(R+"/")&&(t.crossOrigin="anonymous");var n=L.integrity[e];return n&&(t.integrity=n),t.src=e,t};var I,T,W={},A=O.register;O.register=function(e,t){if(m&&"loading"===document.readyState&&"string"!=typeof e){var n=document.querySelectorAll("script[src]"),r=n[n.length-1];if(r){j=e;var i=this;P=setTimeout((function(){W[r.src]=[e,t],i.import(r.src)}))}}else j=void 0;return A.call(this,e,t)},O.instantiate=function(t,n){var r=W[t];if(r)return delete W[t],r;var i=this;return Promise.resolve(O.createScript(t)).then((function(r){return new Promise((function(o,s){r.addEventListener("error",(function(){s(Error(e(3,"Error loading "+t+(n?" from "+n:""))))})),r.addEventListener("load",(function(){if(document.head.removeChild(r),I===t)s(T);else{var e=i.getRegister(t);e&&e[0]===j&&clearTimeout(P),o(e)}})),document.head.appendChild(r)}))}))},O.shouldFetch=function(){return!1},"undefined"!=typeof fetch&&(O.fetch=fetch);var J=O.instantiate,N=/^(text|application)\/(x-)?javascript(;|$)/;O.instantiate=function(t,n){var r=this;return this.shouldFetch(t)?this.fetch(t,{credentials:"same-origin",integrity:L.integrity[t]}).then((function(i){if(!i.ok)throw Error(e(7,i.status+" "+i.statusText+", loading "+t+(n?" from "+n:"")));var o=i.headers.get("content-type");if(!o||!N.test(o))throw Error(e(4,'Unknown Content-Type "'+o+'", loading '+t+(n?" from "+n:"")));return i.text().then((function(e){return 0>e.indexOf("//# sourceURL=")&&(e+="\n//# sourceURL="+t),(0,eval)(e),r.getRegister(t)}))})):J.apply(this,arguments)},O.resolve=function(n,r){return u(L,t(n,r=r||h)||n,r)||function(t,n){throw Error(e(8,"Unable to resolve bare specifier '"+t+(n?"' from "+n:"'")))}(n,r)};var _=O.instantiate;O.instantiate=function(e,t){var n=L.depcache[e];if(n)for(var r=0;n.length>r;r++)l(this,this.resolve(n[r],e),e);return _.call(this,e,t)},v&&"function"==typeof importScripts&&(O.instantiate=function(e){var t=this;return Promise.resolve().then((function(){return importScripts(e),t.getRegister(e)}))}),function(e){function t(t){return!e.hasOwnProperty(t)||!isNaN(t)&&e.length>t||a&&e[t]&&"undefined"!=typeof window&&e[t].parent===window}var n,r,i,o=e.System.constructor.prototype,s=o.import;o.import=function(o,u){return function(){for(var o in n=r=void 0,e)t(o)||(n?r||(r=o):n=o,i=o)}(),s.call(this,o,u)};var u=[[],function(){return{}}],c=o.getRegister;o.getRegister=function(){var o=c.call(this);if(o)return o;var s,a=function(o){var s,u,c=0;for(var a in e)if(!t(a)){if(0===c&&a!==n||1===c&&a!==r)return a;s?(i=a,u=o&&u||a):s=a===i,c++}return u}(this.firstGlobalProp);if(!a)return u;try{s=e[a]}catch(f){return u}return[[],function(e){return{execute:function(){e(s),e({default:s,__useDefault:!0})}}}]};var a="undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("Trident")}("undefined"!=typeof self?self:global),function(e){var t=e.System.constructor.prototype,r=/^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;t.shouldFetch=function(e){return r.test(e)};var i=/^application\/json(;|$)/,o=/^text\/css(;|$)/,s=/^application\/wasm(;|$)/,u=t.fetch;t.fetch=function(t,r){return u(t,r).then((function(u){if(r.passThrough)return u;if(!u.ok)return u;var c=u.headers.get("content-type");return i.test(c)?u.json().then((function(e){return new Response(new Blob(['System.register([],function(e){return{execute:function(){e("default",'+JSON.stringify(e)+")}}})"],{type:"application/javascript"}))})):o.test(c)?u.text().then((function(e){return e=e.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,(function(e,r,i,o){return"url("+r+n(i||o,t)+r+")"})),new Response(new Blob(["System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync("+JSON.stringify(e)+');e("default",s)}}})'],{type:"application/javascript"}))})):s.test(c)?(WebAssembly.compileStreaming?WebAssembly.compileStreaming(u):u.arrayBuffer().then(WebAssembly.compile)).then((function(n){e.System.wasmModules||(e.System.wasmModules=Object.create(null)),e.System.wasmModules[t]=n;var r=[],i=[];return WebAssembly.Module.imports&&WebAssembly.Module.imports(n).forEach((function(e){var t=JSON.stringify(e.module);-1===r.indexOf(t)&&(r.push(t),i.push("function(m){i["+t+"]=m}"))})),new Response(new Blob(["System.register(["+r.join(",")+"],function(e){var i={};return{setters:["+i.join(",")+"],execute:function(){return WebAssembly.instantiate(System.wasmModules["+JSON.stringify(t)+"],i).then(function(m){e(m.exports)})}}})"],{type:"application/javascript"}))})):u}))}}("undefined"!=typeof self?self:global);var k="undefined"!=typeof Symbol&&Symbol.toStringTag;O.get=function(e){var t=this[E][e];if(t&&null===t.e&&!t.E)return t.er?null:t.n},O.set=function(t,n){try{new URL(t)}catch(s){console.warn(Error(e("W3",'"'+t+'" is not a valid URL to set in the module registry')))}var r;k&&"Module"===n[k]?r=n:(r=Object.assign(Object.create(null),n),k&&Object.defineProperty(r,k,{value:"Module"}));var i=Promise.resolve(r),o=this[E][t]||(this[E][t]={id:t,i:[],h:!1,d:[],e:null,er:void 0,E:void 0});return!o.e&&!o.E&&(Object.assign(o,{n:r,I:void 0,L:void 0,C:i}),r)},O.has=function(e){return!!this[E][e]},O.delete=function(e){var t=this[E],n=t[e];if(!n||n.p&&null!==n.p.e||n.E)return!1;var r=n.i;return n.d&&n.d.forEach((function(e){var t=e.i.indexOf(n);-1!==t&&e.i.splice(t,1)})),delete t[e],function(){var n=t[e];if(!n||!r||null!==n.e||n.E)return!1;r.forEach((function(e){n.i.push(e),e(n.n)})),r=null}};var U="undefined"!=typeof Symbol&&Symbol.iterator;O.entries=function(){var e,t,n=this,r=Object.keys(n[E]),i=0,o={next:function(){for(;void 0!==(t=r[i++])&&void 0===(e=n.get(t)););return{done:void 0===t,value:void 0!==t&&[t,e]}}};return o[U]=function(){return this},o}}();
//# sourceMappingURL=system.min.js.map
