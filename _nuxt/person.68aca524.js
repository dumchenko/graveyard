import{_ as b}from"./Gallery.vue.a6ac3cd9.js";import x from"./ContentRenderer.e13dd171.js";import{f as v,o,c as r,a as t,ai as $,aj as y,t as i,b as g,_ as D,g as L,F as q,s,N as m,ac as p,J as h}from"./entry.9ce9cccc.js";import{u as f}from"./asyncData.1a5350a7.js";import{u as E}from"./head.938dc223.js";import"./nuxt-picture.13faa9d2.js";import"./CardRows.vue.15648ba3.js";import"./nuxt-link.f0143967.js";import"./ContentRendererMarkdown.72c9b0c0.js";const B={class:"container"},F=t("h2",{class:"text-center"}," Последние слова от семьи ",-1),N={class:"columns-1 gap-6"},W={class:"column"},A={class:"card card-link btn btn-gray"},M={class:"card-title"},R={class:"modal"},V={class:"text-left max-w-[90%] lg:max-w-[50%] text-xs sm:text-base lg:text-xl"},z={name:"LastWords",props:{items:{type:Array,required:!0}}},S=v({...z,setup(d){const _=c=>{const n=c.currentTarget.parentElement.querySelector("div.modal");n.classList.contains("modal-active")?n.classList.remove("modal-active"):n.classList.add("modal-active")};return(c,l)=>{const n=x;return o(),r("div",B,[F,t("div",N,[(o(!0),r($,null,y(d.items,e=>(o(),r("div",W,[t("div",A,[t("a",{onClick:_},[t("h5",M,i("relation"in e?`${e.author}, ${e.relation}`:e.author),1),t("div",R,[t("div",V,[g(n,{value:e},null,8,["value"])])])])])]))),256))])])}}}),j={name:"Memories",props:{items:{type:Array,required:!0}}},G={class:"container"},H=t("h2",{class:"text-center"}," Воспоминания от семьи ",-1),I={class:"columns-1 gap-6"},J={class:"card p-4 md:max-w-[80%] lg:max-w-[50%]"},P={class:"text-left"},T={class:"text-center"},K={class:"blockquote-footer text-end text-neutral-500"};function O(d,_,c,l,n,e){const u=x;return o(),r("div",G,[H,t("div",I,[(o(!0),r($,null,y(c.items,a=>(o(),r("div",J,[t("div",P,[t("h2",T,i(a.title),1),g(u,{value:a},null,8,["value"])]),t("figcaption",K,i("relation"in a?`${a.author}, ${a.relation}`:a.author),1)]))),256))])])}const Q=D(j,[["render",O]]),U={class:"container text-center"},X={class:"display-3"},Y={class:"display-6 text-muted"},Z=t("br",null,null,-1),ut=v({__name:"person",setup(d){const{path:_,params:c}=L(),l=_.split("/");l.shift();const n=c.slug[1],{page:e}=q(),{data:u}=f("lastWords",()=>h("",...l).where({_partial:!0,_dir:"_last_words",_type:"markdown"}).find(),{lazy:!0,default:()=>[]}),{data:a}=f("memories",()=>h("",...l).where({_partial:!0,_dir:"_memories",_type:"markdown"}).find(),{lazy:!0,default:()=>[]});return E(e),(tt,et)=>{const k=b,C=S,w=Q;return o(),r("div",null,[t("div",U,[t("h1",X,i(s(e).title),1),t("p",Y,i(s(e).birthDate)+" - "+i(s(e).deathDate),1),Z]),s(e).photos?(o(),m(k,{key:0,id:s(n),photos:s(e).photos},null,8,["id","photos"])):p("",!0),s(u)?(o(),m(C,{key:1,items:s(u)},null,8,["items"])):p("",!0),s(a)?(o(),m(w,{key:2,items:s(a)},null,8,["items"])):p("",!0)])}}});export{ut as default};