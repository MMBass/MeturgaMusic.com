var je=Object.defineProperty,Je=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var fe=(e,r,n)=>r in e?je(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,E=(e,r)=>{for(var n in r||(r={}))Ee.call(r,n)&&fe(e,n,r[n]);if(ae)for(var n of ae(r))xe.call(r,n)&&fe(e,n,r[n]);return e},N=(e,r)=>Je(e,He(r));var T=(e,r)=>{var n={};for(var i in e)Ee.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&ae)for(var i of ae(e))r.indexOf(i)<0&&xe.call(e,i)&&(n[i]=e[i]);return n};import{c as Ae,R as Q,r as l,j as t,a as p,B as Ge,b as te,d as We,e as Ue,s as x,L as Te,u as qe,T as ye,C as Ze,f as de,I as M,g as Xe,h as Ke,i as Qe,M as Le,k as _e,l as Ie,m as F,n as ze,o as Ve,p as $e,F as O,S as Ye,q as ge,N as K,t as A,A as le,v as re,w as Be,G as v,x as R,y as et,z as $,D as B,E as tt,H as rt,J as nt,K as ue,O as P,P as ne,Q as X,U as ot,V as Oe,W as st,X as at,Y as it,Z as ut,_ as be,$ as Se,a0 as lt,a1 as ct,a2 as dt,a3 as pt,a4 as mt,a5 as gt,a6 as Dt,a7 as ht,a8 as ft,a9 as Et,aa as xt,ab as Ce,ac as yt,ad as bt,ae as St,af as Ct,ag as Pe,ah as wt,ai as ie,aj as De,ak as vt,al as kt,am as Nt,an as At,ao as Tt,ap as we,aq as Lt,ar as _t,as as It,at as zt,au as $t,av as Z,aw as Bt,ax as Ot,ay as Pt,az as Mt}from"./vendor.10051b7b.js";const Rt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(u){if(u.ep)return;u.ep=!0;const a=n(u);fetch(u.href,a)}};Rt();const me=Ae({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#de6d7e",contrastText:"#555555"},secondary:{main:"#fcfcfc",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),ee=Ae({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#121212",light:"#fff",dark:"#fff",contrastText:"#ebebeb"},secondary:{main:"#ffffff",dark:"#fff",light:"#121212",contrastText:"#fff"}}}),oe=Q.createContext(void 0);function Ft(e){const[r,n]=l.exports.useState({}),a={openDrawer:(s,o,c="temporary")=>{n({open:s,anchor:o,permanent:c})},closeDrawer:()=>{n({})}};return t(oe.Provider,{value:E(E({},r),a),children:e.children})}const pe=Q.createContext(void 0);function jt(e){const[r,n]=l.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),s={createLoader:(o,c)=>{r[o]&&n(N(E({},r),{[o]:void 0})),n(N(E({},r),{[o]:{open:!1,color:c||"inherit"}}))},openLoader:o=>{r[o]?n(N(E({},r),{[o]:N(E({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(N(E({},r),{[o]:N(E({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return t(pe.Provider,{value:E(E({},r),s),children:e.children})}const V=Q.createContext(void 0);function Jt(e){var o;const[r,n]=l.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),s={createBanner:(c,m,S,y,D)=>{r[c]&&n(N(E({},r),{[c]:void 0})),n(N(E({},r),{[c]:{open:!0,severity:m||"success",title:S||"",message:y||"",action:D||{}}}))},openBanner:c=>{r[c]?n(N(E({},r),{[c]:N(E({},r[c]),{open:!0})})):console.error("Banner "+c+" does'nt exist")},closeBanner:c=>{r[c]?n(N(E({},r),{[c]:N(E({},r[c]),{open:!1})})):console.error("Banner "+c+" does'nt exist")}};return t(V.Provider,{value:E(E({},r),s),children:e.children})}const Ht=()=>{const e=document.createElement("script");e.type="text/javascript",e.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",e.defer=!0,document.body.appendChild(e)},Gt=e=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));e.word=e.word.replace(/[,\.]$/," "),e.id=r.length.toString(),r.unshift(e),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Wt=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));e.id=r.length.toString(),r.unshift(e),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Ut=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===e.toLowerCase()):!1,qt=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},Zt=()=>{const e=navigator.userAgent;if(/android/i.test(e))return!1;if(/iPad|iPhone|iPod/.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0},Xt=e=>{if(/[\u0590-\u05FF]/.test(e)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<e.length;n++)r[e[n]]?e=e.replace(new RegExp(e[n],"g"),r[e[n]]):e=e.replace(new RegExp(e[n],"g"),"");return console.log(e),e}else return e};function Kt(e){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(e.match(r)||[]).length/e.length>.8}const Qt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Vt=e=>{if(typeof e=="string")return"?song="+e.replaceAll(" - ","_").replaceAll(" ","-")},Yt=()=>{const e=new URLSearchParams(location.search);e.get("page")?location.href=location.origin+"/#/"+e.get("page"):e.get("song")&&e.get("song").includes("_")&&(location.href=location.origin+"/#/?song="+noHashSname)};var k={directParamsToHash:Yt,loadGscScript:Ht,lsSaveSong:Wt,lsFindSong:Ut,lsSaveWord:Gt,clearGsc:qt,getMobileOS:Zt,keyboardHEENSwitcher:Xt,isMostlyEnglish:Kt,loadGoogleAds:Qt,titleToParams:Vt};const j=Q.createContext(void 0);function er(e){const r=JSON.parse(localStorage.getItem("fontsize")),[n,i]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27}}),[u,a]=l.exports.useState(!1);function s(y){a(y)}const o=()=>{n.fontSize.md<60&&(i(N(E({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),m())},c=()=>{n.fontSize.sm>7&&(i(N(E({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),m())};function m(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}const S={reduceFontSize:c,increaseFontSize:o,updateBadge:s};return t(j.Provider,{value:N(E(E({},n),S),{badge:u}),children:e.children})}function tr({className:e}){const r=l.exports.useContext(j);return t("div",{id:"",className:e,children:p(Ge,{className:"button-group",children:[t(te,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(We,{fontSize:"small"})}),t(te,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),t(te,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(Ue,{fontSize:"small"})})]})})}const rr=x(tr)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${e=>e.theme.palette.secondary.light};
    color: ${e=>e.theme.palette.primary.contrastText};
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

`;function nr(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(0);return l.exports.useEffect(()=>{const s=setInterval(()=>{a(o=>{if(o===100)return 0;const c=Math.random()*10;return Math.min(o+c,100)})},220);return()=>{clearInterval(s)}},[]),t(Te,{variant:"determinate",value:u,color:r.color})}const or=x(nr)`
  
`,Y=Q.createContext(void 0);function sr(e){const r=l.exports.useContext(pe),n=l.exports.useContext(V),[i,u]=l.exports.useState(""),[a,s]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,c]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[m,S]=l.exports.useState(!1),[y,D]=l.exports.useState(""),[w,L]=l.exports.useState(!1);l.exports.useEffect(()=>{o[0]&&G()},[o,m]);const I="https://musicline-backend.vercel.app",J=(h,d)=>{L(!0),d=d.replace(/[\])}[{(]/g,"").trim();let b=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!H(d,b)&&fetch(`${I}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:h})}).then(g=>g.json()).then(g=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),b&&(b.style.pointerEvents="all"),(g==null?void 0:g.combined)&&Array.isArray(g==null?void 0:g.combined))s(d),u(g.id),c(g.combined),D("microsoft-translator"),k.lsSaveSong({title:d,lines:g.combined}),k.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(g.combined)),sessionStorage.setItem("currSongTitle",d);else if(g==null?void 0:g.lyrics){s(d);let U=g.lyrics,z=[];U.split(/(?:\r\n|\r|\n)/g).map(_=>{if(_.length>=2)if(k.isMostlyEnglish(_))if(_.length>90){let se=_.split(",");se[0].length>10?se.map(Fe=>{z.push({src:Fe,trans:"",transError:!1})}):z.push({src:_.replace(".",""),trans:"",transError:!1})}else z.push({src:_.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+_),z.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),L(!1),c(z),k.clearGsc()}else L(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+d.replaceAll(" ","+")+" lyrics"})}).catch(g=>{L(!1),console.log(g),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),b&&(b.style.pointerEvents="all")})},H=(h,d)=>{let b=k.lsFindSong(h);return b&&Array.isArray(b.lines)?(d&&(d.style.pointerEvents="all"),s(h),c(b.lines),k.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(b.lines)),sessionStorage.setItem("currSongTitle",h),!0):!1},G=()=>{w||o.every((h,d)=>!h.trans.length||h.transError?(m?q(h.src,d):W(),!1):!0)},W=()=>{D(""),fetch(`${I}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:i,title:a})}).then(h=>h.json()).then(h=>{let d=[];(h==null?void 0:h.trans.length)?(h.trans.map((b,g)=>{d[g]={src:o[g].src,trans:b}}),c(d),k.lsSaveSong({title:a,lines:d}),sessionStorage.setItem("currLines",JSON.stringify(d)),sessionStorage.setItem("currSongTitle",a)):(console.error("status is ok but azure translation missing"),S(!0))}).catch(h=>{console.log(h),S(!0)})},q=async(h,d)=>{try{let g=[...o],U=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(h)}`;const _=await(await fetch(U)).json();var b=[];if(_&&_[0])_[0].forEach(se=>{b.push(se[0])}),g[d]={src:h,trans:b.join(" ")},c(g);else throw new Error("Google Translation failed.")}catch(g){console.error("Google Translation error:",g),C(h,d),D("")}y!=="google-translate"&&D("google-translate")},C=(h,d)=>{let b=[...o];fetch(`${I}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(h)})}).then(g=>g.json()).then(g=>{var U,z;(g==null?void 0:g.trans)?(b[d]={src:h,trans:g==null?void 0:g.trans},c(b),((U=o[o.length-1])==null?void 0:U.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a))):(o[d].trans===void 0?b[d]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[d]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(b),((z=o[o.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(b)),sessionStorage.setItem("currSongTitle",a)))}).catch(g=>{var z;o[d].trans===""?b[d]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[d]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),c(b),((z=o[o.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a),S(!1)),console.log(g)})},f={getSongLyrics:J,getFullTrans:W,checkNextTrans:G,setLines:c,setTitle:s,setAbort:L};return t(Y.Provider,{value:E({title:a,lines:o,azureServerError:m,translatedBy:y},f),children:e.children})}function ar(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(!1),[s,o]=l.exports.useState(""),[c,m]=l.exports.useState(!1),S=qe(),y=l.exports.useContext(Y),D=l.exports.useContext(V);l.exports.useEffect(()=>{r.addRecordMode||o(y.title)},[y.title]),l.exports.useEffect(()=>{w()},[]);const w=()=>{k.getMobileOS()&&m(!0)};function L(){if(k.getMobileOS()){const C=document.querySelectorAll(".gsc-control-cse")[0];C.style.visibility="visible",C.style.marginTop="90px"}}l.exports.useEffect(()=>{k.loadGscScript(),I()},[]);function I(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))L(),J();else{let f=function(){J()};const h=document.querySelector("#gcse-my-wrapper"),d={childList:!0,attributes:!0,subtree:!1};new MutationObserver(f).observe(h,d)}}function J(){a(!0);const C=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],f={childList:!1,attributes:!0,subtree:!1};function h(){W()}new MutationObserver(h).observe(C,f)}function H(C){if(o(C.target.value),C.nativeEvent.data!==" ")G(C.target.value);else return}function G(C){D.error&&D.closeBanner("error");let f=document.querySelector("#gsc-i-id1"),h=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(f)if(C.length<=1){let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))}else if(h.test(C)){f.value=C;let d=document.querySelectorAll(".gsc-search-box button")[0];d?setTimeout(()=>{d.type="button",d.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{D.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let d=document.querySelector(".gsst_a");d&&d.dispatchEvent(new Event("click"))},250);return}else D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const W=()=>{setTimeout(()=>{let C=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");C&&C.forEach((f,h)=>{if(f.innerText.includes("Lyrics")){if(f.innerText.includes("(")){let g=f.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((g==null?void 0:g.includes("live"))||(g==null?void 0:g.includes("mix"))||(g==null?void 0:g.includes("remix"))){f.parentElement.parentElement.parentElement.remove();return}}let d=f.innerText.split("Lyrics")[0];if(d=d.replaceAll("\u2013","-"),!k.isMostlyEnglish(d)){f.parentElement.parentElement.parentElement.remove();return}f.innerHTML=`<strong>${d.split("-")[0]}</strong> - <span>${d.split("-")[1]}</span>`;const b={artistName:encodeURI(d.split("-")[0]),songName:encodeURI(d.split("-")[1])};f.nodeName!=="A"&&f.parentElement.parentElement.parentElement.addEventListener("click",()=>{q(f,d,b)}),f.style.display="block"}else f.innerText.includes("Lyrics")||f.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&f.parentElement.parentElement.parentElement.remove()})},50)},q=(C,f,h)=>{if(C.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(f),C.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",k.clearGsc(),o(" ");return}y.title.replaceAll(" ","")==f.replaceAll(" ","")&&(C.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",k.clearGsc()),y.title.replaceAll(" ","")!=f.replaceAll(" ","")&&y.getSongLyrics(h,f),o(f),location.hash!="#/"&&S("/")};return p("div",{className:e,children:[!c&&!r.addRecordMode&&t(ye,{size:r.size,id:"outlined-search",label:u?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8":t(Ze,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:u?H:null,autoFocus:!1,autoComplete:"off",placeholder:"GOOGLE  \u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",value:s}),!c&&r.addRecordMode&&t(ye,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:u?H:null,autoFocus:!1,autoComplete:"off",placeholder:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA GOOGLE",value:s,fullWidth:!0,variant:"filled"}),t("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:t("div",{className:"gcse-search"})})]})}const he=x(ar)`

  *, ::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  .add-record-input{
    background-color: #e2e2e2;
    color: dark;

      *{
      border-radius: 0;

      input{
        padding-bottom: 20px;
      }
    } 
  } 

  .main-input, .top-input{
      direction: rtl; // will turn to LTR, mui settings replace to opposite
      margin: auto;

      input, fieldset, label{
        font-weight: 600;
        border-width: medium;
      }
  }

  .main-input{ 
      width: 80%;

      @media (max-width: 600px) {
        width: 95%;
      }

      input, fieldset, label{
        color: ${e=>e.theme.palette.primary.dark+"!important"};
        border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};
      }
    }

  .top-input{
      min-width: 100%;

      input, fieldset, label{
        color: ${e=>e.theme.palette.primary.light+"!important"};
        border-color: ${e=>e.theme.palette.primary.light+"!important"};
      }
  }

  /* google search styling - elements from out of REACT */

  #___gcse_0 {
    position: absolute;
    margin-top: -17px;
    border: unset;
    z-index: 1;

    @media (max-width: 600px) {
      max-width: 390px;
      overflow: hidden;
      * {
        font-size: 12px;
      }
    }
  }

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
    background-color: ${e=>e.theme.palette.secondary.light+"!important"};
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
      overflow: hidden;
    }

    #___gcse_0 {
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
    background-color: ${e=>e.theme.palette.secondary.light+"!important"};
    padding: 2px;
    cursor: pointer;
  }

  .gsc-result * {
    font-family: 'Assistant', 'Roboto', 'sans-serif' !important;
    font-weight: 500;
    /* background-color: ${e=>e.theme.palette.secondary.light+"!important"}; */
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

`;function ir(n){var i=n,{className:e}=i,r=T(i,["className"]);const u=de(),a=()=>{r.changeColors()};return t("div",{id:"",className:e,children:t(M,{onClick:()=>a(),children:u.palette.mode==="dark"?t(Xe,{color:"primary"}):t(Ke,{})})})}const Me=x(ir)`
  text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;
`,ur=n=>{var i=n,{className:e}=i,r=T(i,["className"]);var L,I,J,H,G,W,q,C,f;const[u,a]=l.exports.useState(!1),s=de(),o=l.exports.useContext(oe),c=l.exports.useContext(Y),m=l.exports.useContext(V),S=l.exports.useContext(pe),y=l.exports.useContext(j),D=Qe();l.exports.useEffect(()=>{a(!1),window.scrollTo(0,0),m.closeBanner("error")},[D,c.title]),l.exports.useEffect(()=>{a(!1),m.closeBanner("error")},[o.open]);const w=()=>{m.closeBanner("error"),o.open?o.closeDrawer():o.openDrawer(!0,"left","temporary")};return p(Le,{position:"sticky",className:e,sx:{backgroundColor:s.palette.primary.main,color:s.palette.secondary.dark},children:[S.main.open&&t(or,{color:S.main.color}),t(_e,{maxWidth:!1,children:p(Ie,{disableGutters:!0,children:[t(F,{children:t(M,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:w,children:o.open?t($e,{className:"burger-icon"}):t(ze,{variant:"dot",invisible:!y.badge,children:t(Ve,{className:"burger-icon"})})})}),(((L=c.lines)==null?void 0:L[0])||D.pathname!=="/")&&t(O,{children:D.pathname!=="/wish-list"&&p(O,{children:[t(M,{className:"mui-search-icon-wrapper",onClick:()=>a(!u),children:t(Ye,{className:"mui-search-icon"})}),t(F,{className:u&&"collapse-search-box",children:t(ge,{className:"search-ctr-collapse",orientation:"horizontal",in:u,collapsedSize:0,children:u&&t(he,{locat:"top",size:"small",setTopSearchBar:()=>{a()}})})})]})}),!u&&t(K,{to:"/",onClick:()=>{},children:p(A,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[t("span",{id:"h2-part1",style:{color:s.palette.secondary.dark},children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),t("span",{id:"h2-part2",style:{color:s.palette.secondary.main},children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),D.pathname==="/"&&!u&&!((I=c.lines)==null?void 0:I[0])&&t(Me,{changeColors:r.changeColors}),D.pathname==="/"&&!u&&((J=c.lines)==null?void 0:J[0])&&t(rr,{})]})}),t(ge,{in:(H=m.error)==null?void 0:H.open,children:p(le,{severity:"error",className:"error-alert",action:((G=m.error)==null?void 0:G.action)&&t(re,{padding:"7px",href:(W=m.error)==null?void 0:W.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(q=m.error)==null?void 0:q.action.actionText}),onClose:()=>{m.closeBanner("error")},children:[t(Be,{children:(C=m.error)==null?void 0:C.title}),(f=m.error)==null?void 0:f.message]})})]})},Re=x(ur)`
      z-index: 2000;

      a{
        /* color: ${e=>e.theme.palette.primary.main};
        &hover{
          color: #8e8b8b;
        } */

        #h2-part1, #h2-part2{
          font-weight: 600;
        }
/* 
        #h2-part1{
          color:  ${e=>e.theme.palette.secondary.dark};
        }

        #h2-part2{
          color:  ${e=>e.theme.palette.secondary.light};
        } */
      }
      
      button{
        color: ${e=>e.theme.palette.secondary.dark};
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
`;function lr(n){var i=n,{className:e}=i,r=T(i,["className"]);return t("div",{className:e,children:r.children})}const cr=x(lr)`
  height: fit-content;
  min-height: 700px;
  
  background-color: ${e=>e.theme.palette.secondary.light};
  color: ${e=>e.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    /* font-size: 140px;  */
    font-size: 11vw; 
    font-weight: 100;
    color: ${e=>e.theme.palette.primary.contrastText};
    
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
    background-color: ${e=>e.theme.palette.secondary.dark};
    color: ${e=>e.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
    padding: 20px;
  }
  
`;function dr({className:e}){return l.exports.useEffect(()=>{},[]),t("div",{id:"FOOTER",className:e,children:p(v,{container:!0,rowSpacing:6,columnSpacing:2,children:[p(v,{item:!0,xs:12,sm:4,children:[p(R,{children:[t(et,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),t($,{component:re,href:"mailto:meturgamusic@gmail.com",children:t(B,{primary:"MeturgaMusic@gmail.com"})}),t($,{component:re,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:t(B,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),t(R,{children:t($,{component:re,href:"https://basssites.com",className:"built-by",children:t(B,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),t(v,{item:!0,xs:12,sm:4})]})})}const pr=x(dr)`
  /* color: ${e=>e.theme.palette.primary.contrastText}; */
  background-color: ${e=>e.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: ${e=>e.theme.palette.secondary.dark};
  }

  svg{
    font-size: 15px;
    color: ${e=>e.theme.palette.secondary.dark};
  }

  span{
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: ${e=>e.theme.palette.secondary.main};
    margin: unset;
  }

  .built-by{
    color: ${e=>e.theme.palette.secondary.main};
  }

`;function mr(n){var i=n,{className:e}=i,r=T(i,["className"]);const u=l.exports.useContext(j);de();const a=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",url:"/history",icon:t(tt,{className:"side-icons"})},{name:"\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC ",url:"/exercise",icon:t(ze,{variant:"dot",invisible:!u.badge,color:"error",children:t(rt,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD",url:"/wish-list",icon:t(nt,{className:"side-icons"}),chip:t(ue,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return p(R,{className:e,sx:{maxWidth:"320px"},children:[t(le,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),a.map((s,o)=>t(K,{to:s.url,className:"nav-link",children:p($,{children:[p(P,{children:[t(ne,{children:s.icon}),t(B,{primary:s.name}),s.chip&&s.chip]}),t(X,{})]})},o)),t(K,{to:"/spotify-extension",className:"nav-link",children:p($,{sx:{backgroundColor:"lightGray"},children:[p(P,{children:[t(ne,{children:t(ot,{className:"side-icons",sx:{rotate:"-90deg"}})}),t(B,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),t(ue,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),t(X,{})]})}),p($,{children:[t(P,{onClick:r.changeColors,sx:{textAlign:"center",justifyContent:"center"},children:t(ue,{icon:t(Me,{changeColors:r.changeColors}),className:"pages-list-chip extension-chip",label:"\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4",color:"secondary",variant:"outlined",size:"large"})}),t(X,{})]})]})}const gr=x(mr)`

  .MuiTypography-root {
    color: ${e=>e.theme.palette.secondary.dark};

  }

  .side-icons{
    color: ${e=>e.theme.palette.secondary.dark};
    font-size: '14px';
  }

  .pages-list-chip{
    margin-inline-start: 20px;
    padding: 3px;
    padding-bottom: 5px;
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.primary.light};
  }

  .extension-chip{
    background-color: white;
    color: black;
  }
`;function Dr(n){var i=n,{className:e}=i,r=T(i,["className"]);const u=l.exports.useContext(oe);return t(Oe,{className:e,anchor:u.anchor,open:u.open,variant:u.permanent,onClose:()=>{u.closeDrawer()},children:t(F,{className:"drawer-layout",role:"presentation",onClick:()=>{u.closeDrawer()},children:t(gr,{changeColors:r.changeColors})})})}const hr=x(Dr)` 

.MuiDrawer-paper{
  background-color:  ${e=>e.theme.palette.secondary.light+"!important"};
}

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    background-color:  ${e=>e.theme.palette.secondary.light};
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`,ce=240,ve=e=>({width:ce,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),ke=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${e.spacing(7)} + 1px)`,[e.breakpoints.up("sm")]:{width:`calc(${e.spacing(8)} + 1px)`}}),fr=x("div")(({theme:e})=>E({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)),Er=x(Le,{shouldForwardProp:e=>e!=="open"})(({theme:e,open:r})=>E({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},r&&{marginLeft:ce,width:`calc(100% - ${ce}px)`,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})),xr=x(Oe,{shouldForwardProp:e=>e!=="open"})(({theme:e,open:r})=>E(E({width:ce,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&N(E({},ve(e)),{"& .MuiDrawer-paper":ve(e)})),!r&&N(E({},ke(e)),{"& .MuiDrawer-paper":ke(e)})));function yr(){const e=de(),[r,n]=l.exports.useState(!1),i=()=>{n(!0)},u=()=>{n(!1)};return p(F,{sx:{display:"flex"},children:[t(st,{}),t(Er,{position:"fixed",open:r,children:p(Ie,{children:[t(M,{color:"inherit","aria-label":"open drawer",onClick:i,edge:"start",sx:E({marginRight:5},r&&{display:"none"}),children:t(at,{})}),t(Re,{})]})}),p(xr,{variant:"permanent",open:r,children:[t(fr,{children:t(M,{onClick:u,children:e.direction==="rtl"?t(it,{}):t(ut,{})})}),t(X,{}),t(R,{children:["Inbox","Starred","Send email","Drafts"].map((a,s)=>t($,{disablePadding:!0,sx:{display:"block"},children:p(P,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[t(ne,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:s%2===0?t(be,{}):t(Se,{})}),t(B,{primary:a,sx:{opacity:r?1:0}})]})},a))}),t(X,{}),t(R,{children:["All mail","Trash","Spam"].map((a,s)=>t($,{disablePadding:!0,sx:{display:"block"},children:p(P,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[t(ne,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:s%2===0?t(be,{}):t(Se,{})}),t(B,{primary:a,sx:{opacity:r?1:0}})]})},a))})]})]})}x(yr)`
  
`;function br({className:e}){const[r,n]=l.exports.useState(!0),i=()=>{n(!1)};return p(lt,{id:"main-modal-root",className:e,open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ct,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),t(dt,{children:t(pt,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(mt,{children:t(te,{onClick:i,children:"Close"})})]})}x(br)`
  
`;function Sr(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(!0);return t(gt,{className:e,open:u,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(Sr)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${e=>e.theme.palette.primary.main};
  }
`;function Cr({className:e}){const r=Dt({target:window,disableHysteresis:!0,threshold:100});return t(ht,{id:"",className:e,in:r,children:t(F,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:t(ft,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:t(Et,{htmlColor:"white"})})})})}const wr=x(Cr)`
  width: 50px;
  height: 50px;
`;function vr(e){const[r,n]=l.exports.useState(e.theme.palette.primary.main);return l.exports.useEffect(()=>{n(e.theme.palette.primary.main)},[e.theme]),p(xt,{children:[t("title",{children:e.currTitle}),t("meta",{name:"theme-color",content:r}),t("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})}function kr(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(!1),s=l.exports.useContext(j);l.exports.useEffect(()=>{o()&&a(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(S=>S.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,c=()=>{try{k.lsSaveWord(r.toSave),a(!0),s.updateBadge(1)}catch(m){m&&console.log(m)}};return t("span",{className:e,children:u?t(O,{children:r.variant==="Bookmark"?t(Ce,{className:"book-mark-top-icon bm-disabled"}):t("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:t(Ce,{className:"book-mark-bottom-icon",fontSize:"small"})})}):t(O,{children:r.variant==="Bookmark"?t(O,{children:t(yt,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>c()})}):p("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>c(),children:[t(bt,{className:"book-mark-bottom-icon",fontSize:"small"}),t("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const Nr=x(kr)`

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
            background-color: ${e=>e.theme.palette.primary.main};
        }
    }

    .book-mark-top-icon{
        position: absolute;
        top: -10px;

        font-size: 12px;

        :hover{
            background-color: ${e=>e.theme.palette.primary.dark};
        }
    }

    .bm-disabled{
        pointer-events: none;
        background-color: dark;
    }
`;function Ar(n){var i=n,{className:e}=i,r=T(i,["className"]);const u=l.exports.useContext(j),a=l.exports.useContext(Y),s=()=>{if(r.results[0]){let o="";return r.results.map((c,m)=>{m+1===r.results.length?o+=c:o+=c+", "}),t("p",{className:"tt-p",children:o})}else return t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return t(St,{onClickAway:r.tooltipClose,children:p("span",{className:e,children:[t(A,{className:"tt-top",color:"inherit",style:{fontSize:u.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&t("hr",{}),t("div",{className:"tt-body",style:{fontSize:u.fontSize.md-2},children:r.results[0]?t(s,{}):t(Te,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&t(Nr,{toSave:{word:r.lyric,results:r.results,title:a.title},variant:"Star"})]})})}const Tr=x(Ar)`

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

`;function Lr(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(!1),[s,o]=l.exports.useState([]);l.exports.useEffect(()=>{},[]);const c=()=>{a(!0),s[0]||S()},m=()=>{a(!1)};function S(){const y="https://musicline-backend.vercel.app";let D=r.lyric.trim().toLowerCase();D=D.replaceAll(/[^a-zA-Z0-9']/g,""),D.slice(-1)==="'"&&(D=D.replaceAll("'","g")),fetch(`${y}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(D)})}).then(w=>w.json()).then(w=>{if(w==null?void 0:w.results[0]){o(w.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(w=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(w)})}return t(O,{children:t(Ct,{className:e,title:t(Tr,{tooltipClose:m,className:"tt-childs",lyric:r.lyric,results:s}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:m,open:u,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:p("span",{children:["\xA0 ",p("p",{className:"single-lyric",onClick:c,children:[" ",r.lyric," "]})]})})})}const Ne=x(Lr)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function _r(n){var i=n,{className:e}=i,r=T(i,["className"]);let[u,a]=Pe();const s=l.exports.useContext(Y),o=l.exports.useContext(j);l.exports.useEffect(()=>{a(k.titleToParams(s.title))},[s.title]);const c=()=>{s.setAbort(!0),sessionStorage.removeItem("currLines"),s.setLines([]),s.setTitle(""),a("")};return t(wt,{elevation:3,className:e,children:p(v,{container:!0,rowSpacing:1,columnSpacing:0,children:[p(v,{item:!0,xs:12,className:"l-body-top",children:[t(M,{onClick:()=>c(),children:t($e,{className:"remove-icon"})}),s.translatedBy&&t(ue,{className:"trans-by-chip",label:"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA "+s.translatedBy,color:"default",variant:"filled",size:"small"}),t(A,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:s.title&&s.title.split(" ").map((m,S)=>t(Ne,{lyric:m,open:!1},ie()))})]}),s.lines.map((m,S)=>{var y;return m.src.includes("[")&&(m.trans="   "),p(v,{item:!0,xs:12,children:[S>0&&m.src.includes("[")&&p(O,{children:[t("br",{}),t("br",{})]}),t(F,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:m.src.split(" ").map((D,w)=>(D.slice(-1)==="'"&&(D=D.replaceAll("'","g")),t(Ne,{lyric:D,open:S==1&w==1},ie())))}),t(F,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:t(O,{children:((y=m.trans)==null?void 0:y.length)?m.trans.split(" ").map((D,w)=>{if(m.trans!=="   ")return p("small",{className:"single-trans",children:[D," \xA0"]},ie())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},ie())})]})})}const Ir=x(_r)`
  background-color: ${e=>e.theme.palette.secondary.light};
  color: ${e=>e.theme.palette.secondary.dark};
 
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
  
  .l-body-top *{
    color: ${e=>e.theme.palette.secondary.dark};
  }

  .trans-by-chip{
    padding: 3px;
    margin-inline-start: 30px;
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
`;function zr({className:e}){var c,m,S,y;const r=l.exports.useContext(Y),n=l.exports.useContext(V),i=l.exports.useContext(oe),[u,a]=Pe(),s=u.get("song");l.exports.useEffect(()=>{i.closeDrawer(),n.error&&n.closeBanner("error"),k.directParamsToHash(),s&&s.includes("_")&&o()},[]);function o(){let D=s;D=D.replaceAll("-"," ");const w={artistName:encodeURI(` ${D.split("_")[0]} `),songName:encodeURI(` ${D.split("_")[1]} `)};D=D.replaceAll("_"," - "),r.getSongLyrics(w,D)}return p("div",{className:e,children:[!((c=r.lines)==null?void 0:c[0])&&t(_e,{className:"home-top",maxWidth:!1,children:p(v,{container:!0,className:"home-t-container",children:[!((m=r.lines)==null?void 0:m[0])&&t(v,{item:!0,xs:12,sm:6,children:p(A,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",t("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),p(v,{item:!0,xs:12,sm:6,children:[!((S=r.lines)==null?void 0:S[0])&&p(A,{variant:"h3",className:"page-h3",children:[t("span",{className:"h3-start h3-start-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA"}),t("span",{className:"h3-start h3-start-two",children:"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05EA\u05E8\u05D2\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8"}),t("span",{className:"h3-middle",children:"\u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),t("span",{className:"h3-bottom",children:"\u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8"})]}),t(he,{locat:"main",size:"large"}),t(A,{children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"})]})]})}),((y=r.lines)==null?void 0:y[0])&&p(v,{container:!0,spacing:1,children:[t(v,{item:!0,md:12,lg:9,children:t(Ir,{className:"lyrics-body"})}),t(v,{item:!0,xs:12,lg:3})]})]})}const $r=x(zr)`
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

    .page-h3{
        margin: 40px 0px 15px 0px;
        font-size: 3.5vw;
        font-weight: 400;
        color: ${e=>e.theme.palette.primary.contrastText};

        span{
            display: block;
        }

        @media (max-width: 600px) {
            margin: 15px 0px 35px  0px;
            font-size: 6vw;
        }

        .h3-start-one{

            @media (max-width: 600px) {
        
            }
   
        }

        .h3-start-two{
 
            @media (max-width: 600px) {

            }
    
        }

        .h3-middle{
            color: ${e=>e.theme.palette.primary.main};
        }

        .h3-bottom{
        
        }
    }
    
`;function Br(n){var i=n,{className:e}=i,r=T(i,["className"]);const u=()=>{r.deleteOneSong(r.song_id)};return t($,{className:e,secondaryAction:t(M,{onClick:()=>{u()},edge:"end","aria-label":"delete",children:t(De,{})}),children:t(B,{primary:t(K,{to:"/"+k.titleToParams(r.title),children:t(P,{children:t(A,{children:r.title})})})})})}const Or=x(Br)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${e=>e.theme.palette.secondary.dark};
  }
`;function Pr({className:e}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),i=a=>{let s=r.filter(o=>o.id!==a);n(s),localStorage.setItem("meturgamm_songs",JSON.stringify(s))},u=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return p("div",{className:e,children:[r[0]&&p(F,{children:[t(te,{className:"d-all-btn",component:"label",onClick:()=>{u()},variant:"outlined",startIcon:t(vt,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),t(R,{sx:{width:"100%"},component:"div",children:t(v,{container:!0,spacing:1,children:r.map((a,s)=>t(v,{item:!0,xs:12,md:6,children:t(Or,{title:a.title,song_id:a.id,deleteOneSong:i})},a.title+s))})})]}),!r[0]&&t(A,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const Mr=x(Pr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${e=>e.theme.palette.primary.dark};
   }
`;function Rr({className:e}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function i(a){const s={title:a,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(s),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const u=a=>{let s=r.filter(o=>o.id!==a);n(s),localStorage.setItem("meturgamm_wish",JSON.stringify(s))};return p(R,{className:e,subheader:t(he,{addRecordMode:!0,locat:"main",addRecord:i}),children:[t(v,{container:!0,spacing:1,children:r.map((a,s)=>t(v,{item:!0,xs:12,md:6,children:t($,{secondaryAction:t(M,{onClick:()=>{u(a.id)},edge:"end","aria-label":"deletcoe",children:t(De,{})}),children:t(B,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:t(K,{to:"/"+k.titleToParams(a.title),children:p(P,{children:[t(kt,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),t(A,{children:a.title})]})})})},s)},a.title+s))}),!r[0]&&t(A,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Fr=x(Rr)`
  min-height: 70vh;
  padding-top: 3px;

  p{
    color:  ${e=>e.theme.palette.secondary.dark};
  }

  svg{
    color:  ${e=>e.theme.palette.primary.contrastText};
  }
`;function jr(n){var i=n,{className:e}=i,r=T(i,["className"]);const[u,a]=l.exports.useState(r.lyric),[s,o]=l.exports.useState(!1),c=()=>{o(!s)},m=()=>{r.deleteOneWord(r.lyric.id)},S=()=>{if(u.results[0]){let y="";return u.results.map((D,w)=>{w+1===u.results.length?y+=D:y+=D+", "}),t("span",{className:"inline-results-p",children:y})}else return null};return p("span",{className:e,children:[t($,{secondaryAction:t(M,{onClick:()=>{m()},edge:"end","aria-label":"delete",children:t(De,{})}),children:p(P,{onClick:c,children:[t(ne,{children:t(Nt,{})}),t(B,{primary:u.word}),s?t(At,{}):t(Tt,{})]})}),t(ge,{in:s,timeout:"auto",unmountOnExit:!0,children:t(R,{component:"div",disablePadding:!0,children:t($,{sx:{pl:4},children:t(B,{primary:t(O,{children:t(A,{sx:{display:"inline"},component:"span",children:t(S,{})})}),secondary:t(P,{component:"span",sx:{mt:"10px"},children:t(K,{to:"/"+k.titleToParams(u.title),children:t(re,{component:"button",children:t("i",{children:u.title})})})})})})})}),t(X,{})]})}const Jr=x(jr)`
  *{
    background-color: #e8e8e818;
  } 
`;function Hr({className:e}){const r=l.exports.useContext(j),[n,i]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);l.exports.useEffect(()=>{r.updateBadge(!1)},[]);const u=a=>{let s=n.filter(o=>o.id!==a);i(s),localStorage.setItem("meturgamm_words",JSON.stringify(s))};return p("div",{className:e,children:[n[0]&&t(R,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:t(v,{container:!0,spacing:1,children:n.map((a,s)=>t(v,{item:!0,md:3,lg:3,xs:12,children:t(Jr,{lyric:a,deleteOneWord:u})},a.word+s))})}),!n[0]&&t(A,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Gr=x(Hr)`
   min-height: 80vh;
`;var Wr="/assets/extensionImage.9b86a50e.png";function Ur({className:e}){return t("div",{className:e,style:{backgroundImage:`url(${Wr.toString()})`},children:t(v,{container:!0,spacing:4,children:t(v,{item:!0,xs:12,sm:!0,container:!0,children:t(v,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:p(v,{item:!0,xs:!0,children:[t(A,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),t(A,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),t(A,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const qr=x(Ur)`
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
      font-size: 5vw;
      display: inline;
      text-align: start;
      font-weight: 800;

      @media (max-width: 600px) {
        font-size: 12vw;
      }
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

`;function Zr({className:e}){return p("div",{className:e,children:[t(A,{variant:"h2",className:"page-h2",children:"404"}),t(A,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Xr=x(Zr)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Kr({className:e}){var w,L;const r=l.exports.useContext(oe);l.exports.useContext(pe);const n=l.exports.useContext(V);we("(max-width: 600px)");const[i,u]=l.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[a,s]=l.exports.useState(me),o=we("(prefers-color-scheme: dark)"),c=Lt({key:"muirtl",stylisPlugins:[Ot,Pt]});l.exports.useEffect(()=>{m()},[]),l.exports.useEffect(()=>{localStorage.getItem("preferedDark")?localStorage.getItem("preferedDark")==="true"&&s(ee):s(o?ee:me)},[o]);const m=()=>{k.directParamsToHash(),S(),y()},S=()=>{fetch("https://musicline-backend-dev.vercel.app/")},y=()=>{k.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")},D=()=>{let I=a===ee?me:ee;s(I),localStorage.setItem("preferedDark",I===ee?"true":"false")};return t("div",{className:e,children:t(_t,{theme:a,children:t(It,{value:c,children:p(zt,{children:[t(vr,{currTitle:i,theme:a}),p(cr,{children:[t(Re,{className:"header",changeColors:D}),((w=n.main)==null?void 0:w.open)&&p(le,{severity:"warning",className:"main-alert",children:[t(Be,{children:n.main.title}),n.main.message]}),p($t,{children:[t(Z,{path:"/",element:t($r,{className:"page",rank:1})}),t(Z,{path:"/Exercise",element:t(Gr,{className:"page",rank:1})}),t(Z,{path:"/History",element:t(Mr,{className:"page",rank:1})}),t(Z,{path:"/Wish-list",element:t(Fr,{className:"page",rank:1})}),t(Z,{path:"/Spotify-extension",element:t(qr,{className:"page",rank:1})}),t(Z,{path:"*",element:t(Xr,{className:"page"})})]}),r.open&&t(hr,{className:"drawer",changeColors:D}),((L=n.infoSnackbar)==null?void 0:L.open)&&t(Bt,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(le,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),t(pr,{}),t(wr,{})]})]})})})})}const Qr=x(Kr)`
  height: fit-content;
  min-height: 700px;
`,Vr=[Ft,Jt,jt,sr,er];function Yr(e){return t(O,{children:Vr.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Mt.render(t(Q.StrictMode,{children:t(Yr,{children:t(Qr,{className:"app"})})}),document.getElementById("root"));
