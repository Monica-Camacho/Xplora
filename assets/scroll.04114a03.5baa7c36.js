import{r as c,A as i}from"./Ripple.501a792b.1154f9f5.js";const r=[Element,String],d=[null,document,document.body,document.scrollingElement,document.documentElement];function u(t,e){let o=c(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return d.includes(o)?window:o}function w(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function f(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let l;function a(){if(l!==void 0)return l;const t=document.createElement("p"),e=document.createElement("div");i(t,{width:"100%",height:"200px"}),i(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let n=t.offsetWidth;return o===n&&(n=e.clientWidth),e.remove(),l=o-n,l}function p(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{w as a,r as d,f,p,u,a as w};
