import{ah as r,ad as a,ai as n}from"./index.8b3fe72c.js";const s={xs:18,sm:24,md:32,lg:38,xl:46},f={size:String};function m(e,t=s){return r(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const u={size:{type:[String,Number],default:"1em"},color:String};function c(e){return{cSize:r(()=>e.size in s?`${s[e.size]}px`:e.size),classes:r(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var d=a({name:"QSpinner",props:{...u,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:i}=c(e);return()=>n("svg",{class:i.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[n("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function o(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(i=>{o(e,i)}):e.add(t)}function z(e){const t=new Set;return e.forEach(i=>{o(t,i)}),Array.from(t)}function S(e){return e.appContext.config.globalProperties.$router!==void 0}function h(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{d as Q,m as a,h as b,z as g,f as u,S as v};
