var Re=Object.defineProperty,Fe=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ge=(e,r,n)=>r in e?Re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,E=(e,r)=>{for(var n in r||(r={}))he.call(r,n)&&ge(e,n,r[n]);if(oe)for(var n of oe(r))fe.call(r,n)&&ge(e,n,r[n]);return e},k=(e,r)=>Fe(e,je(r));var A=(e,r)=>{var n={};for(var i in e)he.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&oe)for(var i of oe(e))r.indexOf(i)<0&&fe.call(e,i)&&(n[i]=e[i]);return n};import{c as ke,R as X,r as l,j as t,a as m,B as Je,b as Y,d as He,e as Ge,s as x,L as Ne,u as We,T as Ee,C as Ue,f as le,I as P,g as qe,h as Ze,i as Xe,M as Ae,k as Te,l as Le,m as j,n as _e,o as Ke,p as Ie,F as $,S as Qe,q as pe,N as Z,t as N,A as ie,v as ee,w as ze,G as w,x as M,y as Ve,z as _,D as I,E as Ye,H as et,J as tt,K as ae,O,P as te,Q as q,U as rt,V as $e,W as nt,X as ot,Y as st,Z as at,_ as xe,$ as ye,a0 as it,a1 as ut,a2 as lt,a3 as ct,a4 as dt,a5 as pt,a6 as mt,a7 as Dt,a8 as gt,a9 as ht,aa as ft,ab as be,ac as Et,ad as xt,ae as yt,af as bt,ag as Be,ah as St,ai as se,aj as me,ak as Ct,al as wt,am as vt,an as kt,ao as Nt,ap as Se,aq as At,ar as Tt,as as Lt,at as _t,au as It,av as U,aw as zt,ax as $t,ay as Bt,az as Ot}from"./vendor.b532cef3.js";const Pt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(u){if(u.ep)return;u.ep=!0;const a=n(u);fetch(u.href,a)}};Pt();const de=ke({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#de6d7e",contrastText:"#555555"},secondary:{main:"#fcfcfc",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),V=ke({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#121212",light:"#fff",dark:"#fff",contrastText:"#ebebeb"},secondary:{main:"#ffffff",dark:"#fff",light:"#121212",contrastText:"#fff"}}}),re=X.createContext(void 0);function Mt(e){const[r,n]=l.exports.useState({}),a={openDrawer:(s,o,p="temporary")=>{n({open:s,anchor:o,permanent:p})},closeDrawer:()=>{n({})}};return t(re.Provider,{value:E(E({},r),a),children:e.children})}const ce=X.createContext(void 0);function Rt(e){const[r,n]=l.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),s={createLoader:(o,p)=>{r[o]&&n(k(E({},r),{[o]:void 0})),n(k(E({},r),{[o]:{open:!1,color:p||"inherit"}}))},openLoader:o=>{r[o]?n(k(E({},r),{[o]:k(E({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(k(E({},r),{[o]:k(E({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return t(ce.Provider,{value:E(E({},r),s),children:e.children})}const K=X.createContext(void 0);function Ft(e){var o;const[r,n]=l.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),s={createBanner:(p,D,y,b,g)=>{r[p]&&n(k(E({},r),{[p]:void 0})),n(k(E({},r),{[p]:{open:!0,severity:D||"success",title:y||"",message:b||"",action:g||{}}}))},openBanner:p=>{r[p]?n(k(E({},r),{[p]:k(E({},r[p]),{open:!0})})):console.error("Banner "+p+" does'nt exist")},closeBanner:p=>{r[p]?n(k(E({},r),{[p]:k(E({},r[p]),{open:!1})})):console.error("Banner "+p+" does'nt exist")}};return t(K.Provider,{value:E(E({},r),s),children:e.children})}const jt=()=>{const e=document.createElement("script");e.type="text/javascript",e.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",e.defer=!0,document.body.appendChild(e)},Jt=e=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));e.word=e.word.replace(/[,\.]$/," "),e.id=r.length.toString(),r.unshift(e),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Ht=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));e.id=r.length.toString(),r.unshift(e),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Gt=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===e.toLowerCase()):!1,Wt=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},Ut=()=>{const e=navigator.userAgent;if(/android/i.test(e))return!1;if(/iPad|iPhone|iPod/.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0},qt=e=>{if(/[\u0590-\u05FF]/.test(e)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<e.length;n++)r[e[n]]?e=e.replace(new RegExp(e[n],"g"),r[e[n]]):e=e.replace(new RegExp(e[n],"g"),"");return console.log(e),e}else return e};function Zt(e){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(e.match(r)||[]).length/e.length>.8}const Xt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Kt=e=>{if(typeof e=="string")return"?song="+e.replaceAll(" - ","_").replaceAll(" ","-")},Qt=()=>{const e=new URLSearchParams(location.search);e.get("page")?location.href=location.origin+"/#/"+e.get("page"):e.get("song")&&e.get("song").includes("_")&&(location.href=location.origin+"/#/?song="+noHashSname)};var v={directParamsToHash:Qt,loadGscScript:jt,lsSaveSong:Ht,lsFindSong:Gt,lsSaveWord:Jt,clearGsc:Wt,getMobileOS:Ut,keyboardHEENSwitcher:qt,isMostlyEnglish:Zt,loadGoogleAds:Xt,titleToParams:Kt};const J=X.createContext(void 0);function Vt(e){const r=JSON.parse(localStorage.getItem("fontsize")),[n,i]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27}}),[u,a]=l.exports.useState(!1);function s(b){a(b)}const o=()=>{n.fontSize.md<60&&(i(k(E({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),D())},p=()=>{n.fontSize.sm>7&&(i(k(E({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),D())};function D(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}const y={reduceFontSize:p,increaseFontSize:o,updateBadge:s};return t(J.Provider,{value:k(E(E({},n),y),{badge:u}),children:e.children})}function Yt({className:e}){const r=l.exports.useContext(J);return t("div",{id:"",className:e,children:m(Je,{className:"button-group",children:[t(Y,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(He,{fontSize:"small"})}),t(Y,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),t(Y,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(Ge,{fontSize:"small"})})]})})}const er=x(Yt)`
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

`;function tr(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(0);return l.exports.useEffect(()=>{const s=setInterval(()=>{a(o=>{if(o===100)return 0;const p=Math.random()*10;return Math.min(o+p,100)})},220);return()=>{clearInterval(s)}},[]),t(Ne,{variant:"determinate",value:u,color:r.color})}const rr=x(tr)`
  
`,Q=X.createContext(void 0);function nr(e){const r=l.exports.useContext(ce),n=l.exports.useContext(K),[i,u]=l.exports.useState(""),[a,s]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,p]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[D,y]=l.exports.useState(!1),[b,g]=l.exports.useState(!1);l.exports.useEffect(()=>{o[0]&&R()},[o,D]);const S="https://musicline-backend.vercel.app",B=(h,d)=>{g(!0),d=d.replace(/[\])}[{(]/g,"").trim();let f=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!z(d,f)&&fetch(`${S}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:h})}).then(c=>c.json()).then(c=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),f&&(f.style.pointerEvents="all"),(c==null?void 0:c.combined)&&Array.isArray(c==null?void 0:c.combined))s(d),u(c.id),p(c.combined),v.lsSaveSong({title:d,lines:c.combined}),v.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(c.combined)),sessionStorage.setItem("currSongTitle",d);else if(c==null?void 0:c.lyrics){s(d);let L=c.lyrics,C=[];L.split(/(?:\r\n|\r|\n)/g).map(T=>{if(T.length>=2)if(v.isMostlyEnglish(T))if(T.length>90){let ne=T.split(",");ne[0].length>10?ne.map(Me=>{C.push({src:Me,trans:"",transError:!1})}):C.push({src:T.replace(".",""),trans:"",transError:!1})}else C.push({src:T.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+T),C.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),g(!1),p(C),v.clearGsc()}else g(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+d.replaceAll(" ","+")+" lyrics"})}).catch(c=>{g(!1),console.log(c),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),f&&(f.style.pointerEvents="all")})},z=(h,d)=>{let f=v.lsFindSong(h);return f&&Array.isArray(f.lines)?(d&&(d.style.pointerEvents="all"),s(h),p(f.lines),v.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(f.lines)),sessionStorage.setItem("currSongTitle",h),!0):!1},R=()=>{b||o.every((h,d)=>!h.trans.length||h.transError?(D?H(h.src,d):F(h.src,d),!1):!0)},F=(h,d)=>{fetch(`${S}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:i,title:a})}).then(f=>f.json()).then(f=>{let c=[];(f==null?void 0:f.trans.length)?(f.trans.map((L,C)=>{c[C]={src:o[C].src,trans:L}}),p(c),v.lsSaveSong({title:a,lines:c}),sessionStorage.setItem("currLines",JSON.stringify(c)),sessionStorage.setItem("currSongTitle",a)):(console.error("status is ok but azure translation missing"),y(!0))}).catch(f=>{console.log(f),y(!0)})},H=async(h,d)=>{try{let c=[...o],L=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(h)}`;const T=await(await fetch(L)).json();var f=[];if(T&&T[0])T[0].forEach(ne=>{f.push(ne[0])}),c[d]={src:h,trans:f.join(" ")},p(c);else throw new Error("Google Translation failed.")}catch(c){console.error("Google Translation error:",c),G(h,d)}},G=(h,d)=>{let f=[...o];fetch(`${S}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(h)})}).then(c=>c.json()).then(c=>{var L,C;(c==null?void 0:c.trans)?(f[d]={src:h,trans:c==null?void 0:c.trans},p(f),((L=o[o.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a))):(o[d].trans===void 0?f[d]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(f[d]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),p(f),((C=o[o.length-1])==null?void 0:C.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(f)),sessionStorage.setItem("currSongTitle",a)))}).catch(c=>{var C;o[d].trans===""?f[d]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(f[d]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),p(f),((C=o[o.length-1])==null?void 0:C.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a),y(!1)),console.log(c)})},W={getSongLyrics:B,getFullTrans:F,checkNextTrans:R,setLines:p,setTitle:s,setAbort:g};return t(Q.Provider,{value:E({title:a,lines:o,azureServerError:D},W),children:e.children})}function or(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(!1),[s,o]=l.exports.useState(""),[p,D]=l.exports.useState(!1),y=We(),b=l.exports.useContext(Q),g=l.exports.useContext(K);l.exports.useEffect(()=>{r.addRecordMode||o(b.title)},[b.title]),l.exports.useEffect(()=>{S()},[]);const S=()=>{v.getMobileOS()&&D(!0)};function B(){if(v.getMobileOS()){const h=document.querySelectorAll(".gsc-control-cse")[0];h.style.visibility="visible",h.style.marginTop="90px"}}l.exports.useEffect(()=>{v.loadGscScript(),z()},[]);function z(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))B(),R();else{let d=function(){R()};const f=document.querySelector("#gcse-my-wrapper"),c={childList:!0,attributes:!0,subtree:!1};new MutationObserver(d).observe(f,c)}}function R(){a(!0);const h=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],d={childList:!1,attributes:!0,subtree:!1};function f(){G()}new MutationObserver(f).observe(h,d)}function F(h){if(o(h.target.value),h.nativeEvent.data!==" ")H(h.target.value);else return}function H(h){g.error&&g.closeBanner("error");let d=document.querySelector("#gsc-i-id1"),f=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(d)if(h.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else if(f.test(h)){d.value=h;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.type="button",c.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{g.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))},250);return}else g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const G=()=>{setTimeout(()=>{let h=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");h&&h.forEach((d,f)=>{if(d.innerText.includes("Lyrics")){if(d.innerText.includes("(")){let C=d.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((C==null?void 0:C.includes("live"))||(C==null?void 0:C.includes("mix"))||(C==null?void 0:C.includes("remix"))){d.parentElement.parentElement.parentElement.remove();return}}let c=d.innerText.split("Lyrics")[0];if(c=c.replaceAll("\u2013","-"),!v.isMostlyEnglish(c)){d.parentElement.parentElement.parentElement.remove();return}d.innerHTML=`<strong>${c.split("-")[0]}</strong> - <span>${c.split("-")[1]}</span>`;const L={artistName:encodeURI(c.split("-")[0]),songName:encodeURI(c.split("-")[1])};d.nodeName!=="A"&&d.parentElement.parentElement.parentElement.addEventListener("click",()=>{W(d,c,L)}),d.style.display="block"}else d.innerText.includes("Lyrics")||d.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&d.parentElement.parentElement.parentElement.remove()})},50)},W=(h,d,f)=>{if(h.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(d),h.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc(),o(" ");return}b.title.replaceAll(" ","")==d.replaceAll(" ","")&&(h.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc()),b.title.replaceAll(" ","")!=d.replaceAll(" ","")&&b.getSongLyrics(f,d),o(d),location.hash!="#/"&&y("/")};return m("div",{className:e,children:[!p&&!r.addRecordMode&&t(Ee,{size:r.size,id:"outlined-search",label:u?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8":t(Ue,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:u?F:null,autoFocus:!1,autoComplete:"off",placeholder:"GOOGLE  \u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",value:s}),!p&&r.addRecordMode&&t(Ee,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:u?F:null,autoFocus:!1,autoComplete:"off",placeholder:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA GOOGLE",value:s,fullWidth:!0,variant:"filled"}),t("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:t("div",{className:"gcse-search"})})]})}const De=x(or)`

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

`;function sr(n){var i=n,{className:e}=i,r=A(i,["className"]);const u=le(),a=()=>{r.changeColors()};return t("div",{id:"",className:e,children:t(P,{onClick:()=>a(),children:u.palette.mode==="dark"?t(qe,{color:"primary"}):t(Ze,{})})})}const Oe=x(sr)`
  text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;
`,ar=n=>{var i=n,{className:e}=i,r=A(i,["className"]);var B,z,R,F,H,G,W,h,d;const[u,a]=l.exports.useState(!1),s=le(),o=l.exports.useContext(re),p=l.exports.useContext(Q),D=l.exports.useContext(K),y=l.exports.useContext(ce),b=l.exports.useContext(J),g=Xe();l.exports.useEffect(()=>{a(!1),window.scrollTo(0,0),D.closeBanner("error")},[g,p.title]),l.exports.useEffect(()=>{a(!1),D.closeBanner("error")},[o.open]);const S=()=>{D.closeBanner("error"),o.open?o.closeDrawer():o.openDrawer(!0,"left","temporary")};return m(Ae,{position:"sticky",className:e,sx:{backgroundColor:s.palette.primary.main,color:s.palette.secondary.dark},children:[y.main.open&&t(rr,{color:y.main.color}),t(Te,{maxWidth:!1,children:m(Le,{disableGutters:!0,children:[t(j,{children:t(P,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:S,children:o.open?t(Ie,{className:"burger-icon"}):t(_e,{variant:"dot",invisible:!b.badge,children:t(Ke,{className:"burger-icon"})})})}),(((B=p.lines)==null?void 0:B[0])||g.pathname!=="/")&&t($,{children:g.pathname!=="/wish-list"&&m($,{children:[t(P,{className:"mui-search-icon-wrapper",onClick:()=>a(!u),children:t(Qe,{className:"mui-search-icon"})}),t(j,{className:u&&"collapse-search-box",children:t(pe,{className:"search-ctr-collapse",orientation:"horizontal",in:u,collapsedSize:0,children:u&&t(De,{locat:"top",size:"small",setTopSearchBar:()=>{a()}})})})]})}),!u&&t(Z,{to:"/",onClick:()=>{},children:m(N,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[t("span",{id:"h2-part1",style:{color:s.palette.secondary.dark},children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),t("span",{id:"h2-part2",style:{color:s.palette.secondary.main},children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),g.pathname==="/"&&!u&&!((z=p.lines)==null?void 0:z[0])&&t(Oe,{changeColors:r.changeColors}),g.pathname==="/"&&!u&&((R=p.lines)==null?void 0:R[0])&&t(er,{})]})}),t(pe,{in:(F=D.error)==null?void 0:F.open,children:m(ie,{severity:"error",className:"error-alert",action:((H=D.error)==null?void 0:H.action)&&t(ee,{padding:"7px",href:(G=D.error)==null?void 0:G.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(W=D.error)==null?void 0:W.action.actionText}),onClose:()=>{D.closeBanner("error")},children:[t(ze,{children:(h=D.error)==null?void 0:h.title}),(d=D.error)==null?void 0:d.message]})})]})},Pe=x(ar)`
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
`;function ir(n){var i=n,{className:e}=i,r=A(i,["className"]);return t("div",{className:e,children:r.children})}const ur=x(ir)`
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
  
`;function lr({className:e}){return l.exports.useEffect(()=>{},[]),t("div",{id:"FOOTER",className:e,children:m(w,{container:!0,rowSpacing:6,columnSpacing:2,children:[m(w,{item:!0,xs:12,sm:4,children:[m(M,{children:[t(Ve,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),t(_,{component:ee,href:"mailto:meturgamusic@gmail.com",children:t(I,{primary:"MeturgaMusic@gmail.com"})}),t(_,{component:ee,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:t(I,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),t(M,{children:t(_,{component:ee,href:"https://basssites.com",className:"built-by",children:t(I,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),t(w,{item:!0,xs:12,sm:4})]})})}const cr=x(lr)`
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

`;function dr(n){var i=n,{className:e}=i,r=A(i,["className"]);const u=l.exports.useContext(J);le();const a=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",url:"/history",icon:t(Ye,{className:"side-icons"})},{name:"\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC ",url:"/exercise",icon:t(_e,{variant:"dot",invisible:!u.badge,color:"error",children:t(et,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD",url:"/wish-list",icon:t(tt,{className:"side-icons"}),chip:t(ae,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return m(M,{className:e,sx:{maxWidth:"320px"},children:[t(ie,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),a.map((s,o)=>t(Z,{to:s.url,className:"nav-link",children:m(_,{children:[m(O,{children:[t(te,{children:s.icon}),t(I,{primary:s.name}),s.chip&&s.chip]}),t(q,{})]})},o)),t(Z,{to:"/spotify-extension",className:"nav-link",children:m(_,{sx:{backgroundColor:"lightGray"},children:[m(O,{children:[t(te,{children:t(rt,{className:"side-icons",sx:{rotate:"-90deg"}})}),t(I,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),t(ae,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),t(q,{})]})}),m(_,{children:[t(O,{changeColors:r.changeColors,sx:{textAlign:"center",justifyContent:"center"},children:t(ae,{icon:t(Oe,{changeColors:r.changeColors}),className:"pages-list-chip extension-chip",label:"\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4",color:"secondary",variant:"outlined",size:"large"})}),t(q,{})]})]})}const pr=x(dr)`

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
`;function mr(n){var i=n,{className:e}=i,r=A(i,["className"]);const u=l.exports.useContext(re);return t($e,{className:e,anchor:u.anchor,open:u.open,variant:u.permanent,onClose:()=>{u.closeDrawer()},children:t(j,{className:"drawer-layout",role:"presentation",onClick:()=>{u.closeDrawer()},children:t(pr,{changeColors:r.changeColors})})})}const Dr=x(mr)` 

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
`,ue=240,Ce=e=>({width:ue,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),we=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${e.spacing(7)} + 1px)`,[e.breakpoints.up("sm")]:{width:`calc(${e.spacing(8)} + 1px)`}}),gr=x("div")(({theme:e})=>E({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)),hr=x(Ae,{shouldForwardProp:e=>e!=="open"})(({theme:e,open:r})=>E({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},r&&{marginLeft:ue,width:`calc(100% - ${ue}px)`,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})),fr=x($e,{shouldForwardProp:e=>e!=="open"})(({theme:e,open:r})=>E(E({width:ue,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&k(E({},Ce(e)),{"& .MuiDrawer-paper":Ce(e)})),!r&&k(E({},we(e)),{"& .MuiDrawer-paper":we(e)})));function Er(){const e=le(),[r,n]=l.exports.useState(!1),i=()=>{n(!0)},u=()=>{n(!1)};return m(j,{sx:{display:"flex"},children:[t(nt,{}),t(hr,{position:"fixed",open:r,children:m(Le,{children:[t(P,{color:"inherit","aria-label":"open drawer",onClick:i,edge:"start",sx:E({marginRight:5},r&&{display:"none"}),children:t(ot,{})}),t(Pe,{})]})}),m(fr,{variant:"permanent",open:r,children:[t(gr,{children:t(P,{onClick:u,children:e.direction==="rtl"?t(st,{}):t(at,{})})}),t(q,{}),t(M,{children:["Inbox","Starred","Send email","Drafts"].map((a,s)=>t(_,{disablePadding:!0,sx:{display:"block"},children:m(O,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[t(te,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:s%2===0?t(xe,{}):t(ye,{})}),t(I,{primary:a,sx:{opacity:r?1:0}})]})},a))}),t(q,{}),t(M,{children:["All mail","Trash","Spam"].map((a,s)=>t(_,{disablePadding:!0,sx:{display:"block"},children:m(O,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[t(te,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:s%2===0?t(xe,{}):t(ye,{})}),t(I,{primary:a,sx:{opacity:r?1:0}})]})},a))})]})]})}x(Er)`
  
`;function xr({className:e}){const[r,n]=l.exports.useState(!0),i=()=>{n(!1)};return m(it,{id:"main-modal-root",className:e,open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ut,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),t(lt,{children:t(ct,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(dt,{children:t(Y,{onClick:i,children:"Close"})})]})}x(xr)`
  
`;function yr(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(!0);return t(pt,{className:e,open:u,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(yr)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${e=>e.theme.palette.primary.main};
  }
`;function br({className:e}){const r=mt({target:window,disableHysteresis:!0,threshold:100});return t(Dt,{id:"",className:e,in:r,children:t(j,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:t(gt,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:t(ht,{htmlColor:"white"})})})})}const Sr=x(br)`
  width: 50px;
  height: 50px;
`;function Cr(e){const[r,n]=l.exports.useState(e.theme.palette.primary.main);return l.exports.useEffect(()=>{n(e.theme.palette.primary.main)},[e.theme]),m(ft,{children:[t("title",{children:e.currTitle}),t("meta",{name:"theme-color",content:r}),t("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})}function wr(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(!1),s=l.exports.useContext(J);l.exports.useEffect(()=>{o()&&a(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(y=>y.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,p=()=>{try{v.lsSaveWord(r.toSave),a(!0),s.updateBadge(1)}catch(D){D&&console.log(D)}};return t("span",{className:e,children:u?t($,{children:r.variant==="Bookmark"?t(be,{className:"book-mark-top-icon bm-disabled"}):t("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:t(be,{className:"book-mark-bottom-icon",fontSize:"small"})})}):t($,{children:r.variant==="Bookmark"?t($,{children:t(Et,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>p()})}):m("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>p(),children:[t(xt,{className:"book-mark-bottom-icon",fontSize:"small"}),t("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const vr=x(wr)`

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
`;function kr(n){var i=n,{className:e}=i,r=A(i,["className"]);const u=l.exports.useContext(J),a=l.exports.useContext(Q),s=()=>{if(r.results[0]){let o="";return r.results.map((p,D)=>{D+1===r.results.length?o+=p:o+=p+", "}),t("p",{className:"tt-p",children:o})}else return t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return t(yt,{onClickAway:r.tooltipClose,children:m("span",{className:e,children:[t(N,{className:"tt-top",color:"inherit",style:{fontSize:u.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&t("hr",{}),t("div",{className:"tt-body",style:{fontSize:u.fontSize.md-2},children:r.results[0]?t(s,{}):t(Ne,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&t(vr,{toSave:{word:r.lyric,results:r.results,title:a.title},variant:"Star"})]})})}const Nr=x(kr)`

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

`;function Ar(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(!1),[s,o]=l.exports.useState([]);l.exports.useEffect(()=>{},[]);const p=()=>{a(!0),s[0]||y()},D=()=>{a(!1)};function y(){const b="https://musicline-backend.vercel.app";let g=r.lyric.trim().toLowerCase();g=g.replaceAll(/[^a-zA-Z0-9']/g,""),g.slice(-1)==="'"&&(g=g.replaceAll("'","g")),fetch(`${b}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(g)})}).then(S=>S.json()).then(S=>{if(S==null?void 0:S.results[0]){o(S.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(S=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(S)})}return t($,{children:t(bt,{className:e,title:t(Nr,{tooltipClose:D,className:"tt-childs",lyric:r.lyric,results:s}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:D,open:u,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:m("span",{children:["\xA0 ",m("p",{className:"single-lyric",onClick:p,children:[" ",r.lyric," "]})]})})})}const ve=x(Ar)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function Tr(n){var i=n,{className:e}=i,r=A(i,["className"]);let[u,a]=Be();const s=l.exports.useContext(Q),o=l.exports.useContext(J);l.exports.useEffect(()=>{a(v.titleToParams(s.title))},[s.title]);const p=()=>{s.setAbort(!0),sessionStorage.removeItem("currLines"),s.setLines([]),s.setTitle(""),a("")};return t(St,{elevation:3,className:e,children:m(w,{container:!0,rowSpacing:1,columnSpacing:0,children:[m(w,{item:!0,xs:12,className:"l-body-top",children:[t(P,{onClick:()=>p(),children:t(Ie,{className:"remove-icon"})}),t(ae,{className:"trans-by-chip",label:s.azureServerError?"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA  google-translate":"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA  microsoft-translator ",color:"default",variant:"filled",size:"small"}),t(N,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:s.title&&s.title.split(" ").map((D,y)=>t(ve,{lyric:D,open:!1},se()))})]}),s.lines.map((D,y)=>{var b;return D.src.includes("[")&&(D.trans="   "),m(w,{item:!0,xs:12,children:[y>0&&D.src.includes("[")&&m($,{children:[t("br",{}),t("br",{})]}),t(j,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:D.src.split(" ").map((g,S)=>(g.slice(-1)==="'"&&(g=g.replaceAll("'","g")),t(ve,{lyric:g,open:y==1&S==1},se())))}),t(j,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:t($,{children:((b=D.trans)==null?void 0:b.length)?D.trans.split(" ").map((g,S)=>{if(D.trans!=="   ")return m("small",{className:"single-trans",children:[g," \xA0"]},se())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},se())})]})})}const Lr=x(Tr)`
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
`;function _r({className:e}){var p,D,y,b;const r=l.exports.useContext(Q),n=l.exports.useContext(K),i=l.exports.useContext(re),[u,a]=Be(),s=u.get("song");l.exports.useEffect(()=>{i.closeDrawer(),n.error&&n.closeBanner("error"),v.directParamsToHash(),s&&s.includes("_")&&o()},[]);function o(){let g=s;g=g.replaceAll("-"," ");const S={artistName:encodeURI(` ${g.split("_")[0]} `),songName:encodeURI(` ${g.split("_")[1]} `)};g=g.replaceAll("_"," - "),r.getSongLyrics(S,g)}return m("div",{className:e,children:[!((p=r.lines)==null?void 0:p[0])&&t(Te,{className:"home-top",maxWidth:!1,children:m(w,{container:!0,className:"home-t-container",children:[!((D=r.lines)==null?void 0:D[0])&&t(w,{item:!0,xs:12,sm:6,children:m(N,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",t("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),m(w,{item:!0,xs:12,sm:6,children:[!((y=r.lines)==null?void 0:y[0])&&m(N,{variant:"h3",className:"page-h3",children:[t("span",{className:"h3-start h3-start-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA"}),t("span",{className:"h3-start h3-start-two",children:"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05EA\u05E8\u05D2\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8"}),t("span",{className:"h3-middle",children:"\u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),t("span",{className:"h3-bottom",children:"\u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8"})]}),t(De,{locat:"main",size:"large"}),t(N,{children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"})]})]})}),((b=r.lines)==null?void 0:b[0])&&m(w,{container:!0,spacing:1,children:[t(w,{item:!0,md:12,lg:9,children:t(Lr,{className:"lyrics-body"})}),t(w,{item:!0,xs:12,lg:3})]})]})}const Ir=x(_r)`
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
    
`;function zr(n){var i=n,{className:e}=i,r=A(i,["className"]);const u=()=>{r.deleteOneSong(r.song_id)};return t(_,{className:e,secondaryAction:t(P,{onClick:()=>{u()},edge:"end","aria-label":"delete",children:t(me,{})}),children:t(I,{primary:t(Z,{to:"/"+v.titleToParams(r.title),children:t(O,{children:t(N,{children:r.title})})})})})}const $r=x(zr)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${e=>e.theme.palette.secondary.dark};
  }
`;function Br({className:e}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),i=a=>{let s=r.filter(o=>o.id!==a);n(s),localStorage.setItem("meturgamm_songs",JSON.stringify(s))},u=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return m("div",{className:e,children:[r[0]&&m(j,{children:[t(Y,{className:"d-all-btn",component:"label",onClick:()=>{u()},variant:"outlined",startIcon:t(Ct,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),t(M,{sx:{width:"100%"},component:"div",children:t(w,{container:!0,spacing:1,children:r.map((a,s)=>t(w,{item:!0,xs:12,md:6,children:t($r,{title:a.title,song_id:a.id,deleteOneSong:i})},a.title+s))})})]}),!r[0]&&t(N,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const Or=x(Br)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${e=>e.theme.palette.primary.dark};
   }
`;function Pr({className:e}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function i(a){const s={title:a,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(s),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const u=a=>{let s=r.filter(o=>o.id!==a);n(s),localStorage.setItem("meturgamm_wish",JSON.stringify(s))};return m(M,{className:e,subheader:t(De,{addRecordMode:!0,locat:"main",addRecord:i}),children:[t(w,{container:!0,spacing:1,children:r.map((a,s)=>t(w,{item:!0,xs:12,md:6,children:t(_,{secondaryAction:t(P,{onClick:()=>{u(a.id)},edge:"end","aria-label":"deletcoe",children:t(me,{})}),children:t(I,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:t(Z,{to:"/"+v.titleToParams(a.title),children:m(O,{children:[t(wt,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),t(N,{children:a.title})]})})})},s)},a.title+s))}),!r[0]&&t(N,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Mr=x(Pr)`
  min-height: 70vh;
  padding-top: 3px;

  p{
    color:  ${e=>e.theme.palette.secondary.dark};
  }

  svg{
    color:  ${e=>e.theme.palette.primary.contrastText};
  }
`;function Rr(n){var i=n,{className:e}=i,r=A(i,["className"]);const[u,a]=l.exports.useState(r.lyric),[s,o]=l.exports.useState(!1),p=()=>{o(!s)},D=()=>{r.deleteOneWord(r.lyric.id)},y=()=>{if(u.results[0]){let b="";return u.results.map((g,S)=>{S+1===u.results.length?b+=g:b+=g+", "}),t("span",{className:"inline-results-p",children:b})}else return null};return m("span",{className:e,children:[t(_,{secondaryAction:t(P,{onClick:()=>{D()},edge:"end","aria-label":"delete",children:t(me,{})}),children:m(O,{onClick:p,children:[t(te,{children:t(vt,{})}),t(I,{primary:u.word}),s?t(kt,{}):t(Nt,{})]})}),t(pe,{in:s,timeout:"auto",unmountOnExit:!0,children:t(M,{component:"div",disablePadding:!0,children:t(_,{sx:{pl:4},children:t(I,{primary:t($,{children:t(N,{sx:{display:"inline"},component:"span",children:t(y,{})})}),secondary:t(O,{component:"span",sx:{mt:"10px"},children:t(Z,{to:"/"+v.titleToParams(u.title),children:t(ee,{component:"button",children:t("i",{children:u.title})})})})})})})}),t(q,{})]})}const Fr=x(Rr)`
  *{
    background-color: #e8e8e818;
  } 
`;function jr({className:e}){const r=l.exports.useContext(J),[n,i]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);l.exports.useEffect(()=>{r.updateBadge(!1)},[]);const u=a=>{let s=n.filter(o=>o.id!==a);i(s),localStorage.setItem("meturgamm_words",JSON.stringify(s))};return m("div",{className:e,children:[n[0]&&t(M,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:t(w,{container:!0,spacing:1,children:n.map((a,s)=>t(w,{item:!0,md:3,lg:3,xs:12,children:t(Fr,{lyric:a,deleteOneWord:u})},a.word+s))})}),!n[0]&&t(N,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Jr=x(jr)`
   min-height: 80vh;
`;var Hr="/assets/extensionImage.9b86a50e.png";function Gr({className:e}){return t("div",{className:e,style:{backgroundImage:`url(${Hr.toString()})`},children:t(w,{container:!0,spacing:4,children:t(w,{item:!0,xs:12,sm:!0,container:!0,children:t(w,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:m(w,{item:!0,xs:!0,children:[t(N,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),t(N,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),t(N,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const Wr=x(Gr)`
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

`;function Ur({className:e}){return m("div",{className:e,children:[t(N,{variant:"h2",className:"page-h2",children:"404"}),t(N,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const qr=x(Ur)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Zr({className:e}){var S,B;const r=l.exports.useContext(re);l.exports.useContext(ce);const n=l.exports.useContext(K);Se("(max-width: 600px)");const[i,u]=l.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[a,s]=l.exports.useState(de),o=Se("(prefers-color-scheme: dark)"),p=At({key:"muirtl",stylisPlugins:[$t,Bt]});l.exports.useEffect(()=>{D()},[]),l.exports.useEffect(()=>{localStorage.getItem("preferedDark")?localStorage.getItem("preferedDark")==="true"&&s(V):s(o?V:de)},[o]);const D=()=>{v.directParamsToHash(),y(),b()},y=()=>{fetch("https://musicline-backend-dev.vercel.app/")},b=()=>{v.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")},g=()=>{let z=a===V?de:V;s(z),localStorage.setItem("preferedDark",z===V?"true":"false")};return t("div",{className:e,children:t(Tt,{theme:a,children:t(Lt,{value:p,children:m(_t,{children:[t(Cr,{currTitle:i,theme:a}),m(ur,{children:[t(Pe,{className:"header",changeColors:g}),((S=n.main)==null?void 0:S.open)&&m(ie,{severity:"warning",className:"main-alert",children:[t(ze,{children:n.main.title}),n.main.message]}),m(It,{children:[t(U,{path:"/",element:t(Ir,{className:"page",rank:1})}),t(U,{path:"/Exercise",element:t(Jr,{className:"page",rank:1})}),t(U,{path:"/History",element:t(Or,{className:"page",rank:1})}),t(U,{path:"/Wish-list",element:t(Mr,{className:"page",rank:1})}),t(U,{path:"/Spotify-extension",element:t(Wr,{className:"page",rank:1})}),t(U,{path:"*",element:t(qr,{className:"page"})})]}),r.open&&t(Dr,{className:"drawer",changeColors:g}),((B=n.infoSnackbar)==null?void 0:B.open)&&t(zt,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(ie,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),t(cr,{}),t(Sr,{})]})]})})})})}const Xr=x(Zr)`
  height: fit-content;
  min-height: 700px;
`,Kr=[Mt,Ft,Rt,nr,Vt];function Qr(e){return t($,{children:Kr.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Ot.render(t(X.StrictMode,{children:t(Qr,{children:t(Xr,{className:"app"})})}),document.getElementById("root"));
