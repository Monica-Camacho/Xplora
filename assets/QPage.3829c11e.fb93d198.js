import{k as p,J as r,a as n,q as u,W as h,$ as s,f as d,j as g}from"./index.8b3fe72c.js";import{f as v}from"./render.019faeb2.42954859.js";var Q=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:i}){const{proxy:{$q:t}}=g(),e=r(u,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(r(h,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const c=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const f=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return o.styleFn(a,f)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":t.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":t.screen.height-a+"px"}}),l=s(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:l.value,style:c.value},v(i.default))}});export{Q};
