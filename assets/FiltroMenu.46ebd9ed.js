import{q as t,s,t as o,C as l,F as u,y as _,H as h,ac as f}from"./index.1fe9c731.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var k={name:"FiltroMenu",props:{title:{type:String,default:"Filtrar por:"},sections:{type:Array,required:!0}},data(){const e={};return this.sections.forEach(i=>{i.options.forEach(n=>{e[n]=!1})}),{selectedFilters:e}}};const y={class:"filtro-menu"},v={class:"titulo"},F={class:"subtitulo"},b=["id","onUpdate:modelValue"],$=["for"];function g(e,i,n,M,x,B){return t(),s("div",y,[o("h3",v,l(e.title),1),(t(!0),s(u,null,_(e.sections,(d,r)=>(t(),s("div",{key:r,class:"categoria"},[o("h4",F,l(d.title),1),(t(!0),s(u,null,_(d.options,(a,c)=>(t(),s("div",{key:c,class:"opcion form-check"},[h(o("input",{class:"form-check-input custom-checkbox",type:"checkbox",id:`checkbox-${r}-${c}`,"onUpdate:modelValue":p=>e.selectedFilters[a]=p},null,8,b),[[f,e.selectedFilters[a]]]),o("label",{class:"form-check-label",for:`checkbox-${r}-${c}`},l(a),9,$)]))),128))]))),128))])}var q=m(k,[["render",g],["__scopeId","data-v-4596d3ee"]]);export{q as F};
