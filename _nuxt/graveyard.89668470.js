import{_ as y}from"./CardRows.vue_vue_type_script_setup_true_lang.d00983f4.js";import{h as f,j as c,J as x,ad as v,o as n,b as a,f as e,O as g,u as s,P as u,a0 as C,N as H,s as w,$ as b}from"./entry.b644beb4.js";import{u as k}from"./asyncData.a7a8717d.js";import{u as B}from"./head.5d0d9000.js";import"./composables.9f5fc410.js";const D={class:"container text-center"},E=e("br",null,null,-1),N={key:0,class:"container"},A=e("h2",{class:"text-center"}," \u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ",-1),G={class:"container"},V={class:"columns-auto gap-20"},z={class:"flex mx-auto justify-center max-w-[80%]"},P=["src"],Y=["src"],j=e("br",null,null,-1),F={class:"container"},R=e("hr",null,null,-1),$=e("h2",{class:"text-center"}," \u041C\u043E\u0433\u0438\u043B\u044B ",-1),q={data(){return{googleHidden:!0,yandexHidden:!0}},methods:{toggleGoogle(){this.googleHidden=!this.googleHidden,this.yandexHidden=!0},toggleYandex(){this.yandexHidden=!this.yandexHidden,this.googleHidden=!0}}},L=f({...q,__name:"graveyard",async setup(I){let i,r;const{path:_}=c();_.split("/").shift();const{page:t}=x(),m=c().params.slug[0],{data:p}=([i,r]=v(()=>k("graves",()=>w("graves").where({graveyard:m}).find(),{lazy:!0,default:()=>[]})),i=await i,r(),i);return B(t),(o,d)=>{const h=y;return n(),a("div",null,[e("div",D,[e("h1",null,g(s(t).title),1),E]),"maps"in s(t)?(n(),a("div",N,[A,e("div",G,[e("div",V,["yandex"in s(t).maps?(n(),a("button",{key:0,class:"btn",type:"button",onClick:d[0]||(d[0]=(...l)=>o.toggleYandex&&o.toggleYandex(...l))}," \u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B ")):u("",!0),"google"in s(t).maps?(n(),a("button",{key:1,class:"btn",type:"button",onClick:d[1]||(d[1]=(...l)=>o.toggleGoogle&&o.toggleGoogle(...l))}," Google Maps ")):u("",!0)]),e("div",z,["yandex"in s(t).maps&&!o.yandexHidden?(n(),a("iframe",{key:0,src:s(t).maps.yandex,class:"aspect-[4/3] w-full",loading:"lazy",allowfullscreen:""},null,8,P)):u("",!0),"google"in s(t).maps&&!o.googleHidden?(n(),a("iframe",{key:1,src:s(t).maps.google,class:"aspect-[4/3] w-full",loading:"lazy",allowfullscreen:""},null,8,Y)):u("",!0)])]),j])):u("",!0),e("div",F,[R,$,C(h,{items:s(p)},{title:H(l=>[b(g(l.title),1)]),_:1},8,["items"])])])}}});export{L as default};
