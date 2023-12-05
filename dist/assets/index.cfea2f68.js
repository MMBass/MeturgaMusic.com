import{c as be,r as i,j as e,R as Z,a as c,B as $e,b as Y,d as Be,e as Oe,s as x,L as Se,u as Pe,T as me,C as Me,f as ie,I as P,g as Re,h as Fe,i as je,M as Ce,k as we,l as ve,m as F,n as ke,o as Je,p as Ne,F as B,S as He,q as ce,N as q,t as k,A as se,v as ee,w as Ae,G as w,x as M,y as Ge,z as L,D as z,E as We,H as Ue,J as qe,K as oe,O,P as te,Q as U,U as Ze,V as Te,W as Xe,X as Ke,Y as Qe,Z as Ve,_ as ge,$ as De,a0 as Ye,a1 as et,a2 as tt,a3 as rt,a4 as nt,a5 as ot,a6 as st,a7 as at,a8 as it,a9 as lt,aa as ut,ab as he,ac as ct,ad as dt,ae as pt,af as mt,ag as Ie,ah as gt,ai as V,aj as de,ak as Dt,al as ht,am as ft,an as Et,ao as xt,ap as fe,aq as yt,ar as bt,as as St,at as Ct,au as wt,av as W,aw as vt,ax as kt,ay as Nt,az as At}from"./vendor.418cf58d.js";const Tt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};Tt();const ue=be({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#de6d7e",contrastText:"#555555"},secondary:{main:"#fcfcfc",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),Q=be({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#121212",light:"#fff",dark:"#fff",contrastText:"#ebebeb"},secondary:{main:"#ffffff",dark:"#fff",light:"#121212",contrastText:"#fff"}}}),re=Z.createContext(void 0);function It(t){const[r,n]=i.exports.useState({}),s={openDrawer:(l,o,d="temporary")=>{n({open:l,anchor:o,permanent:d})},closeDrawer:()=>{n({})}};return e(re.Provider,{value:{...r,...s},children:t.children})}const le=Z.createContext(void 0);function Lt(t){const[r,n]=i.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),l={createLoader:(o,d)=>{r[o]&&n({...r,[o]:void 0}),n({...r,[o]:{open:!1,color:d||"inherit"}})},openLoader:o=>{r[o]?n({...r,[o]:{...r[o],open:!0}}):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n({...r,[o]:{...r[o],open:!1}}):console.error("Loader "+o+" does'nt exist")}};return e(le.Provider,{value:{...r,...l},children:t.children})}const X=Z.createContext(void 0);function _t(t){var o;const[r,n]=i.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))!=null&&o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),l={createBanner:(d,f,p,E,C)=>{r[d]&&n({...r,[d]:void 0}),n({...r,[d]:{open:!0,severity:f||"success",title:p||"",message:E||"",action:C||{}}})},openBanner:d=>{r[d]?n({...r,[d]:{...r[d],open:!0}}):console.error("Banner "+d+" does'nt exist")},closeBanner:d=>{r[d]?n({...r,[d]:{...r[d],open:!1}}):console.error("Banner "+d+" does'nt exist")}};return e(X.Provider,{value:{...r,...l},children:t.children})}const zt=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},$t=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Bt=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Ot=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,Pt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},Mt=()=>{const t=navigator.userAgent;if(/android/i.test(t))return!1;if(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0},Rt=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function Ft(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const jt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Jt=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")},Ht=()=>{const t=new URLSearchParams(location.search);t.get("page")?location.href=location.origin+"/#/"+t.get("page"):t.get("song")&&t.get("song").includes("_")&&(location.href=location.origin+"/#/?song="+noHashSname)};var v={directParamsToHash:Ht,loadGscScript:zt,lsSaveSong:Bt,lsFindSong:Ot,lsSaveWord:$t,clearGsc:Pt,getMobileOS:Mt,keyboardHEENSwitcher:Rt,isMostlyEnglish:Ft,loadGoogleAds:jt,titleToParams:Jt};const j=Z.createContext(void 0);function Gt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,u]=i.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27}}),[a,s]=i.exports.useState(!1);function l(E){s(E)}const o=()=>{n.fontSize.md<60&&(u({...n,fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}}),f())},d=()=>{n.fontSize.sm>7&&(u({...n,fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}}),f())};function f(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}const p={reduceFontSize:d,increaseFontSize:o,updateBadge:l};return e(j.Provider,{value:{...n,...p,badge:a},children:t.children})}function Wt({className:t}){const r=i.exports.useContext(j);return e("div",{id:"",className:t,children:c($e,{className:"button-group",children:[e(Y,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(Be,{fontSize:"small"})}),e(Y,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(Y,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Oe,{fontSize:"small"})})]})})}const Ut=x(Wt)`
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

`;function qt({className:t,...r}){const[n,u]=i.exports.useState(0);return i.exports.useEffect(()=>{const a=setInterval(()=>{u(s=>{if(s===100)return 0;const l=Math.random()*10;return Math.min(s+l,100)})},220);return()=>{clearInterval(a)}},[]),e(Se,{variant:"determinate",value:n,color:r.color})}const Zt=x(qt)`
  
`,K=Z.createContext(void 0);function Xt(t){const r=i.exports.useContext(le),n=i.exports.useContext(X),[u,a]=i.exports.useState(""),[s,l]=i.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,d]=i.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[f,p]=i.exports.useState(!1),[E,C]=i.exports.useState(""),[_,N]=i.exports.useState(!1);i.exports.useEffect(()=>{o[0]&&J()},[o,f]);const A="https://musicline-backend.vercel.app",R=(h,m)=>{N(!0),m=m.replace(/[\])}[{(]/g,"").trim();let b=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!G(m,b)&&fetch(`${A}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:h,initId:localStorage.getItem("init")})}).then(g=>g.json()).then(g=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),b&&(b.style.pointerEvents="all"),(g==null?void 0:g.combined)&&Array.isArray(g==null?void 0:g.combined))l(m),a(g.id),d(g.combined),C("microsoft-translator"),v.lsSaveSong({title:m,lines:g.combined}),v.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(g.combined)),sessionStorage.setItem("currSongTitle",m);else if(g!=null&&g.lyrics){l(m);let H=g.lyrics,I=[];H.split(/(?:\r\n|\r|\n)/g).map(T=>{if(T.length>=2)if(v.isMostlyEnglish(T))if(T.length>90){let ne=T.split(",");ne[0].length>10?ne.map(ze=>{I.push({src:ze,trans:"",transError:!1})}):I.push({src:T.replace(".",""),trans:"",transError:!1})}else I.push({src:T.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+T),I.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),N(!1),d(I),v.clearGsc()}else N(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+m.replaceAll(" ","+")+" lyrics"})}).catch(g=>{N(!1),console.log(g),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),b&&(b.style.pointerEvents="all")})},G=(h,m)=>{let b=v.lsFindSong(h);return b&&Array.isArray(b.lines)?(m&&(m.style.pointerEvents="all"),l(h),d(b.lines),v.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(b.lines)),sessionStorage.setItem("currSongTitle",h),!0):!1},J=()=>{_||o.every((h,m)=>!h.trans.length||h.transError?(f?D(h.src,m):y(),!1):!0)},y=()=>{C(""),fetch(`${A}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:u,title:s})}).then(h=>h.json()).then(h=>{let m=[];h!=null&&h.trans.length?(h.trans.map((b,g)=>{m[g]={src:o[g].src,trans:b}}),d(m),v.lsSaveSong({title:s,lines:m}),sessionStorage.setItem("currLines",JSON.stringify(m)),sessionStorage.setItem("currSongTitle",s)):(console.error("status is ok but azure translation missing"),p(!0))}).catch(h=>{console.log(h),p(!0)})},D=async(h,m)=>{try{let g=[...o],H=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(h)}`;const T=await(await fetch(H)).json();var b=[];if(T&&T[0])T[0].forEach(ne=>{b.push(ne[0])}),g[m]={src:h,trans:b.join(" ")},d(g);else throw new Error("Google Translation failed.")}catch(g){console.error("Google Translation error:",g),$(h,m),C("")}E!=="google-translate"&&C("google-translate")},$=(h,m)=>{let b=[...o];fetch(`${A}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(h),initId:localStorage.getItem("init")})}).then(g=>g.json()).then(g=>{var H,I;g!=null&&g.trans?(b[m]={src:h,trans:g==null?void 0:g.trans},d(b),((H=o[o.length-1])==null?void 0:H.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",s))):(o[m].trans===void 0?b[m]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[m]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(b),((I=o[o.length-1])==null?void 0:I.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(b)),sessionStorage.setItem("currSongTitle",s)))}).catch(g=>{var I;o[m].trans===""?b[m]={src:h,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[m]={src:h,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(b),((I=o[o.length-1])==null?void 0:I.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",s),p(!1)),console.log(g)})},S={getSongLyrics:R,getFullTrans:y,checkNextTrans:J,setLines:d,setTitle:l,setAbort:N};return e(K.Provider,{value:{title:s,lines:o,azureServerError:f,translatedBy:E,...S},children:t.children})}function Kt({className:t,...r}){const[n,u]=i.exports.useState(!1),[a,s]=i.exports.useState(""),[l,o]=i.exports.useState(!1),d=Pe(),f=i.exports.useContext(K),p=i.exports.useContext(X);i.exports.useEffect(()=>{r.addRecordMode||s(f.title)},[f.title]),i.exports.useEffect(()=>{E()},[]);const E=()=>{v.getMobileOS()&&o(!0)};function C(){if(v.getMobileOS()){const y=document.querySelectorAll(".gsc-control-cse")[0];y.style.visibility="visible",y.style.marginTop="90px"}}i.exports.useEffect(()=>{v.loadGscScript(),_()},[]);function _(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))C(),N();else{let D=function(){N()};const $=document.querySelector("#gcse-my-wrapper"),S={childList:!0,attributes:!0,subtree:!1};new MutationObserver(D).observe($,S)}}function N(){u(!0);const y=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],D={childList:!1,attributes:!0,subtree:!1};function $(){G()}new MutationObserver($).observe(y,D)}function A(y){if(s(y.target.value),y.nativeEvent.data!==" ")R(y.target.value);else return}function R(y){p.error&&p.closeBanner("error");let D=document.querySelector("#gsc-i-id1"),$=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(D)if(y.length<=1){let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))}else if($.test(y)){D.value=y;let S=document.querySelectorAll(".gsc-search-box button")[0];S?setTimeout(()=>{S.type="button",S.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(p.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{p.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))},250);return}else p.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const G=()=>{setTimeout(()=>{let y=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");y&&y.forEach((D,$)=>{if(D.innerText.includes("Lyrics")){if(D.innerText.includes("(")){let m=D.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((m==null?void 0:m.includes("live"))||(m==null?void 0:m.includes("mix"))||(m==null?void 0:m.includes("remix"))){D.parentElement.parentElement.parentElement.remove();return}}let S=D.innerText.split("Lyrics")[0];if(S=S.replaceAll("\u2013","-"),!v.isMostlyEnglish(S)){D.parentElement.parentElement.parentElement.remove();return}D.innerHTML=`<strong>${S.split("-")[0]}</strong> - <span>${S.split("-")[1]}</span>`;const h={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};D.nodeName!=="A"&&D.parentElement.parentElement.parentElement.addEventListener("click",()=>{J(D,S,h)}),D.style.display="block"}else D.innerText.includes("Lyrics")||D.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&D.parentElement.parentElement.parentElement.remove()})},50)},J=(y,D,$)=>{if(y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(D),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc(),s(" ");return}f.title.replaceAll(" ","")==D.replaceAll(" ","")&&(y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",v.clearGsc()),f.title.replaceAll(" ","")!=D.replaceAll(" ","")&&f.getSongLyrics($,D),s(D),location.hash!="#/"&&d("/")};return c("div",{className:t,children:[!l&&!r.addRecordMode&&e(me,{size:r.size,id:"outlined-search",label:n?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8":e(Me,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:n?A:null,autoFocus:!1,autoComplete:"off",placeholder:"GOOGLE  \u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",value:a}),!l&&r.addRecordMode&&e(me,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:n?A:null,autoFocus:!1,autoComplete:"off",placeholder:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA GOOGLE",value:a,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const pe=x(Kt)`

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

`;function Qt({className:t,...r}){const n=ie(),u=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(P,{onClick:()=>u(),children:n.palette.mode==="dark"?e(Re,{color:"primary"}):e(Fe,{})})})}const Le=x(Qt)`
  text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;
`,Vt=({className:t,...r})=>{var C,_,N,A,R,G,J,y,D;const[n,u]=i.exports.useState(!1),a=ie(),s=i.exports.useContext(re),l=i.exports.useContext(K),o=i.exports.useContext(X),d=i.exports.useContext(le),f=i.exports.useContext(j),p=je();i.exports.useEffect(()=>{u(!1),window.scrollTo(0,0),o.closeBanner("error")},[p,l.title]),i.exports.useEffect(()=>{u(!1),o.closeBanner("error")},[s.open]);const E=()=>{o.closeBanner("error"),s.open?s.closeDrawer():s.openDrawer(!0,"left","temporary")};return c(Ce,{position:"sticky",className:t,sx:{backgroundColor:a.palette.primary.main,color:a.palette.secondary.dark},children:[d.main.open&&e(Zt,{color:d.main.color}),e(we,{maxWidth:!1,children:c(ve,{disableGutters:!0,children:[e(F,{children:e(P,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:E,children:s.open?e(Ne,{className:"burger-icon"}):e(ke,{variant:"dot",invisible:!f.badge,children:e(Je,{className:"burger-icon"})})})}),(((C=l.lines)==null?void 0:C[0])||p.pathname!=="/")&&e(B,{children:p.pathname!=="/wish-list"&&c(B,{children:[e(P,{className:"mui-search-icon-wrapper",onClick:()=>u(!n),children:e(He,{className:"mui-search-icon"})}),e(F,{className:n&&"collapse-search-box",children:e(ce,{className:"search-ctr-collapse",orientation:"horizontal",in:n,collapsedSize:0,children:n&&e(pe,{locat:"top",size:"small",setTopSearchBar:()=>{u()}})})})]})}),!n&&e(q,{to:"/",onClick:()=>{},children:c(k,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",style:{color:a.palette.secondary.dark},children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",style:{color:a.palette.secondary.main},children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),p.pathname==="/"&&!n&&!((_=l.lines)!=null&&_[0])&&e(Le,{changeColors:r.changeColors}),p.pathname==="/"&&!n&&((N=l.lines)==null?void 0:N[0])&&e(Ut,{})]})}),e(ce,{in:(A=o.error)==null?void 0:A.open,children:c(se,{severity:"error",className:"error-alert",action:((R=o.error)==null?void 0:R.action)&&e(ee,{padding:"7px",href:(G=o.error)==null?void 0:G.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(J=o.error)==null?void 0:J.action.actionText}),onClose:()=>{o.closeBanner("error")},children:[e(Ae,{children:(y=o.error)==null?void 0:y.title}),(D=o.error)==null?void 0:D.message]})})]})},_e=x(Vt)`
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
`;function Yt({className:t,...r}){return e("div",{className:t,children:r.children})}const er=x(Yt)`
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
  
`;function tr({className:t}){return i.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:c(w,{container:!0,rowSpacing:6,columnSpacing:2,children:[c(w,{item:!0,xs:12,sm:4,children:[c(M,{children:[e(Ge,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(L,{component:ee,href:"mailto:meturgamusic@gmail.com",children:e(z,{primary:"MeturgaMusic@gmail.com"})}),e(L,{component:ee,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(z,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(M,{children:e(L,{component:ee,href:"https://basssites.com",className:"built-by",children:e(z,{primary:" \xA9 BassSites 2023 "})})})]}),e(w,{item:!0,xs:12,sm:4})]})})}const rr=x(tr)`
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

`;function nr({className:t,...r}){const n=i.exports.useContext(j);ie();const u=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",url:"/history",icon:e(We,{className:"side-icons"})},{name:"\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC ",url:"/exercise",icon:e(ke,{variant:"dot",invisible:!n.badge,color:"error",children:e(Ue,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD",url:"/wish-list",icon:e(qe,{className:"side-icons"}),chip:e(oe,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return c(M,{className:t,sx:{maxWidth:"320px"},children:[e(se,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),u.map((a,s)=>e(q,{to:a.url,className:"nav-link",children:c(L,{children:[c(O,{children:[e(te,{children:a.icon}),e(z,{primary:a.name}),a.chip&&a.chip]}),e(U,{})]})},s)),e(q,{to:"/spotify-extension",className:"nav-link",children:c(L,{sx:{backgroundColor:"lightGray"},children:[c(O,{children:[e(te,{children:e(Ze,{className:"side-icons",sx:{rotate:"-90deg"}})}),e(z,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),e(oe,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),e(U,{})]})}),c(L,{children:[e(O,{onClick:r.changeColors,sx:{textAlign:"center",justifyContent:"center"},children:e(oe,{icon:e(Le,{changeColors:r.changeColors}),className:"pages-list-chip extension-chip",label:"\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4",color:"secondary",variant:"outlined",size:"large"})}),e(U,{})]})]})}const or=x(nr)`

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
`;function sr({className:t,...r}){const n=i.exports.useContext(re);return e(Te,{className:t,anchor:n.anchor,open:n.open,variant:n.permanent,onClose:()=>{n.closeDrawer()},children:e(F,{className:"drawer-layout",role:"presentation",onClick:()=>{n.closeDrawer()},children:e(or,{changeColors:r.changeColors})})})}const ar=x(sr)` 

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
`,ae=240,Ee=t=>({width:ae,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),xe=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),ir=x("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),lr=x(Ce,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{marginLeft:ae,width:`calc(100% - ${ae}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),ur=x(Te,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({width:ae,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...r&&{...Ee(t),"& .MuiDrawer-paper":Ee(t)},...!r&&{...xe(t),"& .MuiDrawer-paper":xe(t)}}));function cr(){const t=ie(),[r,n]=i.exports.useState(!1),u=()=>{n(!0)},a=()=>{n(!1)};return c(F,{sx:{display:"flex"},children:[e(Xe,{}),e(lr,{position:"fixed",open:r,children:c(ve,{children:[e(P,{color:"inherit","aria-label":"open drawer",onClick:u,edge:"start",sx:{marginRight:5,...r&&{display:"none"}},children:e(Ke,{})}),e(_e,{})]})}),c(ur,{variant:"permanent",open:r,children:[e(ir,{children:e(P,{onClick:a,children:t.direction==="rtl"?e(Qe,{}):e(Ve,{})})}),e(U,{}),e(M,{children:["Inbox","Starred","Send email","Drafts"].map((s,l)=>e(L,{disablePadding:!0,sx:{display:"block"},children:c(O,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(te,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:l%2===0?e(ge,{}):e(De,{})}),e(z,{primary:s,sx:{opacity:r?1:0}})]})},s))}),e(U,{}),e(M,{children:["All mail","Trash","Spam"].map((s,l)=>e(L,{disablePadding:!0,sx:{display:"block"},children:c(O,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(te,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:l%2===0?e(ge,{}):e(De,{})}),e(z,{primary:s,sx:{opacity:r?1:0}})]})},s))})]})]})}x(cr)`
  
`;function dr({className:t}){const[r,n]=i.exports.useState(!0),u=()=>{n(!1)};return c(Ye,{id:"main-modal-root",className:t,open:r,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(et,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(tt,{children:e(rt,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(nt,{children:e(Y,{onClick:u,children:"Close"})})]})}x(dr)`
  
`;function pr({className:t,...r}){const[n,u]=i.exports.useState(!0);return e(ot,{className:t,open:n,onClose:()=>{u(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(pr)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${t=>t.theme.palette.primary.main};
  }
`;function mr({className:t}){const r=st({target:window,disableHysteresis:!0,threshold:100});return e(at,{id:"",className:t,in:r,children:e(F,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(it,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(lt,{htmlColor:"white"})})})})}const gr=x(mr)`
  width: 50px;
  height: 50px;
`;function Dr(t){const[r,n]=i.exports.useState(t.theme.palette.primary.main);return i.exports.useEffect(()=>{n(t.theme.palette.primary.main)},[t.theme]),c(ut,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})}function hr({className:t,...r}){const[n,u]=i.exports.useState(!1),a=i.exports.useContext(j);i.exports.useEffect(()=>{s()&&u(!0)},[]);const s=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(d=>d.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,l=()=>{try{v.lsSaveWord(r.toSave),u(!0),a.updateBadge(1)}catch(o){o&&console.log(o)}};return e("span",{className:t,children:n?e(B,{children:r.variant==="Bookmark"?e(he,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(he,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(B,{children:r.variant==="Bookmark"?e(B,{children:e(ct,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>l()})}):c("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>l(),children:[e(dt,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const fr=x(hr)`

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
`;function Er({className:t,...r}){const n=i.exports.useContext(j),u=i.exports.useContext(K),a=()=>{if(r.results[0]){let s="";return r.results.map((l,o)=>{o+1===r.results.length?s+=l:s+=l+", "}),e("p",{className:"tt-p",children:s})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(pt,{onClickAway:r.tooltipClose,children:c("span",{className:t,children:[e(k,{className:"tt-top",color:"inherit",style:{fontSize:n.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:n.fontSize.md-2},children:r.results[0]?e(a,{}):e(Se,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(fr,{toSave:{word:r.lyric,results:r.results,title:u.title},variant:"Star"})]})})}const xr=x(Er)`

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

`;function yr({className:t,...r}){const[n,u]=i.exports.useState(!1),[a,s]=i.exports.useState([]);i.exports.useEffect(()=>{},[]);const l=()=>{u(!0),a[0]||d()},o=()=>{u(!1)};function d(){const f="https://musicline-backend.vercel.app";let p=r.lyric.trim().toLowerCase();p=p.replaceAll(/[^a-zA-Z0-9']/g,""),p.slice(-1)==="'"&&(p=p.replaceAll("'","g")),fetch(`${f}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(p),initId:localStorage.getItem("init")})}).then(E=>E.json()).then(E=>{if(E!=null&&E.results[0]){s(E.results);return}else{s(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(E=>{s(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(E)})}return e(B,{children:e(mt,{className:t,title:e(xr,{tooltipClose:o,className:"tt-childs",lyric:r.lyric,results:a}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:o,open:n,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:c("span",{children:["\xA0 ",c("p",{className:"single-lyric",onClick:l,children:[" ",r.lyric," "]})]})})})}const ye=x(yr)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function br({className:t,...r}){let[n,u]=Ie();const a=i.exports.useContext(K),s=i.exports.useContext(j);i.exports.useEffect(()=>{u(v.titleToParams(a.title))},[a.title]);const l=()=>{a.setAbort(!0),sessionStorage.removeItem("currLines"),a.setLines([]),a.setTitle(""),u("")};return e(gt,{elevation:3,className:t,children:c(w,{container:!0,rowSpacing:1,columnSpacing:0,children:[c(w,{item:!0,xs:12,className:"l-body-top",children:[e(P,{onClick:()=>l(),children:e(Ne,{className:"remove-icon"})}),a.translatedBy&&e(oe,{className:"trans-by-chip",label:"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA "+a.translatedBy,color:"default",variant:"filled",size:"small"}),e(k,{variant:"h6",component:"h3",style:{fontSize:s.fontSize.lg,direction:"ltr"},children:a.title&&a.title.split(" ").map((o,d)=>e(ye,{lyric:o,open:!1},V()))})]}),a.lines.map((o,d)=>{var f;return o.src.includes("[")&&(o.trans="   "),c(w,{item:!0,xs:12,children:[d>0&&o.src.includes("[")&&c(B,{children:[e("br",{}),e("br",{})]}),e(F,{className:"lyrics-line en-line",style:{fontSize:s.fontSize.md},children:o.src.split(" ").map((p,E)=>(p.slice(-1)==="'"&&(p=p.replaceAll("'","g")),e(ye,{lyric:p,open:d==1&E==1},V())))}),e(F,{className:"lyrics-line he-line",style:{fontSize:s.fontSize.md},children:e(B,{children:(f=o.trans)!=null&&f.length?o.trans.split(" ").map((p,E)=>{if(o.trans!=="   ")return c("small",{className:"single-trans",children:[p," \xA0"]},V())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},V())})]})})}const Sr=x(br)`
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
`;function Cr({className:t}){var d,f,p,E;const r=i.exports.useContext(K),n=i.exports.useContext(X),u=i.exports.useContext(re),[a,s]=Ie(),l=a.get("song");i.exports.useEffect(()=>{u.closeDrawer(),n.error&&n.closeBanner("error"),v.directParamsToHash(),l&&l.includes("_")&&o()},[]);function o(){let C=l;C=C.replaceAll("-"," ");const _={artistName:encodeURI(` ${C.split("_")[0]} `),songName:encodeURI(` ${C.split("_")[1]} `)};C=C.replaceAll("_"," - "),r.getSongLyrics(_,C)}return c("div",{className:t,children:[!((d=r.lines)!=null&&d[0])&&e(we,{className:"home-top",maxWidth:!1,children:c(w,{container:!0,className:"home-t-container",children:[!((f=r.lines)!=null&&f[0])&&e(w,{item:!0,xs:12,sm:6,children:c(k,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",e("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),c(w,{item:!0,xs:12,sm:6,children:[!((p=r.lines)!=null&&p[0])&&c(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-start-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA"}),e("span",{className:"h3-start h3-start-two",children:"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05EA\u05E8\u05D2\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8"}),e("span",{className:"h3-middle",children:"\u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("span",{className:"h3-bottom",children:"\u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8"})]}),e(pe,{locat:"main",size:"large"}),e(k,{children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"})]})]})}),((E=r.lines)==null?void 0:E[0])&&c(w,{container:!0,spacing:1,children:[e(w,{item:!0,md:12,lg:9,children:e(Sr,{className:"lyrics-body"})}),e(w,{item:!0,xs:12,lg:3})]})]})}const wr=x(Cr)`
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
    
`;function vr({className:t,...r}){const n=()=>{r.deleteOneSong(r.song_id)};return e(L,{className:t,secondaryAction:e(P,{onClick:()=>{n()},edge:"end","aria-label":"delete",children:e(de,{})}),children:e(z,{primary:e(q,{to:"/"+v.titleToParams(r.title),children:e(O,{children:e(k,{children:r.title})})})})})}const kr=x(vr)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${t=>t.theme.palette.secondary.dark};
  }
`;function Nr({className:t}){const[r,n]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),u=s=>{let l=r.filter(o=>o.id!==s);n(l),localStorage.setItem("meturgamm_songs",JSON.stringify(l))},a=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return c("div",{className:t,children:[r[0]&&c(F,{children:[e(Y,{className:"d-all-btn",component:"label",onClick:()=>{a()},variant:"outlined",startIcon:e(Dt,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(M,{sx:{width:"100%"},component:"div",children:e(w,{container:!0,spacing:1,children:r.map((s,l)=>e(w,{item:!0,xs:12,md:6,children:e(kr,{title:s.title,song_id:s.id,deleteOneSong:u})},s.title+l))})})]}),!r[0]&&e(k,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const Ar=x(Nr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${t=>t.theme.palette.primary.dark};
   }
`;function Tr({className:t}){const[r,n]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function u(s){const l={title:s,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(l),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const a=s=>{let l=r.filter(o=>o.id!==s);n(l),localStorage.setItem("meturgamm_wish",JSON.stringify(l))};return c(M,{className:t,subheader:e(pe,{addRecordMode:!0,locat:"main",addRecord:u}),children:[e(w,{container:!0,spacing:1,children:r.map((s,l)=>e(w,{item:!0,xs:12,md:6,children:e(L,{secondaryAction:e(P,{onClick:()=>{a(s.id)},edge:"end","aria-label":"deletcoe",children:e(de,{})}),children:e(z,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(q,{to:"/"+v.titleToParams(s.title),children:c(O,{children:[e(ht,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(k,{children:s.title})]})})})},l)},s.title+l))}),!r[0]&&e(k,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Ir=x(Tr)`
  min-height: 70vh;
  padding-top: 3px;

  p{
    color:  ${t=>t.theme.palette.secondary.dark};
  }

  svg{
    color:  ${t=>t.theme.palette.primary.contrastText};
  }
`;function Lr({className:t,...r}){const[n,u]=i.exports.useState(r.lyric),[a,s]=i.exports.useState(!1),l=()=>{s(!a)},o=()=>{r.deleteOneWord(r.lyric.id)},d=()=>{if(n.results[0]){let f="";return n.results.map((p,E)=>{E+1===n.results.length?f+=p:f+=p+", "}),e("span",{className:"inline-results-p",children:f})}else return null};return c("span",{className:t,children:[e(L,{secondaryAction:e(P,{onClick:()=>{o()},edge:"end","aria-label":"delete",children:e(de,{})}),children:c(O,{onClick:l,children:[e(te,{children:e(ft,{})}),e(z,{primary:n.word}),a?e(Et,{}):e(xt,{})]})}),e(ce,{in:a,timeout:"auto",unmountOnExit:!0,children:e(M,{component:"div",disablePadding:!0,children:e(L,{sx:{pl:4},children:e(z,{primary:e(B,{children:e(k,{sx:{display:"inline"},component:"span",children:e(d,{})})}),secondary:e(O,{component:"span",sx:{mt:"10px"},children:e(q,{to:"/"+v.titleToParams(n.title),children:e(ee,{component:"button",children:e("i",{children:n.title})})})})})})})}),e(U,{})]})}const _r=x(Lr)`
  *{
    background-color: #e8e8e818;
  } 
`;function zr({className:t}){const r=i.exports.useContext(j),[n,u]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);i.exports.useEffect(()=>{r.updateBadge(!1)},[]);const a=s=>{let l=n.filter(o=>o.id!==s);u(l),localStorage.setItem("meturgamm_words",JSON.stringify(l))};return c("div",{className:t,children:[n[0]&&e(M,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(w,{container:!0,spacing:1,children:n.map((s,l)=>e(w,{item:!0,md:3,lg:3,xs:12,children:e(_r,{lyric:s,deleteOneWord:a})},s.word+l))})}),!n[0]&&e(k,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const $r=x(zr)`
   min-height: 80vh;
`;var Br="/assets/extensionImage.9b86a50e.png";function Or({className:t}){return e("div",{className:t,style:{backgroundImage:`url(${Br.toString()})`},children:e(w,{container:!0,spacing:4,children:e(w,{item:!0,xs:12,sm:!0,container:!0,children:e(w,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:c(w,{item:!0,xs:!0,children:[e(k,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),e(k,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),e(k,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const Pr=x(Or)`
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

`;function Mr({className:t}){return c("div",{className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Rr=x(Mr)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Fr({className:t}){var _,N;const r=i.exports.useContext(re);i.exports.useContext(le);const n=i.exports.useContext(X);fe("(max-width: 600px)");const[u,a]=i.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[s,l]=i.exports.useState(ue),o=fe("(prefers-color-scheme: dark)"),d=yt({key:"muirtl",stylisPlugins:[kt,Nt]});i.exports.useEffect(()=>{f()},[]),i.exports.useEffect(()=>{localStorage.getItem("preferedDark")?localStorage.getItem("preferedDark")==="true"&&l(Q):l(o?Q:ue)},[o]);const f=()=>{v.directParamsToHash(),p(),E()},p=()=>{const A="https://musicline-backend.vercel.app";localStorage.getItem("init")||localStorage.setItem("init",JSON.stringify("INITID:"+V()));let R=localStorage.getItem("init");fetch(`${A}/?initId=`+R)},E=()=>{v.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")},C=()=>{let A=s===Q?ue:Q;l(A),localStorage.setItem("preferedDark",A===Q?"true":"false")};return e("div",{className:t,children:e(bt,{theme:s,children:e(St,{value:d,children:c(Ct,{children:[e(Dr,{currTitle:u,theme:s}),c(er,{children:[e(_e,{className:"header",changeColors:C}),((_=n.main)==null?void 0:_.open)&&c(se,{severity:"warning",className:"main-alert",children:[e(Ae,{children:n.main.title}),n.main.message]}),c(wt,{children:[e(W,{path:"/",element:e(wr,{className:"page",rank:1})}),e(W,{path:"/Exercise",element:e($r,{className:"page",rank:1})}),e(W,{path:"/History",element:e(Ar,{className:"page",rank:1})}),e(W,{path:"/Wish-list",element:e(Ir,{className:"page",rank:1})}),e(W,{path:"/Spotify-extension",element:e(Pr,{className:"page",rank:1})}),e(W,{path:"*",element:e(Rr,{className:"page"})})]}),r.open&&e(ar,{className:"drawer",changeColors:C}),((N=n.infoSnackbar)==null?void 0:N.open)&&e(vt,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(se,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(rr,{}),e(gr,{})]})]})})})})}const jr=x(Fr)`
  height: fit-content;
  min-height: 700px;
`,Jr=[It,_t,Lt,Xt,Gt];function Hr(t){return e(B,{children:Jr.reduceRight((r,n)=>e(n,{children:r}),t.children)})}At.render(e(Z.StrictMode,{children:e(Hr,{children:e(jr,{className:"app"})})}),document.getElementById("root"));
