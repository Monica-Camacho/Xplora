import{c as Q,i as Y,e as P,p as X,a as p,h as m,l as G,b as Z,g as A,w as F,o as ee,d as te,n as oe,f as ie,r as b,j as ne,k as L,m as ae,u as K,q as f,s as v,t as s,v as se,x as I,F as H,y as q,z as y,A as E,B as D,C as R,D as M,E as re,G as le}from"./index.1fe9c731.js";import{h as ce,a as de}from"./render.882db384.js";import{s as ue,g as fe,a as ve,b as pe,c as B}from"./scroll.fe6e0879.js";import{Q as O}from"./QResizeObserver.1e401c57.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ge}from"./QBtn.fb1e0f6d.js";import"./Ripple.38b58c7b.js";import"./vm.e4179365.js";var me=Q({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=A(),o=Y(G,P);if(o===P)return console.error("QPageContainer needs to be child of QLayout"),P;X(Z,!0);const r=p(()=>{const l={};return o.header.space===!0&&(l.paddingTop=`${o.header.size}px`),o.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(l.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),l});return()=>m("div",{class:"q-page-container",style:r.value},ce(t.default))}});const{passive:W}=ie,he=["both","horizontal","vertical"];var _e=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>he.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ue},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,r,l;F(()=>e.scrollTarget,()=>{h(),g()});function a(){o!==null&&o();const $=Math.max(0,ve(r)),k=pe(r),u={top:$-n.position.top,left:k-n.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const T=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:$,left:k},n.directionChanged=n.direction!==T,n.delta=u,n.directionChanged===!0&&(n.direction=T,n.inflectionPoint=n.position),t("scroll",{...n})}function g(){r=fe(l,e.scrollTarget),r.addEventListener("scroll",d,W),d(!0)}function h(){r!==void 0&&(r.removeEventListener("scroll",d,W),r=void 0)}function d($){if($===!0||e.debounce===0||e.debounce==="0")a();else if(o===null){const[k,u]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];o=()=>{u(k),o=null}}}const{proxy:w}=A();return F(()=>w.$q.lang.rtl,a),ee(()=>{l=w.$el.parentNode,g()}),te(()=>{o!==null&&o(),h()}),Object.assign(w,{trigger:d,getPosition:()=>n}),oe}}),be=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),r=b(null),l=b(o.screen.height),a=b(e.container===!0?0:o.screen.width),g=b({position:0,direction:"down",inflectionPoint:0}),h=b(0),d=b(ne.value===!0?0:B()),w=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=p(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),k=p(()=>d.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),u=p(()=>d.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function T(i){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};g.value=c,e.onScroll!==void 0&&n("scroll",c)}}function U(i){const{height:c,width:_}=i;let C=!1;l.value!==c&&(C=!0,l.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),j()),a.value!==_&&(C=!0,a.value=_),C===!0&&e.onResize!==void 0&&n("resize",i)}function J({height:i}){h.value!==i&&(h.value=i,j())}function j(){if(e.container===!0){const i=l.value>h.value?B():0;d.value!==i&&(d.value=i)}}let x=null;const N={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:r,height:l,containerHeight:h,scrollbarWidth:d,totalWidth:p(()=>a.value+d.value),rows:p(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:g,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,c,_){N[i][c]=_}};if(X(G,N),B()>0){let _=function(){i=null,c.classList.remove("hide-scrollbar")},C=function(){if(i===null){if(c.scrollHeight>o.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(_,300)},z=function(V){i!==null&&V==="remove"&&(clearTimeout(i),_()),window[`${V}EventListener`]("resize",C)},i=null;const c=document.body;F(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),ae(()=>{z("remove")})}return()=>{const i=de(t.default,[m(_e,{onScroll:T}),m(O,{onResize:U})]),c=m("div",{class:w.value,style:$.value,ref:e.container===!0?void 0:r,tabindex:-1},i);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:r},[m(O,{onResize:J}),m("div",{class:"absolute-full",style:k.value},[m("div",{class:"scroll",style:u.value},[c])])]):c}}}),ye={name:"AppHeader",setup(){const e=K();return{navigateTo:n=>{e.push(n)}}}};const $e={class:"header-container"},ke={class:"header-logo"},we={class:"header-center"};function Ce(e,t,n,o,r,l){return f(),v("header",$e,[s("div",ke,[s("img",{src:"src/assets/images/logo.svg",alt:"Logo",class:"logo-img",onClick:t[0]||(t[0]=a=>e.navigateTo("/index"))}),s("span",{class:"logo-text",onClick:t[1]||(t[1]=a=>e.navigateTo("/index"))},"Xplora")]),s("div",we,[t[3]||(t[3]=s("div",{class:"language"},[s("i",{class:"bi bi-translate"}),se(" Espa\xF1ol")],-1)),s("div",{class:"contact",onClick:t[2]||(t[2]=a=>e.navigateTo("/contacto"))},"Contacto")]),t[4]||(t[4]=I('<div class="header-right" data-v-bc7247f0><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-v-bc7247f0><i class="bi bi-facebook" data-v-bc7247f0></i></a><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-v-bc7247f0><i class="bi bi-instagram" data-v-bc7247f0></i></a><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-v-bc7247f0><i class="bi bi-twitter-x" data-v-bc7247f0></i></a></div>',1))])}var Te=S(ye,[["render",Ce],["__scopeId","data-v-bc7247f0"]]),xe={name:"NavBar",setup(){const e=b("Destinos");return{linksList:[{title:"Destinos",icon:"bi bi-compass",link:"/destinos"},{title:"Hospedaje",icon:"bi bi-house-door",link:"/hospedaj"},{title:"Transporte",icon:"bi bi-airplane",link:"/transporte"},{title:"Turismo",icon:"bi bi-map",link:"/turismo"},{title:"Experiencias",icon:"bi bi-journals",link:"/experiencias"},{title:"Inicio de sesi\xF3n",icon:"bi bi-person",link:"/mantenimiento"}],activeTab:e,setActiveTab:o=>{e.value=o}}}};const Le={class:"nav-bar-container"},Se=["onClick"],ze={class:"nav-icon-text"};function Pe(e,t,n,o,r,l){return f(),v("div",Le,[(f(!0),v(H,null,q(e.linksList,a=>(f(),v("div",{key:a.title,class:"nav-button-wrapper",onClick:g=>e.setActiveTab(a.title)},[y(ge,{flat:"",round:"",dense:"",to:a.link,class:D(["nav-button",{"q-btn--active":e.activeTab===a.title}])},{default:E(()=>[s("div",ze,[s("i",{class:D(a.icon)},null,2),s("span",null,R(a.title),1)])]),_:2},1032,["to","class"])],8,Se))),128))])}var Be=S(xe,[["render",Pe],["__scopeId","data-v-81d17c7a"]]),Fe={name:"FooterInfo",setup(){const e=K();return{linksList:[{title:"Destinos",link:"/destinos"},{title:"Hospedaje",link:"/hospedaj"},{title:"Transporte",link:"/transporte"},{title:"Turismo",link:"/turismo"},{title:"Experiencias",link:"/experiencias"}],legalLinksList:[{title:"T\xE9rminos y Condiciones",link:"/mantenimiento"},{title:"Pol\xEDtica de Privacidad",link:"/mantenimiento"},{title:"Aviso Legal",link:"/mantenimiento"}],navigate:r=>{e.push(r)}}}};const He={class:"footerInfo"},qe={class:"section"},Ee={class:"list"},Re=["onClick"],Qe={href:"#",class:"link"},Ae={class:"section"},Ie={class:"list"},je=["onClick"],Ne={href:"#",class:"link"};function Ve(e,t,n,o,r,l){return f(),v("div",He,[s("div",qe,[t[1]||(t[1]=s("h3",{class:"section-title"},"Informaci\xF3n Legal",-1)),s("ul",Ee,[(f(!0),v(H,null,q(e.legalLinksList,a=>(f(),v("li",{key:a.title,class:"list-item",onClick:M(g=>e.navigate(a.link),["prevent"])},[t[0]||(t[0]=s("i",{class:"bi bi-chevron-right icon"},null,-1)),s("a",Qe,R(a.title),1)],8,Re))),128))])]),s("div",Ae,[t[3]||(t[3]=s("h3",{class:"section-title"},"Enlaces r\xE1pidos",-1)),s("ul",Ie,[(f(!0),v(H,null,q(e.linksList,a=>(f(),v("li",{key:a.title,class:"list-item",onClick:M(g=>e.navigate(a.link),["prevent"])},[t[2]||(t[2]=s("i",{class:"bi bi-chevron-right icon"},null,-1)),s("a",Ne,R(a.title),1)],8,je))),128))])]),t[4]||(t[4]=I('<div class="section" data-v-39af4223><h3 class="section-title" data-v-39af4223>Cont\xE1ctanos</h3><p class="contact-text" data-v-39af4223> \xBFTienes alguna duda o necesitas ayuda? No dudes en contactarnos a trav\xE9s de los siguientes medios: </p><p class="contact-text" data-v-39af4223>Correo electr\xF3nico: soporte@xplora.com</p><p class="contact-text" data-v-39af4223>Tel\xE9fono: +1 800 123 4567</p><p class="contact-text" data-v-39af4223> Direcci\xF3n: Calle Viajeros #123, Ciudad Global, Mundo. Tambi\xE9n puedes visitar nuestra secci\xF3n de Preguntas Frecuentes (FAQ) para resolver tus inquietudes m\xE1s comunes. </p></div>',1))])}var De=S(Fe,[["render",Ve],["__scopeId","data-v-39af4223"]]),Me={name:"FooterBar"};const Oe={class:"footer-bar"};function We(e,t,n,o,r,l){return f(),v("div",Oe,t[0]||(t[0]=[I('<div class="social-icons" data-v-9f31f522><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-v-9f31f522><i class="bi bi-facebook icon" data-v-9f31f522></i></a><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-v-9f31f522><i class="bi bi-instagram icon" data-v-9f31f522></i></a><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-v-9f31f522><i class="bi bi-twitter icon" data-v-9f31f522></i></a></div><div class="copyright" data-v-9f31f522><p data-v-9f31f522>Copyright \xA9 2024 Xplora</p><p data-v-9f31f522> El presente sitio web es operado por Xplora, S. de R.L. de C.V. Todos los derechos reservados. El uso de esta plataforma est\xE1 sujeto a nuestros T\xE9rminos y Condiciones y Pol\xEDtica de Privacidad. </p></div>',2)]))}var Xe=S(Me,[["render",We],["__scopeId","data-v-9f31f522"]]);const ot={__name:"CombinedLayout",setup(e){return(t,n)=>{const o=re("router-view");return f(),le(be,{view:"lHh Lpr lFf"},{default:E(()=>[y(Te),y(Be),y(me,null,{default:E(()=>[y(o)]),_:1}),y(De),y(Xe)]),_:1})}}};export{ot as default};
