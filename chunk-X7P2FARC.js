import{e as H}from"./chunk-BOKSK6R3.js";import{a as P}from"./chunk-2VBFOAQJ.js";import{D as o,E as s,F as u,M as h,N as y,Na as E,P as x,R as f,S as g,T as B,U as L,e as d,n as C,oa as _,pa as $,qa as D,sa as M,t as I,u as a,ua as w,v as p,w as v,x as l,z as S,za as j}from"./chunk-QFSULYQ5.js";import"./chunk-E4KJ5XS4.js";import"./chunk-HJR7UGEM.js";import"./chunk-CBRX6AIW.js";import"./chunk-JFVLIC7D.js";import"./chunk-2C7P5QT5.js";import"./chunk-MTGMLXCD.js";import"./chunk-4U6PRYVA.js";import"./chunk-HJX2WMCX.js";import"./chunk-Z4V4M3ZT.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-PXG3O44D.js";function T(i,e){if(i&1&&(o(0,"ion-card"),u(1,"img",2),o(2,"ion-card-header")(3,"ion-card-title"),h(4),s()(),o(5,"ion-card-content"),h(6," Here's a small text description for the card content. Nothing more, nothing less. "),s()()),i&2){let c=e;a(),l("alt",c.title)("src",c.url,I),a(3),y(c.title)}}var J=(()=>{let e=class e{constructor(m,n){this.itemService=m,this.authService=n,this.id="",this.isLogin$=this.authService.user$.pipe(d(t=>!!t)),this.item$=this.itemService.items$.pipe(d(t=>t.length?t.find(r=>r.id===this.id)||null:(this.itemService.loadItems(),null)))}};e.\u0275fac=function(n){return new(n||e)(p(P),p(E))},e.\u0275cmp=C({type:e,selectors:[["app-item-details"]],inputs:{id:"id"},standalone:!0,features:[x],decls:6,vars:8,consts:[[3,"isLogin","isLoginButton","isSearchButton"],[1,"ion-justify-content-center"],[3,"alt","src"]],template:function(n,t){if(n&1&&(u(0,"app-header",0),f(1,"async"),o(2,"ion-content")(3,"ion-row",1),v(4,T,7,3,"ion-card"),f(5,"async"),s()()),n&2){let r;l("isLogin",g(1,4,t.isLogin$))("isLoginButton",!0)("isSearchButton",!0),a(4),S(4,(r=g(5,6,t.item$))?4:-1,r)}},dependencies:[$,M,D,_,j,w,L,B,H],styles:["[_nghost-%COMP%]{display:block}ion-card[_ngcontent-%COMP%]{max-width:750px}"],changeDetection:0});let i=e;return i})();export{J as ItemDetailsComponent};
