import{_ as C}from"./Gallery.vue_vue_type_script_setup_true_lang.8211b5b6.js";import{_ as D}from"./LastWords.vue_vue_type_script_setup_true_lang.71bbb89d.js";import b from"./Memories.5a310b4f.js";import{h as g,j as B,J as W,ab as l,o as a,b as v,f as r,O as i,u as t,c as m,P as _,s as u}from"./entry.88f2ae24.js";import{u as d}from"./asyncData.35f1a832.js";import{u as z}from"./head.8b3be558.js";import"./CardRows.vue_vue_type_script_setup_true_lang.e278bb97.js";import"./composables.272656b3.js";import"./ContentRenderer.7231be89.js";import"./ContentRendererMarkdown.431d55f8.js";import"./_commonjsHelpers.fed2a411.js";const A={class:"container text-center"},N={class:"display-3"},P={class:"display-6 text-muted"},V=r("br",null,null,-1),K=g({__name:"person",async setup($){let e,o;const{path:h,params:f}=B(),n=h.split("/");n.shift();const y=f.slug[1],{page:s}=W(),{data:p}=([e,o]=l(()=>d("lastWords",()=>u("",...n).where({_partial:!0,_dir:"_last_words",_type:"markdown"}).find(),{lazy:!0,default:()=>[]})),e=await e,o(),e),{data:c}=([e,o]=l(()=>d("memories",()=>u("",...n).where({_partial:!0,_dir:"_memories",_type:"markdown"}).find(),{lazy:!0,default:()=>[]})),e=await e,o(),e);return z(s),(j,q)=>{const k=C,w=D,x=b;return a(),v("div",null,[r("div",A,[r("h1",N,i(t(s).title),1),r("p",P,i(t(s).birthDate)+" - "+i(t(s).deathDate),1),V]),t(s).photos?(a(),m(k,{key:0,id:t(y),photos:t(s).photos},null,8,["id","photos"])):_("",!0),t(p)?(a(),m(w,{key:1,items:t(p)},null,8,["items"])):_("",!0),t(c)?(a(),m(x,{key:2,items:t(c)},null,8,["items"])):_("",!0)])}}});export{K as default};
