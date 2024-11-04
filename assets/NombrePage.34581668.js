import{a as c,c as R,r as g,G as D,H as $,h as o,N as O,T as F,l as V,o as A,b as G,w as W,d as a,f as u}from"./index.2151895b.js";import{b,k as J,Q as d}from"./QBtn.b3b2f19e.js";import{h as K}from"./render.36502f3b.js";import{u as k}from"./use-timeout.e8866c0a.js";import{Q as U,_ as X}from"./quasar-logo-vertical.11aad808.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";const Z={ratio:[String,Number]};function ee(e,r){return c(()=>{const l=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const te=1.7778;var le=R({name:"QImg",props:{...Z,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:te},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:l}){const w=g(e.initialRatio),x=ee(e,w),h=V(),{registerTimeout:N,removeTimeout:y}=k(),{registerTimeout:q,removeTimeout:p}=k(),S=c(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),Q=c(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[g(null),g(S.value)],n=g(0),m=g(!1),f=g(!1),E=c(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=c(()=>({width:e.width,height:e.height})),H=c(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),M=c(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(p(),e.loadingShowDelay===0){m.value=!0;return}q(()=>{m.value=!0},e.loadingShowDelay)}function _(){p(),m.value=!1}function I({target:t}){b(h)===!1&&(y(),w.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,T(t,1))}function T(t,s){s===1e3||b(h)===!0||(t.complete===!0?L(t):N(()=>{T(t,s+1)},50))}function L(t){b(h)!==!0&&(n.value=n.value^1,i[n.value].value=null,_(),t.getAttribute("__qerror")!=="true"&&(f.value=!1),l("load",t.currentSrc||t.src))}function j(t){y(),_(),f.value=!0,i[n.value].value=Q.value,i[n.value^1].value=S.value,l("error",t)}function C(t){const s=i[t].value,v={key:"img_"+t,class:H.value,style:M.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...s};return n.value===t?Object.assign(v,{class:v.class+"current",onLoad:I,onError:j}):v.class+="loaded",o("div",{class:"q-img__container absolute-full",key:"img"+t},o("img",v))}function P(){return m.value===!1?o("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(r[f.value===!0?"error":"default"])):o("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[o(J,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){O(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,s=>{y(),f.value=!1,s===null?(_(),i[n.value^1].value=S.value):B(),i[n.value].value=s},{immediate:!0})};D.value===!0?$(t):t()}return()=>{const t=[];return x.value!==null&&t.push(o("div",{key:"filler",style:x.value})),i[0].value!==null&&t.push(C(0)),i[1].value!==null&&t.push(C(1)),t.push(o(F,{name:"q-transition--fade"},P)),o("div",{key:"main",class:E.value,style:z.value,role:"img","aria-label":e.alt},t)}}}),ae="/assets/pet3.7d6f6c72.jpg";const ie={style:{display:"flex",gap:"10px","flex-wrap":"wrap","justify-content":"center","margin-top":"20px"}},ne=Object.assign({name:"IndexPage"},{__name:"NombrePage",setup(e){return(r,l)=>(A(),G(U,{class:"flex flex-center"},{default:W(()=>[l[0]||(l[0]=a("img",{alt:"Quasar logo",src:X,style:{width:"200px",height:"200px"}},null,-1)),l[1]||(l[1]=a("i",{class:"bi bi-compass",style:{"font-size":"24px","margin-top":"20px"}},null,-1)),u(le,{src:ae,style:{width:"200px",height:"200px","margin-top":"20px"}}),l[2]||(l[2]=a("div",{style:{"text-align":"center","margin-top":"20px"}},[a("h1",null,"Este es un T\xEDtulo H1 usando Mulish"),a("h2",null,"Este es un T\xEDtulo H2 usando Mulish"),a("h3",null,"Este es un T\xEDtulo H3 usando Mulish"),a("h4",null,"Este es un T\xEDtulo H4 usando Mulish"),a("h5",null,"Este es un T\xEDtulo H5 usando Mulish"),a("h6",null,"Este es un T\xEDtulo H6 usando Mulish"),a("p",null,"Este es un p\xE1rrafo de ejemplo usando la fuente Quicksand. La fuente Quicksand se aplica globalmente al cuerpo del texto, y Mulish se utiliza espec\xEDficamente para los t\xEDtulos."),a("p",{style:{"font-weight":"700"}},"Este es un p\xE1rrafo en negrita con Quicksand (peso 700)."),a("p",{style:{"font-style":"italic"}},"Este es un p\xE1rrafo en cursiva con Quicksand.")],-1)),a("div",ie,[u(d,{label:"Color 1",class:"btn-color1"}),u(d,{label:"Color 2",class:"btn-color2"}),u(d,{label:"Color 3",class:"btn-color3"}),u(d,{label:"Color 4",class:"btn-color4"}),u(d,{label:"Color 5",class:"btn-color5"}),u(d,{label:"Color 6",class:"btn-color6"})])]),_:1}))}});var de=Y(ne,[["__scopeId","data-v-52bff444"]]);export{de as default};
