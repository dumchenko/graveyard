import w from"./ContentRenderer.e13dd171.js";import{_ as D}from"./nuxt-picture.13faa9d2.js";import{_ as N}from"./CardRows.vue.15648ba3.js";import{_ as $}from"./Gallery.vue.a6ac3cd9.js";import{f as B,F as V,g as q,ab as R,c as a,a as t,t as c,s,b as l,ac as r,w as _,J as f,o as n,N as z,d as x}from"./entry.9ce9cccc.js";import{u as A}from"./asyncData.1a5350a7.js";import{u as E}from"./head.938dc223.js";import"./ContentRendererMarkdown.72c9b0c0.js";import"./nuxt-link.f0143967.js";const F={class:"container text-center"},G=t("br",null,null,-1),H={key:0},I=t("h2",{class:"text-center"}," Как найти ",-1),J={class:"container"},O=t("hr",null,null,-1),P={key:1,class:"container"},S=t("h2",{class:"text-center"}," Похоронены ",-1),T={key:0,class:"blockquote"},j=t("br",null,null,-1),K={class:"text-muted"},L={key:2,class:"container"},M=t("hr",null,null,-1),Q=t("h2",{class:"text-center"}," Фотографии ",-1),rt=B({__name:"grave",async setup(U){let i,u;const{page:o}=V(),{path:y,params:v}=q(),p=v.slug[1],d=y.split("/");d.shift();const{data:h}=A("directions",()=>f("",...d).where({title:"Directions",_partial:!0,_type:"markdown"}).findOne(),{lazy:!0}),m=[..."buried"in o.value?o.value.buried:[],...([i,u]=R(()=>f("people").where({grave:p}).find()),i=await i,u(),i)];return E(o),(W,X)=>{const g=w,k=D,b=N,C=$;return n(),a("div",null,[t("div",F,[t("h1",null,c(s(o).title),1),G]),s(h)?(n(),a("div",H,[I,t("div",J,[l(g,{value:s(h)},null,8,["value"])]),O])):r("",!0),m.length?(n(),a("div",P,[S,l(b,{items:m},{image:_(e=>["photos"in e?(n(),z(k,{key:0,src:`/images/${e._path.split("/").slice(-1)}/${e.photos[0].path}`,loading:"lazy"},null,8,["src"])):r("",!0)]),title:_(e=>[x(c(e.title),1)]),text:_(e=>[x(c(e.birthDate)+" - "+c(e.deathDate)+" ",1),"epitaph"in e?(n(),a("blockquote",T,[j,t("small",K,[t("em",null,c(e.epitaph),1)])])):r("",!0)]),_:1})])):r("",!0),"photos"in s(o)?(n(),a("div",L,[M,Q,l(C,{id:s(p),photos:s(o).photos},null,8,["id","photos"])])):r("",!0)])}}});export{rt as default};
