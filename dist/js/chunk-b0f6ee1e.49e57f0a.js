(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0f6ee1e"],{"00b4":function(e,t,c){"use strict";c("ac1f");var n=c("23e7"),a=c("da84"),l=c("c65b"),r=c("e330"),o=c("1626"),s=c("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=a.Error,u=r(/./.test);n({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!o(t))return u(this,e);var c=l(t,this,e);if(null!==c&&!s(c))throw new d("RegExp exec method returned something other than an Object or null");return!!c}})},"107c":function(e,t,c){var n=c("d039"),a=c("da84"),l=a.RegExp;e.exports=n((function(){var e=l("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"284b":function(e,t,c){"use strict";var n=c("7a23"),a=c("d1f1"),l={props:["propShoppingCart"],emits:["emit-put-cart","emit-delete-cart","emit-delete-all-cart"],setup:function(e,t){var c=t.emit;console.log(e);var l=Object(n["toRefs"])(e),r=l.propShoppingCart;console.log(e,r);var o=Object(a["a"])(),s=o.putCart,i=o.deleteCart,d=o.deleteCartAll,u=o.getCart,b=function(e){console.log("productInfo",e.product_id),console.log(e),s(e).then((function(){return u(!1)})).then((function(e){c("emit-put-cart",e.data.data)})).catch((function(e){console.log(e)}))},m=function(e){i(e).then((function(){return u(!1)})).catch((function(e){console.log(e)})).then((function(e){c("emit-delete-cart",e.data.data)})).catch((function(e){console.log(e)}))},p=function(){d().then((function(){c("emit-delete-all-cart")})).catch((function(e){console.log(e)}))};return{changeQty:b,emitDeleteCart:m,emitDeleteCartAll:p}}};t["a"]=l},"3b0b":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a={class:"container",id:"vue-shpopping-cart"},l={class:"row justify-content-center"},r=Object(n["createElementVNode"])("h1",{class:"text-center mb-3"},"我的購物車",-1),o={class:"col-lg-8 mb-4 mb-lg-0 d-flex flex-column justify-content-between"},s={class:"table-responsive"},i={class:"table"},d=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",{class:"row g-0 d-none d-md-flex"},[Object(n["createElementVNode"])("th",{scope:"col",class:"col-5"},"品項"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"單價"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"數量"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-2"},"金額"),Object(n["createElementVNode"])("th",{scope:"col",class:"col-1"})])],-1),u={id:"totalPrice",class:""},b={class:"col-lg-4"},m={class:"mb-3"},p=Object(n["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),f={class:"mb-3"},O=Object(n["createElementVNode"])("label",{for:"name",class:"form-label"},"姓名",-1),g={class:"mb-3"},j=Object(n["createElementVNode"])("label",{for:"phone",class:"form-label"},"電話",-1),E={class:"mb-3"},h=Object(n["createElementVNode"])("label",{for:"address",class:"form-label"},"地址",-1),v={class:"mb-3"},V=Object(n["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),N=["disabled"];function x(e,t,c,x,C,y){var k=Object(n["resolveComponent"])("CartTable"),I=Object(n["resolveComponent"])("field"),S=Object(n["resolveComponent"])("error-message"),w=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",l,[r,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("table",i,[d,Object(n["createElementVNode"])("tbody",null,[Object(n["createVNode"])(k,{propShoppingCart:x.cartData,onEmitDeleteCart:x.refreshCart,onEmitDeleteAllCart:x.refreshCart,onEmitPutCart:x.refreshCart},null,8,["propShoppingCart","onEmitDeleteCart","onEmitDeleteAllCart","onEmitPutCart"])])])]),Object(n["createElementVNode"])("div",u,"總計 - NT$ "+Object(n["toDisplayString"])(x.cartData.final_total)+" 元",1)]),Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(w,{onSubmit:x.onSubmit},{default:Object(n["withCtx"])((function(e){var c=e.errors;return[Object(n["createElementVNode"])("div",m,[p,Object(n["createVNode"])(I,{id:"email",name:"email",type:"email",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["email"]}]),modelValue:x.orderInfo.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.orderInfo.email=e}),rules:"email|required",placeholder:"請輸入 Email"},null,8,["modelValue","class"]),Object(n["createVNode"])(S,{name:"email",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",f,[O,Object(n["createVNode"])(I,{id:"name",name:"姓名",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),modelValue:x.orderInfo.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return x.orderInfo.name=e}),rules:"required",placeholder:"請輸入姓名"},null,8,["class","modelValue"]),Object(n["createVNode"])(S,{name:"姓名",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",g,[j,Object(n["createVNode"])(I,{id:"phone",name:"電話",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),modelValue:x.orderInfo.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return x.orderInfo.tel=e}),rules:x.isPhone,placeholder:"請輸入電話"},null,8,["class","modelValue","rules"]),Object(n["createVNode"])(S,{name:"電話",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",E,[h,Object(n["createVNode"])(I,{id:"address",name:"地址",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),rules:"required",modelValue:x.orderInfo.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.orderInfo.address=e}),placeholder:"請輸入地址"},null,8,["modelValue","class"]),Object(n["createVNode"])(S,{name:"地址",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",v,[V,Object(n["createVNode"])(I,{id:"message",name:"留言",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["留言"]}]),rules:"required",modelValue:x.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.message=e}),placeholder:"請輸入留言",as:"textarea"},null,8,["modelValue","class"]),Object(n["createVNode"])(S,{name:"留言",class:"invalid-feedback"})]),Object(n["createElementVNode"])("button",{class:"btn btn-primary",type:"submit",disabled:""===x.cartData}," 送出訂單 ",8,N)]})),_:1},8,["onSubmit"])])])])}c("ac1f"),c("00b4");var C=c("d1f1"),y={class:"col-md-5 border-0"},k={class:"d-flex align-items-center"},I=["src"],S={class:"ms-2 fs-4 mb-0"},w={class:"col-md-2 border-0"},D={class:"col-md-2 border-0"},R={class:"fs-4 d-flex align-items-center"},B=["onClick"],_=Object(n["createElementVNode"])("i",{class:"bi bi-dash"},null,-1),q=[_],A=["value"],T=["onClick"],P=Object(n["createElementVNode"])("i",{class:"bi bi-plus"},null,-1),U=[P],z={class:"col-md-2 border-0"},$=["onClick"],F=Object(n["createElementVNode"])("span",{class:"cursor-pointer"},[Object(n["createElementVNode"])("i",{class:"bi bi-x-lg"})],-1),K=[F],L={key:0},Q=Object(n["createElementVNode"])("button",{class:"btn btn-danger bg-danger",type:"button"},"全部刪除",-1),J=[Q],Y={key:1,class:"text-danger text-center py-5"};function M(e,t,c,a,l,r){return e.propShoppingCart.hasOwnProperty("carts")&&e.propShoppingCart.carts.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.propShoppingCart.carts,(function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:c,class:"row g-0 align-items-center"},[Object(n["createElementVNode"])("td",y,[Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("img",{class:"col-6",src:t.product.imageUrl,alt:""},null,8,I),Object(n["createElementVNode"])("h3",S,Object(n["toDisplayString"])(t.product.title),1)])]),Object(n["createElementVNode"])("td",w,"NT$ "+Object(n["toDisplayString"])(t.product.price.toLocaleString())+" 元",1),Object(n["createElementVNode"])("td",D,[Object(n["createElementVNode"])("div",R,[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(["d-block pe-2 | cursor-pointer",{"cursor-not-allowed":t.qty-1==0}]),onClick:function(c){return e.changeQty({config:{qty:t.qty-1,product_id:t.product_id},id:t.id})}},q,10,B),Object(n["createElementVNode"])("input",{class:"col-5 text-center",type:"number",readonly:"",value:t.qty},null,8,A),Object(n["createElementVNode"])("span",{class:"d-block ps-2 | cursor-pointer",onClick:function(c){return e.changeQty({config:{qty:t.qty+1,product_id:t.product_id},id:t.id})}},U,8,T)])]),Object(n["createElementVNode"])("td",z,"NT$ "+Object(n["toDisplayString"])(t.final_total.toLocaleString())+" 元",1),Object(n["createElementVNode"])("td",{class:"col-md-1 border-0",onClick:function(c){return e.emitDeleteCart(t.id)}},K,8,$)])})),128)),e.propShoppingCart.carts.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",L,[Object(n["createElementVNode"])("td",{class:"col-md-1 border-0",onClick:t[0]||(t[0]=function(t){return e.emitDeleteCartAll()})},J)])):Object(n["createCommentVNode"])("",!0)],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h2",Y,"尚無資料"))}var X=c("284b"),G=X["a"],H=c("d959"),W=c.n(H);const Z=W()(G,[["render",M]]);var ee=Z,te={components:{CartTable:ee},setup:function(){var e=Object(C["a"])(),t=e.getCart,c=e.postOrder,a=Object(n["ref"])({});t().then((function(e){console.log(e,"cart 0k"),a.value=e.data.data}));var l=Object(n["ref"])({email:"",name:"",tel:"",address:""}),r=Object(n["ref"])(""),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{carts:[],total:0,final_total:0};a.value=e},s=function(){c({orderInfo:l.value,message:r.value}).then((function(e){console.log(e),o()})).catch((function(e){console.dir(e)}))},i=function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"};return{cartData:a,refreshCart:o,message:r,orderInfo:l,onSubmit:s,isPhone:i}}};const ce=W()(te,[["render",x]]);t["default"]=ce},9263:function(e,t,c){"use strict";var n=c("c65b"),a=c("e330"),l=c("577e"),r=c("ad6d"),o=c("9f7f"),s=c("5692"),i=c("7c73"),d=c("69f3").get,u=c("fce3"),b=c("107c"),m=s("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,f=p,O=a("".charAt),g=a("".indexOf),j=a("".replace),E=a("".slice),h=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=o.BROKEN_CARET,V=void 0!==/()??/.exec("")[1],N=h||V||v||u||b;N&&(f=function(e){var t,c,a,o,s,u,b,N=this,x=d(N),C=l(e),y=x.raw;if(y)return y.lastIndex=N.lastIndex,t=n(f,y,C),N.lastIndex=y.lastIndex,t;var k=x.groups,I=v&&N.sticky,S=n(r,N),w=N.source,D=0,R=C;if(I&&(S=j(S,"y",""),-1===g(S,"g")&&(S+="g"),R=E(C,N.lastIndex),N.lastIndex>0&&(!N.multiline||N.multiline&&"\n"!==O(C,N.lastIndex-1))&&(w="(?: "+w+")",R=" "+R,D++),c=new RegExp("^(?:"+w+")",S)),V&&(c=new RegExp("^"+w+"$(?!\\s)",S)),h&&(a=N.lastIndex),o=n(p,I?c:N,R),I?o?(o.input=E(o.input,D),o[0]=E(o[0],D),o.index=N.lastIndex,N.lastIndex+=o[0].length):N.lastIndex=0:h&&o&&(N.lastIndex=N.global?o.index+o[0].length:a),V&&o&&o.length>1&&n(m,o[0],c,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&k)for(o.groups=u=i(null),s=0;s<k.length;s++)b=k[s],u[b[0]]=o[b[1]];return o}),e.exports=f},"9f7f":function(e,t,c){var n=c("d039"),a=c("da84"),l=a.RegExp,r=n((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=r||n((function(){return!l("a","y").sticky})),s=r||n((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:o,UNSUPPORTED_Y:r}},ac1f:function(e,t,c){"use strict";var n=c("23e7"),a=c("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,c){"use strict";var n=c("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,c){var n=c("83ab"),a=c("5e77").EXISTS,l=c("e330"),r=c("9bf2").f,o=Function.prototype,s=l(o.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=l(i.exec),u="name";n&&!a&&r(o,u,{configurable:!0,get:function(){try{return d(i,s(this))[1]}catch(e){return""}}})},fce3:function(e,t,c){var n=c("d039"),a=c("da84"),l=a.RegExp;e.exports=n((function(){var e=l(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-b0f6ee1e.49e57f0a.js.map