import{a as H}from"./chunk-SNOZO7CT.js";import{e as q}from"./chunk-BOKSK6R3.js";import{a as G}from"./chunk-2VBFOAQJ.js";import{Aa as P,B as w,C as x,D as a,E as p,F as I,H as m,I as L,Ja as j,Ka as U,M as d,N as E,Na as R,P as z,Q as D,R as u,S as h,T as O,U as M,Z as T,aa as A,b as g,e as C,f as b,n as y,na as B,ta as k,u as n,ua as F,v as S,w as _,x as l,z as v,za as $}from"./chunk-QFSULYQ5.js";import"./chunk-E4KJ5XS4.js";import"./chunk-HJR7UGEM.js";import"./chunk-CBRX6AIW.js";import"./chunk-JFVLIC7D.js";import"./chunk-2C7P5QT5.js";import"./chunk-MTGMLXCD.js";import"./chunk-4U6PRYVA.js";import"./chunk-HJX2WMCX.js";import"./chunk-Z4V4M3ZT.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-PXG3O44D.js";var K=(e,i)=>i.id,N=e=>[e];function Q(e,i){if(e&1&&(a(0,"ion-col",13),I(1,"app-list-item",14),p()),e&2){let c=i.$implicit;n(),l("routerLink",D(2,N,"/item/"+c.id))("item",c)}}function V(e,i){if(e&1&&(a(0,"ion-row",11)(1,"ion-col",12)(2,"ion-row"),w(3,Q,2,4,"ion-col",13,K),p()()()),e&2){let c=L();n(3),x(c)}}function W(e,i){e&1&&_(0,V,5,0,"ion-row",11),e&2&&v(0,i.length?0:-1)}var J=function(e){return e.DEFAULT="Default",e.ASC="ASC",e.DESC="DESC",e}(J||{}),ce=(()=>{let i=class i{constructor(o,s){this.authService=o,this.itemService=s,this.orderEnum=J,this.searchInput=new g(""),this.sortOrder=new g(this.orderEnum.DEFAULT),this.isLogin$=this.authService.user$.pipe(C(t=>!!t)),this.items$=b([this.itemService.items$,this.sortOrder]).pipe(C(([t,r])=>this.sortItems(t,r)))}ngOnInit(){this.itemService.loadItems()}searchOnChange(o){typeof o.detail.value=="string"&&this.searchInput.next(o.detail.value)}onOrderChange(o){this.sortOrder.next(o.detail.value)}onButtonSearch(){this.itemService.getItemsByTitle(this.searchInput.value)}sortItems(o,s){return[...o].sort((t,r)=>{switch(s){case this.orderEnum.DEFAULT:return 0;case this.orderEnum.ASC:return t.title.localeCompare(r.title);case this.orderEnum.DESC:return r.title.localeCompare(t.title);default:return 0}})}};i.\u0275fac=function(s){return new(s||i)(S(R),S(G))},i.\u0275cmp=y({type:i,selectors:[["app-search"]],standalone:!0,features:[z],decls:22,vars:16,consts:[[3,"isLogin","isLoginButton"],[3,"fullscreen"],[1,"ion-justify-content-center","ion-align-items-center"],["size","12","sizeMd","9","sizeLg","8"],["size","12","sizeMd","7"],["mode","md","shape","round","placeholder","Search content by title...",3,"ionInput"],["size","6","sizeMd","2"],["shape","round","expand","outline","fill","clear",3,"click"],["size","6","sizeMd","3"],["label","Sort","fill","outline","interface","popover","shape","round","mode","md",3,"ionChange","value"],[3,"value"],[1,"ion-justify-content-center","ion-padding-vertical","grid-row"],["size","12",1,"ion-no-padding"],["size","6","sizeMd","4","sizeLg","3",1,"ion-no-padding"],[3,"routerLink","item"]],template:function(s,t){if(s&1&&(I(0,"app-header",0),u(1,"async"),a(2,"ion-content",1)(3,"ion-row",2)(4,"ion-col",3)(5,"ion-row")(6,"ion-col",4)(7,"ion-searchbar",5),m("ionInput",function(f){return t.searchOnChange(f)}),p()(),a(8,"ion-col",6)(9,"ion-button",7),m("click",function(){return t.onButtonSearch()}),d(10," Search "),p()(),a(11,"ion-col",8)(12,"ion-select",9),u(13,"async"),m("ionChange",function(f){return t.onOrderChange(f)}),a(14,"ion-select-option",10),d(15," Default "),p(),a(16,"ion-select-option",10),d(17),p(),a(18,"ion-select-option",10),d(19),p()()()(),_(20,W,1,1),u(21,"async"),p()()()),s&2){let r;l("isLogin",h(1,10,t.isLogin$))("isLoginButton",!0),n(2),l("fullscreen",!1),n(10),l("value",h(13,12,t.sortOrder)),n(2),l("value",t.orderEnum.DEFAULT),n(2),l("value",t.orderEnum.ASC),n(),E(t.orderEnum.ASC),n(),l("value",t.orderEnum.DESC),n(),E(t.orderEnum.DESC),n(),v(20,(r=h(21,14,t.items$))?20:-1,r)}},dependencies:[B,k,$,j,M,O,q,U,P,H,A,T,F],styles:["[_nghost-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]{--padding-bottom: 56px}  ion-searchbar{padding-top:0!important;padding-bottom:0!important;padding-inline-end:0px!important;padding-inline-start:0px!important}  ion-searchbar .searchbar-input{--border-radius: 30px;--box-shadow: none;border:2px solid #d2d2d2!important;font-size:12px!important;font-weight:700!important}ion-button[_ngcontent-%COMP%]{width:100%;--border-color: #d2d2d2;--border-width: 2px;height:100%;margin-top:0;margin-bottom:0}ion-select[_ngcontent-%COMP%]{min-height:45px;--border-width: 2px;--border-color: #d2d2d2;--padding-end: 13px;--padding-start: 26px;font-size:12px;font-weight:700;color:var(--ion-color-primary)}"],changeDetection:0});let e=i;return e})();export{ce as SearchComponent};
