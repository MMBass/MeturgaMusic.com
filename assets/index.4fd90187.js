var Be=Object.defineProperty,$e=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var de=(t,r,n)=>r in t?Be(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,f=(t,r)=>{for(var n in r||(r={}))pe.call(r,n)&&de(t,n,r[n]);if(te)for(var n of te(r))me.call(r,n)&&de(t,n,r[n]);return t},N=(t,r)=>$e(t,Oe(r));var L=(t,r)=>{var n={};for(var s in t)pe.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&te)for(var s of te(t))r.indexOf(s)<0&&me.call(t,s)&&(n[s]=t[s]);return n};import{c as Se,R as q,r as u,j as e,a as p,B as Pe,b as Z,d as Me,e as Re,s as b,L as we,u as Fe,T as ge,C as je,f as Je,g as ve,h as He,i as We,k as he,l as O,A as ne,N as U,m as z,n as j,o as K,p as I,D as Y,q as Ge,I as P,t as Ue,v as qe,M as Ce,w as ke,x as Ne,y as $,z as Qe,E as Ae,F as B,S as Ve,G as ie,H as T,J as X,K as _e,O as v,P as Ze,Q as Te,U as Xe,V as Ke,W as Ye,X as et,Y as tt,Z as De,_ as fe,$ as rt,a0 as nt,a1 as ot,a2 as st,a3 as at,a4 as it,a5 as lt,a6 as ut,a7 as ct,a8 as dt,a9 as pt,aa as xe,ab as mt,ac as gt,ad as ht,ae as Dt,af as Le,ag as ft,ah as re,ai as le,aj as xt,ak as Et,al as bt,am as yt,an as St,ao as wt,ap as vt,aq as Ct,ar as kt,as as Nt,at as At,au as G,av as _t,aw as Tt,ax as Lt,ay as zt}from"./vendor.eb696ee0.js";const It=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};It();const ae=Se({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),Bt=Se({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#darkgray",light:"#white",dark:"#black",contrastText:"#white"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),ee=q.createContext(void 0);function $t(t){const[r,n]=u.exports.useState({}),a={openDrawer:(i,o,c="temporary",h)=>{n({open:i,anchor:o,permanent:c,child:h})},closeDrawer:()=>{n({})}};return e(ee.Provider,{value:f(f({},r),a),children:t.children})}const se=q.createContext(void 0);function Ot(t){const[r,n]=u.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),i={createLoader:(o,c)=>{r[o]&&n(N(f({},r),{[o]:void 0})),n(N(f({},r),{[o]:{open:!1,color:c||"inherit"}}))},openLoader:o=>{r[o]?n(N(f({},r),{[o]:N(f({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(N(f({},r),{[o]:N(f({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return e(se.Provider,{value:f(f({},r),i),children:t.children})}const Q=q.createContext(void 0);function Pt(t){var o;const[r,n]=u.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),i={createBanner:(c,h,S,x,D)=>{r[c]&&n(N(f({},r),{[c]:void 0})),n(N(f({},r),{[c]:{open:!0,severity:h||"success",title:S||"",message:x||"",action:D||{}}}))},openBanner:c=>{r[c]?n(N(f({},r),{[c]:N(f({},r[c]),{open:!0})})):console.error("Banner "+c+" does'nt exist")},closeBanner:c=>{r[c]?n(N(f({},r),{[c]:N(f({},r[c]),{open:!1})})):console.error("Banner "+c+" does'nt exist")}};return e(Q.Provider,{value:f(f({},r),i),children:t.children})}const Mt=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},Rt=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Ft=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},jt=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,Jt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},Ht=()=>{let t=!1;const r=navigator.userAgent;return/android/i.test(r)?t=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(t=!0),t},Wt=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function Gt(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const Ut=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},qt=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")};var C={loadGscScript:Mt,lsSaveSong:Ft,lsFindSong:jt,lsSaveWord:Rt,clearGsc:Jt,getMobileOS:Ht,keyboardHEENSwitcher:Wt,isMostlyEnglish:Gt,loadGoogleAds:Ut,titleToParams:qt};const J=q.createContext(void 0);function Qt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,s]=u.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),[l,a]=u.exports.useState(!1);function i(y){a(y)}const o=()=>{n.fontSize.md<60&&(s(N(f({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),h())},c=()=>{n.fontSize.sm>7&&(s(N(f({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),h())};function h(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function S(){localStorage.setItem("colors_mode",n.colors)}function x(y){s(N(f({},n),{colors:y})),S()}const D={reduceFontSize:c,increaseFontSize:o,setColors:x,updateBadge:i};return e(J.Provider,{value:N(f(f({},n),D),{badge:l}),children:t.children})}function Vt({className:t}){const r=u.exports.useContext(J);return e("div",{id:"",className:t,children:p(Pe,{className:"button-group",children:[e(Z,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(Me,{fontSize:"small"})}),e(Z,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(Z,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Re,{fontSize:"small"})})]})})}const Zt=b(Vt)`
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

`;function Xt(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(0);return u.exports.useEffect(()=>{const i=setInterval(()=>{a(o=>{if(o===100)return 0;const c=Math.random()*10;return Math.min(o+c,100)})},220);return()=>{clearInterval(i)}},[]),e(we,{variant:"determinate",value:l,color:r.color})}const Kt=b(Xt)`
  
`,V=q.createContext(void 0);function Yt(t){const r=u.exports.useContext(se),n=u.exports.useContext(Q),[s,l]=u.exports.useState(""),[a,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,c]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,S]=u.exports.useState(!1),[x,D]=u.exports.useState(!1);u.exports.useEffect(()=>{o[0]&&R()},[o,h]);const y="https://musicline-backend.vercel.app",_=(w,m)=>{D(!0),m=m.replace(/[\])}[{(]/g,"").trim();let d=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!M(m,d)&&fetch(`${y}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:w})}).then(g=>g.json()).then(g=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),d&&(d.style.pointerEvents="all"),(g==null?void 0:g.combined)&&Array.isArray(g==null?void 0:g.combined))i(m),l(g.id),c(g.combined),C.lsSaveSong({title:m,lines:g.combined}),C.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(g.combined)),sessionStorage.setItem("currSongTitle",m);else if(g==null?void 0:g.lyrics){i(m);let E=g.lyrics,A=[];E.split(/(?:\r\n|\r|\n)/g).map(k=>{if(k.length>=2)if(C.isMostlyEnglish(k))if(k.length>90){let ce=k.split(",");ce[0].length>10?ce.map(Ie=>{A.push({src:Ie,trans:"",transError:!1})}):A.push({src:k.replace(".",""),trans:"",transError:!1})}else A.push({src:k.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+k),A.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),D(!1),c(A),C.clearGsc()}else D(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+m.replaceAll(" ","+")+" lyrics"})}).catch(g=>{D(!1),console.log(g),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),d&&(d.style.pointerEvents="all")})},M=(w,m)=>{let d=C.lsFindSong(w);return d&&Array.isArray(d.lines)?(m&&(m.style.pointerEvents="all"),i(w),c(d.lines),C.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(d.lines)),sessionStorage.setItem("currSongTitle",w),!0):!1},R=()=>{x||o.every((w,m)=>!w.trans.length||w.transError?(h?H(w.src,m):F(w.src,m),!1):!0)},F=(w,m)=>{fetch(`${y}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:s,title:a})}).then(d=>d.json()).then(d=>{let g=[];(d==null?void 0:d.trans.length)?(d.trans.map((E,A)=>{g[A]={src:o[A].src,trans:E}}),c(g),C.lsSaveSong({title:a,lines:g}),sessionStorage.setItem("currLines",JSON.stringify(g)),sessionStorage.setItem("currSongTitle",a)):(console.error("status is ok but azure translation missing"),S(!0))}).catch(d=>{console.log(d),S(!0)})},H=(w,m)=>{let d=[...o];fetch(`${y}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(w)})}).then(g=>g.json()).then(g=>{var E,A;(g==null?void 0:g.trans)?(d[m]={src:w,trans:g==null?void 0:g.trans},c(d),((E=o[o.length-1])==null?void 0:E.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a))):(o[m].trans===void 0?d[m]={src:w,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(d[m]={src:w,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(d),((A=o[o.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(d)),sessionStorage.setItem("currSongTitle",a)))}).catch(g=>{var A;o[m].trans===""?d[m]={src:w,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(d[m]={src:w,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(d),((A=o[o.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a),S(!1)),console.log(g)})},W={getSongLyrics:_,getFullTrans:F,checkNextTrans:R,setLines:c,setTitle:i,setAbort:D};return e(V.Provider,{value:f({title:a,lines:o},W),children:t.children})}function er(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(!1),[i,o]=u.exports.useState(""),[c,h]=u.exports.useState(!1),S=Fe(),x=u.exports.useContext(V),D=u.exports.useContext(Q);u.exports.useEffect(()=>{r.addRecordMode||o(x.title)},[x.title]),u.exports.useEffect(()=>{y()},[]);const y=()=>{C.getMobileOS()&&h(!0)};function _(){if(C.getMobileOS()){const m=document.querySelectorAll(".gsc-control-cse")[0];m.style.visibility="visible",m.style.marginTop="90px"}}u.exports.useEffect(()=>{C.loadGscScript(),M()},[]);function M(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))_(),R();else{let d=function(){R()};const g=document.querySelector("#gcse-my-wrapper"),E={childList:!0,attributes:!0,subtree:!1};new MutationObserver(d).observe(g,E)}}function R(){a(!0);const m=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],d={childList:!1,attributes:!0,subtree:!1};function g(){W()}new MutationObserver(g).observe(m,d)}function F(m){if(o(m.target.value),m.nativeEvent.data!==" ")H(m.target.value);else return}function H(m){D.error&&D.closeBanner("error");let d=document.querySelector("#gsc-i-id1"),g=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(d)if(m.length<=1){let E=document.querySelector(".gsst_a");E&&E.dispatchEvent(new Event("click"))}else if(g.test(m)){d.value=m;let E=document.querySelectorAll(".gsc-search-box button")[0];E?setTimeout(()=>{E.type="button",E.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{D.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let E=document.querySelector(".gsst_a");E&&E.dispatchEvent(new Event("click"))},250);return}else D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const W=()=>{setTimeout(()=>{let m=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");m&&m.forEach((d,g)=>{if(d.innerText.includes("Lyrics")){if(d.innerText.includes("(")){let k=d.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((k==null?void 0:k.includes("live"))||(k==null?void 0:k.includes("mix"))||(k==null?void 0:k.includes("remix"))){d.parentElement.parentElement.parentElement.remove();return}}let E=d.innerText.split("Lyrics")[0];if(E=E.replaceAll("\u2013","-"),!C.isMostlyEnglish(E)){d.parentElement.parentElement.parentElement.remove();return}d.innerHTML=`<strong>${E.split("-")[0]}</strong> - <span>${E.split("-")[1]}</span>`;const A={artistName:encodeURI(E.split("-")[0]),songName:encodeURI(E.split("-")[1])};d.nodeName!=="A"&&d.parentElement.parentElement.parentElement.addEventListener("click",()=>{w(d,E,A)}),d.style.display="block"}else d.innerText.includes("Lyrics")||d.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&d.parentElement.parentElement.parentElement.remove()})},50)},w=(m,d,g)=>{if(m.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(d),m.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",C.clearGsc(),o(" ");return}x.title.replaceAll(" ","")==d.replaceAll(" ","")&&(m.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",C.clearGsc()),x.title.replaceAll(" ","")!=d.replaceAll(" ","")&&x.getSongLyrics(g,d),o(d),location.hash!="#/"&&S("/")};return p("div",{className:t,children:[!c&&!r.addRecordMode&&e(ge,{size:r.size,id:"outlined-search",label:l?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8":e(je,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:l?F:null,autoFocus:!1,autoComplete:"off",value:i}),!c&&r.addRecordMode&&e(ge,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:l?F:null,autoFocus:!1,autoComplete:"off",value:i,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const ue=b(er)`

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

  /* google search styling */
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

  /* Search results style, dom elements from out of REACT */

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
  }

  @media (max-width: 600px) {
    #___gcse_0 * {
      font-size: 12px;
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
    direction: ltr;
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

  .gsc-url-top {
    display: none;
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

  .gs-title {
    display: none;
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

  /*results pages numbers navigator (- mobile) */
  .gsc-cursor * {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .gsc-webResult a,
  .gsc-result a {
    /* pointer-events: none; */
    /* display: inline; */
  }

  #___gcse_0 .gs-image-box {
    /* display: none; */
  }

  /* Search results style, dom elements from out of REACT: */

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
  }

  @media (max-width: 600px) {
    #___gcse_0 * {
      font-size: 12px;
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
    direction: ltr;
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

  .gsc-url-top {
    display: none;
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

  .gs-title {
    display: none;
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

  /*results pages numbers navigator (- mobile) */
  .gsc-cursor * {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .gsc-webResult a,
  .gsc-result a {
    /* pointer-events: none; */
    /* display: inline; */
  }

  #___gcse_0 .gs-image-box {
    /* display: none; */
  }
  /* END Search results style, dom elements out of REACT */

`;function tr({className:t}){const r=u.exports.useContext(J),n=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",url:"/history",icon:e(Je,{className:"side-icons"})},{name:"\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D9\u05DC\u05D9\u05DD",url:"/exercise",icon:e(ve,{variant:"dot",invisible:!r.badge,color:"error",children:e(He,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05E8\u05E6\u05D9\u05EA\u05D9 \u05DC\u05EA\u05E8\u05D2\u05DD",url:"/wish-list",icon:e(We,{className:"side-icons"}),chip:e(he,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return p(O,{className:t,sx:{maxWidth:"320px"},children:[e(ne,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),n.map((s,l)=>e(U,{to:s.url,className:"nav-link",children:p(z,{children:[p(j,{children:[e(K,{children:s.icon}),e(I,{primary:s.name,primaryTypographyProps:{style:{color:"black"}}}),s.chip&&s.chip]}),e(Y,{})]})},l)),e(U,{to:"/spotify-extension",className:"nav-link",children:p(z,{sx:{backgroundColor:"lightGray"},children:[p(j,{children:[e(K,{children:e(Ge,{className:"side-icons",sx:{rotate:"-90deg"}})}),e(I,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),e(he,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),e(Y,{})]})})]})}const rr=b(tr)`

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
`;function nr(n){var s=n,{className:t}=s,r=L(s,["className"]);const l=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(P,{onClick:()=>l(),children:e(Ue,{className:"mui-rounded-icon"})})})}b(nr)`
text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${t=>t.theme.mode==="light"?"#000":"#fff"};
    color: ${t=>t.theme.mode==="light"?"#fff":"#000"};
    border-radius: 12px;
  }
`;const or=n=>{var s=n,{className:t}=s,r=L(s,["className"]);var _,M,R,F,H,W,w,m;const[l,a]=u.exports.useState(!1),i=u.exports.useContext(ee),o=u.exports.useContext(V),c=u.exports.useContext(Q),h=u.exports.useContext(se),S=u.exports.useContext(J),x=qe();u.exports.useEffect(()=>{a(!1),window.scrollTo(0,0),c.closeBanner("error")},[x,o.title]),u.exports.useEffect(()=>{a(!1),c.closeBanner("error")},[i.open]);const D=()=>{c.closeBanner("error"),i.open?i.closeDrawer():i.openDrawer(!0,"left","temporary",rr)};function y(d){d.preventDefault()}return p(Ce,{position:"sticky",className:t,children:[h.main.open&&e(Kt,{color:h.main.color}),e(ke,{maxWidth:!1,children:p(Ne,{disableGutters:!0,children:[e($,{children:e(P,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:D,children:i.open?e(Ae,{className:"burger-icon"}):e(ve,{variant:"dot",invisible:!S.badge,children:e(Qe,{className:"burger-icon"})})})}),(((_=o.lines)==null?void 0:_[0])||x.pathname!=="/")&&e(B,{children:x.pathname!=="/wish-list"&&p(B,{children:[e(P,{className:"mui-search-icon-wrapper",onClick:()=>a(!l),children:e(Ve,{className:"mui-search-icon"})}),e($,{className:l&&"collapse-search-box",children:e(ie,{className:"search-ctr-collapse",orientation:"horizontal",in:l,collapsedSize:0,children:e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:y,className:"search-ctr",children:l&&e(ue,{locat:"top",size:"small",setTopSearchBar:()=>{a()}})})})})]})}),!l&&e(U,{to:"/",onClick:()=>{},children:p(T,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),x.pathname==="/"&&!l&&((M=o.lines)==null?void 0:M[0])&&e(B,{children:e(Zt,{})})]})}),e(ie,{in:(R=c.error)==null?void 0:R.open,children:p(ne,{severity:"error",className:"error-alert",action:((F=c.error)==null?void 0:F.action)&&e(X,{padding:"7px",href:(H=c.error)==null?void 0:H.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(W=c.error)==null?void 0:W.action.actionText}),onClose:()=>{c.closeBanner("error")},children:[e(_e,{children:(w=c.error)==null?void 0:w.title}),(m=c.error)==null?void 0:m.message]})})]})},ze=b(or)`
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
`;function sr(n){var s=n,{className:t}=s,r=L(s,["className"]);return e("div",{className:t,children:r.children})}const ar=b(sr)`
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
  
`;function ir({className:t}){return u.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:p(v,{container:!0,rowSpacing:6,columnSpacing:2,children:[p(v,{item:!0,xs:12,sm:4,children:[p(O,{children:[e(Ze,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(z,{component:X,href:"mailto:meturgamusic@gmail.com",children:e(I,{primary:"MeturgaMusic@gmail.com"})}),e(z,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(I,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(O,{children:e(z,{component:X,href:"https://basssites.com",className:"built-by",children:e(I,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),e(v,{item:!0,xs:12,sm:4})]})})}const lr=b(ir)`
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

`;function ur(n){var s=n,{className:t}=s,r=L(s,["className"]);const l=u.exports.useContext(ee);return e(Te,{className:t,anchor:l.anchor,open:l.open,variant:l.permanent,onClose:()=>{l.closeDrawer()},children:e($,{className:"drawer-layout",role:"presentation",onClick:()=>{l.closeDrawer()},children:e(l.child,{})})})}const cr=b(ur)`

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`,oe=240,Ee=t=>({width:oe,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),be=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),dr=b("div")(({theme:t})=>f({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)),pr=b(Ce,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>f({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},r&&{marginLeft:oe,width:`calc(100% - ${oe}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})),mr=b(Te,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>f(f({width:oe,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&N(f({},Ee(t)),{"& .MuiDrawer-paper":Ee(t)})),!r&&N(f({},be(t)),{"& .MuiDrawer-paper":be(t)})));function gr(){const t=Xe(),[r,n]=u.exports.useState(!1),s=()=>{n(!0)},l=()=>{n(!1)};return p($,{sx:{display:"flex"},children:[e(Ke,{}),e(pr,{position:"fixed",open:r,children:p(Ne,{children:[e(P,{color:"inherit","aria-label":"open drawer",onClick:s,edge:"start",sx:f({marginRight:5},r&&{display:"none"}),children:e(Ye,{})}),e(ze,{})]})}),p(mr,{variant:"permanent",open:r,children:[e(dr,{children:e(P,{onClick:l,children:t.direction==="rtl"?e(et,{}):e(tt,{})})}),e(Y,{}),e(O,{children:["Inbox","Starred","Send email","Drafts"].map((a,i)=>e(z,{disablePadding:!0,sx:{display:"block"},children:p(j,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(K,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:i%2===0?e(De,{}):e(fe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))}),e(Y,{}),e(O,{children:["All mail","Trash","Spam"].map((a,i)=>e(z,{disablePadding:!0,sx:{display:"block"},children:p(j,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(K,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:i%2===0?e(De,{}):e(fe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))})]})]})}b(gr)`
  
`;function hr({className:t}){const[r,n]=u.exports.useState(!0),s=()=>{n(!1)};return p(rt,{id:"main-modal-root",className:t,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(nt,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(ot,{children:e(st,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(at,{children:e(Z,{onClick:s,children:"Close"})})]})}b(hr)`
  
`;function Dr(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(!0);return e(it,{className:t,open:l,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}b(Dr)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function fr({className:t}){const r=lt({target:window,disableHysteresis:!0,threshold:100});return e(ut,{id:"",className:t,in:r,children:e($,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(ct,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(dt,{htmlColor:"white"})})})})}const xr=b(fr)`
  width: 50px;
  height: 50px;
`;function Er(t){const[r]=u.exports.useState(t.theme.palette.primary.main);return e("div",{className:"wrapper",children:p(pt,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}function br(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(!1),i=u.exports.useContext(J);u.exports.useEffect(()=>{o()&&a(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(S=>S.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,c=()=>{try{C.lsSaveWord(r.toSave),a(!0),i.updateBadge(1)}catch(h){h&&console.log(h)}};return e("span",{className:t,children:l?e(B,{children:r.variant==="Bookmark"?e(xe,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(xe,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(B,{children:r.variant==="Bookmark"?e(B,{children:e(mt,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>c()})}):p("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>c(),children:[e(gt,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const yr=b(br)`

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
`;function Sr(n){var s=n,{className:t}=s,r=L(s,["className"]);const l=u.exports.useContext(J),a=u.exports.useContext(V),i=()=>{if(r.results[0]){let o="";return r.results.map((c,h)=>{h+1===r.results.length?o+=c:o+=c+", "}),e("p",{className:"tt-p",children:o})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(ht,{onClickAway:r.tooltipClose,children:p("span",{className:t,children:[e(T,{className:"tt-top",color:"inherit",style:{fontSize:l.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:l.fontSize.md-2},children:r.results[0]?e(i,{}):e(we,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(yr,{toSave:{word:r.lyric,results:r.results,title:a.title},variant:"Star"})]})})}const wr=b(Sr)`

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

`;function vr(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(!1),[i,o]=u.exports.useState([]);u.exports.useEffect(()=>{},[]);const c=()=>{a(!0),i[0]||S()},h=()=>{a(!1)};function S(){const x="https://musicline-backend.vercel.app";let D=r.lyric.trim().toLowerCase();D=D.replaceAll(/[^a-zA-Z0-9']/g,""),D.slice(-1)==="'"&&(D=D.replaceAll("'","g")),fetch(`${x}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(D)})}).then(y=>y.json()).then(y=>{if(y==null?void 0:y.results[0]){o(y.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(y=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(y)})}return e(B,{children:e(Dt,{className:t,title:e(wr,{tooltipClose:h,className:"tt-childs",lyric:r.lyric,results:i}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:h,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:p("span",{children:["\xA0 ",p("p",{className:"single-lyric",onClick:c,children:[" ",r.lyric," "]})]})})})}const ye=b(vr)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function Cr(n){var s=n,{className:t}=s,r=L(s,["className"]);let[l,a]=Le();const i=u.exports.useContext(V),o=u.exports.useContext(J);u.exports.useEffect(()=>{},[]),u.exports.useEffect(()=>{a(C.titleToParams(i.title))},[i.title]);const c=()=>{i.setAbort(!0),sessionStorage.removeItem("currLines"),i.setLines([]),i.setTitle(""),a("")};return e(ft,{elevation:3,className:t,children:p(v,{container:!0,rowSpacing:1,columnSpacing:0,children:[p(v,{item:!0,xs:12,children:[e(P,{onClick:()=>c(),children:e(Ae,{className:"remove-icon"})}),e(T,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:i.title&&i.title.split(" ").map((h,S)=>e(ye,{lyric:h,open:!1},re()))})]}),i.lines.map((h,S)=>{var x;return h.src.includes("[")&&(h.trans="   "),p(v,{item:!0,xs:12,children:[S>0&&h.src.includes("[")&&p(B,{children:[e("br",{}),e("br",{})]}),e($,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:h.src.split(" ").map((D,y)=>(D.slice(-1)==="'"&&(D=D.replaceAll("'","g")),e(ye,{lyric:D,open:S==1&y==1},re())))}),e($,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:e(B,{children:((x=h.trans)==null?void 0:x.length)?h.trans.split(" ").map((D,y)=>{if(h.trans!=="   ")return p("small",{className:"single-trans",children:[D," \xA0"]},re())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},re())})]})})}const kr=b(Cr)`
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
`;function Nr({className:t}){var h,S,x,D,y;const r=u.exports.useContext(V),n=u.exports.useContext(Q),s=u.exports.useContext(ee),[l,a]=Le(),i=l.get("song");u.exports.useEffect(()=>{s.closeDrawer(),n.error&&n.closeBanner("error"),i&&i.includes("_")&&o(),C.loadGoogleAds(),window.adsbygoogle=window.adsbygoogle||[]},[]);function o(){let _=i;_=_.replaceAll("-"," ");const M={artistName:encodeURI(` ${_.split("_")[0]} `),songName:encodeURI(` ${_.split("_")[1]} `)};_=_.replaceAll("_"," - "),r.getSongLyrics(M,_)}function c(_){_.preventDefault()}return p("div",{className:t,children:[!((h=r.lines)==null?void 0:h[0])&&e(ke,{className:"home-top",maxWidth:!1,children:p(v,{container:!0,className:"home-t-container",children:[!((S=r.lines)==null?void 0:S[0])&&e(v,{item:!0,xs:12,sm:6,children:p(T,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",e("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),p(v,{item:!0,xs:12,sm:6,children:[!((x=r.lines)==null?void 0:x[0])&&p(T,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),!((D=r.lines)==null?void 0:D[0])&&e($,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:c,className:"search-ctr",children:e(ue,{locat:"main",size:"large"})})]})]})}),((y=r.lines)==null?void 0:y[0])&&p(v,{container:!0,spacing:1,children:[e(v,{item:!0,md:12,lg:9,children:e(kr,{className:"lyrics-body"})}),e(v,{item:!0,xs:12,lg:3})]})]})}const Ar=b(Nr)`
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
    
`;function _r(n){var s=n,{className:t}=s,r=L(s,["className"]);const l=()=>{r.deleteOneSong(r.song_id)};return e(z,{className:t,secondaryAction:e(P,{onClick:()=>{l()},edge:"end","aria-label":"delete",children:e(le,{})}),children:e(I,{primary:e(U,{to:"/"+C.titleToParams(r.title),children:e(j,{children:e(T,{sx:{color:"black"},children:r.title})})})})})}const Tr=b(_r)`
  background-color: #e8e8e86b;
  margin-top: 5px;
`;function Lr({className:t}){const[r,n]=u.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),s=a=>{let i=r.filter(o=>o.id!==a);n(i),localStorage.setItem("meturgamm_songs",JSON.stringify(i))},l=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return p("div",{className:t,children:[r[0]&&p($,{children:[e(Z,{className:"d-all-btn",component:"label",onClick:()=>{l()},variant:"outlined",startIcon:e(xt,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(O,{sx:{width:"100%"},component:"div",children:e(v,{container:!0,spacing:1,children:r.map((a,i)=>e(v,{item:!0,xs:12,md:6,children:e(Tr,{title:a.title,song_id:a.id,deleteOneSong:s})},a.title+i))})})]}),!r[0]&&e(T,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const zr=b(Lr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
   }
`;function Ir({className:t}){const[r,n]=u.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function s(a){const i={title:a,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(i),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const l=a=>{let i=r.filter(o=>o.id!==a);n(i),localStorage.setItem("meturgamm_wish",JSON.stringify(i))};return p(O,{className:t,subheader:e(ue,{addRecordMode:!0,locat:"main",addRecord:s}),children:[e(v,{container:!0,spacing:1,children:r.map((a,i)=>e(v,{item:!0,xs:12,md:6,children:e(z,{secondaryAction:e(P,{onClick:()=>{l(a.id)},edge:"end","aria-label":"delete",children:e(le,{})}),children:e(I,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(U,{to:"/"+C.titleToParams(a.title),children:p(j,{children:[e(Et,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(T,{sx:{color:"black"},children:a.title})]})})})},i)},a.title+i))}),!r[0]&&e(T,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Br=b(Ir)`
  min-height: 70vh;
  padding-top: 3px;
`;function $r(n){var s=n,{className:t}=s,r=L(s,["className"]);const[l,a]=u.exports.useState(r.lyric),[i,o]=u.exports.useState(!1),c=()=>{o(!i)},h=()=>{r.deleteOneWord(r.lyric.id)},S=()=>{if(l.results[0]){let x="";return l.results.map((D,y)=>{y+1===l.results.length?x+=D:x+=D+", "}),e("span",{className:"inline-results-p",children:x})}else return null};return p("span",{className:t,children:[e(z,{secondaryAction:e(P,{onClick:()=>{h()},edge:"end","aria-label":"delete",children:e(le,{})}),children:p(j,{onClick:c,children:[e(K,{children:e(bt,{})}),e(I,{primary:l.word}),i?e(yt,{}):e(St,{})]})}),e(ie,{in:i,timeout:"auto",unmountOnExit:!0,children:e(O,{component:"div",disablePadding:!0,children:e(z,{sx:{pl:4},children:e(I,{primary:e(B,{children:e(T,{sx:{display:"inline"},component:"span",children:e(S,{})})}),secondary:e(j,{component:"span",sx:{mt:"10px"},children:e(U,{to:"/"+C.titleToParams(l.title),children:e(X,{component:"button",children:e("i",{children:l.title})})})})})})})}),e(Y,{})]})}const Or=b($r)`
  *{
    background-color: #e8e8e818;
  } 
`;function Pr({className:t}){const r=u.exports.useContext(J),[n,s]=u.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);u.exports.useEffect(()=>{r.updateBadge(!1)},[]);const l=a=>{let i=n.filter(o=>o.id!==a);s(i),localStorage.setItem("meturgamm_words",JSON.stringify(i))};return p("div",{className:t,children:[n[0]&&e(O,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(v,{container:!0,spacing:1,children:n.map((a,i)=>e(v,{item:!0,md:3,lg:3,xs:12,children:e(Or,{lyric:a,deleteOneWord:l})},a.word+i))})}),!n[0]&&e(T,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Mr=b(Pr)`
   min-height: 80vh;
`;var Rr="/assets/extensionImage.9b86a50e.png";function Fr({className:t}){return e("div",{className:t,style:{backgroundImage:`url(${Rr.toString()})`},children:e(v,{container:!0,spacing:4,children:e(v,{item:!0,xs:12,sm:!0,container:!0,children:e(v,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:p(v,{item:!0,xs:!0,children:[e(T,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),e(T,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),e(T,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const jr=b(Fr)`
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

`;function Jr({className:t}){return p("div",{className:t,children:[e(T,{variant:"h2",className:"page-h2",children:"404"}),e(T,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Hr=b(Jr)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Wr({className:t}){var S,x;const r=u.exports.useContext(ee);u.exports.useContext(se);const n=u.exports.useContext(Q);wt("(max-width: 600px)");const[s,l]=u.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[a,i]=u.exports.useState(ae),o=vt({key:"muirtl",stylisPlugins:[Tt,Lt]});u.exports.useEffect(()=>{c()},[]);const c=()=>{C.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")};return e("div",{className:t,children:e(Ct,{theme:a,children:e(kt,{value:o,children:p(Nt,{children:[e(Er,{currTitle:s,theme:a}),p(ar,{children:[e(ze,{className:"header",changeColors:()=>{switch(a){case ae:i(Bt);break;default:i(ae);break}}}),((S=n.main)==null?void 0:S.open)&&p(ne,{severity:"warning",className:"main-alert",children:[e(_e,{children:n.main.title}),n.main.message]}),p(At,{children:[e(G,{path:"/",element:e(Ar,{className:"page",rank:1})}),e(G,{path:"/Exercise",element:e(Mr,{className:"page",rank:1})}),e(G,{path:"/History",element:e(zr,{className:"page",rank:1})}),e(G,{path:"/Wish-list",element:e(Br,{className:"page",rank:1})}),e(G,{path:"/Spotify-extension",element:e(jr,{className:"page",rank:1})}),e(G,{path:"*",element:e(Hr,{className:"page"})})]}),r.open&&r.child&&e(cr,{className:"drawer"}),((x=n.infoSnackbar)==null?void 0:x.open)&&e(_t,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(ne,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(lr,{}),e(xr,{})]})]})})})})}const Gr=b(Wr)`
  height: fit-content;
  min-height: 700px;
`,Ur=[$t,Pt,Ot,Yt,Qt];function qr(t){return e(B,{children:Ur.reduceRight((r,n)=>e(n,{children:r}),t.children)})}zt.render(e(q.StrictMode,{children:e(qr,{children:e(Gr,{className:"app"})})}),document.getElementById("root"));
