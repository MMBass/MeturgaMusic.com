var $e=Object.defineProperty,Oe=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var pe=(t,r,n)=>r in t?$e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,x=(t,r)=>{for(var n in r||(r={}))me.call(r,n)&&pe(t,n,r[n]);if(ne)for(var n of ne(r))ge.call(r,n)&&pe(t,n,r[n]);return t},v=(t,r)=>Oe(t,Pe(r));var T=(t,r)=>{var n={};for(var s in t)me.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&ne)for(var s of ne(t))r.indexOf(s)<0&&ge.call(t,s)&&(n[s]=t[s]);return n};import{c as we,R as Q,r as l,j as e,a as m,B as Me,b as X,d as Re,e as Fe,s as y,L as Ce,u as je,T as De,C as Je,f as He,g as ve,h as Ge,i as We,k as he,l as O,A as se,N as q,m as z,n as j,o as Y,p as I,D as ee,q as Ue,I as P,t as qe,v as Qe,M as ke,w as Ne,x as Ae,y as $,z as Ve,E as Te,F as B,S as Ze,G as le,H as A,J as K,K as Le,O as C,P as Xe,Q as _e,U as Ke,V as Ye,W as et,X as tt,Y as rt,Z as fe,_ as xe,$ as nt,a0 as ot,a1 as st,a2 as at,a3 as it,a4 as ut,a5 as lt,a6 as ct,a7 as dt,a8 as pt,a9 as mt,aa as Ee,ab as gt,ac as Dt,ad as ht,ae as ft,af as ze,ag as xt,ah as oe,ai as ce,aj as Et,ak as yt,al as bt,am as St,an as wt,ao as Ct,ap as vt,aq as kt,ar as Nt,as as At,at as Tt,au as U,av as Lt,aw as _t,ax as zt,ay as It}from"./vendor.eb696ee0.js";const Bt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(u){if(u.ep)return;u.ep=!0;const a=n(u);fetch(u.href,a)}};Bt();const ue=we({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),$t=we({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#darkgray",light:"#white",dark:"#black",contrastText:"#white"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),te=Q.createContext(void 0);function Ot(t){const[r,n]=l.exports.useState({}),a={openDrawer:(i,o,c="temporary",h)=>{n({open:i,anchor:o,permanent:c,child:h})},closeDrawer:()=>{n({})}};return e(te.Provider,{value:x(x({},r),a),children:t.children})}const ie=Q.createContext(void 0);function Pt(t){const[r,n]=l.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),i={createLoader:(o,c)=>{r[o]&&n(v(x({},r),{[o]:void 0})),n(v(x({},r),{[o]:{open:!1,color:c||"inherit"}}))},openLoader:o=>{r[o]?n(v(x({},r),{[o]:v(x({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(v(x({},r),{[o]:v(x({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return e(ie.Provider,{value:x(x({},r),i),children:t.children})}const V=Q.createContext(void 0);function Mt(t){var o;const[r,n]=l.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),i={createBanner:(c,h,S,E,f)=>{r[c]&&n(v(x({},r),{[c]:void 0})),n(v(x({},r),{[c]:{open:!0,severity:h||"success",title:S||"",message:E||"",action:f||{}}}))},openBanner:c=>{r[c]?n(v(x({},r),{[c]:v(x({},r[c]),{open:!0})})):console.error("Banner "+c+" does'nt exist")},closeBanner:c=>{r[c]?n(v(x({},r),{[c]:v(x({},r[c]),{open:!1})})):console.error("Banner "+c+" does'nt exist")}};return e(V.Provider,{value:x(x({},r),i),children:t.children})}const Rt=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},Ft=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},jt=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Jt=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,Ht=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},Gt=()=>{let t=!1;const r=navigator.userAgent;return/android/i.test(r)?t=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(t=!0),t},Wt=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function Ut(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const qt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Qt=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")};var k={loadGscScript:Rt,lsSaveSong:jt,lsFindSong:Jt,lsSaveWord:Ft,clearGsc:Ht,getMobileOS:Gt,keyboardHEENSwitcher:Wt,isMostlyEnglish:Ut,loadGoogleAds:qt,titleToParams:Qt};const J=Q.createContext(void 0);function Vt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,s]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),[u,a]=l.exports.useState(!1);function i(b){a(b)}const o=()=>{n.fontSize.md<60&&(s(v(x({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),h())},c=()=>{n.fontSize.sm>7&&(s(v(x({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),h())};function h(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function S(){localStorage.setItem("colors_mode",n.colors)}function E(b){s(v(x({},n),{colors:b})),S()}const f={reduceFontSize:c,increaseFontSize:o,setColors:E,updateBadge:i};return e(J.Provider,{value:v(x(x({},n),f),{badge:u}),children:t.children})}function Zt({className:t}){const r=l.exports.useContext(J);return e("div",{id:"",className:t,children:m(Me,{className:"button-group",children:[e(X,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(Re,{fontSize:"small"})}),e(X,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(X,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Fe,{fontSize:"small"})})]})})}const Xt=y(Zt)`
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

`;function Kt(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(0);return l.exports.useEffect(()=>{const i=setInterval(()=>{a(o=>{if(o===100)return 0;const c=Math.random()*10;return Math.min(o+c,100)})},220);return()=>{clearInterval(i)}},[]),e(Ce,{variant:"determinate",value:u,color:r.color})}const Yt=y(Kt)`
  
`,Z=Q.createContext(void 0);function er(t){const r=l.exports.useContext(ie),n=l.exports.useContext(V),[s,u]=l.exports.useState(""),[a,i]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,c]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,S]=l.exports.useState(!1),[E,f]=l.exports.useState(!1);l.exports.useEffect(()=>{o[0]&&R()},[o,h]);const b="https://musicline-backend.vercel.app",N=(g,p)=>{f(!0),p=p.replace(/[\])}[{(]/g,"").trim();let D=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!M(p,D)&&fetch(`${b}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:g})}).then(d=>d.json()).then(d=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),D&&(D.style.pointerEvents="all"),(d==null?void 0:d.combined)&&Array.isArray(d==null?void 0:d.combined))i(p),u(d.id),c(d.combined),k.lsSaveSong({title:p,lines:d.combined}),k.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(d.combined)),sessionStorage.setItem("currSongTitle",p);else if(d==null?void 0:d.lyrics){i(p);let _=d.lyrics,w=[];_.split(/(?:\r\n|\r|\n)/g).map(L=>{if(L.length>=2)if(k.isMostlyEnglish(L))if(L.length>90){let re=L.split(",");re[0].length>10?re.map(Be=>{w.push({src:Be,trans:"",transError:!1})}):w.push({src:L.replace(".",""),trans:"",transError:!1})}else w.push({src:L.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+L),w.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),f(!1),c(w),k.clearGsc()}else f(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+p.replaceAll(" ","+")+" lyrics"})}).catch(d=>{f(!1),console.log(d),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),D&&(D.style.pointerEvents="all")})},M=(g,p)=>{let D=k.lsFindSong(g);return D&&Array.isArray(D.lines)?(p&&(p.style.pointerEvents="all"),i(g),c(D.lines),k.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(D.lines)),sessionStorage.setItem("currSongTitle",g),!0):!1},R=()=>{E||o.every((g,p)=>!g.trans.length||g.transError?(h?H(g.src,p):F(g.src,p),!1):!0)},F=(g,p)=>{fetch(`${b}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:s,title:a})}).then(D=>D.json()).then(D=>{let d=[];(D==null?void 0:D.trans.length)?(D.trans.map((_,w)=>{d[w]={src:o[w].src,trans:_}}),c(d),k.lsSaveSong({title:a,lines:d}),sessionStorage.setItem("currLines",JSON.stringify(d)),sessionStorage.setItem("currSongTitle",a)):(console.error("status is ok but azure translation missing"),S(!0))}).catch(D=>{console.log(D),S(!0)})},H=async(g,p)=>{try{let d=[...o],_=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(g)}`;const L=await(await fetch(_)).json();var D=[];if(L&&L[0])L[0].forEach(re=>{D.push(re[0])}),d[p]={src:g,trans:D.join(" ")},c(d);else throw new Error("Google Translation failed.")}catch(d){console.error("Google Translation error:",d),G(g,p)}},G=(g,p)=>{let D=[...o];fetch(`${b}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(g)})}).then(d=>d.json()).then(d=>{var _,w;(d==null?void 0:d.trans)?(D[p]={src:g,trans:d==null?void 0:d.trans},c(D),((_=o[o.length-1])==null?void 0:_.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a))):(o[p].trans===void 0?D[p]={src:g,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[p].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(D[p]={src:g,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(D),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(D)),sessionStorage.setItem("currSongTitle",a)))}).catch(d=>{var w;o[p].trans===""?D[p]={src:g,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[p].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(D[p]={src:g,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(D),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a),S(!1)),console.log(d)})},W={getSongLyrics:N,getFullTrans:F,checkNextTrans:R,setLines:c,setTitle:i,setAbort:f};return e(Z.Provider,{value:x({title:a,lines:o},W),children:t.children})}function tr(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(!1),[i,o]=l.exports.useState(""),[c,h]=l.exports.useState(!1),S=je(),E=l.exports.useContext(Z),f=l.exports.useContext(V);l.exports.useEffect(()=>{r.addRecordMode||o(E.title)},[E.title]),l.exports.useEffect(()=>{b()},[]);const b=()=>{k.getMobileOS()&&h(!0)};function N(){if(k.getMobileOS()){const g=document.querySelectorAll(".gsc-control-cse")[0];g.style.visibility="visible",g.style.marginTop="90px"}}l.exports.useEffect(()=>{k.loadGscScript(),M()},[]);function M(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))N(),R();else{let p=function(){R()};const D=document.querySelector("#gcse-my-wrapper"),d={childList:!0,attributes:!0,subtree:!1};new MutationObserver(p).observe(D,d)}}function R(){a(!0);const g=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],p={childList:!1,attributes:!0,subtree:!1};function D(){G()}new MutationObserver(D).observe(g,p)}function F(g){if(o(g.target.value),g.nativeEvent.data!==" ")H(g.target.value);else return}function H(g){f.error&&f.closeBanner("error");let p=document.querySelector("#gsc-i-id1"),D=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(p)if(g.length<=1){let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))}else if(D.test(g)){p.value=g;let d=document.querySelectorAll(".gsc-search-box button")[0];d?setTimeout(()=>{d.type="button",d.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(f.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{f.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))},250);return}else f.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const G=()=>{setTimeout(()=>{let g=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");g&&g.forEach((p,D)=>{if(p.innerText.includes("Lyrics")){if(p.innerText.includes("(")){let w=p.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((w==null?void 0:w.includes("live"))||(w==null?void 0:w.includes("mix"))||(w==null?void 0:w.includes("remix"))){p.parentElement.parentElement.parentElement.remove();return}}let d=p.innerText.split("Lyrics")[0];if(d=d.replaceAll("\u2013","-"),!k.isMostlyEnglish(d)){p.parentElement.parentElement.parentElement.remove();return}p.innerHTML=`<strong>${d.split("-")[0]}</strong> - <span>${d.split("-")[1]}</span>`;const _={artistName:encodeURI(d.split("-")[0]),songName:encodeURI(d.split("-")[1])};p.nodeName!=="A"&&p.parentElement.parentElement.parentElement.addEventListener("click",()=>{W(p,d,_)}),p.style.display="block"}else p.innerText.includes("Lyrics")||p.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&p.parentElement.parentElement.parentElement.remove()})},50)},W=(g,p,D)=>{if(g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(p),g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",k.clearGsc(),o(" ");return}E.title.replaceAll(" ","")==p.replaceAll(" ","")&&(g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",k.clearGsc()),E.title.replaceAll(" ","")!=p.replaceAll(" ","")&&E.getSongLyrics(D,p),o(p),location.hash!="#/"&&S("/")};return m("div",{className:t,children:[!c&&!r.addRecordMode&&e(De,{size:r.size,id:"outlined-search",label:u?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8":e(Je,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:u?F:null,autoFocus:!1,autoComplete:"off",value:i}),!c&&r.addRecordMode&&e(De,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:u?F:null,autoFocus:!1,autoComplete:"off",value:i,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const de=y(tr)`

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
   
      width: 80%;
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

/* google search styling - elements from out of REACT */
  .google-auto-placed {
    overflow: hidden;
  }

  /* the gsc whole element */
  .gsc-control-cse,
  .gsc-control-cse-en {
    max-width: 432px !important;
    visibility: hidden;
    
    form, input{
      height: 0px !important;
    }
  }

  .gcse-my-wrapper-visible{
    .gsc-control-cse,
    .gsc-control-cse-en {
      visibility: visible;
    }
  }

  /* Search results style */

  .gsc-control-wrapper-cse,
  .gsc-results-wrapper-nooverlay,
  .gsc-results-wrapper-visible {
    border-radius: 0px 0px 5px 5px;
    background-color: white;
    text-align: start;
  }

  .gsc-results-wrapper-visible,
  .gcse-searchresults,
  .gsc-control-wrapper-cse {
    max-width: 100%;
    max-height: 285px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 0 1px 2px 0 #7c7c7c;
  } 

  .gsc-control-wrapper-cse {
    overflow: visible;
  }

  #___gcse_0 {
    position: absolute;
    margin-top: -17px;
    border: unset;
    z-index: 1;

    @media (max-width: 600px) {
      max-width: 310px;
      * {
        font-size: 12px;
      }
  }
  }

  #___gcse_0 .gs-captcha-outer-wrapper {
    padding: 30px !important;
  }

  #___gcse_0 input {
    background: unset !important;
    direction: rtl;
  }

  @media (max-width: 600px) {

    .gsc-control-cse,
    .gsc-control-cse-en {
      width: 90%;
      max-width: 390px !important;
    }

    #___gcse_0 {
      margin-right: -17px;
      border: unset;

    }

    .gsc-control-wrapper-cse {
      width: 90% !important;
    }
  }

  .gs-title {
    direction: rtl;
  }

  .gs-title * {
    font-weight: 700 !important;
    color: rgb(71, 71, 71) !important;
  }

  .gs-title span {
    color: #DF808E !important;
  }

  .gs-title strong {
    color: #a78cd1 !important;
  }

  .gcsc-find-more-on-google-root,
  .gcsc-more-maybe-branding-root {
    display: none !important;
  }

  .gsc-webResult {
    /* min-height: 50px; */
    padding: 2px;
    cursor: pointer;
  }

  .gsc-result * {
    font-family: 'Assistant', 'Roboto', 'sans-serif' !important;
    font-weight: 500;
    background-color: rgba(136, 136, 136, 0) !important;
    color: rgb(81, 81, 81) !important;
  }

  .gsc-result:hover,
  .gsc-result:focus {
    background-color: rgb(205, 205, 205) !important;
  }

  .gsc-url-top {
    display: none !important;
  }

  .gs-spelling a {
    pointer-events: unset;
  }

  .gs-visibleUrl-breadcrumb .gsc-table-result * {
    display: none !important;
  }

  .gs-visibleUrl,
  .gs-visibleUrl-breadcrumb,
  .gs-snippet {
    display: none !important;
  }

  .gs-visibleUrlop {
    display: none;
  }

  .gsc-table-cell-thumbnail .gsc-thumbnail,
  .gsc-cursor-box {
    display: inline;
  }

  /*results pages numbers navigator (- mobile) */
  .gsc-cursor * {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .gcsc-more-maybe-branding-root {
    display: none;
  }

  .gsc-above-wrapper-area {
    display: none !important;
  }
  
  .gsc-adBlock {
    display: none !important;
  }
/* END Search results style, dom elements out of REACT */

`;function rr({className:t}){const r=l.exports.useContext(J),n=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",url:"/history",icon:e(He,{className:"side-icons"})},{name:"\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D9\u05DC\u05D9\u05DD",url:"/exercise",icon:e(ve,{variant:"dot",invisible:!r.badge,color:"error",children:e(Ge,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05E8\u05E6\u05D9\u05EA\u05D9 \u05DC\u05EA\u05E8\u05D2\u05DD",url:"/wish-list",icon:e(We,{className:"side-icons"}),chip:e(he,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return m(O,{className:t,sx:{maxWidth:"320px"},children:[e(se,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),n.map((s,u)=>e(q,{to:s.url,className:"nav-link",children:m(z,{children:[m(j,{children:[e(Y,{children:s.icon}),e(I,{primary:s.name,primaryTypographyProps:{style:{color:"black"}}}),s.chip&&s.chip]}),e(ee,{})]})},u)),e(q,{to:"/spotify-extension",className:"nav-link",children:m(z,{sx:{backgroundColor:"lightGray"},children:[m(j,{children:[e(Y,{children:e(Ue,{className:"side-icons",sx:{rotate:"-90deg"}})}),e(I,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),e(he,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),e(ee,{})]})})]})}const nr=y(rr)`

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

  .extension-chip{
    background-color: white;
    color: black;
  }
`;function or(n){var s=n,{className:t}=s,r=T(s,["className"]);const u=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(P,{onClick:()=>u(),children:e(qe,{className:"mui-rounded-icon"})})})}y(or)`
text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${t=>t.theme.mode==="light"?"#000":"#fff"};
    color: ${t=>t.theme.mode==="light"?"#fff":"#000"};
    border-radius: 12px;
  }
