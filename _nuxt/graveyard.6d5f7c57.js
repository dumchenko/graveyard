import{_ as x}from"./CardRows.vue_vue_type_script_setup_true_lang.e278bb97.js";import{h as C,j as i,J as b,ab as w,A as d,o as a,b as o,f as t,O as _,u as e,P as n,a0 as k,N as B,s as A,$ as D}from"./entry.88f2ae24.js";import{u as E}from"./asyncData.35f1a832.js";import{u as N}from"./head.8b3be558.js";import"./composables.272656b3.js";const V={class:"container text-center"},z=t("br",null,null,-1),H={key:0,class:"container"},P=t("h2",{class:"text-center"}," \u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ",-1),j={class:"container"},F={class:"columns-auto gap-20"},G={class:"flex mx-auto justify-center max-w-[80%]"},R=["src"],$=["src"],q=t("br",null,null,-1),I={class:"container"},J=t("hr",null,null,-1),M=t("h2",{class:"text-center"}," \u041C\u043E\u0433\u0438\u043B\u044B ",-1),X=C({__name:"graveyard",async setup(O){let u,r;const{path:p}=i();p.split("/").shift();const{page:s}=b(),m=i().params.slug[1],{data:g}=([u,r]=w(()=>E("graves",()=>A("graves").where({graveyard:m}).find(),{lazy:!0,default:()=>[]})),u=await u,r(),u);N(s);const l=d(!0),c=d(!0),h=()=>{l.value=!l.value,c.value=!0},y=()=>{console.log("toggle yandex"),c.value=!c.value,l.value=!0};return(T,Y)=>{const f=x;return a(),o("div",null,[t("div",V,[t("h1",null,_(e(s).title),1),z]),"maps"in e(s)?(a(),o("div",H,[P,t("div",j,[t("div",F,["yandex"in e(s).maps?(a(),o("button",{key:0,class:"btn",type:"button",onClick:y}," \u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B ")):n("",!0),"google"in e(s).maps?(a(),o("button",{key:1,class:"btn",type:"button",onClick:h}," Google Maps ")):n("",!0)]),t("div",G,["yandex"in e(s).maps&&!e(c)?(a(),o("iframe",{key:0,src:e(s).maps.yandex,class:"aspect-[4/3] w-full",loading:"lazy",allowfullscreen:""},null,8,R)):n("",!0),"google"in e(s).maps&&!e(l)?(a(),o("iframe",{key:1,src:e(s).maps.google,class:"aspect-[4/3] w-full",loading:"lazy",allowfullscreen:""},null,8,$)):n("",!0)])]),q])):n("",!0),t("div",I,[J,M,k(f,{items:e(g)},{title:B(v=>[D(_(v.title),1)]),_:1},8,["items"])])])}}});export{X as default};
