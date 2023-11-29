var Pe=Object.defineProperty,Me=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var De=(t,r,n)=>r in t?Pe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,E=(t,r)=>{for(var n in r||(r={}))ge.call(r,n)&&De(t,n,r[n]);if(ne)for(var n of ne(r))he.call(r,n)&&De(t,n,r[n]);return t},k=(t,r)=>Me(t,Re(r));var A=(t,r)=>{var n={};for(var s in t)ge.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&ne)for(var s of ne(t))r.indexOf(s)<0&&he.call(t,s)&&(n[s]=t[s]);return n};import{c as ve,R as Q,r as l,j as e,a as m,B as Fe,b as K,d as je,e as Je,s as x,L as ke,u as He,T as fe,C as Ge,f as We,g as Ne,h as Ue,i as qe,k as le,l as B,A as se,N as q,m as _,n as R,o as Y,p as I,D as ee,q as Qe,t as de,I as O,v as Ze,w as Xe,x as Ke,M as Ae,y as Te,z as Le,E as F,F as Ve,G as _e,H as z,S as Ye,J as ce,K as N,O as V,P as Ie,Q as C,U as et,V as ze,W as tt,X as rt,Y as nt,Z as ot,_ as Ee,$ as xe,a0 as st,a1 as at,a2 as it,a3 as ut,a4 as lt,a5 as ct,a6 as dt,a7 as pt,a8 as mt,a9 as Dt,aa as gt,ab as ye,ac as ht,ad as ft,ae as Et,af as xt,ag as $e,ah as yt,ai as oe,aj as pe,ak as bt,al as St,am as wt,an as Ct,ao as vt,ap as be,aq as kt,ar as Nt,as as At,at as Tt,au as Lt,av as U,aw as _t,ax as It,ay as zt,az as $t}from"./vendor.c4327277.js";const Bt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Bt();const Ot=ve({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#de6d7e",contrastText:"#555555"},secondary:{main:"#fcfcfc",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),ue=ve({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#121212",light:"#fff",dark:"#fff",contrastText:"#ebebeb"},secondary:{main:"#ffffff",dark:"#fff",light:"#121212",contrastText:"#fff"}}}),te=Q.createContext(void 0);function Pt(t){const[r,n]=l.exports.useState({}),a={openDrawer:(u,o,p="temporary",D)=>{n({open:u,anchor:o,permanent:p,child:D})},closeDrawer:()=>{n({})}};return e(te.Provider,{value:E(E({},r),a),children:t.children})}const ie=Q.createContext(void 0);function Mt(t){const[r,n]=l.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),u={createLoader:(o,p)=>{r[o]&&n(k(E({},r),{[o]:void 0})),n(k(E({},r),{[o]:{open:!1,color:p||"inherit"}}))},openLoader:o=>{r[o]?n(k(E({},r),{[o]:k(E({},r[o]),{open:!0})})):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n(k(E({},r),{[o]:k(E({},r[o]),{open:!1})})):console.error("Loader "+o+" does'nt exist")}};return e(ie.Provider,{value:E(E({},r),u),children:t.children})}const Z=Q.createContext(void 0);function Rt(t){var o;const[r,n]=l.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))==null?void 0:o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),u={createBanner:(p,D,y,b,h)=>{r[p]&&n(k(E({},r),{[p]:void 0})),n(k(E({},r),{[p]:{open:!0,severity:D||"success",title:y||"",message:b||"",action:h||{}}}))},openBanner:p=>{r[p]?n(k(E({},r),{[p]:k(E({},r[p]),{open:!0})})):console.error("Banner "+p+" does'nt exist")},closeBanner:p=>{r[p]?n(k(E({},r),{[p]:k(E({},r[p]),{open:!1})})):console.error("Banner "+p+" does'nt exist")}};return e(Z.Provider,{value:E(E({},r),u),children:t.children})}const Ft=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},jt=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Jt=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Ht=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,Gt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},Wt=()=>{const t=navigator.userAgent;if(/android/i.test(t))return!1;if(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0},Ut=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function qt(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const Qt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Zt=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")},Xt=()=>{const t=new URLSearchParams(location.search);t.get("page")?location.href=location.origin+"/#/"+t.get("page"):t.get("song")&&t.get("song").includes("_")&&(location.href=location.origin+"/#/?song="+noHashSname)};var v={directParamsToHash:Xt,loadGscScript:Ft,lsSaveSong:Jt,lsFindSong:Ht,lsSaveWord:jt,clearGsc:Gt,getMobileOS:Wt,keyboardHEENSwitcher:Ut,isMostlyEnglish:qt,loadGoogleAds:Qt,titleToParams:Zt};const j=Q.createContext(void 0);function Kt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,s]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27}}),[i,a]=l.exports.useState(!1);function u(b){a(b)}const o=()=>{n.fontSize.md<60&&(s(k(E({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),D())},p=()=>{n.fontSize.sm>7&&(s(k(E({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),D())};function D(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}const y={reduceFontSize:p,increaseFontSize:o,updateBadge:u};return e(j.Provider,{value:k(E(E({},n),y),{badge:i}),children:t.children})}function Vt({className:t}){const r=l.exports.useContext(j);return e("div",{id:"",className:t,children:m(Fe,{className:"button-group",children:[e(K,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(je,{fontSize:"small"})}),e(K,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(K,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Je,{fontSize:"small"})})]})})}const Yt=x(Vt)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${t=>t.theme.palette.secondary.light};
    color: ${t=>t.theme.palette.primary.contrastText};
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

`;function er(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(0);return l.exports.useEffect(()=>{const u=setInterval(()=>{a(o=>{if(o===100)return 0;const p=Math.random()*10;return Math.min(o+p,100)})},220);return()=>{clearInterval(u)}},[]),e(ke,{variant:"determinate",value:i,color:r.color})}const tr=x(er)`
  
`,X=Q.createContext(void 0);function rr(t){const r=l.exports.useContext(ie),n=l.exports.useContext(Z),[s,i]=l.exports.useState(""),[a,u]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,p]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[D,y]=l.exports.useState(!1),[b,h]=l.exports.useState(!1);l.exports.useEffect(()=>{o[0]&&P()},[o,D]);const S="https://musicline-backend.vercel.app",$=(g,d)=>{h(!0),d=d.replace(/[\])}[{(]/g,"").trim();let f=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!J(d,f)&&fetch(`${S}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:g})}).then(c=>c.json()).then(c=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),f&&(f.style.pointerEvents="all"),(c==null?void 0:c.combined)&&Array.isArray(c==null?void 0:c.combined))u(d),i(c.id),p(c.combined),v.lsSaveSong({title:d,lines:c.combined}),v.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(c.combined)),sessionStorage.setItem("currSongTitle",d);else if(c==null?void 0:c.lyrics){u(d);let L=c.lyrics,w=[];L.split(/(?:\r\n|\r|\n)/g).map(T=>{if(T.length>=2)if(v.isMostlyEnglish(T))if(T.length>90){let re=T.split(",");re[0].length>10?re.map(Oe=>{w.push({src:Oe,trans:"",transError:!1})}):w.push({src:T.replace(".",""),trans:"",transError:!1})}else w.push({src:T.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+T),w.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),h(!1),p(w),v.clearGsc()}else h(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+d.replaceAll(" ","+")+" lyrics"})}).catch(c=>{h(!1),console.log(c),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),f&&(f.style.pointerEvents="all")})},J=(g,d)=>{let f=v.lsFindSong(g);return f&&Array.isArray(f.lines)?(d&&(d.style.pointerEvents="all"),u(g),p(f.lines),v.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(f.lines)),sessionStorage.setItem("currSongTitle",g),!0):!1},P=()=>{b||o.every((g,d)=>!g.trans.length||g.transError?(D?H(g.src,d):M(g.src,d),!1):!0)},M=(g,d)=>{fetch(`${S}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:s,title:a})}).then(f=>f.json()).then(f=>{let c=[];(f==null?void 0:f.trans.length)?(f.trans.map((L,w)=>{c[w]={src:o[w].src,trans:L}}),p(c),v.lsSaveSong({title:a,lines:c}),sessionStorage.setItem("currLines",JSON.stringify(c)),sessionStorage.setItem("currSongTitle",a)):(console.error("status is ok but azure translation missing"),y(!0))}).catch(f=>{console.log(f),y(!0)})},H=async(g,d)=>{try{let c=[...o],L=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(g)}`;const T=await(await fetch(L)).json();var f=[];if(T&&T[0])T[0].forEach(re=>{f.push(re[0])}),c[d]={src:g,trans:f.join(" ")},p(c);else throw new Error("Google Translation failed.")}catch(c){console.error("Google Translation error:",c),G(g,d)}},G=(g,d)=>{let f=[...o];fetch(`${S}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(g)})}).then(c=>c.json()).then(c=>{var L,w;(c==null?void 0:c.trans)?(f[d]={src:g,trans:c==null?void 0:c.trans},p(f),((L=o[o.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a))):(o[d].trans===void 0?f[d]={src:g,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(f[d]={src:g,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),p(f),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(f)),sessionStorage.setItem("currSongTitle",a)))}).catch(c=>{var w;o[d].trans===""?f[d]={src:g,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[d].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(f[d]={src:g,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),p(f),((w=o[o.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",a),y(!1)),console.log(c)})},W={getSongLyrics:$,getFullTrans:M,checkNextTrans:P,setLines:p,setTitle:u,setAbort:h};return e(X.Provider,{value:E({title:a,lines:o,azureServerError:D},W),children:t.children})}function nr(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(!1),[u,o]=l.exports.useState(""),[p,D]=l.exports.useState(!1),y=He(),b=l.exports.useContext(X),h=l.exports.useContext(Z);l.exports.useEffect(()=>{r.addRecordMode||o(b.title)},[b.title]),l.exports.useEffect(()=>{S()},[]);const S=()=>{v.getMobileOS()&&D(!0)};function $(){if(v.getMobileOS()){const g=document.querySelectorAll(".gsc-control-cse")[0];g.style.visibility="visible",g.style.marginTop="90px"}}l.exports.useEffect(()=>{v.loadGscScript(),J()},[]);function J(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))$(),P();else{let d=function(){P()};const f=document.querySelector("#gcse-my-wrapper"),c={childList:!0,attributes:!0,subtree:!1};new MutationObserver(d).observe(f,c)}}function P(){a(!0);const g=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],d={childList:!1,attributes:!0,subtree:!1};function f(){G()}new MutationObserver(f).observe(g,d)}function M(g){if(o(g.target.value),g.nativeEvent.data!==" ")H(g.target.value);else return}function H(g){h.error&&h.closeBanner("error");let d=document.querySelector("#gsc-i-id1"),f=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(d)if(g.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else if(f.test(g)){d.value=g;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.type="button",c.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(h.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{h.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))},250);return}else h.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const G=()=>{setTimeout(()=>{let g=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");g&&g.forEach((d,f)=>{if(d.innerText.includes("Lyrics")){if(d.innerText.includes("(")){let w=d.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((w==null?void 0:w.includes("live"))||(w==null?void 0:w.includes("mix"))||(w==null?void 0:w.includes("remix"))){d.parentElement.parentElement.parentElement.remove();return}}let c=d.innerText.split("Lyrics")[0];if(c=c.replaceAll("\u2013","-"),!v.isMostlyEnglish(c)){d.parentElement.parentElement.parentElement.remove();return}d.innerHTML=`<strong>${c.split("-")[0]}</strong> - <span>${c.split("-")[1]}</span>`;const L={artistName:encodeURI(c.split("-")[0]),songName:encodeURI(c.split("-")[1])};d.nodeName!=="A"&&d.parentElement.parentElement.parentElement.addEventListener("click",()=>{W(d,c,L)}),d.style.display="block"}else d.innerText.includes("Lyrics")||d.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&d.parentElement.parentElement.parentElement.remove()})},50)},W=(g,d,f)=>{if(g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(d),g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc(),o(" ");return}b.title.replaceAll(" ","")==d.replaceAll(" ","")&&(g.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc()),b.title.replaceAll(" ","")!=d.replaceAll(" ","")&&b.getSongLyrics(f,d),o(d),location.hash!="#/"&&y("/")};return m("div",{className:t,children:[!p&&!r.addRecordMode&&e(fe,{size:r.size,id:"outlined-search",label:i?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8":e(Ge,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:i?M:null,autoFocus:!1,autoComplete:"off",placeholder:"GOOGLE  \u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",value:u}),!p&&r.addRecordMode&&e(fe,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:i?M:null,autoFocus:!1,autoComplete:"off",placeholder:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA GOOGLE",value:u,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const me=x(nr)`

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
        color: ${t=>t.theme.palette.primary.dark+"!important"};
        border-color: ${t=>t.theme.palette.secondary.contrastText+"!important"};
      }
    }

  .top-input{
      min-width: 100%;

      input, fieldset, label{
        color: ${t=>t.theme.palette.primary.light+"!important"};
        border-color: ${t=>t.theme.palette.primary.light+"!important"};
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
    background-color: ${t=>t.theme.palette.secondary.light+"!important"};
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
    background-color: ${t=>t.theme.palette.secondary.light+"!important"};
    padding: 2px;
    cursor: pointer;
  }

  .gsc-result * {
    font-family: 'Assistant', 'Roboto', 'sans-serif' !important;
    font-weight: 500;
    /* background-color: ${t=>t.theme.palette.secondary.light+"!important"}; */
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

`;function or({className:t}){const r=l.exports.useContext(j),n=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",url:"/history",icon:e(We,{className:"side-icons"})},{name:"\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC ",url:"/exercise",icon:e(Ne,{variant:"dot",invisible:!r.badge,color:"error",children:e(Ue,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD",url:"/wish-list",icon:e(qe,{className:"side-icons"}),chip:e(le,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return m(B,{className:t,sx:{maxWidth:"320px"},children:[e(se,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),n.map((s,i)=>e(q,{to:s.url,className:"nav-link",children:m(_,{children:[m(R,{children:[e(Y,{children:s.icon}),e(I,{primary:s.name}),s.chip&&s.chip]}),e(ee,{})]})},i)),e(q,{to:"/spotify-extension",className:"nav-link",children:m(_,{sx:{backgroundColor:"lightGray"},children:[m(R,{children:[e(Y,{children:e(Qe,{className:"side-icons",sx:{rotate:"-90deg"}})}),e(I,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),e(le,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),e(ee,{})]})})]})}const sr=x(or)`

  .MuiTypography-root {
    color: ${t=>t.theme.palette.secondary.dark};

  }

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
`;function ar(n){var s=n,{className:t}=s,r=A(s,["className"]);const i=de(),a=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(O,{onClick:()=>a(),children:i.palette.mode==="dark"?e(Ze,{color:"primary"}):e(Xe,{})})})}const ir=x(ar)`
  text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;
`,ur=n=>{var s=n,{className:t}=s,r=A(s,["className"]);var $,J,P,M,H,G,W,g;const[i,a]=l.exports.useState(!1),u=de(),o=l.exports.useContext(te),p=l.exports.useContext(X),D=l.exports.useContext(Z),y=l.exports.useContext(ie),b=l.exports.useContext(j),h=Ke();l.exports.useEffect(()=>{a(!1),window.scrollTo(0,0),D.closeBanner("error")},[h,p.title]),l.exports.useEffect(()=>{a(!1),D.closeBanner("error")},[o.open]);const S=()=>{D.closeBanner("error"),o.open?o.closeDrawer():o.openDrawer(!0,"left","temporary",sr)};return m(Ae,{position:"sticky",className:t,sx:{backgroundColor:u.palette.primary.main,color:u.palette.secondary.dark},children:[y.main.open&&e(tr,{color:y.main.color}),e(Te,{maxWidth:!1,children:m(Le,{disableGutters:!0,children:[e(F,{children:e(O,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:S,children:o.open?e(_e,{className:"burger-icon"}):e(Ne,{variant:"dot",invisible:!b.badge,children:e(Ve,{className:"burger-icon"})})})}),((($=p.lines)==null?void 0:$[0])||h.pathname!=="/")&&e(z,{children:h.pathname!=="/wish-list"&&m(z,{children:[e(O,{className:"mui-search-icon-wrapper",onClick:()=>a(!i),children:e(Ye,{className:"mui-search-icon"})}),e(F,{className:i&&"collapse-search-box",children:e(ce,{className:"search-ctr-collapse",orientation:"horizontal",in:i,collapsedSize:0,children:i&&e(me,{locat:"top",size:"small",setTopSearchBar:()=>{a()}})})})]})}),!i&&e(q,{to:"/",onClick:()=>{},children:m(N,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",style:{color:u.palette.secondary.dark},children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",style:{color:u.palette.secondary.main},children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),e(ir,{changeColors:r.changeColors}),h.pathname==="/"&&!i&&((J=p.lines)==null?void 0:J[0])&&e(z,{children:e(Yt,{})})]})}),e(ce,{in:(P=D.error)==null?void 0:P.open,children:m(se,{severity:"error",className:"error-alert",action:((M=D.error)==null?void 0:M.action)&&e(V,{padding:"7px",href:(H=D.error)==null?void 0:H.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(G=D.error)==null?void 0:G.action.actionText}),onClose:()=>{D.closeBanner("error")},children:[e(Ie,{children:(W=D.error)==null?void 0:W.title}),(g=D.error)==null?void 0:g.message]})})]})},Be=x(ur)`
      z-index: 2000;

      a{
        /* color: ${t=>t.theme.palette.primary.main};
        &hover{
          color: #8e8b8b;
        } */

        #h2-part1, #h2-part2{
          font-weight: 600;
        }
/* 
        #h2-part1{
          color:  ${t=>t.theme.palette.secondary.dark};
        }

        #h2-part2{
          color:  ${t=>t.theme.palette.secondary.light};
        } */
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
`;function lr(n){var s=n,{className:t}=s,r=A(s,["className"]);return e("div",{className:t,children:r.children})}const cr=x(lr)`
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
  
`;function dr({className:t}){return l.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:m(C,{container:!0,rowSpacing:6,columnSpacing:2,children:[m(C,{item:!0,xs:12,sm:4,children:[m(B,{children:[e(et,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(_,{component:V,href:"mailto:meturgamusic@gmail.com",children:e(I,{primary:"MeturgaMusic@gmail.com"})}),e(_,{component:V,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(I,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(B,{children:e(_,{component:V,href:"https://basssites.com",className:"built-by",children:e(I,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]}),e(C,{item:!0,xs:12,sm:4})]})})}const pr=x(dr)`
  /* color: ${t=>t.theme.palette.primary.contrastText}; */
  background-color: ${t=>t.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: ${t=>t.theme.palette.secondary.dark};
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
    color: ${t=>t.theme.palette.secondary.main};
    margin: unset;
  }

  .built-by{
    color: ${t=>t.theme.palette.secondary.main};
  }

`;function mr(n){var s=n,{className:t}=s,r=A(s,["className"]);const i=l.exports.useContext(te);return e(ze,{className:t,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer()},children:e(F,{className:"drawer-layout",role:"presentation",onClick:()=>{i.closeDrawer()},children:e(i.child,{})})})}const Dr=x(mr)` 

.MuiDrawer-paper{
  background-color:  ${t=>t.theme.palette.secondary.light+"!important"};
}

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    background-color:  ${t=>t.theme.palette.secondary.light};
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`,ae=240,Se=t=>({width:ae,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),we=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),gr=x("div")(({theme:t})=>E({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)),hr=x(Ae,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>E({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},r&&{marginLeft:ae,width:`calc(100% - ${ae}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})),fr=x(ze,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>E(E({width:ae,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&k(E({},Se(t)),{"& .MuiDrawer-paper":Se(t)})),!r&&k(E({},we(t)),{"& .MuiDrawer-paper":we(t)})));function Er(){const t=de(),[r,n]=l.exports.useState(!1),s=()=>{n(!0)},i=()=>{n(!1)};return m(F,{sx:{display:"flex"},children:[e(tt,{}),e(hr,{position:"fixed",open:r,children:m(Le,{children:[e(O,{color:"inherit","aria-label":"open drawer",onClick:s,edge:"start",sx:E({marginRight:5},r&&{display:"none"}),children:e(rt,{})}),e(Be,{})]})}),m(fr,{variant:"permanent",open:r,children:[e(gr,{children:e(O,{onClick:i,children:t.direction==="rtl"?e(nt,{}):e(ot,{})})}),e(ee,{}),e(B,{children:["Inbox","Starred","Send email","Drafts"].map((a,u)=>e(_,{disablePadding:!0,sx:{display:"block"},children:m(R,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(Y,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:u%2===0?e(Ee,{}):e(xe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))}),e(ee,{}),e(B,{children:["All mail","Trash","Spam"].map((a,u)=>e(_,{disablePadding:!0,sx:{display:"block"},children:m(R,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(Y,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:u%2===0?e(Ee,{}):e(xe,{})}),e(I,{primary:a,sx:{opacity:r?1:0}})]})},a))})]})]})}x(Er)`
  
`;function xr({className:t}){const[r,n]=l.exports.useState(!0),s=()=>{n(!1)};return m(st,{id:"main-modal-root",className:t,open:r,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(at,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(it,{children:e(ut,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(lt,{children:e(K,{onClick:s,children:"Close"})})]})}x(xr)`
  
`;function yr(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(!0);return e(ct,{className:t,open:i,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(yr)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${t=>t.theme.palette.primary.main};
  }
`;function br({className:t}){const r=dt({target:window,disableHysteresis:!0,threshold:100});return e(pt,{id:"",className:t,in:r,children:e(F,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(mt,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(Dt,{htmlColor:"white"})})})})}const Sr=x(br)`
  width: 50px;
  height: 50px;
`;function wr(t){const[r]=l.exports.useState(t.theme.palette.primary.main);return e("div",{className:"wrapper",children:m(gt,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}function Cr(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(!1),u=l.exports.useContext(j);l.exports.useEffect(()=>{o()&&a(!0)},[]);const o=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(y=>y.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,p=()=>{try{v.lsSaveWord(r.toSave),a(!0),u.updateBadge(1)}catch(D){D&&console.log(D)}};return e("span",{className:t,children:i?e(z,{children:r.variant==="Bookmark"?e(ye,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(ye,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(z,{children:r.variant==="Bookmark"?e(z,{children:e(ht,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>p()})}):m("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>p(),children:[e(ft,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const vr=x(Cr)`

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
`;function kr(n){var s=n,{className:t}=s,r=A(s,["className"]);const i=l.exports.useContext(j),a=l.exports.useContext(X),u=()=>{if(r.results[0]){let o="";return r.results.map((p,D)=>{D+1===r.results.length?o+=p:o+=p+", "}),e("p",{className:"tt-p",children:o})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(Et,{onClickAway:r.tooltipClose,children:m("span",{className:t,children:[e(N,{className:"tt-top",color:"inherit",style:{fontSize:i.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:i.fontSize.md-2},children:r.results[0]?e(u,{}):e(ke,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(vr,{toSave:{word:r.lyric,results:r.results,title:a.title},variant:"Star"})]})})}const Nr=x(kr)`

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

`;function Ar(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(!1),[u,o]=l.exports.useState([]);l.exports.useEffect(()=>{},[]);const p=()=>{a(!0),u[0]||y()},D=()=>{a(!1)};function y(){const b="https://musicline-backend.vercel.app";let h=r.lyric.trim().toLowerCase();h=h.replaceAll(/[^a-zA-Z0-9']/g,""),h.slice(-1)==="'"&&(h=h.replaceAll("'","g")),fetch(`${b}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(h)})}).then(S=>S.json()).then(S=>{if(S==null?void 0:S.results[0]){o(S.results);return}else{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(S=>{o(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(S)})}return e(z,{children:e(xt,{className:t,title:e(Nr,{tooltipClose:D,className:"tt-childs",lyric:r.lyric,results:u}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:D,open:i,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:m("span",{children:["\xA0 ",m("p",{className:"single-lyric",onClick:p,children:[" ",r.lyric," "]})]})})})}const Ce=x(Ar)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function Tr(n){var s=n,{className:t}=s,r=A(s,["className"]);let[i,a]=$e();const u=l.exports.useContext(X),o=l.exports.useContext(j);l.exports.useEffect(()=>{a(v.titleToParams(u.title))},[u.title]);const p=()=>{u.setAbort(!0),sessionStorage.removeItem("currLines"),u.setLines([]),u.setTitle(""),a("")};return e(yt,{elevation:3,className:t,children:m(C,{container:!0,rowSpacing:1,columnSpacing:0,children:[m(C,{item:!0,xs:12,className:"l-body-top",children:[e(O,{onClick:()=>p(),children:e(_e,{className:"remove-icon"})}),e(le,{className:"trans-by-chip",label:u.azureServerError?"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA  microsoft-translator ":"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA  google-translate",color:"default",variant:"filled",size:"small"}),e(N,{variant:"h6",component:"h3",style:{fontSize:o.fontSize.lg,direction:"ltr"},children:u.title&&u.title.split(" ").map((D,y)=>e(Ce,{lyric:D,open:!1},oe()))})]}),u.lines.map((D,y)=>{var b;return D.src.includes("[")&&(D.trans="   "),m(C,{item:!0,xs:12,children:[y>0&&D.src.includes("[")&&m(z,{children:[e("br",{}),e("br",{})]}),e(F,{className:"lyrics-line en-line",style:{fontSize:o.fontSize.md},children:D.src.split(" ").map((h,S)=>(h.slice(-1)==="'"&&(h=h.replaceAll("'","g")),e(Ce,{lyric:h,open:y==1&S==1},oe())))}),e(F,{className:"lyrics-line he-line",style:{fontSize:o.fontSize.md},children:e(z,{children:((b=D.trans)==null?void 0:b.length)?D.trans.split(" ").map((h,S)=>{if(D.trans!=="   ")return m("small",{className:"single-trans",children:[h," \xA0"]},oe())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},oe())})]})})}const Lr=x(Tr)`
  background-color: ${t=>t.theme.palette.secondary.light};
  color: ${t=>t.theme.palette.secondary.dark};
 
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
    color: ${t=>t.theme.palette.secondary.dark};
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
`;function _r({className:t}){var p,D,y,b;const r=l.exports.useContext(X),n=l.exports.useContext(Z),s=l.exports.useContext(te),[i,a]=$e(),u=i.get("song");l.exports.useEffect(()=>{s.closeDrawer(),n.error&&n.closeBanner("error"),v.directParamsToHash(),u&&u.includes("_")&&o()},[]);function o(){let h=u;h=h.replaceAll("-"," ");const S={artistName:encodeURI(` ${h.split("_")[0]} `),songName:encodeURI(` ${h.split("_")[1]} `)};h=h.replaceAll("_"," - "),r.getSongLyrics(S,h)}return m("div",{className:t,children:[!((p=r.lines)==null?void 0:p[0])&&e(Te,{className:"home-top",maxWidth:!1,children:m(C,{container:!0,className:"home-t-container",children:[!((D=r.lines)==null?void 0:D[0])&&e(C,{item:!0,xs:12,sm:6,children:m(N,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",e("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),m(C,{item:!0,xs:12,sm:6,children:[!((y=r.lines)==null?void 0:y[0])&&m(N,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-start-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA"}),e("span",{className:"h3-start h3-start-two",children:"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05EA\u05E8\u05D2\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8"}),e("span",{className:"h3-middle",children:"\u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("span",{className:"h3-bottom",children:"\u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8"})]}),e(me,{locat:"main",size:"large"}),e(N,{children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"})]})]})}),((b=r.lines)==null?void 0:b[0])&&m(C,{container:!0,spacing:1,children:[e(C,{item:!0,md:12,lg:9,children:e(Lr,{className:"lyrics-body"})}),e(C,{item:!0,xs:12,lg:3})]})]})}const Ir=x(_r)`
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
        color: ${t=>t.theme.palette.primary.contrastText};

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
            color: ${t=>t.theme.palette.primary.main};
        }

        .h3-bottom{
        
        }
    }
    
`;function zr(n){var s=n,{className:t}=s,r=A(s,["className"]);const i=()=>{r.deleteOneSong(r.song_id)};return e(_,{className:t,secondaryAction:e(O,{onClick:()=>{i()},edge:"end","aria-label":"delete",children:e(pe,{})}),children:e(I,{primary:e(q,{to:"/"+v.titleToParams(r.title),children:e(R,{children:e(N,{children:r.title})})})})})}const $r=x(zr)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${t=>t.theme.palette.secondary.dark};
  }
`;function Br({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),s=a=>{let u=r.filter(o=>o.id!==a);n(u),localStorage.setItem("meturgamm_songs",JSON.stringify(u))},i=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return m("div",{className:t,children:[r[0]&&m(F,{children:[e(K,{className:"d-all-btn",component:"label",onClick:()=>{i()},variant:"outlined",startIcon:e(bt,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(B,{sx:{width:"100%"},component:"div",children:e(C,{container:!0,spacing:1,children:r.map((a,u)=>e(C,{item:!0,xs:12,md:6,children:e($r,{title:a.title,song_id:a.id,deleteOneSong:s})},a.title+u))})})]}),!r[0]&&e(N,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const Or=x(Br)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${t=>t.theme.palette.primary.dark};
   }
`;function Pr({className:t}){const[r,n]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function s(a){const u={title:a,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(u),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const i=a=>{let u=r.filter(o=>o.id!==a);n(u),localStorage.setItem("meturgamm_wish",JSON.stringify(u))};return m(B,{className:t,subheader:e(me,{addRecordMode:!0,locat:"main",addRecord:s}),children:[e(C,{container:!0,spacing:1,children:r.map((a,u)=>e(C,{item:!0,xs:12,md:6,children:e(_,{secondaryAction:e(O,{onClick:()=>{i(a.id)},edge:"end","aria-label":"deletcoe",children:e(pe,{})}),children:e(I,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(q,{to:"/"+v.titleToParams(a.title),children:m(R,{children:[e(St,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(N,{children:a.title})]})})})},u)},a.title+u))}),!r[0]&&e(N,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Mr=x(Pr)`
  min-height: 70vh;
  padding-top: 3px;

  p{
    color:  ${t=>t.theme.palette.secondary.dark};
  }

  svg{
    color:  ${t=>t.theme.palette.primary.contrastText};
  }
`;function Rr(n){var s=n,{className:t}=s,r=A(s,["className"]);const[i,a]=l.exports.useState(r.lyric),[u,o]=l.exports.useState(!1),p=()=>{o(!u)},D=()=>{r.deleteOneWord(r.lyric.id)},y=()=>{if(i.results[0]){let b="";return i.results.map((h,S)=>{S+1===i.results.length?b+=h:b+=h+", "}),e("span",{className:"inline-results-p",children:b})}else return null};return m("span",{className:t,children:[e(_,{secondaryAction:e(O,{onClick:()=>{D()},edge:"end","aria-label":"delete",children:e(pe,{})}),children:m(R,{onClick:p,children:[e(Y,{children:e(wt,{})}),e(I,{primary:i.word}),u?e(Ct,{}):e(vt,{})]})}),e(ce,{in:u,timeout:"auto",unmountOnExit:!0,children:e(B,{component:"div",disablePadding:!0,children:e(_,{sx:{pl:4},children:e(I,{primary:e(z,{children:e(N,{sx:{display:"inline"},component:"span",children:e(y,{})})}),secondary:e(R,{component:"span",sx:{mt:"10px"},children:e(q,{to:"/"+v.titleToParams(i.title),children:e(V,{component:"button",children:e("i",{children:i.title})})})})})})})}),e(ee,{})]})}const Fr=x(Rr)`
  *{
    background-color: #e8e8e818;
  } 
`;function jr({className:t}){const r=l.exports.useContext(j),[n,s]=l.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);l.exports.useEffect(()=>{r.updateBadge(!1)},[]);const i=a=>{let u=n.filter(o=>o.id!==a);s(u),localStorage.setItem("meturgamm_words",JSON.stringify(u))};return m("div",{className:t,children:[n[0]&&e(B,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(C,{container:!0,spacing:1,children:n.map((a,u)=>e(C,{item:!0,md:3,lg:3,xs:12,children:e(Fr,{lyric:a,deleteOneWord:i})},a.word+u))})}),!n[0]&&e(N,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Jr=x(jr)`
   min-height: 80vh;
`;var Hr="/assets/extensionImage.9b86a50e.png";function Gr({className:t}){return e("div",{className:t,style:{backgroundImage:`url(${Hr.toString()})`},children:e(C,{container:!0,spacing:4,children:e(C,{item:!0,xs:12,sm:!0,container:!0,children:e(C,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:m(C,{item:!0,xs:!0,children:[e(N,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),e(N,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),e(N,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const Wr=x(Gr)`
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

`;function Ur({className:t}){return m("div",{className:t,children:[e(N,{variant:"h2",className:"page-h2",children:"404"}),e(N,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const qr=x(Ur)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Qr({className:t}){var S,$;const r=l.exports.useContext(te);l.exports.useContext(ie);const n=l.exports.useContext(Z);be("(max-width: 600px)");const[s,i]=l.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[a,u]=l.exports.useState(ue),o=be("(prefers-color-scheme: dark)"),p=kt({key:"muirtl",stylisPlugins:[It,zt]});l.exports.useEffect(()=>{D()},[]),l.exports.useEffect(()=>{},[o]);const D=()=>{v.directParamsToHash(),y(),b()},y=()=>{fetch("https://musicline-backend-dev.vercel.app/")},b=()=>{v.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")};return e("div",{className:t,children:e(Nt,{theme:a,children:e(At,{value:p,children:m(Tt,{children:[e(wr,{currTitle:s,theme:a}),m(cr,{children:[e(Be,{className:"header",changeColors:()=>{u(a===ue?Ot:ue),localStorage.setItem("preferedTheme",o?"mainPinkTheme":"darkTheme")}}),((S=n.main)==null?void 0:S.open)&&m(se,{severity:"warning",className:"main-alert",children:[e(Ie,{children:n.main.title}),n.main.message]}),m(Lt,{children:[e(U,{path:"/",element:e(Ir,{className:"page",rank:1})}),e(U,{path:"/Exercise",element:e(Jr,{className:"page",rank:1})}),e(U,{path:"/History",element:e(Or,{className:"page",rank:1})}),e(U,{path:"/Wish-list",element:e(Mr,{className:"page",rank:1})}),e(U,{path:"/Spotify-extension",element:e(Wr,{className:"page",rank:1})}),e(U,{path:"*",element:e(qr,{className:"page"})})]}),r.open&&r.child&&e(Dr,{className:"drawer"}),(($=n.infoSnackbar)==null?void 0:$.open)&&e(_t,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(se,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(pr,{}),e(Sr,{})]})]})})})})}const Zr=x(Qr)`
  height: fit-content;
  min-height: 700px;
`,Xr=[Pt,Rt,Mt,rr,Kt];function Kr(t){return e(z,{children:Xr.reduceRight((r,n)=>e(n,{children:r}),t.children)})}$t.render(e(Q.StrictMode,{children:e(Kr,{children:e(Zr,{className:"app"})})}),document.getElementById("root"));
