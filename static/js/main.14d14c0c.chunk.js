(this.webpackJsonpdata_generator=this.webpackJsonpdata_generator||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,a=n(5),c=n.n(a),i=n(9),s=n.n(i);n(14);!function(e){e.primary="primary",e.secondary="secondary",e.info="info",e.success="success",e.warning="warning",e.danger="danger",e.light="light",e.dark="dark",e.white="white"}(r||(r={}));var o=n(0),l=function(e){var t,n=e.title,a=e.color,c=e.children;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h5",{className:"card-header bg-".concat(a," text-").concat((t=a,t===r.white||t===r.warning||t===r.light?r.dark:r.white)),children:n}),Object(o.jsx)("div",{className:"card-body text-left",children:c})]})},u=n(6),j=function(e){var t=e.name,n=e.title,r=e.generator,c=e.params,i=e.onUpdate,s=e.asText,l=void 0!==s&&s,j=Object(a.useState)(r.generate(c)),b=Object(u.a)(j,2),h=b[0],d=b[1];function g(){var e=r.generate(c);d(e),"function"===typeof i&&i(e)}Object(a.useEffect)((function(){var e=r.generate(c);d(e),g()}),[c,r]);var m=function e(t){null!==t.clipboardData&&(t.clipboardData.setData("text/plain",h),t.preventDefault(),document.removeEventListener("copy",e))};function f(){document.addEventListener("copy",m),document.execCommand("copy")}return l?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:t,children:n}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{className:"form-control",id:t,readOnly:!0,value:h})}),Object(o.jsxs)("div",{className:"text-right",children:[Object(o.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:f,children:Object(o.jsx)("i",{className:"far fa-copy"})}),Object(o.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:g,children:Object(o.jsx)("i",{className:"fas fa-sync"})})]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:t,children:n}),Object(o.jsxs)("div",{className:"input-group field-".concat(t," mb-3"),children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:n,"aria-label":n,"aria-describedby":"basic-".concat(t),id:t,readOnly:!0,value:h}),Object(o.jsxs)("div",{className:"input-group-append",children:[Object(o.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:f,children:Object(o.jsx)("i",{className:"far fa-copy"})}),Object(o.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:g,children:Object(o.jsx)("i",{className:"fas fa-sync"})})]})]})]})},b=n(1),h=n(2),d=n(4),g=n(3),m=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,[{key:"generateRndStr",value:function(e,t){"undefined"===typeof t&&(t="0123456789");for(var n="",r=t.length,a=0;a<e;a++){n+=t[Math.floor(Math.random()*r)]}return n}}]),e}(),f=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(){var e=this.generateRndStr(9);return e+this.getCheckDigits(e,[2,4,10,3,5,9,4,6,8])}},{key:"getCheckDigits",value:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=+e[r]*t[r];return String(n%11%10)}}]),n}(m),O=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(){var e=this.generateRndStr(10);return(e+=this.getCheckDigits(e,[7,2,4,10,3,5,9,4,6,8]))+this.getCheckDigits(e,[3,7,2,4,10,3,5,9,4,6,8])}}]),n}(f),v=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).firstDigit=void 0,e.rndLen=void 0,e.firstDigit="15",e.rndLen=11,e}return Object(h.a)(n,[{key:"generate",value:function(){var e=this.generateRndStr(1,this.firstDigit)+this.generateRndStr(this.rndLen);return e+this.getCheckDigits(+e)}},{key:"getCheckDigits",value:function(e){return String(e%11%10)}}]),n}(m),p=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).firstDigit="3",e.rndLen=13,e}return Object(h.a)(n,[{key:"getCheckDigits",value:function(e){return String(e%13%10)}}]),n}(v),x=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).showTwoDig=function(e){return"0".concat(e).slice(-2)},e}return Object(h.a)(n,[{key:"generate",value:function(){var e=this.generateRndStr(9);return this.showFormat(e+this.showTwoDig(this.getCheckDigits(e)))}},{key:"getCheckDigits",value:function(e){for(var t=0,n=0;n<e.length;n++)t+=+e[n]*(9-n);return t<100?t:t<=101?0:t%101}},{key:"showFormat",value:function(e){var t=e.split("");return t.splice(3,0,"-"),t.splice(7,0,"-"),t.splice(11,0," "),t.join("")}}]),n}(m),y=new f,k=new O,N=new v,S=new p,w=new x,C=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"mb-5 text-center",children:Object(o.jsxs)(l,{title:"\u0424\u0438\u0437. \u043b\u0438\u0446\u043e",color:r.info,children:[Object(o.jsx)(j,{name:"inn_fl",title:"\u0418\u041d\u041d",generator:k}),Object(o.jsx)(j,{name:"snils_fl",title:"\u0421\u041d\u0418\u041b\u0421",generator:w})]})}),Object(o.jsx)("div",{className:"mb-5 text-center",children:Object(o.jsxs)(l,{title:"\u0418\u041f",color:r.danger,children:[Object(o.jsx)(j,{name:"inn_ip",title:"\u0418\u041d\u041d",generator:k}),Object(o.jsx)(j,{name:"ogrn_ip",title:"\u041e\u0413\u0420\u041d\u0418\u041f",generator:S})]})}),Object(o.jsx)("div",{className:"mb-5 text-center",children:Object(o.jsxs)(l,{title:"\u042e\u0440. \u043b\u0438\u0446\u043e",color:r.warning,children:[Object(o.jsx)(j,{name:"inn_ul",title:"\u0418\u041d\u041d",generator:y}),Object(o.jsx)(j,{name:"ogrn",title:"\u041e\u0413\u0420\u041d",generator:N})]})})]})},D=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(){var e=["02","06","09","13","16","21","23","31","39","43","48","51","55","59","62","67","72","74"],t="";do{t=this.generateRndStr(2)}while(-1!==e.indexOf(t));var n=Math.floor(950*Math.random()+50);return"04"+t+this.generateRndStr(2)+(n<100?"0"+String(n):String(n))}}]),n}(m),F=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(){var e=this.generateRndStr(7),t=this.getCheckDigit(e,[1,2,3,4,5,6,7]);if(t<=9)return e+String(t);var n=this.getCheckDigit(e,[3,4,5,6,7,8,9]);return e+String(n%10)}},{key:"getCheckDigit",value:function(e,t){for(var n=0,r=0;r<e.length;r++)n+=+e[r]*t[r];return n%11}}]),n}(m),_=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(e){var t=10;e&&e.len&&(t=e.len);var n="0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ";return e&&e.vocab&&(n=e.vocab),this.generateRndStr(t,n)}}]),n}(m),R=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).coeffs=[7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1],e.currencies=["643","840","978"],e}return Object(h.a)(n,[{key:"generate",value:function(e){var t=this.currencies[Math.floor(Math.random()*this.currencies.length)],n=this.generateRndStr(5),r=this.generateRndStr(11),a=e.bik.slice(-3),c=0;c=this.checkSum(a+n+t+String(c)+r)%10*3%10;var i=n+t+String(c)+r;return console.log(e.bik,i,this.checkSumCor(i)),i}},{key:"checkSum",value:function(e){for(var t=0,n=0;n<e.length;n++)t+=this.coeffs[n]*+e[n];return t}},{key:"checkSumCor",value:function(e){for(var t=0,n=0;n<e.length;n++)t+=this.coeffs[n]*(+e[n]%10);return t%10!==0}}]),n}(m),M=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"generate",value:function(e){var t=this.currencies[Math.floor(Math.random()*this.currencies.length)],n=this.generateRndStr(5),r=this.generateRndStr(11),a=e.bik.slice(-3),c=0;return c=this.checkSum(a+n+t+String(c)+r)%10*3%10,n+t+String(c)+r}}]),n}(R),L=new D,T=new _,E=new F,U=new R,I=new M,P={len:9,vocab:"0123456789"},A=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)("div",{className:"mb-5 text-center",children:Object(o.jsxs)(l,{title:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",color:r.secondary,children:[Object(o.jsx)(j,{name:"bank_bik",title:"\u0411\u0418\u041a",generator:L,onUpdate:function(e){c(e)}}),Object(o.jsx)(j,{name:"bank_kpp",title:"\u041a\u041f\u041f",params:P,generator:T}),Object(o.jsx)(j,{name:"bank_okpo",title:"\u041e\u041a\u041f\u041e",generator:E}),Object(o.jsx)(j,{name:"bank_rs",title:"\u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442",params:{bik:n},generator:I}),Object(o.jsx)(j,{name:"bank_ks",title:"\u041a\u043e\u0440\u0440\u0435\u0441\u043f\u043e\u043d\u0434\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442",params:{bik:n},generator:U})]})})},B=n(8),J=new _,z="\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",G="abcdefghijklmnoprstuvwxyz",K="0123456789",H="+-_^<>#\u2116@\xab\xbb&!/[]().,",V=[{name:"main",id:"main",vocab:z+z.toUpperCase()+G+G.toUpperCase()+K+H+":;*"},{name:"main_ru",id:"main_ru",vocab:z+z.toUpperCase()+K+H}],W=function(){var e=Object(a.useState)({num:1e3,validator:V[0].id}),t=Object(u.a)(e,2),n=t[0],c=t[1],i=V.find((function(e){return e.id===n.validator})),s={vocab:void 0===i?"":i.vocab,len:n.num};return Object(o.jsx)("div",{className:"mb-5 text-center",children:Object(o.jsx)(l,{title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",color:r.primary,children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlSelect1",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440"}),Object(o.jsx)("select",{className:"form-control",id:"exampleFormControlSelect1",value:n.validator,onChange:function(e){var t=Object(B.a)({},n);t.validator=e.target.value,c(t)},children:V.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlSelect1",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"1000",value:n.num,onChange:function(e){var t=Object(B.a)({},n),r=+e.target.value;t.num=Math.min(isNaN(r)||r<0?0:r,5e3),c(t)},onKeyPress:function(e){isNaN(+e.key)&&e.preventDefault()}})]})}),Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)(j,{name:"rand_str",title:"\u0414\u0430\u043d\u043d\u044b\u0435",generator:J,asText:!0,params:s})})]})})})},X=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col-sm-12",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)(C,{})}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)(A,{}),Object(o.jsx)(W,{})]})]})})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root")),Y()}},[[16,1,2]]]);
//# sourceMappingURL=main.14d14c0c.chunk.js.map