import{k as V,X as W,$ as r,l as w,U as D,t as G,p as J,i as Y,f as g,M as Z,S as ee,B as ne,j as X}from"./index.8b3fe72c.js";import{o as F,i as te}from"./Ripple.501a792b.1154f9f5.js";import{f as ae,d as le,m as oe,S as re}from"./vm.84167867.17286884.js";import{v as ue}from"./render.019faeb2.42954859.js";const z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ie=Object.keys(z),se={align:{type:String,validator:e=>ie.includes(e)}};function ce(e){return r(()=>{const l=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${z[l]}`})}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function N(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function ve(e,l){for(const s in l){const a=l[s],c=e[s];if(typeof a=="string"){if(a!==c)return!1}else if(Array.isArray(c)===!1||c.length!==a.length||a.some((k,E)=>k!==c[E]))return!1}return!0}function Q(e,l){return Array.isArray(l)===!0?e.length===l.length&&e.every((s,a)=>s===l[a]):e.length===1&&e[0]===l}function de(e,l){return Array.isArray(e)===!0?Q(e,l):Array.isArray(l)===!0?Q(l,e):e===l}function fe(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const s in e)if(de(e[s],l[s])===!1)return!1;return!0}const pe={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function be({fallbackTag:e,useDisableForRouterLinkProps:l=!0}={}){const s=X(),{props:a,proxy:c,emit:k}=s,E=re(s),q=r(()=>a.disable!==!0&&a.href!==void 0),j=l===!0?r(()=>E===!0&&a.disable!==!0&&q.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""):r(()=>E===!0&&q.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),m=r(()=>j.value===!0?R(a.to):null),v=r(()=>m.value!==null),B=r(()=>q.value===!0||v.value===!0),t=r(()=>a.type==="a"||B.value===!0?"a":a.tag||e||"div"),C=r(()=>q.value===!0?{href:a.href,target:a.target}:v.value===!0?{href:m.value.href,target:a.target}:{}),d=r(()=>{if(v.value===!1)return-1;const{matched:u}=m.value,{length:b}=u,h=u[b-1];if(h===void 0)return-1;const L=c.$route.matched;if(L.length===0)return-1;const $=L.findIndex(N.bind(null,h));if($!==-1)return $;const M=H(u[b-2]);return b>1&&H(h)===M&&L[L.length-1].path!==M?L.findIndex(N.bind(null,u[b-2])):$}),x=r(()=>v.value===!0&&d.value!==-1&&ve(c.$route.params,m.value.params)),o=r(()=>x.value===!0&&d.value===c.$route.matched.length-1&&fe(c.$route.params,m.value.params)),p=r(()=>v.value===!0?o.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":x.value===!0?` ${a.activeClass}`:"":"");function R(u){try{return c.$router.resolve(u)}catch{}return null}function _(u,{returnRouterError:b,to:h=a.to,replace:L=a.replace}={}){if(a.disable===!0)return u.preventDefault(),Promise.resolve(!1);if(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey||u.button!==void 0&&u.button!==0||a.target==="_blank")return Promise.resolve(!1);u.preventDefault();const $=c.$router[L===!0?"replace":"push"](h);return b===!0?$:$.then(()=>{}).catch(()=>{})}function I(u){if(v.value===!0){const b=h=>_(u,h);k("click",u,b),u.defaultPrevented!==!0&&b()}else k("click",u)}return{hasRouterLink:v,hasHrefLink:q,hasLink:B,linkTag:t,resolvedLink:m,linkIsActive:x,linkIsExactActive:o,linkClass:p,linkAttrs:C,getLink:R,navigateToRouterLink:_,navigateOnClick:I}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ge={xs:8,sm:10,md:14,lg:20,xl:24},me=["button","submit","reset"],he=/[^\s]\/[^\s]/,ye=["flat","outline","push","unelevated"];function ke(e,l){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":l}const qe={...ae,...pe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ye.reduce((e,l)=>(e[l]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...se.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},xe={...qe,round:Boolean};function Le(e){const l=oe(e,ge),s=ce(e),{hasRouterLink:a,hasLink:c,linkTag:k,linkAttrs:E,navigateOnClick:q}=be({fallbackTag:"button"}),j=r(()=>{const o=e.fab===!1&&e.fabMini===!1?l.value:{};return e.padding!==void 0?Object.assign({},o,{padding:e.padding.split(/\s+/).map(p=>p in U?U[p]+"px":p).join(" "),minWidth:"0",minHeight:"0"}):o}),m=r(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=r(()=>e.disable!==!0&&e.loading!==!0),B=r(()=>v.value===!0?e.tabindex||0:-1),t=r(()=>ke(e,"standard")),C=r(()=>{const o={tabindex:B.value};return c.value===!0?Object.assign(o,E.value):me.includes(e.type)===!0&&(o.type=e.type),k.value==="a"?(e.disable===!0?o["aria-disabled"]="true":o.href===void 0&&(o.role="button"),a.value!==!0&&he.test(e.type)===!0&&(o.type=e.type)):e.disable===!0&&(o.disabled="",o["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(o,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),o}),d=r(()=>{let o;e.color!==void 0?e.flat===!0||e.outline===!0?o=`text-${e.textColor||e.color}`:o=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(o=`text-${e.textColor}`);const p=e.round===!0?"round":`rectangle${m.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${t.value} q-btn--${p}`+(o!==void 0?" "+o:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),x=r(()=>s.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:d,style:j,innerClasses:x,attributes:C,hasLink:c,linkTag:k,navigateOnClick:q,isActionable:v}}const{passiveCapture:f}=ne;let S=null,A=null,O=null;var we=V({name:"QBtn",props:{...xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:l,emit:s}){const{proxy:a}=X(),{classes:c,style:k,innerClasses:E,attributes:q,hasLink:j,linkTag:m,navigateOnClick:v,isActionable:B}=Le(e),t=W(null),C=W(null);let d=null,x,o=null;const p=r(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=r(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:j.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=r(()=>({center:e.round})),I=r(()=>{const n=Math.max(0,Math.min(100,e.percentage));return n>0?{transition:"transform 0.6s",transform:`translateX(${n-100}%)`}:{}}),u=r(()=>{if(e.loading===!0)return{onMousedown:T,onTouchstart:T,onClick:T,onKeydown:T,onKeyup:T};if(B.value===!0){const n={onClick:h,onKeydown:L,onMousedown:M};if(a.$q.platform.has.touch===!0){const i=e.onTouchstart!==void 0?"":"Passive";n[`onTouchstart${i}`]=$}return n}return{onClick:w}}),b=r(()=>({ref:t,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:k.value,...q.value,...u.value}));function h(n){if(t.value!==null){if(n!==void 0){if(n.defaultPrevented===!0)return;const i=document.activeElement;if(e.type==="submit"&&i!==document.body&&t.value.contains(i)===!1&&i.contains(t.value)===!1){t.value.focus();const K=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",K,f),t.value!==null&&t.value.removeEventListener("blur",K,f)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",K,f),t.value.addEventListener("blur",K,f)}}v(n)}}function L(n){t.value!==null&&(s("keydown",n),D(n,[13,32])===!0&&A!==t.value&&(A!==null&&P(),n.defaultPrevented!==!0&&(t.value.focus(),A=t.value,t.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),t.value.addEventListener("blur",y,f)),w(n)))}function $(n){t.value!==null&&(s("touchstart",n),n.defaultPrevented!==!0&&(S!==t.value&&(S!==null&&P(),S=t.value,d=n.target,d.addEventListener("touchcancel",y,f),d.addEventListener("touchend",y,f)),x=!0,o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,x=!1},200)))}function M(n){t.value!==null&&(n.qSkipRipple=x===!0,s("mousedown",n),n.defaultPrevented!==!0&&O!==t.value&&(O!==null&&P(),O=t.value,t.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,f)))}function y(n){if(t.value!==null&&!(n!==void 0&&n.type==="blur"&&document.activeElement===t.value)){if(n!==void 0&&n.type==="keyup"){if(A===t.value&&D(n,[13,32])===!0){const i=new MouseEvent("click",n);i.qKeyEvent=!0,n.defaultPrevented===!0&&G(i),n.cancelBubble===!0&&J(i),t.value.dispatchEvent(i),w(n),n.qKeyEvent=!0}s("keyup",n)}P()}}function P(n){const i=C.value;n!==!0&&(S===t.value||O===t.value)&&i!==null&&i!==document.activeElement&&(i.setAttribute("tabindex",-1),i.focus()),S===t.value&&(d!==null&&(d.removeEventListener("touchcancel",y,f),d.removeEventListener("touchend",y,f)),S=d=null),O===t.value&&(document.removeEventListener("mouseup",y,f),O=null),A===t.value&&(document.removeEventListener("keyup",y,!0),t.value!==null&&t.value.removeEventListener("blur",y,f),A=null),t.value!==null&&t.value.classList.remove("q-btn--active")}function T(n){w(n),n.qSkipRipple=!0}return Y(()=>{P(!0)}),Object.assign(a,{click:n=>{B.value===!0&&h(n)}}),()=>{let n=[];e.icon!==void 0&&n.push(g(F,{name:e.icon,left:e.stack!==!0&&p.value===!0,role:"img"})),p.value===!0&&n.push(g("span",{class:"block"},[e.label])),n=ue(l.default,n),e.iconRight!==void 0&&e.round===!1&&n.push(g(F,{name:e.iconRight,right:e.stack!==!0&&p.value===!0,role:"img"}));const i=[g("span",{class:"q-focus-helper",ref:C})];return e.loading===!0&&e.percentage!==void 0&&i.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:I.value})])),i.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+E.value},n)),e.loading!==null&&i.push(g(Z,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},l.loading!==void 0?l.loading():[g(le)])]:null)),ee(g(m.value,b.value,i),[[te,R.value,void 0,_.value]])}}});export{we as S};
