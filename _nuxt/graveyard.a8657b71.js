import{f as _,J as b,a9 as p,o as s,c as v,U as w,q as h,G as t,aa as l,u as e,b as o,ab as c,ac as u,W as m}from"./entry.aa320aa5.js";import k from"./default.142120d3.js";const C={class:"container text-center",id:"start"},B={class:"display-3"},D={key:0,class:"container"},q=t("h1",{class:"display-4 text-center"}," \u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ",-1),G={key:0,class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#yandexmaps","aria-expanded":"false","aria-controls":"yandexmaps"},L={key:1,class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#googlemaps","aria-expanded":"false","aria-controls":"googlemaps"},N={class:"row"},P={key:0,class:"collapse ratio ratio-4x3",id:"yandexmaps"},V=["src"],j={key:1,class:"collapse ratio ratio-4x3",id:"googlemaps"},A=["src"],E={class:"container"},F=t("p",{class:"display-4 text-center"}," \u041C\u043E\u0433\u0438\u043B\u044B ",-1),I={class:"container px-4 pt-3"},J={class:"row row-cols-auto g-3"},M={class:"col"},O={class:"card col-md-4 text-center",style:{width:"18rem"}},R={class:"card-body col-sm"},S={class:"card-title"},U=["href"],W={key:1},$={key:2,class:"container px-4 pt-3"},z=t("p",{class:"display-4 text-center"}," \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 ",-1),H={class:"row row-cols-auto g-5"},K={class:"col"},Q={class:"figure"},T=["src"],X={class:"figure-caption text-center font-weight-bold"},at={__name:"graveyard",async setup(Y){let n,i;const{path:g}=_();var d=g.split("/");d.shift();const{page:a}=b(),y=([n,i]=p(()=>h(...d).where({_partial:!0,_type:"yaml"}).find()),n=await n,i(),n);Object.assign({},...y);const f=_().params.slug[0],x=([n,i]=p(()=>h("graves").where({graveyard:f}).find()),n=await n,i(),n);return(Z,tt)=>(s(),v(k,null,{default:w(()=>[t("div",C,[t("h1",B,l(e(a).name),1)]),"maps"in e(a)?(s(),o("div",D,[q,t("p",null,["yandex"in e(a).maps?(s(),o("button",G," \u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B ")):c("",!0),"google"in e(a).maps?(s(),o("button",L," Google Maps ")):c("",!0)]),t("div",N,["yandex"in e(a).maps?(s(),o("div",P,[t("iframe",{src:e(a).maps.yandex,allowfullscreen:"true"},null,8,V)])):c("",!0),"google"in e(a).maps?(s(),o("div",j,[t("iframe",{src:e(a).maps.google,allowfullscreen:"true"},null,8,A)])):c("",!0)])])):c("",!0),t("div",E,[F,t("div",I,[t("div",J,[(s(!0),o(m,null,u(e(x),r=>(s(),o("div",M,[t("div",O,[t("div",R,[t("h5",S,l(r.name),1)]),t("a",{class:"btn btn-primary stretched-link",href:`${r._path}#start`}," \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435... ",8,U)])]))),256))])])]),"photos"in e(a)?(s(),o("hr",W)):c("",!0),"photos"in e(a)?(s(),o("div",$,[z,t("div",H,[(s(!0),o(m,null,u(e(a).photos,r=>(s(),o("div",K,[t("figure",Q,[t("img",{src:r.path,class:"figure-img img-fluid rounded",style:{"max-height":"90vh",width:"35rem"}},null,8,T),t("figcaption",X,l(r.caption),1)])]))),256))])])):c("",!0)]),_:1}))}};export{at as default};
