import{f as s,B as y,C as g,g as _,q as o}from"./entry.9ce9cccc.js";import{u as p}from"./head.938dc223.js";import C from"./ContentRenderer.e13dd171.js";import v from"./ContentQuery.c3515c4a.js";import"./ContentRendererMarkdown.72c9b0c0.js";import"./asyncData.1a5350a7.js";const $=s({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=y(),{tag:d,excerpt:u,path:m,query:r,head:i}=f,c={...r||{},path:m||(r==null?void 0:r.path)||g(_().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(v,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var a;return i&&p(t),(a=e.default)==null?void 0:a.call(e,{doc:t,refresh:n,isPartial:h,excerpt:u,...this.$attrs})}:({data:t})=>(i&&p(t),o(C,{value:t,excerpt:u,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{$ as default};