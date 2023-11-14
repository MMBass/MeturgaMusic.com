var Ce=Object.defineProperty,ve=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var le=(t,r,n)=>r in t?Ce(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,S=(t,r)=>{for(var n in r||(r={}))ce.call(r,n)&&le(t,n,r[n]);if(Y)for(var n of Y(r))de.call(r,n)&&le(t,n,r[n]);return t},A=(t,r)=>ve(t,we(r));var L=(t,r)=>{var n={};for(var s in t)ce.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&Y)for(var s of Y(t))r.indexOf(s)<0&&de.call(t,s)&&(n[s]=t[s]);return n};import{c as he,R as G,r as l,j as e,a as D,M as ke,B as Ne,b as V,d as Ae,e as Te,s as b,L as ge,u as Le,T as pe,C as Ie,f as ze,g as fe,h as _e,i as Oe,k as Be,l as F,A as te,N as K,m as $,n as Q,o as Ee,p as M,D as xe,I as J,q as Pe,t as $e,v as Me,w as Re,x as Fe,y as _,z as Je,E as ye,F as z,S as je,G as oe,H as I,J as Z,K as Se,O as k,P as He,Q as Ge,U as We,V as qe,W as Ue,X as Ve,Y as Ze,Z as Qe,_ as me,$ as Ke,a0 as Xe,a1 as Ye,a2 as et,a3 as be,a4 as tt,a5 as ee,a6 as se,a7 as rt,a8 as nt,a9 as ot,aa as st,ab as at,ac as it,ad as ut,ae as lt,af as ct,ag as dt,ah as pt,ai as mt,aj as Dt,ak as ht,al as U,am as gt,an as ft,ao as Et,ap as xt}from"./vendor.bbc993fa.js";const yt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};yt();const ne=he({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),St=he({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#darkgray",light:"#white",dark:"#black",contrastText:"#white"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),X=G.createContext(void 0);function bt(t){const[r,n]=l.exports.useState({}),i={openDrawer:(u,o,d="temporary",h)=>{n({open:u,anchor:o,permanent:d,child:h})},closeDrawer:()=>{n({})}};return e(X.Provider,{value:S(S({},r),i),children:t.children})}const re=G.createContext(void 0);function Ct(t){const[r,n]=l.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),u={createLoader:(o,d)=>{r[o]&&n(A(S({},r),{[o]:void 0})),n(A(S({},r),{[o]:{open:!1,color:d||"inherit"}}))},openLoader:o=>{r[o]?n(A(S({},r),{[o]:A(S({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(A(S({},r),{[o]:A(S({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return e(re.Provider,{value:S(S({},r),u),children:t.children})}const W=G.createContext(void 0);function vt(t){var o;const[r,n]=l.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),u={createBanner:(d,h,y,f,g)=>{r[d]&&n(A(S({},r),{[d]:void 0})),n(A(S({},r),{[d]:{open:!0,severity:h||"success",title:y||"",message:f||"",action:g||{}}}))},openBanner:d=>{r[d]?n(A(S({},r),{[d]:A(S({},r[d]),{open:!0})})):console.error("Banner "+d+" does'nt exist")},closeBanner:d=>{r[d]?n(A(S({},r),{[d]:A(S({},r[d]),{open:!1})})):console.error("Banner "+d+" does'nt exist")}};return e(W.Provider,{value:S(S({},r),u),children:t.children})}function wt(t){const[r]=l.exports.useState(t.theme.palette.primary.main);return e("div",{className:"wrapper",children:D(ke,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}const kt=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},Nt=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},At=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Tt=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,Lt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},It=()=>{let t=!1;const r=navigator.userAgent;return/android/i.test(r)?t=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(t=!0),t},zt=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function _t(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const Ot=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Bt=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")};var w={loadGscScript:kt,lsSaveSong:At,lsFindSong:Tt,lsSaveWord:Nt,clearGsc:Lt,getMobileOS:It,keyboardHEENSwitcher:zt,isMostlyEnglish:_t,loadGoogleAds:Ot,titleToParams:Bt};const R=G.createContext(void 0);function Pt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,s]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),[a,i]=l.exports.useState(!1);function u(E){i(E)}const o=()=>{n.fontSize.md<60&&(s(A(S({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),h())},d=()=>{n.fontSize.sm>7&&(s(A(S({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),h())};function h(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function y(){localStorage.setItem("colors_mode",n.colors)}function f(E){s(A(S({},n),{colors:E})),y()}const g={reduceFontSize:d,increaseFontSize:o,setColors:f,updateBadge:u};return e(R.Provider,{value:A(S(S({},n),g),{badge:a}),children:t.children})}function $t({className:t}){const r=l.exports.useContext(R);return e("div",{id:"",className:t,children:D(Ne,{className:"button-group",children:[e(V,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(Ae,{fontSize:"small"})}),e(V,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(V,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Te,{fontSize:"small"})})]})})}const Mt=b($t)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${t=>t.theme.palette.secondary.light};
    color: #686F82;
    padding: unset;
  }

  .font-size-disabled{
    /* pointer-events: unset;
    cursor: unset; */
    color: #fff !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff47;
  }

  .Mui-disabled {
    border: unset !important;
}

`;function Rt(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(0);return l.exports.useEffect(()=>{const u=setInterval(()=>{i(o=>{if(o===100)return 0;const d=Math.random()*10;return Math.min(o+d,100)})},220);return()=>{clearInterval(u)}},[]),e(ge,{variant:"determinate",value:a,color:r.color})}const Ft=b(Rt)`
  
`,q=G.createContext(void 0);function Jt(t){const r=l.exports.useContext(re),n=l.exports.useContext(W),[s,a]=l.exports.useState(""),[i,u]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,d]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,y]=l.exports.useState(!1),[f,g]=l.exports.useState(!1);l.exports.useEffect(()=>{o[0]&&B()},[o,h]);const E="https://musicline-backend.vercel.app",T=(C,p)=>{g(!0),p=p.replace(/[\])}[{(]/g,"").trim();let c=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!O(p,c)&&fetch(`${E}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:C})}).then(m=>m.json()).then(m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),c&&(c.style.pointerEvents="all"),(m==null?void 0:m.combined)&&Array.isArray(m==null?void 0:m.combined))u(p),a(m.id),d(m.combined),w.lsSaveSong({title:p,lines:m.combined}),w.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(m.combined)),sessionStorage.setItem("currSongTitle",p);else if(m==null?void 0:m.lyrics){u(p);let x=m.lyrics,N=[];x.split(/(?:\r\n|\r|\n)/g).map(v=>{if(v.length>=2)if(w.isMostlyEnglish(v))if(v.length>90){console.log(v);let ie=v.split(",");ie[0].length>10?ie.map(ue=>{N.push({src:ue,trans:"",transError:!1}),console.log("by Commas: "+ue)}):N.push({src:v.replace(".",""),trans:"",transError:!1})}else N.push({src:v.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+v),N.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),g(!1),d(N),w.clearGsc()}else g(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+p.replaceAll(" ","+")+" lyrics"})}).catch(m=>{g(!1),console.log(m),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),c&&(c.style.pointerEvents="all")})},O=(C,p)=>{let c=w.lsFindSong(C);return c&&Array.isArray(c.lines)?(p&&(p.style.pointerEvents="all"),u(C),d(c.lines),w.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(c.lines)),sessionStorage.setItem("currSongTitle",C),!0):!1},B=()=>{f||o.every((C,p)=>!C.trans.length||C.transError?(h?j(C.src,p):P(C.src,p),!1):!0)},P=(C,p)=>{fetch(`${E}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:s,title:i})}).then(c=>c.json()).then(c=>{let m=[];(c==null?void 0:c.trans.length)?(c.trans.map((x,N)=>{m[N]={src:o[N].src,trans:x}}),d(m),w.lsSaveSong({title:i,lines:m}),sessionStorage.setItem("currLines",JSON.stringify(m)),sessionStorage.setItem("currSongTitle",i)):(console.error("status is ok but azure translation missing"),y(!0))}).catch(c=>{console.log(c),y(!0)})},j=(C,p)=>{let c=[...o];fetch(`${E}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(C)})}).then(m=>m.json()).then(m=>{var x,N;(m==null?void 0:m.trans)?(c[p]={src:C,trans:m==null?void 0:m.trans},d(c),((x=o[o.length-1])==null?void 0:x.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",i))):(o[p].trans===void 0?c[p]={src:C,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[p].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(c[p]={src:C,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(c),((N=o[o.length-1])==null?void 0:N.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(c)),sessionStorage.setItem("currSongTitle",i)))}).catch(m=>{var N;o[p].trans===""?c[p]={src:C,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[p].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(c[p]={src:C,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(c),((N=o[o.length-1])==null?void 0:N.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",i),y(!1)),console.log(m)})},H={getSongLyrics:T,getFullTrans:P,checkNextTrans:B,setLines:d,setTitle:u};return e(q.Provider,{value:S({title:i,lines:o},H),children:t.children})}function jt(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(!1),[u,o]=l.exports.useState(""),[d,h]=l.exports.useState(!1),y=Le(),f=l.exports.useContext(q),g=l.exports.useContext(W);l.exports.useEffect(()=>{r.addRecordMode||o(f.title)},[f.title]),l.exports.useEffect(()=>{E()},[]);const E=()=>{w.getMobileOS()&&h(!0)};function T(){if(w.getMobileOS()){const p=document.querySelectorAll(".gsc-control-cse")[0];p.style.visibility="visible",p.style.marginTop="90px"}}l.exports.useEffect(()=>{w.loadGscScript(),O()},[]);function O(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))T(),B();else{let c=function(){B()};const m=document.querySelector("#gcse-my-wrapper"),x={childList:!0,attributes:!0,subtree:!1};new MutationObserver(c).observe(m,x)}}function B(){i(!0);const p=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],c={childList:!1,attributes:!0,subtree:!1};function m(){H()}new MutationObserver(m).observe(p,c)}function P(p){if(o(p.target.value),p.nativeEvent.data!==" ")j(p.target.value);else return}function j(p){g.error&&g.closeBanner("error");let c=document.querySelector("#gsc-i-id1"),m=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(c)if(p.length<=1){let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))}else if(m.test(p)){c.value=p;let x=document.querySelectorAll(".gsc-search-box button")[0];x?setTimeout(()=>{x.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{g.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let x=document.querySelector(".gsst_a");x&&x.dispatchEvent(new Event("click"))},250);return}else g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const H=()=>{setTimeout(()=>{let p=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");p&&p.forEach((c,m)=>{if(c.innerText.includes("Lyrics")){if(c.innerText.includes("(")){let v=c.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((v==null?void 0:v.includes("live"))||(v==null?void 0:v.includes("mix"))||(v==null?void 0:v.includes("remix"))){c.parentElement.parentElement.parentElement.remove();return}}let x=c.innerText.split("Lyrics")[0];if(x=x.replaceAll("\u2013","-"),!w.isMostlyEnglish(x)){c.parentElement.parentElement.parentElement.remove();return}c.innerHTML=`<strong>${x.split("-")[0]}</strong> - <span>${x.split("-")[1]}</span>`;const N={artistName:encodeURI(x.split("-")[0]),songName:encodeURI(x.split("-")[1])};c.nodeName!=="A"&&c.parentElement.parentElement.parentElement.addEventListener("click",()=>{C(c,x,N)}),c.style.display="block"}else c.innerText.includes("Lyrics")||c.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&c.parentElement.parentElement.parentElement.remove()})},50)},C=(p,c,m)=>{if(p.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(c),p.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",w.clearGsc(),o(" ");return}f.title.replaceAll(" ","")==c.replaceAll(" ","")&&(p.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",w.clearGsc()),f.title.replaceAll(" ","")!=c.replaceAll(" ","")&&f.getSongLyrics(m,c),o(c),location.hash!="#/"&&y("/")};return D("div",{className:t,children:[!d&&!r.addRecordMode&&e(pe,{size:r.size,id:"outlined-search",label:a?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8":e(Ie,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:a?P:null,autoFocus:!1,autoComplete:"off",value:u}),r.addRecordMode&&e(pe,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:a?P:null,autoFocus:!1,autoComplete:"off",value:u,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const ae=b(jt)`
  *, ::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  .add-record-input *{
    border-radius: 0;

    input{
    padding-bottom: 20px;
  }
  } 

  .main-input{ 
      direction: rtl; // will turn to LTR, mui settings replace to opposite
      margin: auto;
   
      width: 450px;
      border-color: ${t=>t.theme.palette.primary.dark};

      @media (max-width: 600px) {
        width: 95%;
      }

      input, fieldset, label{
        color: ${t=>t.theme.palette.primary.main+"!important"};
        border-color: ${t=>t.theme.palette.secondary.contrastText+"!important"};

        font-weight: 600;
        border-width: medium;
      }
    }

  .top-input{
      min-width: 100%;
      direction: rtl; // will turn to LTR, mui settings replace to opposite
      margin: auto;

      border-color: ${t=>t.theme.palette.primary.dark};

      input, fieldset, label{
        color: white !important;
        border-color: white !important;

        font-weight: 600;
        border-width: medium;
      }
  }
`;function Ht({className:t}){const r=l.exports.useContext(R),n=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",url:"/history",icon:e(ze,{className:"side-icons"})},{name:"\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D9\u05DC\u05D9\u05DD",url:"/exercise",icon:e(fe,{variant:"dot",invisible:!r.badge,color:"error",children:e(_e,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05E8\u05E6\u05D9\u05EA\u05D9 \u05DC\u05EA\u05E8\u05D2\u05DD",url:"/wish-list",icon:e(Oe,{className:"side-icons"}),chip:e(Be,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return D(F,{className:t,sx:{maxWidth:"320px"},children:[e(te,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),n.map((s,a)=>e(K,{to:s.url,className:"nav-link",children:D($,{children:[D(Q,{children:[e(Ee,{children:s.icon}),e(M,{primary:s.name,primaryTypographyProps:{style:{color:"black"}}}),s.chip&&s.chip]}),e(xe,{})]},s.name)},a))]})}const Gt=b(Ht)`
  .side-icons{
    color: ${t=>t.theme.palette.secondary.dark};
    font-size: '14px';
  }

  .pages-list-chip{
    margin-inline-start: 20px;
    padding: 3px;
    padding-bottom: 5px;
    background-color: ${t=>t.theme.palette.primary.main};
    color: ${t=>t.theme.palette.primary.light};
  }
`;function Wt(n){var s=n,{className:t}=s,r=L(s,["className"]);const a=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(J,{onClick:()=>a(),children:e(Pe,{className:"mui-rounded-icon"})})})}b(Wt)`
text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${t=>t.theme.mode==="light"?"#000":"#fff"};
    color: ${t=>t.theme.mode==="light"?"#fff":"#000"};
    border-radius: 12px;
  }
`;const qt=n=>{var s=n,{className:t}=s,r=L(s,["className"]);var T,O,B,P,j,H,C,p;const[a,i]=l.exports.useState(!1),u=l.exports.useContext(X),o=l.exports.useContext(q),d=l.exports.useContext(W),h=l.exports.useContext(re),y=l.exports.useContext(R),f=$e();l.exports.useEffect(()=>{i(!1),window.scrollTo(0,0),d.closeBanner("error")},[f,o.title]);const g=()=>{d.closeBanner("error"),u.open?u.closeDrawer():u.openDrawer(!0,"left","temporary",Gt)};function E(c){c.preventDefault()}return D(Me,{position:"sticky",className:t,children:[h.main.open&&e(Ft,{color:h.main.color}),e(Re,{maxWidth:"xl",children:D(Fe,{disableGutters:!0,children:[e(_,{children:e(J,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:g,children:u.open?e(ye,{className:"burger-icon"}):e(fe,{variant:"dot",invisible:!y.badge,children:e(Je,{className:"burger-icon"})})})}),(((T=o.lines)==null?void 0:T[0])||f.pathname!=="/")&&e(z,{children:f.pathname!=="/wish-list"&&D(z,{children:[e(J,{className:"mui-search-icon-wrapper",onClick:()=>i(!a),children:e(je,{className:"mui-search-icon"})}),e(_,{className:a&&"collapse-search-box",children:e(oe,{className:"search-ctr-collapse",orientation:"horizontal",in:a,collapsedSize:0,children:e(_,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:E,className:"search-ctr",children:a&&e(ae,{locat:"top",size:"small",setTopSearchBar:()=>{i()}})})})})]})}),!a&&e(K,{to:"/",onClick:()=>{},children:D(I,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),f.pathname==="/"&&!a&&((O=o.lines)==null?void 0:O[0])&&e(z,{children:e(Mt,{})})]})}),e(oe,{in:(B=d.error)==null?void 0:B.open,children:D(te,{severity:"error",className:"error-alert",action:((P=d.error)==null?void 0:P.action)&&e(Z,{padding:"7px",href:(j=d.error)==null?void 0:j.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(H=d.error)==null?void 0:H.action.actionText}),onClose:()=>{d.closeBanner("error")},children:[e(Se,{children:(C=d.error)==null?void 0:C.title}),(p=d.error)==null?void 0:p.message]})})]})},Ut=b(qt)`
  background-color: ${t=>t.theme.palette.primary.dark};
  color: ${t=>t.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${t=>t.theme.palette.primary.main};
  }

  a{
    color: ${t=>t.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${t=>t.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${t=>t.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${t=>t.theme.palette.secondary.dark};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .burger-icon{
    margin-top: 2px;
  }

  .mui-search-icon-wrapper{
    margin-inline-end: 10px;

    .mui-search-icon{
      margin-top: 5px;
    }
  }

  #outlined-search, #outlined-search span{
   color: #3a3a3a !important;
  }

  .collapse-search-box, .collapse-search-box .MuiCollapse-wrapperInner {
    width: 100%;
    max-width: 420px;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }

    a{
      font-size: small;
      text-decoration: underline !important;
    }
  }

  .MuiBadge-anchorOriginTopRightRectangular{
    background-color: white;
  }
`;function Vt(n){var s=n,{className:t}=s,r=L(s,["className"]);return e("div",{className:t,children:r.children})}const Zt=b(Vt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.secondary.light};

  color: ${t=>t.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    font-size: 140px; 
    font-weight: 100;
    color: ${t=>t.theme.palette.primary.contrastText};
    
    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 46px;
      font-weight: 300;
    }
  }

  .page-h3{
    margin: 40px 0px 35px  0px;
    font-size: 38px; // 29
    font-weight: 400;
    color: ${t=>t.theme.palette.primary.contrastText};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 35px  0px;
      font-size: 22px;

      small{
      letter-spacing: 0.7px;
      }

      .small-one{
        font-weight: 600;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
  }

  .main-alert{
    background-color: ${t=>t.theme.palette.secondary.dark};
    color: ${t=>t.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
  
`;function Qt({className:t}){return l.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:D(k,{container:!0,rowSpacing:6,columnSpacing:2,children:[D(k,{item:!0,xs:12,sm:4,children:[D(F,{children:[e(He,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e($,{component:Z,href:"mailto:meturgamusic@gmail.com",children:e(M,{primary:"MeturgaMusic@gmail.com"})}),e($,{component:Z,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(M,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(F,{children:e($,{component:Z,href:"https://basssites.com",className:"built-by",children:e(M,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),e(k,{item:!0,xs:12,sm:4})]})})}const Kt=b(Qt)`
  /* color: ${t=>t.theme.palette.primary.contrastText}; */
  background-color: ${t=>t.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: unset;
  }

  svg{
    font-size: 15px;
    color: ${t=>t.theme.palette.secondary.dark};
  }

  span{
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: ${t=>t.theme.palette.secondary.light};
    margin: unset;
  }

  .built-by{
    color: ${t=>t.theme.palette.secondary.light};
  }

`;function Xt(n){var s=n,{className:t}=s,r=L(s,["className"]);const a=l.exports.useContext(X);return e(Ge,{className:t,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.closeDrawer()},children:e(_,{className:"drawer-layout",role:"presentation",onClick:()=>{a.closeDrawer()},children:e(a.child,{})})})}const Yt=b(Xt)`

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`;function er({className:t}){const[r,n]=l.exports.useState(!0),s=()=>{n(!1)};return D(We,{id:"main-modal-root",className:t,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(qe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(Ue,{children:e(Ve,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Ze,{children:e(V,{onClick:s,children:"Close"})})]})}b(er)`
  
`;function tr(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(!0);return e(Qe,{className:t,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}b(tr)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function rr({className:t}){return e("div",{id:"",className:t})}const nr=b(rr)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function or(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(!1),u=l.exports.useContext(R);l.exports.useEffect(()=>{o()&&i(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(y=>y.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,d=()=>{try{w.lsSaveWord(r.toSave),i(!0),u.updateBadge(1)}catch(h){h&&console.log(h)}};return e("span",{className:t,children:a?e(z,{children:r.variant==="Bookmark"?e(me,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(me,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(z,{children:r.variant==="Bookmark"?e(z,{children:e(Ke,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>d()})}):D("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>d(),children:[e(Xe,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const sr=b(or)`

    .book-mark-bottom-icon-wrapper{
        margin-top: 10px;
        margin-bottom: -3px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        background-color: #df808ea8;
        border-radius: 0 0 5px 3px;
        box-shadow: 0 10px 10px -8px rgba(0, 0, 0,.7);
        cursor: pointer;

        .book-mark-bottom-icon, span{
            margin: 2px;
            font-size: 14px;
        }

        span{
            font-size: 13px;
        }

        :hover{
            background-color: ${t=>t.theme.palette.primary.main};
        }
    }

    .book-mark-top-icon{
        position: absolute;
        top: -10px;

        font-size: 12px;

        :hover{
            background-color: ${t=>t.theme.palette.primary.dark};
        }
    }

    .bm-disabled{
        pointer-events: none;
        background-color: dark;
    }
`;function ar(n){var s=n,{className:t}=s,r=L(s,["className"]);const a=l.exports.useContext(R),i=l.exports.useContext(q),u=()=>{if(r.results[0]){let o="";return r.results.map((d,h)=>{h+1===r.results.length?o+=d:o+=d+", "}),e("p",{className:"tt-p",children:o})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(Ye,{onClickAway:r.tooltipClose,children:D("span",{className:t,children:[e(I,{className:"tt-top",color:"inherit",style:{fontSize:a.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:a.fontSize.md-2},children:r.results[0]?e(u,{}):e(ge,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(sr,{toSave:{word:r.lyric,results:r.results,title:i.title},variant:"Star"})]})})}const ir=b(ar)`

    .tt-top{
        padding: 0.1em;
        padding-inline-start: 8px;
    }

    hr{
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 22px;

        border: unset;
        border-top: 1.5px solid rgb(180, 180, 180);
    }

    p{
        margin: unset;
    }

    .tt-body{
        max-height: 110px;
        overflow-y: auto;
        word-spacing: 0.4em;
        line-height: 1.5em;
        padding: 8px;
        padding-inline-start: 10px;

        ::-webkit-scrollbar {
            width: 2px;
        }

        .tt-body-linear{
            margin: 8px;
        }
    }

`;function ur(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(!1),[u,o]=l.exports.useState([]);l.exports.useEffect(()=>{},[]);const d=()=>{i(!0),u[0]||y()},h=()=>{i(!1)};function y(){const f="https://musicline-backend.vercel.app";let g=r.lyric.trim().toLowerCase();g=g.replaceAll(/[^a-zA-Z0-9']/g,""),g.slice(-1)==="'"&&(g=g.replaceAll("'","g")),fetch(`${f}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(g)})}).then(E=>E.json()).then(E=>{if(E==null?void 0:E.results[0]){o(E.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(E=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(E)})}return e(z,{children:e(et,{className:t,title:e(ir,{tooltipClose:h,className:"tt-childs",lyric:r.lyric,results:u}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:h,open:a,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:D("span",{children:["\xA0 ",D("p",{className:"single-lyric",onClick:d,children:[" ",r.lyric," "]})]})})})}const De=b(ur)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function lr(n){var s=n,{className:t}=s,r=L(s,["className"]);let[a,i]=be();const u=l.exports.useContext(q),o=l.exports.useContext(R);l.exports.useEffect(()=>{},[]),l.exports.useEffect(()=>{i(w.titleToParams(u.title))},[u.title]);const d=()=>{sessionStorage.removeItem("currLines"),u.setLines([]),u.setTitle("")};return e(tt,{elevation:3,className:t,children:D(k,{container:!0,rowSpacing:1,columnSpacing:0,children:[D(k,{item:!0,xs:12,children:[e(J,{onClick:()=>d(),children:e(ye,{className:"remove-icon"})}),e(I,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:u.title&&u.title.split(" ").map((h,y)=>e(De,{lyric:h,open:!1},ee()))})]}),u.lines.map((h,y)=>{var f;return h.src.includes("[")&&(h.trans="   "),D(k,{item:!0,xs:12,children:[y>0&&h.src.includes("[")&&D(z,{children:[e("br",{}),e("br",{})]}),e(_,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:h.src.split(" ").map((g,E)=>(g.slice(-1)==="'"&&(g=g.replaceAll("'","g")),e(De,{lyric:g,open:y==1&E==1},ee())))}),e(_,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:e(z,{children:((f=h.trans)==null?void 0:f.length)?h.trans.split(" ").map((g,E)=>{if(h.trans!=="   ")return D("small",{className:"single-trans",children:[g," \xA0"]},ee())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},ee())})]})})}const cr=b(lr)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 500;
  border-radius: 10px;
  margin: 15px 0px 25px 10px;
  padding: 15px 50px 40px 50px;
  width: auto;

  @media (max-width: 600px) {
    margin: 15px 3px 25px 3px;
    padding: 15px;
  }
  
  h3{
    text-align: center;
    padding-top: 5px;
    padding-bottom: 30px;
  }

  .single-lyric, .single-trans{
    display: inline;
    padding: 0px 1px;
    text-transform: none;
  }

  .en-line{
    margin-top: 8px;
    direction: rtl;
    text-align: left;
  }
`;function dr({className:t}){var h,y,f,g,E;const r=l.exports.useContext(q),n=l.exports.useContext(W),s=l.exports.useContext(X),[a,i]=be(),u=a.get("song");l.exports.useEffect(()=>{s.closeDrawer(),n.error&&n.closeBanner("error"),u&&u.includes("_")&&o(),w.loadGoogleAds(),window.adsbygoogle=window.adsbygoogle||[]},[]);function o(){let T=u;T=T.replaceAll("-"," ");const O={artistName:encodeURI(` ${T.split("_")[0]} `),songName:encodeURI(` ${T.split("_")[1]} `)};T=T.replaceAll("_"," - "),r.getSongLyrics(O,T)}function d(T){T.preventDefault()}return D("div",{className:t,children:[!((h=r.lines)==null?void 0:h[0])&&e("div",{className:"home-top",children:D(k,{container:!0,className:"home-t-container",children:[!((y=r.lines)==null?void 0:y[0])&&e(k,{item:!0,xs:12,sm:6,children:e(I,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),D(k,{item:!0,xs:12,sm:6,children:[!((f=r.lines)==null?void 0:f[0])&&D(I,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),!((g=r.lines)==null?void 0:g[0])&&e(_,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:d,className:"search-ctr",children:e(ae,{locat:"main",size:"large"})})]})]})}),((E=r.lines)==null?void 0:E[0])&&D(k,{container:!0,spacing:1,children:[e(k,{item:!0,md:12,lg:9,children:e(cr,{className:"lyrics-body"})}),e(k,{item:!0,xs:12,lg:3})]})]})}const pr=b(dr)`
    min-height: 700px;
    
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
       }
    }

    .home-t-container{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    .h3-s-one{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
            word-spacing: 1px;
        }
   
    }

    .h3-s-two{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.3px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
        }
   
    }

    .small-one{
        @media (max-width: 600px) {
            font-size: 16px;
        }

        color: ${t=>t.theme.palette.primary.main};
        font-size: 25px;
        margin-bottom: 15px;
    }

    .small-two{
        word-spacing: -0.5px;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function mr(n){var s=n,{className:t}=s,r=L(s,["className"]);const a=()=>{r.deleteOneSong(r.song_id)};return e($,{className:t,secondaryAction:e(J,{onClick:()=>{a()},edge:"end","aria-label":"delete",children:e(se,{})}),children:e(M,{primary:e(K,{to:"/"+w.titleToParams(r.title),children:e(Q,{children:e(I,{sx:{color:"black"},children:r.title})})})})})}const Dr=b(mr)`
  background-color: #e8e8e86b;
  margin-top: 5px;
`;function hr({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),s=i=>{let u=r.filter(o=>o.id!==i);n(u),localStorage.setItem("meturgamm_songs",JSON.stringify(u))},a=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return D("div",{className:t,children:[r[0]&&D(_,{children:[e(V,{className:"d-all-btn",component:"label",onClick:()=>{a()},variant:"outlined",startIcon:e(rt,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(F,{sx:{width:"100%"},component:"div",children:e(k,{container:!0,spacing:1,children:r.map((i,u)=>e(k,{item:!0,xs:12,md:6,children:e(Dr,{title:i.title,song_id:i.id,deleteOneSong:s})},i.title+u))})})]}),!r[0]&&e(I,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const gr=b(hr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
   }
`;function fr({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function s(i){const u={title:i,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(u),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const a=i=>{let u=r.filter(o=>o.id!==i);n(u),localStorage.setItem("meturgamm_wish",JSON.stringify(u))};return D(F,{className:t,subheader:e(ae,{addRecordMode:!0,locat:"main",addRecord:s}),children:[e(k,{container:!0,spacing:1,children:r.map((i,u)=>e(k,{item:!0,xs:12,md:6,children:e($,{secondaryAction:e(J,{onClick:()=>{a(i.id)},edge:"end","aria-label":"delete",children:e(se,{})}),children:e(M,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(K,{to:"/"+w.titleToParams(i.title),children:D(Q,{children:[e(nt,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(I,{sx:{color:"black"},children:i.title})]})})})},u)},i.title+u))}),!r[0]&&e(I,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Er=b(fr)`
  min-height: 70vh;
  padding-top: 3px;
`;function xr(n){var s=n,{className:t}=s,r=L(s,["className"]);const[a,i]=l.exports.useState(r.lyric),[u,o]=l.exports.useState(!1),d=()=>{o(!u)},h=()=>{r.deleteOneWord(r.lyric.id)},y=()=>{if(a.results[0]){let f="";return a.results.map((g,E)=>{E+1===a.results.length?f+=g:f+=g+", "}),e("span",{className:"inline-results-p",children:f})}else return null};return D("span",{className:t,children:[e($,{secondaryAction:e(J,{onClick:()=>{h()},edge:"end","aria-label":"delete",children:e(se,{})}),children:D(Q,{onClick:d,children:[e(Ee,{children:e(ot,{})}),e(M,{primary:a.word}),u?e(st,{}):e(at,{})]})}),e(oe,{in:u,timeout:"auto",unmountOnExit:!0,children:e(F,{component:"div",disablePadding:!0,children:e($,{sx:{pl:4},children:e(M,{primary:e(z,{children:e(I,{sx:{display:"inline"},component:"span",children:e(y,{})})}),secondary:e(Q,{component:"span",sx:{mt:"10px"},children:e(K,{to:"/"+w.titleToParams(a.title),children:e(Z,{component:"button",children:e("i",{children:a.title})})})})})})})}),e(xe,{})]})}const yr=b(xr)`
  *{
    background-color: #e8e8e818;
  } 
`;function Sr({className:t}){const r=l.exports.useContext(R),[n,s]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);l.exports.useEffect(()=>{r.updateBadge(!1)},[]);const a=i=>{let u=n.filter(o=>o.id!==i);s(u),localStorage.setItem("meturgamm_words",JSON.stringify(u))};return D("div",{className:t,children:[n[0]&&e(F,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(k,{container:!0,spacing:1,children:n.map((i,u)=>e(k,{item:!0,md:3,lg:3,xs:12,children:e(yr,{lyric:i,deleteOneWord:a})},i.word+u))})}),!n[0]&&e(I,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const br=b(Sr)`
   min-height: 80vh;
`;function Cr({className:t}){return D("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(I,{variant:"h2",className:"page-h2",children:"404"}),e(I,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const vr=b(Cr)`

`;function wr({className:t}){const r=it({target:window,disableHysteresis:!0,threshold:100});return e(ut,{id:"",className:t,in:r,children:e(_,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(lt,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(ct,{htmlColor:"white"})})})})}const kr=b(wr)`
  width: 50px;
  height: 50px;
`;function Nr({className:t}){var h,y;const r=l.exports.useContext(X);l.exports.useContext(re);const n=l.exports.useContext(W),[s,a]=l.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[i,u]=l.exports.useState(ne),o=dt({key:"muirtl",stylisPlugins:[ft,Et]});return e("div",{className:t,children:e(pt,{theme:i,children:D(mt,{value:o,children:[D(Dt,{children:[e(wt,{currTitle:s,theme:i}),D(Zt,{children:[e(Ut,{className:"header",changeColors:()=>{switch(i){case ne:u(St);break;default:u(ne);break}}}),((h=n.main)==null?void 0:h.open)&&D(te,{severity:"warning",className:"main-alert",children:[e(Se,{children:n.main.title}),n.main.message]}),D(ht,{children:[e(U,{path:"/",element:e(pr,{className:"page",rank:1})}),e(U,{path:"/Exercise",element:e(br,{className:"page",rank:1})}),e(U,{path:"/History",element:e(gr,{className:"page",rank:1})}),e(U,{path:"/Wish-list",element:e(Er,{className:"page",rank:1})}),e(U,{path:"*",element:e(vr,{className:"page"})})]}),r.open&&r.child&&e(Yt,{className:"drawer"}),((y=n.infoSnackbar)==null?void 0:y.open)&&e(gt,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(te,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(Kt,{})]})]}),e(nr,{}),e(kr,{})]})})})}const Ar=b(Nr)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
`,Tr=[bt,vt,Ct,Jt,Pt];function Lr(t){return e(z,{children:Tr.reduceRight((r,n)=>e(n,{children:r}),t.children)})}xt.render(e(G.StrictMode,{children:e(Lr,{children:e(Ar,{className:"app"})})}),document.getElementById("root"));
