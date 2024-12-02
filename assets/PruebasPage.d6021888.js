import{S as ie,K as ae,U as E,n as re,V as le,M as O,W as z,P as H,Q,N as U,r as R,a as f,w as T,g as K,h as p,T as se,X as ue,c as te,Y as ce,o as ne,d as oe,Z,_ as de,q as ve,s as fe,z as V,A as me}from"./index.1fe9c731.js";import{u as pe}from"./use-timeout.4925607a.js";import{h as Y,b as ge,a as he}from"./render.882db384.js";import{g as ye,v as be}from"./vm.e4179365.js";import{Q as X}from"./QBtn.fb1e0f6d.js";import{u as xe,a as Ce}from"./use-dark.fc3ca04f.js";import"./Ripple.38b58c7b.js";const W={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_e=Object.keys(W);W.all=!0;function G(e){const n={};for(const i of _e)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?W:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Pe=["INPUT","TEXTAREA"];function J(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Pe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function we(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ie.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,l)=>{const s=parseFloat(i);s&&(n[l]=s)}),n}var Se=ae({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:l}){if(l.mouse!==!0&&E.has.touch!==!0)return;const s=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:qe(i),direction:G(l),noop:re,mouseStart(a){J(a,t)&&le(a)&&(O(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(J(a,t)){const r=a.target;O(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,r){E.is.firefox===!0&&z(e,!0);const m=H(a);t.event={x:m.left,y:m.top,time:Date.now(),mouse:r===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){Q(a);return}const r=Date.now()-t.event.time;if(r===0)return;const m=H(a),y=m.left-t.event.x,u=Math.abs(y),g=m.top-t.event.y,v=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const x=u/r,C=v/r;t.direction.vertical===!0&&u<v&&u<100&&C>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&x>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<v&&g<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&g>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&y<0&&v<100&&x>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&y>0&&v<100&&x>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Q(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),we(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const _=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(_,50):_()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:v}})):t.end(a)},end(a){t.event!==void 0&&(U(t,"temp"),E.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&Q(a),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";O(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}E.has.touch===!0&&O(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=G(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(U(n,"main"),U(n,"temp"),E.is.firefox===!0&&z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ke(){let e=Object.create(null);return{getCache:(n,i)=>e[n]===void 0?e[n]=typeof i=="function"?i():i:e[n],setCache(n,i){e[n]=i},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Te={name:{required:!0},disable:Boolean},ee={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},Y(n.default))}},$e={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ae=["update:modelValue","beforeTransition","transition"];function Ie(){const{props:e,emit:n,proxy:i}=K(),{getCache:l}=ke(),{registerTimeout:s}=pe();let t,a;const r=R(null),m=R(null);function y(o){const c=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const u=f(()=>[[Se,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),v=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),_=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(o,c)=>{const b=w(o)===!0?I(o):-1;a!==!0&&k(b===-1?0:b<I(c)?-1:1),r.value!==b&&(r.value=b,n("beforeTransition",o,c),s(()=>{n("transition",o,c)},e.transitionDuration))});function $(){P(1)}function D(){P(-1)}function A(o){n("update:modelValue",o)}function w(o){return o!=null&&o!==""}function I(o){return t.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function B(){return t.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function k(o){const c=o!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(o===-1?g.value:v.value):null;m.value!==c&&(m.value=c)}function P(o,c=r.value){let b=c+o;for(;b!==-1&&b<t.length;){const M=t[b];if(M!==void 0&&M.props.disable!==""&&M.props.disable!==!0){k(o),a=!0,n("update:modelValue",M.props.name),setTimeout(()=>{a=!1});return}b+=o}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&P(o,o===-1?t.length:-1)}function F(){const o=I(e.modelValue);return r.value!==o&&(r.value=o),!0}function d(){const o=w(e.modelValue)===!0&&F()&&t[r.value];return e.keepAlive===!0?[p(ue,S.value,[p(_.value===!0?l(C.value,()=>({...ee,name:C.value})):ee,{key:C.value,style:x.value},()=>o)])]:[p("div",{class:"q-panel scroll",style:x.value,key:C.value,role:"tabpanel"},[o])]}function q(){if(t.length!==0)return e.animated===!0?[p(se,{name:m.value},d)]:d()}function N(o){return t=ye(Y(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function h(){return t}return Object.assign(i,{next:$,previous:D,goTo:A}),{panelIndex:r,panelDirectives:u,updatePanelsList:N,updatePanelIndex:F,getPanelContent:q,getEnabledPanels:B,getPanels:h,isValidPanelName:w,keepAliveProps:S,needsUniqueKeepAliveWrapper:_,goToPanelByOffset:P,goToPanel:A,nextPanel:$,previousPanel:D}}var L=te({name:"QCarouselSlide",props:{...Te,imgSrc:String},setup(e,{slots:n}){const i=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},Y(n.default))}});let j=0;const Be={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ne=["update:fullscreen","fullscreen"];function Ee(){const e=K(),{props:n,emit:i,proxy:l}=e;let s,t,a;const r=R(!1);be(e)===!0&&T(()=>l.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),T(()=>n.fullscreen,g=>{r.value!==g&&m()}),T(r,g=>{i("update:fullscreen",g),i("fullscreen",g)});function m(){r.value===!0?u():y()}function y(){r.value!==!0&&(r.value=!0,a=l.$el.parentNode,a.replaceChild(t,l.$el),document.body.appendChild(l.$el),j++,j===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:u},Z.add(s))}function u(){r.value===!0&&(s!==void 0&&(Z.remove(s),s=void 0),a.replaceChild(l.$el,t),r.value=!1,j=Math.max(0,j-1),j===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return ce(()=>{t=document.createElement("span")}),ne(()=>{n.fullscreen===!0&&y()}),oe(u),Object.assign(l,{toggleFullscreen:m,setFullscreen:y,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:m}}const Ve=["top","right","bottom","left"],je=["regular","flat","outline","push","unelevated"];var De=te({name:"QCarousel",props:{...xe,...$e,...Be,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>je.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ve.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ne,...Ae],setup(e,{slots:n}){const{proxy:{$q:i}}=K(),l=Ce(e,i);let s=null,t;const{updatePanelsList:a,getPanelContent:r,panelDirectives:m,goToPanel:y,previousPanel:u,nextPanel:g,getEnabledPanels:v,panelIndex:x}=Ie(),{inFullscreen:C}=Ee(),S=f(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),_=f(()=>e.vertical===!0?"vertical":"horizontal"),$=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${_.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),A=f(()=>{const d=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?d.reverse():d}),w=f(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),I=f(()=>e.navigationActiveIcon||w.value),B=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&k()}),T(()=>e.autoplay,d=>{d?k():s!==null&&(clearTimeout(s),s=null)});function k(){const d=de(e.autoplay)===!0?Math.abs(e.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,d>=0?g():u()},d)}ne(()=>{e.autoplay&&k()}),oe(()=>{s!==null&&clearTimeout(s)});function P(d,q){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(q))])}function F(){const d=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:h=>p(X,{key:"nav"+h.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${h.active===!0?"":"in"}active`,...h.btnProps,onClick:h.onClick}),N=t-1;d.push(P("buttons",(h,o)=>{const c=h.props.name,b=x.value===o;return q({index:o,maxIndex:N,name:c,active:b,btnProps:{icon:b===!0?I.value:w.value,size:"sm",...B.value},onClick:()=>{y(c)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push(P("thumbnails",N=>{const h=N.props;return p("img",{key:"tmb#"+h.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${h.name===e.modelValue?"":"in"}active`+q,src:h.imgSrc||h["img-src"],onClick:()=>{y(h.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&d.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${_.value} absolute flex flex-center`},[p(X,{icon:A.value[0],...B.value,onClick:u})])),(e.infinite===!0||x.value<t-1)&&d.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${_.value} absolute flex flex-center`},[p(X,{icon:A.value[1],...B.value,onClick:g})]))),he(n.control,d)}return()=>(t=a(n),p("div",{class:D.value,style:S.value},[ge("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>m.value)].concat(F())))}});const Fe={class:"q-pa-md"},Xe={__name:"PruebasPage",setup(e){const n=R(1);return(i,l)=>(ve(),fe("div",Fe,[V(De,{swipeable:"",animated:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),thumbnails:"",infinite:"",arrows:""},{default:me(()=>[V(L,{name:1,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),V(L,{name:2,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),V(L,{name:3,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"}),V(L,{name:4,"img-src":"src/assets/images/tarjetadestinos/destinos.jpg"})]),_:1},8,["modelValue"])]))}};export{Xe as default};
