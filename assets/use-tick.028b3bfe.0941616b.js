import{h as a}from"./vm.84167867.17286884.js";import{_ as c,i as u,n as f,j as m}from"./index.8b3fe72c.js";let s,i=0;const o=new Array(256);for(let t=0;t<256;t++)o[t]=(t+256).toString(16).substring(1);const p=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return n=>{const r=new Uint8Array(n);return t.getRandomValues(r),r}}return n=>{const r=[];for(let e=n;e>0;e--)r.push(Math.floor(Math.random()*256));return r}})(),d=4096;function v(){(s===void 0||i+16>d)&&(i=0,s=p(d));const t=Array.prototype.slice.call(s,i,i+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,o[t[0]]+o[t[1]]+o[t[2]]+o[t[3]]+"-"+o[t[4]]+o[t[5]]+"-"+o[t[6]]+o[t[7]]+"-"+o[t[8]]+o[t[9]]+"-"+o[t[10]]+o[t[11]]+o[t[12]]+o[t[13]]+o[t[14]]+o[t[15]]}function w(){let t;const n=m();function r(){t=void 0}return c(r),u(r),{removeTick:r,registerTick(e){t=e,f(()=>{t===e&&(a(n)===!1&&t(),t=void 0)})}}}export{v,w as x};
