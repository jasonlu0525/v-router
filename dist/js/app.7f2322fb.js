(function(e){function t(t){for(var o,r,l=t[0],s=t[1],i=t[2],b=0,u=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,i||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],o=!0,l=1;l<c.length;l++){var s=c[l];0!==a[s]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=c[0]))}return e}var o={},a={app:0},n=[];function r(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=o,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(c,o,function(t){return e[t]}.bind(null,o));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/v-router/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=s;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0ce1":function(e,t,c){"use strict";c("2b98")},"2b98":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d"),c("d3b7"),c("159b"),c("b64b");var o=c("7bb1"),a=c("3aa8"),n=c("cbdf"),r=c("9457"),l=c("7a23"),s=c("bc3a"),i=c.n(s),d=c("130e"),b=c("9062"),u=c.n(b),m=c("6c02"),p=(c("b0c0"),{class:"container",id:"vue-shpopping-cart"}),j={class:"row justify-content-center"},O=Object(l["createElementVNode"])("h1",{class:"text-center mb-3"},"我的購物車",-1),f={class:"col-lg-8 mb-4 mb-lg-0 d-flex flex-column justify-content-between"},g={class:"table-responsive"},h={class:"table"},v=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr",{class:"row g-0 d-none d-md-flex"},[Object(l["createElementVNode"])("th",{scope:"col",class:"col-5"},"品項"),Object(l["createElementVNode"])("th",{scope:"col",class:"col-2"},"單價"),Object(l["createElementVNode"])("th",{scope:"col",class:"col-2"},"數量"),Object(l["createElementVNode"])("th",{scope:"col",class:"col-2"},"金額"),Object(l["createElementVNode"])("th",{scope:"col",class:"col-1"})])],-1),V={id:"totalPrice",class:""},N={class:"col-lg-4"},E={class:"mb-3"},k=Object(l["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),C={class:"mb-3"},y=Object(l["createElementVNode"])("label",{for:"name",class:"form-label"},"姓名",-1),x={class:"mb-3"},w=Object(l["createElementVNode"])("label",{for:"phone",class:"form-label"},"電話",-1),D={class:"mb-3"},P=Object(l["createElementVNode"])("label",{for:"address",class:"form-label"},"地址",-1),B={class:"mb-3"},S=Object(l["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),_=["disabled"];function T(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("CartTables"),s=Object(l["resolveComponent"])("field"),i=Object(l["resolveComponent"])("error-message"),d=Object(l["resolveComponent"])("Form");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",p,[Object(l["createElementVNode"])("div",j,[O,Object(l["createElementVNode"])("div",f,[Object(l["createElementVNode"])("div",g,[Object(l["createElementVNode"])("table",h,[v,Object(l["createElementVNode"])("tbody",null,[Object(l["createVNode"])(r,{propShoppingCart:o.cartData,onEmitDeleteCart:o.refreshCart,onEmitDeleteAllCart:o.refreshCart,onEmitPutCart:o.refreshCart},null,8,["propShoppingCart","onEmitDeleteCart","onEmitDeleteAllCart","onEmitPutCart"])])])]),Object(l["createElementVNode"])("div",V,"總計 - NT$ "+Object(l["toDisplayString"])(o.cartData.final_total)+" 元",1)]),Object(l["createElementVNode"])("div",N,[Object(l["createVNode"])(d,{onSubmit:o.onSubmit},{default:Object(l["withCtx"])((function(e){var c=e.errors;return[Object(l["createElementVNode"])("div",E,[k,Object(l["createVNode"])(s,{id:"email",name:"email",type:"email",class:Object(l["normalizeClass"])(["form-control",{"is-invalid":c["email"]}]),modelValue:o.orderInfo.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.orderInfo.email=e}),rules:"email|required",placeholder:"請輸入 Email"},null,8,["modelValue","class"]),Object(l["createVNode"])(i,{name:"email",class:"invalid-feedback"})]),Object(l["createElementVNode"])("div",C,[y,Object(l["createVNode"])(s,{id:"name",name:"姓名",type:"text",class:Object(l["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),modelValue:o.orderInfo.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.orderInfo.name=e}),rules:"required",placeholder:"請輸入姓名"},null,8,["class","modelValue"]),Object(l["createVNode"])(i,{name:"姓名",class:"invalid-feedback"})]),Object(l["createElementVNode"])("div",x,[w,Object(l["createVNode"])(s,{id:"phone",name:"電話",type:"text",class:Object(l["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),modelValue:o.orderInfo.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.orderInfo.tel=e}),rules:o.isPhone,placeholder:"請輸入電話"},null,8,["class","modelValue","rules"]),Object(l["createVNode"])(i,{name:"電話",class:"invalid-feedback"})]),Object(l["createElementVNode"])("div",D,[P,Object(l["createVNode"])(s,{id:"address",name:"地址",type:"text",class:Object(l["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),rules:"required",modelValue:o.orderInfo.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.orderInfo.address=e}),placeholder:"請輸入地址"},null,8,["modelValue","class"]),Object(l["createVNode"])(i,{name:"地址",class:"invalid-feedback"})]),Object(l["createElementVNode"])("div",B,[S,Object(l["createVNode"])(s,{id:"message",name:"留言",type:"text",class:Object(l["normalizeClass"])(["form-control",{"is-invalid":c["留言"]}]),rules:"required",modelValue:o.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.message=e}),placeholder:"請輸入留言",as:"textarea"},null,8,["modelValue","class"]),Object(l["createVNode"])(i,{name:"留言",class:"invalid-feedback"})]),Object(l["createElementVNode"])("button",{class:"btn btn-primary",type:"submit",disabled:""===o.cartData}," 送出訂單 ",8,_)]})),_:1},8,["onSubmit"])])])])}c("ac1f"),c("00b4");var L=c("1940"),M=c.n(L),q=function(){var e="https://vue3-course-api.hexschool.io/v2",t=function(){return Object(b["useLoading"])().show()},c=function(e,t,c){console.log(e,t,c),M()({title:e,text:t,icon:c,buttons:!1}),setTimeout((function(){M.a.getState().isOpen&&M.a.close()}),1e3)};function o(o){var a,n=o.method,r=o.path,l=o.config,s=void 0===l?"":l,d=o.generateLoader,b=void 0===d||d,u=o.Authorization,m=void 0!==u&&u,p=i.a.create({baseURL:e});m&&(p.defaults.headers.common.Authorization=m),p.interceptors.request.use((function(e){return console.log("yes",e),a=b?t():null,e}),(function(e){return console.dir("err",e),Promise.reject(e)})),p.interceptors.response.use((function(e){return console.log("yes",e),b&&a.hide(),console.log("api/user/check"!==r),"get"!==n.toLowerCase()&&"api/user/check"!==r&&c(e.data.message," ",e.data.success?"success":"error"),e}),(function(e){return console.dir("err",e),b&&a.hide(),c(e.response.data.message,"",e.response.data.success?"success":"error"),Promise.reject(e)}));var j=p[n]("/".concat(r),s);return j}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return o({method:"get",path:"api/jason/products?page=".concat(e),generateLoader:t})},n=function(e,t){return o({method:"post",path:"api/jason/cart",config:{data:e},generateLoader:t})},r=function(e){return o({method:"get",path:"api/jason/cart",generateLoader:e})},l=function(e,t){return o({method:"put",path:"api/jason/cart/".concat(e.id),config:{data:e.config},generateLoader:t})},s=function(e,t){return o({method:"delete",path:"api/jason/cart/".concat(e),generateLoader:t})},d=function(e){return o({method:"delete",path:"api/jason/carts",generateLoader:e})},u=function(e,t){return o({method:"post",path:"admin/signin",config:e,generateLoader:t})},m=function(e){var t=e.generateLoader,c=void 0===t||t,a=e.token;return o({method:"post",path:"api/user/check",generateLoader:c,Authorization:a})},p=function(e){var t=e.generateLoader,c=void 0===t||t,a=e.orderInfo,n=e.message;return o({method:"post",path:"api/jason/order",config:{data:{user:a,message:n}},generateLoader:c})},j=function(e){var t=e.page,c=void 0===t?1:t,a=e.generateLoader,n=void 0===a||a;return o({method:"get",path:"api/jason/admin/orders?page=".concat(c),generateLoader:n})};return{loader:t,getProduct:a,postCart:n,getCart:r,putCart:l,deleteCart:s,postLogin:u,postLoginCheck:m,postOrder:p,deleteCartAll:d,getAdminOrder:j}},z={class:"col-md-5 border-0"},A={class:"d-flex align-items-center"},F=["src"],I={class:"ms-2 fs-4 mb-0"},U={class:"col-md-2 border-0"},$={class:"col-md-2 border-0"},Q={class:"fs-4 d-flex align-items-center"},H=["onClick"],J=Object(l["createElementVNode"])("i",{class:"bi bi-dash"},null,-1),R=[J],W=["value"],G=["onClick"],K=Object(l["createElementVNode"])("i",{class:"bi bi-plus"},null,-1),X=[K],Y={class:"col-md-2 border-0"},Z=["onClick"],ee=Object(l["createElementVNode"])("span",{class:"cursor-pointer"},[Object(l["createElementVNode"])("i",{class:"bi bi-x-lg"})],-1),te=[ee],ce={key:0},oe=Object(l["createElementVNode"])("button",{class:"btn btn-danger bg-danger",type:"button"},"全部刪除",-1),ae=[oe],ne={key:1,class:"text-danger text-center py-5"};function re(e,t,c,o,a,n){return e.propShoppingCart.hasOwnProperty("carts")&&e.propShoppingCart.carts.length>0?(Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],{key:0},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.propShoppingCart.carts,(function(t,c){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:c,class:"row g-0 align-items-center"},[Object(l["createElementVNode"])("td",z,[Object(l["createElementVNode"])("div",A,[Object(l["createElementVNode"])("img",{class:"col-6",src:t.product.imageUrl,alt:""},null,8,F),Object(l["createElementVNode"])("h3",I,Object(l["toDisplayString"])(t.product.title),1)])]),Object(l["createElementVNode"])("td",U,"NT$ "+Object(l["toDisplayString"])(t.product.price.toLocaleString())+" 元",1),Object(l["createElementVNode"])("td",$,[Object(l["createElementVNode"])("div",Q,[Object(l["createElementVNode"])("span",{class:Object(l["normalizeClass"])(["d-block pe-2 | cursor-pointer",{"cursor-not-allowed":t.qty-1==0}]),onClick:function(c){return e.changeQty({config:{qty:t.qty-1,product_id:t.product_id},id:t.id})}},R,10,H),Object(l["createElementVNode"])("input",{class:"col-5 text-center",type:"number",readonly:"",value:t.qty},null,8,W),Object(l["createElementVNode"])("span",{class:"d-block ps-2 | cursor-pointer",onClick:function(c){return e.changeQty({config:{qty:t.qty+1,product_id:t.product_id},id:t.id})}},X,8,G)])]),Object(l["createElementVNode"])("td",Y,"NT$ "+Object(l["toDisplayString"])(t.final_total.toLocaleString())+" 元",1),Object(l["createElementVNode"])("td",{class:"col-md-1 border-0",onClick:function(c){return e.emitDeleteCart(t.id)}},te,8,Z)])})),128)),e.propShoppingCart.carts.length>0?(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",ce,[Object(l["createElementVNode"])("td",{class:"col-md-1 border-0",onClick:t[0]||(t[0]=function(t){return e.emitDeleteCartAll()})},ae)])):Object(l["createCommentVNode"])("",!0)],64)):(Object(l["openBlock"])(),Object(l["createElementBlock"])("h2",ne,"尚無資料"))}var le={props:["propShoppingCart"],emits:["emit-put-cart","emit-delete-cart","emit-delete-all-cart"],setup:function(e,t){var c=t.emit;console.log(e);var o=Object(l["toRefs"])(e),a=o.propShoppingCart;console.log(e,a);var n=q(),r=n.putCart,s=n.deleteCart,i=n.deleteCartAll,d=n.getCart,b=function(e){console.log("productInfo",e.product_id),console.log(e),r(e).then((function(){return d(!1)})).then((function(e){c("emit-put-cart",e.data.data)})).catch((function(e){console.log(e)}))},u=function(e){s(e).then((function(){return d(!1)})).catch((function(e){console.log(e)})).then((function(e){c("emit-delete-cart",e.data.data)})).catch((function(e){console.log(e)}))},m=function(){i().then((function(){c("emit-delete-all-cart")})).catch((function(e){console.log(e)}))};return{changeQty:b,emitDeleteCart:u,emitDeleteCartAll:m}}},se=le,ie=se,de=c("d959"),be=c.n(de);const ue=be()(ie,[["render",re]]);var me=ue,pe={components:{CartTables:me},setup:function(){var e=q(),t=e.getCart,c=e.postOrder,o=Object(l["ref"])({});t().then((function(e){console.log(e,"cart 0k"),o.value=e.data.data}));var a=Object(l["ref"])({email:"",name:"",tel:"",address:""}),n=Object(l["ref"])(""),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{carts:[],total:0,final_total:0};o.value=e},s=function(){c({orderInfo:a.value,message:n.value}).then((function(e){console.log(e),r()})).catch((function(e){console.dir(e)}))},i=function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"};return{cartData:o,refreshCart:r,message:n,orderInfo:a,onSubmit:s,isPhone:i}}};const je=be()(pe,[["render",T]]);var Oe=je,fe=(c("a4d3"),c("e01a"),{class:"container"}),ge=Object(l["createElementVNode"])("h2",null,"產品",-1),he=Object(l["createElementVNode"])("ul",{class:"mb-0"},[Object(l["createElementVNode"])("li",null,[Object(l["createElementVNode"])("a",{href:"#",class:"d-block","data-bs-toggle":"offcanvas","data-bs-target":"#shpping-cart"},[Object(l["createTextVNode"])("購物車 "),Object(l["createElementVNode"])("i",{class:"bi bi-cart-fill"})])])],-1),ve={class:"row justify-content-end"},Ve={class:"col-lg-10 mb-3"},Ne={class:"row list-unstyled"},Ee={class:"card"},ke={class:"card-hover"},Ce=["src","alt"],ye={class:"card-body"},xe={class:"card-title"},we={class:"card-text"},De=Object(l["createTextVNode"])(" 原價 :"),Pe={class:"row"},Be={class:"col-6"},Se=["onClick"],_e={class:"col-6"},Te=["onClick"];function Le(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("offfanvas-shopping-cart"),s=Object(l["resolveComponent"])("detail-modal"),i=Object(l["resolveComponent"])("pagination");return Object(l["openBlock"])(),Object(l["createElementBlock"])("section",fe,[ge,he,Object(l["createVNode"])(r,{"prop-shopping-cart":o.cartData,onEmitDeleteCart:o.refreshCart,onEmitPutCart:o.refreshCart},null,8,["prop-shopping-cart","onEmitDeleteCart","onEmitPutCart"]),Object(l["createElementVNode"])("div",ve,[Object(l["createElementVNode"])("div",Ve,[Object(l["createElementVNode"])("ul",Ne,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(o.productData.products,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{class:"col-md-6 col-lg-4 mb-3 p-3",key:e.id},[Object(l["createElementVNode"])("div",Ee,[Object(l["createElementVNode"])("div",ke,[Object(l["createElementVNode"])("img",{src:e.imageUrl,class:"card-img card-img-top",alt:e.description},null,8,Ce),Object(l["createElementVNode"])("div",ye,[Object(l["createElementVNode"])("h5",xe,Object(l["toDisplayString"])(e.title),1),Object(l["createElementVNode"])("p",we,Object(l["toDisplayString"])(e.description),1),Object(l["createElementVNode"])("p",null,[De,Object(l["createElementVNode"])("del",null,Object(l["toDisplayString"])(e.origin_price.toLocaleString())+"元",1),Object(l["createTextVNode"])("/"+Object(l["toDisplayString"])(e.unit),1)]),Object(l["createElementVNode"])("p",null,"特價 : "+Object(l["toDisplayString"])(e.price.toLocaleString())+"元/"+Object(l["toDisplayString"])(e.unit),1),Object(l["createElementVNode"])("div",Pe,[Object(l["createElementVNode"])("div",Be,[Object(l["createElementVNode"])("a",{href:"#",class:"w-100 btn btn-primary stretcked-link",onClick:Object(l["withModifiers"])((function(t){return o.addToCart({product_id:e.id,qty:1})}),["prevent"])},"加入購物車",8,Se)]),Object(l["createElementVNode"])("div",_e,[Object(l["createElementVNode"])("a",{href:"#",class:"w-100 btn btn-secondary stretcked-link",onClick:Object(l["withModifiers"])((function(t){return o.createModal(e)}),["prevent"])},"了解更多",8,Te)])])])])])])})),128))]),Object(l["createVNode"])(s,{ref:"detailModalDom",onEmitAddToCart:o.addToCart},null,8,["onEmitAddToCart"]),Object(l["createVNode"])(i,{"prop-pagination":o.productData.pagination,onEmitChangePage:o.onChangePage},null,8,["prop-pagination","onEmitChangePage"])])])])}var Me=c("7b17"),qe={class:"pagination justify-content-end"},ze=Object(l["createElementVNode"])("a",{class:"page-link",href:"#"},"上一頁",-1),Ae=[ze],Fe=["onClick"],Ie={class:"page-link",href:"#"},Ue=Object(l["createElementVNode"])("a",{class:"page-link",href:"#"},"下一頁",-1),$e=[Ue];function Qe(e,t,c,o,a,n){return Object(l["openBlock"])(),Object(l["createElementBlock"])("ul",qe,[Object(l["createElementVNode"])("li",{class:Object(l["normalizeClass"])(["page-item",{disabled:!c.propPagination.has_pre}]),onClick:t[0]||(t[0]=Object(l["withModifiers"])((function(e){return o.changePage({hasPrevOrNextPage:c.propPagination.has_pre,page:c.propPagination.current_page-1})}),["prevent"]))},Ae,2),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(c.propPagination.total_pages,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{class:Object(l["normalizeClass"])(["page-item",{active:e===c.propPagination.current_page}]),key:e,onClick:Object(l["withModifiers"])((function(t){return o.changePage({hasPrevOrNextPage:!0,page:e})}),["prevent"])},[Object(l["createElementVNode"])("a",Ie,Object(l["toDisplayString"])(e),1)],10,Fe)})),128)),Object(l["createElementVNode"])("li",{class:Object(l["normalizeClass"])(["page-item",{disabled:!c.propPagination.has_next}]),onClick:t[1]||(t[1]=Object(l["withModifiers"])((function(e){return o.changePage({hasPrevOrNextPage:c.propPagination.has_next,page:c.propPagination.current_page+1})}),["prevent"]))},$e,2)])}var He={props:["propPagination"],setup:function(e,t){var c=t.emit,o=function(e){e.hasPrevOrNextPage&&c("emit-change-page",e.page)};return{changePage:o}}};const Je=be()(He,[["render",Qe]]);var Re=Je,We={class:"offcanvas offcanvas-end",tabindex:"-1",id:"shpping-cart","aria-labelledby":"offcanvasTopLabel"},Ge=Object(l["createElementVNode"])("div",{class:"offcanvas-header align-items-center bg-dark text-white"},[Object(l["createElementVNode"])("h3",{class:"mb-0",id:"offcanvasTopLabel "},"購物車"),Object(l["createElementVNode"])("button",{type:"button",class:"btn-close text-reset bg-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),Ke={class:"offcanvas-body d-flex flex-column justify-content-between off-canvas-scrollbar"},Xe={class:"list-unstyled mb-0"},Ye={class:"col-5"},Ze=["src"],et={class:"col-5 d-flex flex-column justify-content-between"},tt={class:"fs-1 d-flex justify-content-center align-items-center"},ct=["onClick"],ot=Object(l["createElementVNode"])("i",{class:"bi bi-dash"},null,-1),at=[ot],nt={class:"px-2"},rt=["onClick"],lt=Object(l["createElementVNode"])("i",{class:"bi bi-plus"},null,-1),st=[lt],it=["onClick"],dt=Object(l["createElementVNode"])("i",{class:"bi bi-trash-fill fs-4 link"},null,-1),bt=[dt],ut={class:"position-absolute start-0 end-0 bottom-0 mb-0 bg-white px-3 py-4"},mt={class:"fw-bold mb-3"},pt=Object(l["createTextVNode"])("前往購物車");function jt(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("router-link");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",We,[Ge,Object(l["createElementVNode"])("div",Ke,[Object(l["createElementVNode"])("ul",Xe,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.propShoppingCart.carts,(function(t,c){return Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:c,class:"row mb-3 align-items-center text-dark"},[Object(l["createElementVNode"])("div",Ye,[Object(l["createElementVNode"])("img",{src:t.product.imageUrl,alt:""},null,8,Ze)]),Object(l["createElementVNode"])("div",et,[Object(l["createElementVNode"])("h4",null,Object(l["toDisplayString"])(t.product.title),1),Object(l["createElementVNode"])("div",tt,[Object(l["createElementVNode"])("span",{class:Object(l["normalizeClass"])(["d-block pe-2 | cursor-pointer",{"cursor-not-allowed":t.qty-1==0}]),onClick:function(c){return e.changeQty({config:{qty:t.qty-1,product_id:t.product_id},id:t.id})}},at,10,ct),Object(l["createElementVNode"])("span",nt,Object(l["toDisplayString"])(t.qty),1),Object(l["createElementVNode"])("span",{class:"d-block ps-2 | cursor-pointer",onClick:function(c){return e.changeQty({config:{qty:t.qty+1,product_id:t.product_id},id:t.id})}},st,8,rt)])]),Object(l["createElementVNode"])("a",{href:"#",class:"col-2 text-center",onClick:function(c){return e.emitDeleteCart(t.id)},title:"確定要刪掉嗎 QQ"},bt,8,it)])})),128))]),Object(l["createElementVNode"])("section",ut,[Object(l["createElementVNode"])("h3",mt,"總計: "+Object(l["toDisplayString"])(e.propShoppingCart.final_total)+"元",1),Object(l["createVNode"])(r,{class:"btn btn-dark w-100",to:"/cart"},{default:Object(l["withCtx"])((function(){return[pt]})),_:1})])])])}var Ot=se;const ft=be()(Ot,[["render",jt]]);var gt=ft,ht={class:"modal fade",id:"detailModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},vt={class:"modal-dialog modal-lg modal-dialog-centered"},Vt={class:"modal-content"},Nt={class:"modal-header bg-dark text-white"},Et={class:"modal-title"},kt=Object(l["createElementVNode"])("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ct={class:"modal-body"},yt={class:"row"},xt={class:"col-lg-6"},wt=["src"],Dt={class:"col-lg-6 d-flex flex-column justify-content-between"},Pt={class:"badge bg-primary mb-3"},Bt={class:"mb-3"};function St(e,t,c,o,a,n){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",ht,[Object(l["createElementVNode"])("div",vt,[Object(l["createElementVNode"])("div",Vt,[Object(l["createElementVNode"])("div",Nt,[Object(l["createElementVNode"])("h5",Et,Object(l["toDisplayString"])(o.singleProductData.title),1),kt]),Object(l["createElementVNode"])("div",Ct,[Object(l["createElementVNode"])("div",yt,[Object(l["createElementVNode"])("div",xt,[Object(l["createElementVNode"])("img",{src:o.singleProductData.imageUrl},null,8,wt)]),Object(l["createElementVNode"])("div",Dt,[Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("span",Pt,Object(l["toDisplayString"])(o.singleProductData.category),1),Object(l["createElementVNode"])("p",Bt,Object(l["toDisplayString"])(o.singleProductData.description),1),Object(l["createElementVNode"])("p",null,[Object(l["createTextVNode"])(" NT$ "+Object(l["toDisplayString"])(o.singleProductData.price)+" ",1),Object(l["createElementVNode"])("del",null,Object(l["toDisplayString"])(o.singleProductData.origin_price),1)])]),Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=function(t){return e.$emit("emit-addToCart",{product_id:o.singleProductData.id,qty:1})})}," 加入購物車 ")])])])])])])}var _t={setup:function(){var e=Object(l["ref"])({});console.log(e);var t=null;return{singleProductData:e,detailModal:t}}};const Tt=be()(_t,[["render",St]]);var Lt=Tt,Mt={components:{pagination:Re,detailModal:Lt,offfanvasShoppingCart:gt},setup:function(){var e=q(),t=e.getProduct,c=e.postCart,o=e.getCart,a=Object(l["ref"])({}),n=Object(l["ref"])({}),r=Object(l["ref"])(null);t().then((function(e){console.log(e,"product 0k"),a.value=e.data})),o().then((function(e){console.log(e,"cart 0k"),n.value=e.data.data}));var s=function(e){console.log(e),t(e).then((function(e){console.log(e),a.value=e.data}))},i=function(e){console.log(e),c(e).then((function(){o(!1).then((function(e){console.log(e,"cart 0k"),n.value=e.data.data}))})).catch((function(e){console.dir(e)}))},d=function(e){n.value=e},b=function(e){console.log(e),r.value.detailModal=new Me["a"](document.querySelector("#detailModal")).show(),r.value.singleProductData=e,console.log(r)};return{productData:a,cartData:n,detailModalDom:r,onChangePage:s,addToCart:i,createModal:b,refreshCart:d}}};const qt=be()(Mt,[["render",Le]]);var zt=qt,At={class:"home"},Ft={class:"d-flex justify-content-center"},It=Object(l["createTextVNode"])("cart"),Ut=Object(l["createTextVNode"])(" | "),$t=Object(l["createTextVNode"])("product"),Qt=Object(l["createTextVNode"])(" | "),Ht=Object(l["createTextVNode"])("login"),Jt=Object(l["createTextVNode"])(" | "),Rt=Object(l["createTextVNode"])("後台 - 訂單"),Wt=Object(l["createTextVNode"])(" | "),Gt=Object(l["createTextVNode"])("後台 - 產品");function Kt(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("router-link"),s=Object(l["resolveComponent"])("router-view");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createElementVNode"])("div",At,[Object(l["createElementVNode"])("div",Ft,[Object(l["createVNode"])(r,{class:"px-3",to:"/cart"},{default:Object(l["withCtx"])((function(){return[It]})),_:1}),Ut,Object(l["createVNode"])(r,{class:"px-3",to:"/"},{default:Object(l["withCtx"])((function(){return[$t]})),_:1}),Qt,Object(l["createVNode"])(r,{class:"px-3",to:"/login"},{default:Object(l["withCtx"])((function(){return[Ht]})),_:1}),Jt,Object(l["createVNode"])(r,{class:"px-3",to:"/dashboard"},{default:Object(l["withCtx"])((function(){return[Rt]})),_:1}),Wt,Object(l["createVNode"])(r,{class:"px-3",to:"/dashboard/product"},{default:Object(l["withCtx"])((function(){return[Gt]})),_:1})])]),Object(l["createVNode"])(s)],64)}var Xt={components:{}};const Yt=be()(Xt,[["render",Kt]]);var Zt=Yt,ec={class:"container vh-100 d-flex justify-content-center align-items-center",id:"app"},tc={class:"row justify-content-center w-100"},cc={class:"col-md-6 col-lg-3 bg-white rounded p-5 content-box"},oc=Object(l["createElementVNode"])("h1",{class:"fw-bold mb-3"},"請先登入",-1),ac={class:"form-floating mb-3"},nc=Object(l["createElementVNode"])("label",{for:"Email1"},"Email address",-1),rc={class:"form-floating mb-3"},lc=Object(l["createElementVNode"])("label",{for:"Password"},"Password",-1),sc=Object(l["createElementVNode"])("button",{type:"submit",class:"btn btn-primary w-100"},"登入",-1);function ic(e,t,c,o,a,n){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",ec,[Object(l["createElementVNode"])("div",tc,[Object(l["createElementVNode"])("div",cc,[Object(l["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(l["withModifiers"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"]))},[oc,Object(l["createElementVNode"])("div",ac,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"email",class:"form-control",id:"Email1","aria-describedby":"email",placeholder:"Email address","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.loginData.username=e})},null,512),[[l["vModelText"],o.loginData.username,void 0,{trim:!0}]]),nc]),Object(l["createElementVNode"])("div",rc,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"password",class:"form-control",id:"Password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.loginData.password=e})},null,512),[[l["vModelText"],o.loginData.password]]),lc]),sc],32)])])])}c("99af"),c("5319");var dc={setup:function(){var e=Object(m["c"])(),t=q(),c=t.postLogin,o=Object(l["ref"])({username:"",password:""}),a=function(){console.log(o,o.value),c(o.value).then((function(t){console.log("yes",t);var c=t.data,o=c.token,a=c.expired;console.log(o),document.cookie="user=".concat(o,";expires=").concat(new Date(a),";path=/"),e.replace("dashboard")})).catch((function(e){console.dir(e)}))};return{loginData:o,login:a}}};const bc=be()(dc,[["render",ic]]);var uc=bc,mc=Object(l["createTextVNode"])("orders"),pc=Object(l["createTextVNode"])(" | "),jc=Object(l["createTextVNode"])("product"),Oc=Object(l["createTextVNode"])(" | ");function fc(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("router-link"),s=Object(l["resolveComponent"])("router-view");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createVNode"])(r,{to:"/dashboard"},{default:Object(l["withCtx"])((function(){return[mc]})),_:1}),pc,Object(l["createVNode"])(r,{to:"/dashboard/product"},{default:Object(l["withCtx"])((function(){return[jc]})),_:1}),Oc,Object(l["createVNode"])(s)],64)}var gc={setup:function(){var e=q(),t=e.postLoginCheck,c=Object(m["c"])(),o=document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/,"$1");return console.log(o),function(){t({token:o}).then((function(e){console.log(e)})).catch((function(e){c.push("/login"),console.dir(e)}))}(),{}}};const hc=be()(gc,[["render",fc]]);var vc=hc,Vc={class:"table table-hover"},Nc=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("th",{scope:"col"},"#"),Object(l["createElementVNode"])("th",{scope:"col"},"First"),Object(l["createElementVNode"])("th",{scope:"col"},"Last"),Object(l["createElementVNode"])("th",{scope:"col"},"Handle")])],-1),Ec=Object(l["createElementVNode"])("th",{scope:"row"},"1",-1),kc=Object(l["createElementVNode"])("td",null,"Mark",-1),Cc=Object(l["createElementVNode"])("td",null,"Otto",-1),yc=Object(l["createElementVNode"])("td",null,"@mdo",-1),xc=[Ec,kc,Cc,yc],wc=Object(l["createTextVNode"])(" qqq ");function Dc(e,t,c,o,a,n){return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createElementVNode"])("table",Vc,[Nc,Object(l["createElementVNode"])("tbody",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(o.orderData,(function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:t},xc)})),128))])]),wc],64)}var Pc={setup:function(){var e=q(),t=e.getAdminOrder,c=Object(l["ref"])({});return t().then((function(e){console.log(36,e),c.value=e.data,console.log(c.value)})).catch((function(e){console.dir(e)})),{orderData:c}}};const Bc=be()(Pc,[["render",Dc]]);var Sc=Bc;function _c(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,"prodyct")}const Tc={},Lc=be()(Tc,[["render",_c]]);var Mc=Lc,qc=[{path:"/",name:"Home",component:Zt,children:[{path:"",name:"product",component:zt},{path:"cart",name:"cart",component:Oe},{path:"login",name:"login",component:uc}]},{path:"/dashboard",name:"dashboard",component:vc,children:[{path:"",name:"orders",component:Sc},{path:"product",name:"dashboardProduct",component:Mc}]}],zc=Object(m["a"])({history:Object(m["b"])(),routes:qc}),Ac=zc;c("e40d");function Fc(e,t,c,o,a,n){var r=Object(l["resolveComponent"])("router-view");return Object(l["openBlock"])(),Object(l["createBlock"])(r)}var Ic={name:"Comp",setup:function(){}};c("0ce1");const Uc=be()(Ic,[["render",Fc]]);var $c=Uc;Object.keys(a["a"]).forEach((function(e){Object(o["e"])(e,a["a"][e])})),Object(o["d"])({generateMessage:Object(n["a"])({zh_TW:r}),validateOnInput:!0}),console.log(a["a"]),Object(n["b"])("zh_TW");var Qc=Object(l["createApp"])($c);Qc.use(d["a"],i.a),Qc.use(Ac),Qc.provide("axios",Qc.config.globalProperties.axios),Qc.use(u.a),Qc.component("Form",o["c"]),Qc.component("Field",o["b"]),Qc.component("ErrorMessage",o["a"]),Qc.mount("#app")}});
//# sourceMappingURL=app.7f2322fb.js.map