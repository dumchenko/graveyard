import{u as l}from"./asyncData.f0b947b5.js";import{f as d,m as f,q as v,s as p,v as m,x as g,j as h,y,l as s}from"./entry.babc7773.js";import{_}from"./nuxt-link.abf3f03c.js";const N=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await l(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>s(_,{to:e._path},()=>e.title),a=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,i+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};
