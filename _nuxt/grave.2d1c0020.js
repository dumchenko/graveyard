import w from"./ContentRenderer.9b082a3e.js";import{_ as D}from"./CardRows.vue_vue_type_script_setup_true_lang.d00983f4.js";import{_ as E}from"./Gallery.vue_vue_type_script_setup_true_lang.3901c8eb.js";import{h as $,J as N,j as A,ad as m,o as n,b as a,f as t,O as u,u as i,a0 as l,P as r,N as _,s as f,$ as y}from"./entry.b644beb4.js";import{u as B}from"./asyncData.a7a8717d.js";import{u as V}from"./head.5d0d9000.js";import"./ContentRendererMarkdown.fc4663dc.js";import"./_commonjsHelpers.fed2a411.js";import"./composables.9f5fc410.js";const q={class:"container text-center"},R=t("br",null,null,-1),O={key:0},P=t("h2",{class:"text-center"}," \u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 ",-1),j={class:"container"},z=t("hr",null,null,-1),F={key:1,class:"container"},G=t("h2",{class:"text-center"}," \u041F\u043E\u0445\u043E\u0440\u043E\u043D\u0435\u043D\u044B ",-1),H=["src"],I={key:0,class:"blockquote"},J=t("br",null,null,-1),L={class:"text-muted"},S={key:2,class:"container"},T=t("hr",null,null,-1),K=t("h2",{class:"text-center"}," \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 ",-1),at=$({__name:"grave",async setup(M){let s,c;const{page:o}=N(),{path:v,params:x}=A(),g=x.slug[0],d=v.split("/");d.shift();const{data:h}=([s,c]=m(()=>B("directions",()=>f(...d).where({title:"Directions",_partial:!0,_type:"markdown"}).findOne(),{lazy:!0})),s=await s,c(),s),p=[..."buried"in o.value?o.value.buried:[],...([s,c]=m(()=>f("people").where({grave:g}).find()),s=await s,c(),s)];return V(o),(Q,U)=>{const k=w,C=D,b=E;return n(),a("div",null,[t("div",q,[t("h1",null,u(i(o).title),1),R]),i(h)?(n(),a("div",O,[P,t("div",j,[l(k,{value:i(h)},null,8,["value"])]),z])):r("",!0),p.length?(n(),a("div",F,[G,l(C,{items:p},{image:_(e=>["photos"in e?(n(),a("img",{key:0,src:`/images/${e._path.split("/").slice(-1)}/${e.photos[0].path}`},null,8,H)):r("",!0)]),title:_(e=>[y(u(e.title),1)]),text:_(e=>[y(u(e.birthDate)+" - "+u(e.deathDate)+" ",1),"epitaph"in e?(n(),a("blockquote",I,[J,t("small",L,[t("em",null,u(e.epitaph),1)])])):r("",!0)]),_:1})])):r("",!0),"photos"in i(o)?(n(),a("div",S,[T,K,l(b,{id:i(o).title.toLowerCase(),photos:i(o).photos},null,8,["id","photos"])])):r("",!0)])}}});export{at as default};