`;const sr=n=>{var s=n,{className:t}=s,r=T(s,["className"]);var N,M,R,F,H,G,W,g;const[u,a]=l.exports.useState(!1),i=l.exports.useContext(te),o=l.exports.useContext(Z),c=l.exports.useContext(V),h=l.exports.useContext(ie),S=l.exports.useContext(J),E=Qe();l.exports.useEffect(()=>{a(!1),window.scrollTo(0,0),c.closeBanner("error")},[E,o.title]),l.exports.useEffect(()=>{a(!1),c.closeBanner("error")},[i.open]);const f=()=>{c.closeBanner("error"),i.open?i.closeDrawer():i.openDrawer(!0,"left","temporary",nr)};function b(p){p.preventDefault()}return m(ke,{position:"sticky",className:t,children:[h.main.open&&e(Yt,{color:h.main.color}),e(Ne,{maxWidth:!1,children:m(Ae,{disableGutters:!0,children:[e($,{children:e(P,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:f,children:i.open?e(Te,{className:"burger-icon"}):e(ve,{variant:"dot",invisible:!S.badge,children:e(Ve,{className:"burger-icon"})})})}),(((N=o.lines)==null?void 0:N[0])||E.pathname!=="/")&&e(B,{children:E.pathname!=="/wish-list"&&m(B,{children:[e(P,{className:"mui-search-icon-wrapper",onClick:()=>a(!u),children:e(Ze,{className:"mui-search-icon"})}),e($,{className:u&&"collapse-search-box",children:e(le,{className:"search-ctr-collapse",orientation:"horizontal",in:u,collapsedSize:0,children:e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:b,className:"search-ctr",children:u&&e(de,{locat:"top",size:"small",setTopSearchBar:()=>{a()}})})})})]})}),!u&&e(q,{to:"/",onClick:()=>{},children:m(A,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),E.pathname==="/"&&!u&&((M=o.lines)==null?void 0:M[0])&&e(B,{children:e(Xt,{})})]})}),e(le,{in:(R=c.error)==null?void 0:R.open,children:m(se,{severity:"error",className:"error-alert",action:((F=c.error)==null?void 0:F.action)&&e(K,{padding:"7px",href:(H=c.error)==null?void 0:H.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(G=c.error)==null?void 0:G.action.actionText}),onClose:()=>{c.closeBanner("error")},children:[e(Le,{children:(W=c.error)==null?void 0:W.title}),(g=c.error)==null?void 0:g.message]})})]})},Ie=y(sr)`
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
    /* justify-content: flex-end; */
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
`;function ar(n){var s=n,{className:t}=s,r=T(s,["className"]);return e("div",{className:t,children:r.children})}const ir=y(ar)`
  height: fit-content;
  min-height: 700px;
  
  background-color: ${t=>t.theme.palette.secondary.light};
  color: ${t=>t.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    /* font-size: 140px;  */
    font-size: 11vw; 
    font-weight: 100;
    color: ${t=>t.theme.palette.primary.contrastText};
    
    @media (max-width: 600px) {
      margin-top: 0px;
      /* font-size: 46px; */
      font-size: 13vw;
      font-weight: 300;

      .h1-br{
        display: none;
      }
    }
  }

  .page-h3{
    margin: 40px 0px 35px  0px;
    /* font-size: 38px; // 29 */
    font-size: 3vw;
    font-weight: 400;
    color: ${t=>t.theme.palette.primary.contrastText};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 35px  0px;
      /* font-size: 22px; */
      font-size: 6vw;

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
  
`;function ur({className:t}){return l.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:m(C,{container:!0,rowSpacing:6,columnSpacing:2,children:[m(C,{item:!0,xs:12,sm:4,children:[m(O,{children:[e(Xe,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(z,{component:K,href:"mailto:meturgamusic@gmail.com",children:e(I,{primary:"MeturgaMusic@gmail.com"})}),e(z,{component:K,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(I,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(O,{children:e(z,{component:K,href:"https://basssites.com",className:"built-by",children:e(I,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),e(C,{item:!0,xs:12,sm:4})]})})}const lr=y(ur)`
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

`;function cr(n){var s=n,{className:t}=s,r=T(s,["className"]);const u=l.exports.useContext(te);return e(_e,{className:t,anchor:u.anchor,open:u.open,variant:u.permanent,onClose:()=>{u.closeDrawer()},children:e($,{className:"drawer-layout",role:"presentation",onClick:()=>{u.closeDrawer()},children:e(u.child,{})})})}const dr=y(cr)`

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`,ae=240,ye=t=>({width:ae,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),be=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),pr=y("div")(({theme:t})=>x({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)),mr=y(ke,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>x({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},r&&{marginLeft:ae,width:`calc(100% - ${ae}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})),gr=y(_e,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>x(x({width:ae,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&v(x({},ye(t)),{"& .MuiDrawer-paper":ye(t)})),!r&&v(x({},be(t)),{"& .MuiDrawer-paper":be(t)})));function Dr(){const t=Ke(),[r,n]=l.exports.useState(!1),s=()=>{n(!0)},u=()=>{n(!1)};return m($,{sx:{display:"flex"},children:[e(Ye,{}),e(mr,{position:"fixed",open:r,children:m(Ae,{children:[e(P,{color:"inherit","aria-label":"open drawer",onClick:s,edge:"start",sx:x({marginRight:5},r&&{display:"none"}),children:e(et,{})}),e(Ie,{})]})}),m(gr,{variant:"permanent",open:r,children:[e(pr,{children:e(P,{onClick:u,children:t.direction==="rtl"?e(tt,{}):e(rt,{})})}),e(ee,{}),e(O,{children:["Inbox","Starred","Send email","Drafts"].map((a,i)=>e(z,{disablePadding:!0,sx:{display:"block"},children:m(j,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(Y,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:i%2===0?e(fe,{}):e(xe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))}),e(ee,{}),e(O,{children:["All mail","Trash","Spam"].map((a,i)=>e(z,{disablePadding:!0,sx:{display:"block"},children:m(j,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(Y,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:i%2===0?e(fe,{}):e(xe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))})]})]})}y(Dr)`
  
`;function hr({className:t}){const[r,n]=l.exports.useState(!0),s=()=>{n(!1)};return m(nt,{id:"main-modal-root",className:t,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(ot,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(st,{children:e(at,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(it,{children:e(X,{onClick:s,children:"Close"})})]})}y(hr)`
  
`;function fr(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(!0);return e(ut,{className:t,open:u,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}y(fr)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function xr({className:t}){const r=lt({target:window,disableHysteresis:!0,threshold:100});return e(ct,{id:"",className:t,in:r,children:e($,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(dt,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(pt,{htmlColor:"white"})})})})}const Er=y(xr)`
  width: 50px;
  height: 50px;
`;function yr(t){const[r]=l.exports.useState(t.theme.palette.primary.main);return e("div",{className:"wrapper",children:m(mt,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}function br(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(!1),i=l.exports.useContext(J);l.exports.useEffect(()=>{o()&&a(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(S=>S.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,c=()=>{try{k.lsSaveWord(r.toSave),a(!0),i.updateBadge(1)}catch(h){h&&console.log(h)}};return e("span",{className:t,children:u?e(B,{children:r.variant==="Bookmark"?e(Ee,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(Ee,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(B,{children:r.variant==="Bookmark"?e(B,{children:e(gt,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>c()})}):m("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>c(),children:[e(Dt,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const Sr=y(br)`

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
`;function wr(n){var s=n,{className:t}=s,r=T(s,["className"]);const u=l.exports.useContext(J),a=l.exports.useContext(Z),i=()=>{if(r.results[0]){let o="";return r.results.map((c,h)=>{h+1===r.results.length?o+=c:o+=c+", "}),e("p",{className:"tt-p",children:o})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(ht,{onClickAway:r.tooltipClose,children:m("span",{className:t,children:[e(A,{className:"tt-top",color:"inherit",style:{fontSize:u.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:u.fontSize.md-2},children:r.results[0]?e(i,{}):e(Ce,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(Sr,{toSave:{word:r.lyric,results:r.results,title:a.title},variant:"Star"})]})})}const Cr=y(wr)`

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

`;function vr(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(!1),[i,o]=l.exports.useState([]);l.exports.useEffect(()=>{},[]);const c=()=>{a(!0),i[0]||S()},h=()=>{a(!1)};function S(){const E="https://musicline-backend.vercel.app";let f=r.lyric.trim().toLowerCase();f=f.replaceAll(/[^a-zA-Z0-9']/g,""),f.slice(-1)==="'"&&(f=f.replaceAll("'","g")),fetch(`${E}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(f)})}).then(b=>b.json()).then(b=>{if(b==null?void 0:b.results[0]){o(b.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(b=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(b)})}return e(B,{children:e(ft,{className:t,title:e(Cr,{tooltipClose:h,className:"tt-childs",lyric:r.lyric,results:i}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:h,open:u,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:m("span",{children:["\xA0 ",m("p",{className:"single-lyric",onClick:c,children:[" ",r.lyric," "]})]})})})}const Se=y(vr)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function kr(n){var s=n,{className:t}=s,r=T(s,["className"]);let[u,a]=ze();const i=l.exports.useContext(Z),o=l.exports.useContext(J);l.exports.useEffect(()=>{a(k.titleToParams(i.title))},[i.title]);const c=()=>{i.setAbort(!0),sessionStorage.removeItem("currLines"),i.setLines([]),i.setTitle(""),a("")};return e(xt,{elevation:3,className:t,children:m(C,{container:!0,rowSpacing:1,columnSpacing:0,children:[m(C,{item:!0,xs:12,children:[e(P,{onClick:()=>c(),children:e(Te,{className:"remove-icon"})}),e(A,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:i.title&&i.title.split(" ").map((h,S)=>e(Se,{lyric:h,open:!1},oe()))})]}),i.lines.map((h,S)=>{var E;return h.src.includes("[")&&(h.trans="   "),m(C,{item:!0,xs:12,children:[S>0&&h.src.includes("[")&&m(B,{children:[e("br",{}),e("br",{})]}),e($,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:h.src.split(" ").map((f,b)=>(f.slice(-1)==="'"&&(f=f.replaceAll("'","g")),e(Se,{lyric:f,open:S==1&b==1},oe())))}),e($,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:e(B,{children:((E=h.trans)==null?void 0:E.length)?h.trans.split(" ").map((f,b)=>{if(h.trans!=="   ")return m("small",{className:"single-trans",children:[f," \xA0"]},oe())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},oe())})]})})}const Nr=y(kr)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 500;
  border-radius: 10px;
  margin: 15px 0px 25px 10px;
  padding: 15px 50px 40px 50px;
  width: auto;

  @media (max-width: 600px) {
    margin: 15px 3px 25px 3px;
    padding: 15px;
    padding-bottom: 40px;
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
`;function Ar({className:t}){var h,S,E,f,b;const r=l.exports.useContext(Z),n=l.exports.useContext(V),s=l.exports.useContext(te),[u,a]=ze(),i=u.get("song");l.exports.useEffect(()=>{s.closeDrawer(),n.error&&n.closeBanner("error"),i&&i.includes("_")&&o()},[]);function o(){let N=i;N=N.replaceAll("-"," ");const M={artistName:encodeURI(` ${N.split("_")[0]} `),songName:encodeURI(` ${N.split("_")[1]} `)};N=N.replaceAll("_"," - "),r.getSongLyrics(M,N)}function c(N){N.preventDefault()}return m("div",{className:t,children:[!((h=r.lines)==null?void 0:h[0])&&e(Ne,{className:"home-top",maxWidth:!1,children:m(C,{container:!0,className:"home-t-container",children:[!((S=r.lines)==null?void 0:S[0])&&e(C,{item:!0,xs:12,sm:6,children:m(A,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",e("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),m(C,{item:!0,xs:12,sm:6,children:[!((E=r.lines)==null?void 0:E[0])&&m(A,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),!((f=r.lines)==null?void 0:f[0])&&e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:c,className:"search-ctr",children:e(de,{locat:"main",size:"large"})})]})]})}),((b=r.lines)==null?void 0:b[0])&&m(C,{container:!0,spacing:1,children:[e(C,{item:!0,md:12,lg:9,children:e(Nr,{className:"lyrics-body"})}),e(C,{item:!0,xs:12,lg:3})]})]})}const Tr=y(Ar)`
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

        @media (max-width: 600px) {
            text-align: center;
        }
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
    
`;function Lr(n){var s=n,{className:t}=s,r=T(s,["className"]);const u=()=>{r.deleteOneSong(r.song_id)};return e(z,{className:t,secondaryAction:e(P,{onClick:()=>{u()},edge:"end","aria-label":"delete",children:e(ce,{})}),children:e(I,{primary:e(q,{to:"/"+k.titleToParams(r.title),children:e(j,{children:e(A,{sx:{color:"black"},children:r.title})})})})})}const _r=y(Lr)`
  background-color: #e8e8e86b;
  margin-top: 5px;
`;function zr({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),s=a=>{let i=r.filter(o=>o.id!==a);n(i),localStorage.setItem("meturgamm_songs",JSON.stringify(i))},u=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return m("div",{className:t,children:[r[0]&&m($,{children:[e(X,{className:"d-all-btn",component:"label",onClick:()=>{u()},variant:"outlined",startIcon:e(Et,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(O,{sx:{width:"100%"},component:"div",children:e(C,{container:!0,spacing:1,children:r.map((a,i)=>e(C,{item:!0,xs:12,md:6,children:e(_r,{title:a.title,song_id:a.id,deleteOneSong:s})},a.title+i))})})]}),!r[0]&&e(A,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const Ir=y(zr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
   }
`;function Br({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function s(a){const i={title:a,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(i),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const u=a=>{let i=r.filter(o=>o.id!==a);n(i),localStorage.setItem("meturgamm_wish",JSON.stringify(i))};return m(O,{className:t,subheader:e(de,{addRecordMode:!0,locat:"main",addRecord:s}),children:[e(C,{container:!0,spacing:1,children:r.map((a,i)=>e(C,{item:!0,xs:12,md:6,children:e(z,{secondaryAction:e(P,{onClick:()=>{u(a.id)},edge:"end","aria-label":"delete",children:e(ce,{})}),children:e(I,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(q,{to:"/"+k.titleToParams(a.title),children:m(j,{children:[e(yt,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(A,{sx:{color:"black"},children:a.title})]})})})},i)},a.title+i))}),!r[0]&&e(A,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const $r=y(Br)`
  min-height: 70vh;
  padding-top: 3px;
`;function Or(n){var s=n,{className:t}=s,r=T(s,["className"]);const[u,a]=l.exports.useState(r.lyric),[i,o]=l.exports.useState(!1),c=()=>{o(!i)},h=()=>{r.deleteOneWord(r.lyric.id)},S=()=>{if(u.results[0]){let E="";return u.results.map((f,b)=>{b+1===u.results.length?E+=f:E+=f+", "}),e("span",{className:"inline-results-p",children:E})}else return null};return m("span",{className:t,children:[e(z,{secondaryAction:e(P,{onClick:()=>{h()},edge:"end","aria-label":"delete",children:e(ce,{})}),children:m(j,{onClick:c,children:[e(Y,{children:e(bt,{})}),e(I,{primary:u.word}),i?e(St,{}):e(wt,{})]})}),e(le,{in:i,timeout:"auto",unmountOnExit:!0,children:e(O,{component:"div",disablePadding:!0,children:e(z,{sx:{pl:4},children:e(I,{primary:e(B,{children:e(A,{sx:{display:"inline"},component:"span",children:e(S,{})})}),secondary:e(j,{component:"span",sx:{mt:"10px"},children:e(q,{to:"/"+k.titleToParams(u.title),children:e(K,{component:"button",children:e("i",{children:u.title})})})})})})})}),e(ee,{})]})}const Pr=y(Or)`
  *{
    background-color: #e8e8e818;
  } 
`;function Mr({className:t}){const r=l.exports.useContext(J),[n,s]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);l.exports.useEffect(()=>{r.updateBadge(!1)},[]);const u=a=>{let i=n.filter(o=>o.id!==a);s(i),localStorage.setItem("meturgamm_words",JSON.stringify(i))};return m("div",{className:t,children:[n[0]&&e(O,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(C,{container:!0,spacing:1,children:n.map((a,i)=>e(C,{item:!0,md:3,lg:3,xs:12,children:e(Pr,{lyric:a,deleteOneWord:u})},a.word+i))})}),!n[0]&&e(A,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Rr=y(Mr)`
   min-height: 80vh;
`;var Fr="/assets/extensionImage.9b86a50e.png";function jr({className:t}){return e("div",{className:t,style:{backgroundImage:`url(${Fr.toString()})`},children:e(C,{container:!0,spacing:4,children:e(C,{item:!0,xs:12,sm:!0,container:!0,children:e(C,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:m(C,{item:!0,xs:!0,children:[e(A,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),e(A,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),e(A,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const Jr=y(jr)`
  min-height: 80vh;
  background-color: #070707b2;
  color: white;
  text-align: center;
  padding: 50px 50px;

  background-position: bottom -50px right -100px;
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  @media (max-width: 600px) {
    padding: 30px 0px;
    background-position: bottom -65px right -440px;
    background-size: 200% ;
  }

  .headers-container{
    padding: 30px;
    .MuiTypography-root{
        display: inline;
        text-align: start;
        font-weight: 800;
    }
    .h3{
        font-weight: 700;
    }
  }

  .middle-h2{
    color: #1BB151;
  }

  .img-container{
    padding-top: 50px;
    display: flex;
    align-items: center;
    text-align: center;

    .screenshot-img{
      border: 1px solid #1BB151;
      border-radius: 8px;
      aspect-ratio: 780/373;
      width: 90%;
      max-width: 600px;
    }
  }

`;function Hr({className:t}){return m("div",{className:t,children:[e(A,{variant:"h2",className:"page-h2",children:"404"}),e(A,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Gr=y(Hr)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Wr({className:t}){var S,E;const r=l.exports.useContext(te);l.exports.useContext(ie);const n=l.exports.useContext(V);Ct("(max-width: 600px)");const[s,u]=l.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[a,i]=l.exports.useState(ue),o=vt({key:"muirtl",stylisPlugins:[_t,zt]});l.exports.useEffect(()=>{c()},[]);const c=()=>{k.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")};return e("div",{className:t,children:e(kt,{theme:a,children:e(Nt,{value:o,children:m(At,{children:[e(yr,{currTitle:s,theme:a}),m(ir,{children:[e(Ie,{className:"header",changeColors:()=>{switch(a){case ue:i($t);break;default:i(ue);break}}}),((S=n.main)==null?void 0:S.open)&&m(se,{severity:"warning",className:"main-alert",children:[e(Le,{children:n.main.title}),n.main.message]}),m(Tt,{children:[e(U,{path:"/",element:e(Tr,{className:"page",rank:1})}),e(U,{path:"/Exercise",element:e(Rr,{className:"page",rank:1})}),e(U,{path:"/History",element:e(Ir,{className:"page",rank:1})}),e(U,{path:"/Wish-list",element:e($r,{className:"page",rank:1})}),e(U,{path:"/Spotify-extension",element:e(Jr,{className:"page",rank:1})}),e(U,{path:"*",element:e(Gr,{className:"page"})})]}),r.open&&r.child&&e(dr,{className:"drawer"}),((E=n.infoSnackbar)==null?void 0:E.open)&&e(Lt,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(se,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(lr,{}),e(Er,{})]})]})})})})}const Ur=y(Wr)`
  height: fit-content;
  min-height: 700px;
`,qr=[Ot,Mt,Pt,er,Vt];function Qr(t){return e(B,{children:qr.reduceRight((r,n)=>e(n,{children:r}),t.children)})}It.render(e(Q.StrictMode,{children:e(Qr,{children:e(Ur,{className:"app"})})}),document.getElementById("root"));
