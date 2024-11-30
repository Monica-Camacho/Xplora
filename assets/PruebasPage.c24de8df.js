import{aW as ae,aM as ie,aX as N,ap as re,aY as le,aO as M,aZ as z,aR as H,aS as Q,aP as U,ar as L,ah as f,am as T,al as Y,ai as p,aT as se,a_ as ue,ad as te,a$ as ce,an as ne,ao as oe,b0 as Z,b1 as de,av as ve,aw as fe,aA as j,aB as me}from"./index.8b3fe72c.js";import{u as pe}from"./use-timeout.54847438.js";import{h as K,b as ge,a as he}from"./render.2c0126be.js";import{g as ye,v as be}from"./vm.80a60a90.js";import{Q as X}from"./QBtn.6017fcd0.js";import{u as xe,a as Ce}from"./use-dark.da9ea5df.js";import"./Ripple.0cface14.js";const W={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_e=Object.keys(W);W.all=!0;function G(e){const n={};for(const a of _e)e[a]===!0&&(n[a]=!0);return Object.keys(n).length===0?W:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Pe=["INPUT","TEXTAREA"];function J(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Pe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function we(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ae.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,l)=>{const s=parseFloat(a);s&&(n[l]=s)}),n}var Se=ie({name:"touch-swipe",beforeMount(e,{value:n,arg:a,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;const s=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:qe(a),direction:G(l),noop:re,mouseStart(i){J(i,t)&&le(i)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(J(i,t)){const r=i.target;M(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,r){N.is.firefox===!0&&z(e,!0);const m=H(i);t.event={x:m.left,y:m.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){Q(i);return}const r=Date.now()-t.event.time;if(r===0)return;const m=H(i),y=m.left-t.event.x,u=Math.abs(y),g=m.top-t.event.y,v=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const x=u/r,C=v/r;t.direction.vertical===!0&&u<v&&u<100&&C>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&x>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<v&&g<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&g>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&y<0&&v<100&&x>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&y>0&&v<100&&x>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Q(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),we(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const _=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(_,50):_()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:v}})):t.end(i)},end(i){t.event!==void 0&&(U(t,"temp"),N.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&Q(i),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";M(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}N.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchswipe;a!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&a.end(),a.handler=n.value),a.direction=G(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(U(n,"main"),U(n,"temp"),N.is.firefox===!0&&z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ke(){let e=Object.create(null);return{getCache:(n,a)=>e[n]===void 0?e[n]=typeof a=="function"?a():a:e[n],setCache(n,a){e[n]=a},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Te={name:{required:!0},disable:Boolean},ee={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},K(n.default))}},$e={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ae=["update:modelValue","beforeTransition","transition"];function Ie(){const{props:e,emit:n,proxy:a}=Y(),{getCache:l}=ke(),{registerTimeout:s}=pe();let t,i;const r=L(null),m=L(null);function y(o){const c=e.vertical===!0?"up":"left";P((a.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const u=f(()=>[[Se,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),v=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),_=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(o,c)=>{const b=w(o)===!0?I(o):-1;i!==!0&&k(b===-1?0:b<I(c)?-1:1),r.value!==b&&(r.value=b,n("beforeTransition",o,c),s(()=>{n("transition",o,c)},e.transitionDuration))});function $(){P(1)}function D(){P(-1)}function A(o){n("update:modelValue",o)}function w(o){return o!=null&&o!==""}function I(o){return t.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function B(){return t.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function k(o){const c=o!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(o===-1?g.value:v.value):null;m.value!==c&&(m.value=c)}function P(o,c=r.value){let b=c+o;for(;b!==-1&&b<t.length;){const F=t[b];if(F!==void 0&&F.props.disable!==""&&F.props.disable!==!0){k(o),i=!0,n("update:modelValue",F.props.name),setTimeout(()=>{i=!1});return}b+=o}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&P(o,o===-1?t.length:-1)}function O(){const o=I(e.modelValue);return r.value!==o&&(r.value=o),!0}function d(){const o=w(e.modelValue)===!0&&O()&&t[r.value];return e.keepAlive===!0?[p(ue,S.value,[p(_.value===!0?l(C.value,()=>({...ee,name:C.value})):ee,{key:C.value,style:x.value},()=>o)])]:[p("div",{class:"q-panel scroll",style:x.value,key:C.value,role:"tabpanel"},[o])]}function q(){if(t.length!==0)return e.animated===!0?[p(se,{name:m.value},d)]:d()}function E(o){return t=ye(K(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function h(){return t}return Object.assign(a,{next:$,previous:D,goTo:A}),{panelIndex:r,panelDirectives:u,updatePanelsList:E,updatePanelIndex:O,getPanelContent:q,getEnabledPanels:B,getPanels:h,isValidPanelName:w,keepAliveProps:S,needsUniqueKeepAliveWrapper:_,goToPanelByOffset:P,goToPanel:A,nextPanel:$,previousPanel:D}}var R=te({name:"QCarouselSlide",props:{...Te,imgSrc:String},setup(e,{slots:n}){const a=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:a.value},K(n.default))}});let V=0;const Be={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ee=["update:fullscreen","fullscreen"];function Ne(){const e=Y(),{props:n,emit:a,proxy:l}=e;let s,t,i;const r=L(!1);be(e)===!0&&T(()=>l.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),T(()=>n.fullscreen,g=>{r.value!==g&&m()}),T(r,g=>{a("update:fullscreen",g),a("fullscreen",g)});function m(){r.value===!0?u():y()}function y(){r.value!==!0&&(r.value=!0,i=l.$el.parentNode,i.replaceChild(t,l.$el),document.body.appendChild(l.$el),V++,V===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:u},Z.add(s))}function u(){r.value===!0&&(s!==void 0&&(Z.remove(s),s=void 0),i.replaceChild(l.$el,t),r.value=!1,V=Math.max(0,V-1),V===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return ce(()=>{t=document.createElement("span")}),ne(()=>{n.fullscreen===!0&&y()}),oe(u),Object.assign(l,{toggleFullscreen:m,setFullscreen:y,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:m}}const je=["top","right","bottom","left"],Ve=["regular","flat","outline","push","unelevated"];var De=te({name:"QCarousel",props:{...xe,...$e,...Be,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ve.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>je.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ee,...Ae],setup(e,{slots:n}){const{proxy:{$q:a}}=Y(),l=Ce(e,a);let s=null,t;const{updatePanelsList:i,getPanelContent:r,panelDirectives:m,goToPanel:y,previousPanel:u,nextPanel:g,getEnabledPanels:v,panelIndex:x}=Ie(),{inFullscreen:C}=Ne(),S=f(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),_=f(()=>e.vertical===!0?"vertical":"horizontal"),$=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${_.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),A=f(()=>{const d=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?d.reverse():d}),w=f(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),I=f(()=>e.navigationActiveIcon||w.value),B=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&k()}),T(()=>e.autoplay,d=>{d?k():s!==null&&(clearTimeout(s),s=null)});function k(){const d=de(e.autoplay)===!0?Math.abs(e.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,d>=0?g():u()},d)}ne(()=>{e.autoplay&&k()}),oe(()=>{s!==null&&clearTimeout(s)});function P(d,q){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(q))])}function O(){const d=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:h=>p(X,{key:"nav"+h.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${h.active===!0?"":"in"}active`,...h.btnProps,onClick:h.onClick}),E=t-1;d.push(P("buttons",(h,o)=>{const c=h.props.name,b=x.value===o;return q({index:o,maxIndex:E,name:c,active:b,btnProps:{icon:b===!0?I.value:w.value,size:"sm",...B.value},onClick:()=>{y(c)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push(P("thumbnails",E=>{const h=E.props;return p("img",{key:"tmb#"+h.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${h.name===e.modelValue?"":"in"}active`+q,src:h.imgSrc||h["img-src"],onClick:()=>{y(h.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&d.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${_.value} absolute flex flex-center`},[p(X,{icon:A.value[0],...B.value,onClick:u})])),(e.infinite===!0||x.value<t-1)&&d.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${_.value} absolute flex flex-center`},[p(X,{icon:A.value[1],...B.value,onClick:g})]))),he(n.control,d)}return()=>(t=i(n),p("div",{class:D.value,style:S.value},[ge("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>m.value)].concat(O())))}});const Oe={class:"q-pa-md"},Xe={__name:"PruebasPage",setup(e){const n=L(1);return(a,l)=>(ve(),fe("div",Oe,[j(De,{swipeable:"",animated:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),thumbnails:"",infinite:"",arrows:""},{default:me(()=>[j(R,{name:1,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),j(R,{name:2,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),j(R,{name:3,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),j(R,{name:4,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"})]),_:1},8,["modelValue"])]))}};export{Xe as default};
