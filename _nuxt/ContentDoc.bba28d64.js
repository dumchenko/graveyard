import{u as h,w as d,f as g,h as w,i as v,j as C,k as D,l as s}from"./entry.aa320aa5.js";import{u as _}from"./composables.b962b808.js";import S from"./ContentRenderer.d092d965.js";import $ from"./ContentQuery.9362b2da.js";import"./ContentRendererMarkdown.1ecb751d.js";import"./_commonjsHelpers.fed2a411.js";import"./asyncData.cb68e6c6.js";const a=(f,e=g())=>{const c=h(f);d(()=>h(f),(o=c)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),p=t.title||(o==null?void 0:o.title);p&&(t.title=p),t.meta=[...t.meta||[]];const u=(t==null?void 0:t.description)||(o==null?void 0:o.description);u&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:u});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>_(t))},{immediate:!0})},B=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=C(),{tag:c,excerpt:m,path:o,query:t,head:p}=f,u={...t||{},path:o||(t==null?void 0:t.path)||D(g().path),find:"one"},r=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s($,u,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:y})=>{var l;return p&&a(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:y,excerpt:m,...this.$attrs})}:({data:n})=>(p&&a(n),s(S,{value:n,excerpt:m,tag:c,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{B as default};