(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e15707ea"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),o=Math.floor,c=r("".charAt),i=r("".replace),l=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,f){var v=n+e.length,p=r.length,b=s;return void 0!==d&&(d=a(d),b=u),i(f,b,(function(a,i){var u;switch(c(i,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,v);case"<":u=d[l(i,1,-1)];break;default:var s=+i;if(0===s)return a;if(s>p){var f=o(s/10);return 0===f?a:f<=p?void 0===r[f-1]?c(i,1):r[f-1]+c(i,1):a}u=r[s-1]}return void 0===u?"":u}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),o=n("825a"),c=n("1626"),i=n("c6b6"),l=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&o(r),r}if("RegExp"===i(e))return a(l,e,t);throw u("RegExp#exec called on incompatible receiver")}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),c=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),o=n("e330"),c=n("d784"),i=n("d039"),l=n("825a"),u=n("1626"),s=n("5926"),d=n("50c4"),f=n("577e"),v=n("1d80"),p=n("8aa5"),b=n("dc4a"),x=n("0cb2"),g=n("14c3"),m=n("b622"),h=m("replace"),E=Math.max,w=Math.min,y=o([].concat),O=o([].push),j=o("".indexOf),I=o("".slice),R=function(e){return void 0===e?e:String(e)},$=function(){return"$0"==="a".replace(/./,"$0")}(),N=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),k=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));c("replace",(function(e,t,n){var o=N?"$":"$0";return[function(e,n){var r=v(this),o=void 0==e?void 0:b(e,h);return o?a(o,e,r,n):a(t,f(r),e,n)},function(e,a){var c=l(this),i=f(e);if("string"==typeof a&&-1===j(a,o)&&-1===j(a,"$<")){var v=n(t,c,i,a);if(v.done)return v.value}var b=u(a);b||(a=f(a));var m=c.global;if(m){var h=c.unicode;c.lastIndex=0}var $=[];while(1){var N=g(c,i);if(null===N)break;if(O($,N),!m)break;var k=f(N[0]);""===k&&(c.lastIndex=p(i,d(c.lastIndex),h))}for(var V="",D=0,S=0;S<$.length;S++){N=$[S];for(var A=f(N[0]),M=E(w(s(N.index),i.length),0),T=[],P=1;P<N.length;P++)O(T,R(N[P]));var B=N.groups;if(b){var C=y([A],T,M,i);void 0!==B&&O(C,B);var U=f(r(a,void 0,C))}else U=x(A,i,M,T,B,a);M>=D&&(V+=I(i,D,M)+U,D=M+A.length)}return V+I(i,D)}]}),!k||!$||N)},8070:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container vh-100 d-flex justify-content-center align-items-center",id:"app"},o={class:"row justify-content-center w-100"},c={class:"col-md-6 col-lg-3 bg-white rounded p-5 content-box"},i=Object(r["createElementVNode"])("h1",{class:"fw-bold mb-3"},"請先登入",-1),l={class:"form-floating mb-3"},u=Object(r["createElementVNode"])("label",{for:"Email1"},"Email address",-1),s={class:"form-floating mb-3"},d=Object(r["createElementVNode"])("label",{for:"Password"},"Password",-1),f=Object(r["createElementVNode"])("button",{type:"submit",class:"btn btn-primary w-100"},"登入",-1);function v(e,t,n,v,p,b){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(r["withModifiers"])((function(){return v.login&&v.login.apply(v,arguments)}),["prevent"]))},[i,Object(r["createElementVNode"])("div",l,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"email",class:"form-control",id:"Email1","aria-describedby":"email",placeholder:"Email address","onUpdate:modelValue":t[0]||(t[0]=function(e){return v.loginData.username=e})},null,512),[[r["vModelText"],v.loginData.username,void 0,{trim:!0}]]),u]),Object(r["createElementVNode"])("div",s,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",class:"form-control",id:"Password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return v.loginData.password=e})},null,512),[[r["vModelText"],v.loginData.password]]),d]),f],32)])])])}n("99af"),n("ac1f"),n("5319");var p=n("6c02"),b=n("d1f1"),x={setup:function(){var e=Object(p["c"])(),t=Object(b["a"])(),n=t.postLogin,a=Object(r["ref"])({username:"",password:""}),o=function(){console.log(a,a.value),n(a.value).then((function(t){console.log("yes",t);var n=t.data,r=n.token,a=n.expired;console.log(r),document.cookie="user=".concat(r,";expires=").concat(new Date(a),";path=/"),e.replace("dashboard")})).catch((function(e){console.dir(e)}))};return{loginData:a,login:o}}},g=n("d959"),m=n.n(g);const h=m()(x,[["render",v]]);t["default"]=h},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?a.f(e,c,o(0,n)):e[c]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),c=n("ad6d"),i=n("9f7f"),l=n("5692"),u=n("7c73"),s=n("69f3").get,d=n("fce3"),f=n("107c"),v=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,b=p,x=a("".charAt),g=a("".indexOf),m=a("".replace),h=a("".slice),E=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=i.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],O=E||y||w||d||f;O&&(b=function(e){var t,n,a,i,l,d,f,O=this,j=s(O),I=o(e),R=j.raw;if(R)return R.lastIndex=O.lastIndex,t=r(b,R,I),O.lastIndex=R.lastIndex,t;var $=j.groups,N=w&&O.sticky,k=r(c,O),V=O.source,D=0,S=I;if(N&&(k=m(k,"y",""),-1===g(k,"g")&&(k+="g"),S=h(I,O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==x(I,O.lastIndex-1))&&(V="(?: "+V+")",S=" "+S,D++),n=new RegExp("^(?:"+V+")",k)),y&&(n=new RegExp("^"+V+"$(?!\\s)",k)),E&&(a=O.lastIndex),i=r(p,N?n:O,S),N?i?(i.input=h(i.input,D),i[0]=h(i[0],D),i.index=O.lastIndex,O.lastIndex+=i[0].length):O.lastIndex=0:E&&i&&(O.lastIndex=O.global?i.index+i[0].length:a),y&&i&&i.length>1&&r(v,i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&$)for(i.groups=d=u(null),l=0;l<$.length;l++)f=$[l],d[f[0]]=i[f[1]];return i}),e.exports=b},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d039"),c=n("e8b5"),i=n("861d"),l=n("7b0b"),u=n("07fa"),s=n("8418"),d=n("65f0"),f=n("1dde"),v=n("b622"),p=n("2d00"),b=v("isConcatSpreadable"),x=9007199254740991,g="Maximum allowed index exceeded",m=a.TypeError,h=p>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),E=f("concat"),w=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},y=!h||!E;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,a,o,c=l(this),i=d(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?c:arguments[t],w(o)){if(a=u(o),f+a>x)throw m(g);for(n=0;n<a;n++,f++)n in o&&s(i,f,o[n])}else{if(f>=x)throw m(g);s(i,f++,o)}return i.length=f,i}})},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp,c=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=c||r((function(){return!o("a","y").sticky})),l=c||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:i,UNSUPPORTED_Y:c}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),c=n("d039"),i=n("b622"),l=n("9112"),u=i("species"),s=RegExp.prototype;e.exports=function(e,t,n,d){var f=i(e),v=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=v&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!v||!p||n){var b=r(/./[f]),x=t(f,""[e],(function(e,t,n,a,c){var i=r(e),l=t.exec;return l===o||l===s.exec?v&&!c?{done:!0,value:b(t,n,a)}:{done:!0,value:i(n,t,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(s,f,x[1])}d&&l(s[f],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-e15707ea.b0834efc.js.map