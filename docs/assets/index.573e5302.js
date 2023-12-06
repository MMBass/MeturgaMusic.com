import{c as ve,R as X,r as i,j as e,a as c,B as Oe,b as ee,d as Pe,e as Me,s as x,L as we,u as Re,T as De,C as Fe,f as ne,I as M,g as je,h as Je,i as He,M as ke,k as Ne,l as Ae,m as R,n as Ie,o as Ge,p as me,F as B,S as We,q as pe,N as V,t as k,A as le,v as te,w as Te,G as v,x as j,y as Ue,z as L,D as O,E as qe,H as Ze,J as Ve,K as ie,O as F,P as re,Q as Z,U as Xe,V as Le,W as Ke,X as Qe,Y as Ye,Z as et,_ as fe,$ as xe,a0 as tt,a1 as rt,a2 as nt,a3 as ot,a4 as st,a5 as at,a6 as it,a7 as lt,a8 as ut,a9 as ct,aa as dt,ab as pt,ac as mt,ad as Ee,ae as gt,af as ht,ag as Dt,ah as ft,ai as _e,aj as xt,ak as Y,al as ge,am as Et,an as yt,ao as bt,ap as St,aq as Ct,ar as ye,as as vt,at as wt,au as kt,av as Nt,aw as At,ax as q,ay as It,az as Tt,aA as Lt,aB as _t}from"./vendor.043b0a30.js";const zt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};zt();const de=ve({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#de6d7e",contrastText:"#555555"},secondary:{main:"#fcfcfc",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),Q=ve({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#121212",light:"#fff",dark:"#fff",contrastText:"#ebebeb"},secondary:{main:"#ffffff",dark:"#fff",light:"#121212",contrastText:"#fff"}}}),oe=X.createContext(void 0);function $t(t){const[r,n]=i.exports.useState({}),s={openDrawer:(l,o,d="temporary")=>{n({open:l,anchor:o,permanent:d})},closeDrawer:()=>{n({})}};return e(oe.Provider,{value:{...r,...s},children:t.children})}const ce=X.createContext(void 0);function Bt(t){const[r,n]=i.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),l={createLoader:(o,d)=>{r[o]&&n({...r,[o]:void 0}),n({...r,[o]:{open:!1,color:d||"inherit"}})},openLoader:o=>{r[o]?n({...r,[o]:{...r[o],open:!0}}):console.error("Loader "+o+" does'nt exist")},closeLoader:o=>{r[o]?n({...r,[o]:{...r[o],open:!1}}):console.error("Loader "+o+" does'nt exist")}};return e(ce.Provider,{value:{...r,...l},children:t.children})}const K=X.createContext(void 0);function Ot(t){var o;const[r,n]=i.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:"",action:{}},infoSnackbar:{open:!((o=JSON.parse(localStorage.getItem("meturgamm_songs")))!=null&&o[1]),severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),l={createBanner:(d,D,p,E,C)=>{r[d]&&n({...r,[d]:void 0}),n({...r,[d]:{open:!0,severity:D||"success",title:p||"",message:E||"",action:C||{}}})},openBanner:d=>{r[d]?n({...r,[d]:{...r[d],open:!0}}):console.error("Banner "+d+" does'nt exist")},closeBanner:d=>{r[d]?n({...r,[d]:{...r[d],open:!1}}):console.error("Banner "+d+" does'nt exist")}};return e(K.Provider,{value:{...r,...l},children:t.children})}const Pt=()=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",t.defer=!0,document.body.appendChild(t)},Mt=t=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));t.word=t.word.replace(/[,\.]$/," "),t.id=r.length.toString(),r.unshift(t),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r))},Rt=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));t.id=r.length.toString(),r.unshift(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},Ft=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,jt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},Jt=()=>{const t=navigator.userAgent;if(/android/i.test(t))return!1;if(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!0},Ht=t=>{if(/[\u0590-\u05FF]/.test(t)){var r={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let n=0;n<t.length;n++)r[t[n]]?t=t.replace(new RegExp(t[n],"g"),r[t[n]]):t=t.replace(new RegExp(t[n],"g"),"");return console.log(t),t}else return t};function Gt(t){let r=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(t.match(r)||[]).length/t.length>.8}const Wt=()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const r=document.createElement("script");r.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",r.def=!0,r.crossorigin="anonymous",r.dataset.overlays="bottom",document.body.appendChild(r)}},Ut=t=>{if(typeof t=="string")return"?song="+t.replaceAll(" - ","_").replaceAll(" ","-")},qt=()=>{const t=new URLSearchParams(location.search);if(t.get("page"))location.href=location.origin+"/#/"+t.get("page");else if(t.get("song")&&t.get("song").includes("_"))location.href=location.origin+"/#/?song="+t.get("song");else return};var w={directParamsToHash:qt,loadGscScript:Pt,lsSaveSong:Rt,lsFindSong:Ft,lsSaveWord:Mt,clearGsc:jt,getMobileOS:Jt,keyboardHEENSwitcher:Ht,isMostlyEnglish:Gt,loadGoogleAds:Wt,titleToParams:Ut};const H=X.createContext(void 0);function Zt(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,u]=i.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27}}),[a,s]=i.exports.useState(!1);function l(E){s(E)}const o=()=>{n.fontSize.md<60&&(u({...n,fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}}),D())},d=()=>{n.fontSize.sm>7&&(u({...n,fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}}),D())};function D(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}const p={reduceFontSize:d,increaseFontSize:o,updateBadge:l};return e(H.Provider,{value:{...n,...p,badge:a},children:t.children})}function Vt({className:t}){const r=i.exports.useContext(H);return e("div",{id:"",className:t,children:c(Oe,{className:"button-group",children:[e(ee,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(Pe,{fontSize:"small"})}),e(ee,{className:"font-size-disabled",disabled:!0,children:r.fontSize.md}),e(ee,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(Me,{fontSize:"small"})})]})})}const Xt=x(Vt)`
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

`;function Kt({className:t,...r}){const[n,u]=i.exports.useState(0);return i.exports.useEffect(()=>{const a=setInterval(()=>{u(s=>{if(s===100)return 0;const l=Math.random()*10;return Math.min(s+l,100)})},220);return()=>{clearInterval(a)}},[]),e(we,{variant:"determinate",value:n,color:r.color})}const Qt=x(Kt)`
  
`,W=X.createContext(void 0);function Yt(t){const r=i.exports.useContext(ce),n=i.exports.useContext(K),[u,a]=i.exports.useState(""),[s,l]=i.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[o,d]=i.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[D,p]=i.exports.useState(!1),[E,C]=i.exports.useState(""),[_,N]=i.exports.useState(!1),[I,P]=i.exports.useState("");i.exports.useEffect(()=>{o[0]&&g()},[o,D]);const J="https://musicline-backend.vercel.app",U=(f,h)=>{N(!0),h=h.replace(/[\])}[{(]/g,"").trim();let b=document.querySelectorAll(".gsc-expansionArea")[0];r.openLoader("main"),!y(h,b)&&fetch(`${J}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:f,initId:localStorage.getItem("init")})}).then(m=>m.json()).then(async m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),b&&(b.style.pointerEvents="all"),(m==null?void 0:m.combined)&&Array.isArray(m==null?void 0:m.combined))l(h),a(m.id),d(m.combined),m.videoId&&P(m.videoId),C("microsoft-translator"),w.lsSaveSong({title:h,lines:m.combined}),w.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(m.combined)),sessionStorage.setItem("currSongTitle",h);else if(m!=null&&m.lyrics){l(h);let G=m.lyrics,T=[];G.split(/(?:\r\n|\r|\n)/g).map(A=>{if(A.length>=2)if(w.isMostlyEnglish(A))if(A.length>90){let ae=A.split(",");ae[0].length>10?ae.map(Be=>{T.push({src:Be,trans:"",transError:!1})}):T.push({src:A.replace(".",""),trans:"",transError:!1})}else T.push({src:A.replace(".",""),trans:"",transError:!1});else console.log("Not supported lang: "+A),T.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})}),N(!1),d(T),m.videoId&&P(m.videoId),w.clearGsc()}else N(!1),n.createBanner("error","error","","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",{actionText:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D1\u05D2\u05D5\u05D2\u05DC",actionHref:"https://www.google.com/search?q="+h.replaceAll(" ","+")+" lyrics"})}).catch(m=>{N(!1),console.log(m),r.closeLoader("main"),n.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),b&&(b.style.pointerEvents="all")})},y=(f,h)=>{let b=w.lsFindSong(f);return b&&Array.isArray(b.lines)?(h&&(h.style.pointerEvents="all"),l(f),d(b.lines),w.clearGsc(),r.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(b.lines)),sessionStorage.setItem("currSongTitle",f),!0):!1},g=()=>{_||o.every((f,h)=>!f.trans.length||f.transError?(D?S(f.src,h):z(),!1):!0)},z=()=>{C(""),fetch(`${J}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:o,song_id:u,title:s})}).then(f=>f.json()).then(f=>{let h=[];f!=null&&f.trans.length?(f.trans.map((b,m)=>{h[m]={src:o[m].src,trans:b}}),d(h),P(f.videoId),w.lsSaveSong({title:s,lines:h}),sessionStorage.setItem("currLines",JSON.stringify(h)),sessionStorage.setItem("currSongTitle",s)):(console.error("status is ok but azure translation missing"),p(!0))}).catch(f=>{console.log(f),p(!0)})},S=async(f,h)=>{try{let m=[...o],G=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=${encodeURIComponent(f)}`;const A=await(await fetch(G)).json();var b=[];if(A&&A[0])A[0].forEach(ae=>{b.push(ae[0])}),m[h]={src:f,trans:b.join(" ")},d(m);else throw new Error("Google Translation failed.")}catch(m){console.error("Google Translation error:",m),se(f,h),C("")}E!=="google-translate"&&C("google-translate")},se=(f,h)=>{let b=[...o];fetch(`${J}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(f),initId:localStorage.getItem("init")})}).then(m=>m.json()).then(m=>{var G,T;m!=null&&m.trans?(b[h]={src:f,trans:m==null?void 0:m.trans},d(b),((G=o[o.length-1])==null?void 0:G.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",s))):(o[h].trans===void 0?b[h]={src:f,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[h].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[h]={src:f,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(b),((T=o[o.length-1])==null?void 0:T.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(b)),sessionStorage.setItem("currSongTitle",s)))}).catch(m=>{var T;o[h].trans===""?b[h]={src:f,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:o[h].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(b[h]={src:f,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),d(b),((T=o[o.length-1])==null?void 0:T.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(o)),sessionStorage.setItem("currSongTitle",s),p(!1)),console.log(m)})},$={getSongLyrics:U,getFullTrans:z,checkNextTrans:g,setLines:d,setTitle:l,setAbort:N};return e(W.Provider,{value:{title:s,lines:o,azureServerError:D,translatedBy:E,videoId:I,...$},children:t.children})}function er({className:t,...r}){const[n,u]=i.exports.useState(!1),[a,s]=i.exports.useState(""),[l,o]=i.exports.useState(!1),d=Re(),D=i.exports.useContext(W),p=i.exports.useContext(K);i.exports.useEffect(()=>{r.addRecordMode||s(D.title)},[D.title]),i.exports.useEffect(()=>{E()},[]);const E=()=>{w.getMobileOS()&&o(!0)};function C(){if(w.getMobileOS()){const y=document.querySelectorAll(".gsc-control-cse")[0];y.style.visibility="visible",y.style.marginTop="90px"}}i.exports.useEffect(()=>{w.loadGscScript(),_()},[]);function _(){if(document.querySelector("#gcse-my-wrapper #___gcse_0"))C(),N();else{let g=function(){N()};const z=document.querySelector("#gcse-my-wrapper"),S={childList:!0,attributes:!0,subtree:!1};new MutationObserver(g).observe(z,S)}}function N(){u(!0);const y=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],g={childList:!1,attributes:!0,subtree:!1};function z(){J()}new MutationObserver(z).observe(y,g)}function I(y){if(s(y.target.value),y.nativeEvent.data!==" ")P(y.target.value);else return}function P(y){p.error&&p.closeBanner("error");let g=document.querySelector("#gsc-i-id1"),z=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(g)if(y.length<=1){let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))}else if(z.test(y)){g.value=y;let S=document.querySelectorAll(".gsc-search-box button")[0];S?setTimeout(()=>{S.type="button",S.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(p.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{p.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))},250);return}else p.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}const J=()=>{setTimeout(()=>{let y=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");y&&y.forEach((g,z)=>{if(g.innerText.includes("Lyrics")){if(g.innerText.includes("(")){let $=g.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if(($==null?void 0:$.includes("live"))||($==null?void 0:$.includes("mix"))||($==null?void 0:$.includes("remix"))){g.parentElement.parentElement.parentElement.remove();return}}let S=g.innerText.split("Lyrics")[0];if(S=S.replaceAll("\u2013","-"),!w.isMostlyEnglish(S)){g.parentElement.parentElement.parentElement.remove();return}g.innerHTML=`<strong>${S.split("-")[0]}</strong> - <span>${S.split("-")[1]}</span>`;const se={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};g.nodeName!=="A"&&g.parentElement.parentElement.parentElement.addEventListener("click",()=>{U(g,S,se)}),g.style.display="block"}else g.innerText.includes("Lyrics")||g.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&g.parentElement.parentElement.parentElement.remove()})},50)},U=(y,g,z)=>{if(y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",r.addRecordMode===!0){r.addRecord&&r.addRecord(g),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",w.clearGsc(),s(" ");return}D.title.replaceAll(" ","")==g.replaceAll(" ","")&&(y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="all",w.clearGsc()),D.title.replaceAll(" ","")!=g.replaceAll(" ","")&&D.getSongLyrics(z,g),s(g),location.hash!="#/"&&d("/")};return c("div",{className:t,children:[!l&&!r.addRecordMode&&e(De,{size:r.size,id:"outlined-search",label:n?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8":e(Fe,{size:18}),type:"search",className:r.locat=="main"?"main-input":"top-input",onChange:n?I:null,autoFocus:!1,autoComplete:"off",placeholder:"GOOGLE  \u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA",value:a}),!l&&r.addRecordMode&&e(De,{label:" \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E8 +",type:"search",className:"add-record-input",onChange:n?I:null,autoFocus:!1,autoComplete:"off",placeholder:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA GOOGLE",value:a,fullWidth:!0,variant:"filled"}),e("div",{id:"gcse-my-wrapper",className:r.addRecordMode&&"gcse-my-wrapper-add-record-mode",children:e("div",{className:"gcse-search"})})]})}const he=x(er)`

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

`;function tr({className:t,...r}){const n=ne(),u=()=>{r.changeColors()};return e("div",{id:"",className:t,children:e(M,{onClick:()=>u(),children:n.palette.mode==="dark"?e(je,{color:"primary"}):e(Je,{})})})}const ze=x(tr)`
  text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;
`,rr=({className:t,...r})=>{var C,_,N,I,P,J,U,y,g;const[n,u]=i.exports.useState(!1),a=ne(),s=i.exports.useContext(oe),l=i.exports.useContext(W),o=i.exports.useContext(K),d=i.exports.useContext(ce),D=i.exports.useContext(H),p=He();i.exports.useEffect(()=>{u(!1),window.scrollTo(0,0),o.closeBanner("error")},[p,l.title]),i.exports.useEffect(()=>{u(!1),o.closeBanner("error")},[s.open]);const E=()=>{o.closeBanner("error"),s.open?s.closeDrawer():s.openDrawer(!0,"left","temporary")};return c(ke,{position:"sticky",className:t,sx:{backgroundColor:a.palette.primary.main,color:a.palette.secondary.dark},children:[d.main.open&&e(Qt,{color:d.main.color}),e(Ne,{maxWidth:!1,children:c(Ae,{disableGutters:!0,children:[e(R,{children:e(M,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:E,children:s.open?e(me,{className:"burger-icon"}):e(Ie,{variant:"dot",invisible:!D.badge,children:e(Ge,{className:"burger-icon"})})})}),(((C=l.lines)==null?void 0:C[0])||p.pathname!=="/")&&e(B,{children:p.pathname!=="/wish-list"&&c(B,{children:[e(M,{className:"mui-search-icon-wrapper",onClick:()=>u(!n),children:e(We,{className:"mui-search-icon"})}),e(R,{className:n&&"collapse-search-box",children:e(pe,{className:"search-ctr-collapse",orientation:"horizontal",in:n,collapsedSize:0,children:n&&e(he,{locat:"top",size:"small",setTopSearchBar:()=>{u()}})})})]})}),!n&&e(V,{to:"/",onClick:()=>{},children:c(k,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",style:{color:a.palette.secondary.dark},children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",style:{color:a.palette.secondary.main},children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),p.pathname==="/"&&!n&&!((_=l.lines)!=null&&_[0])&&e(ze,{changeColors:r.changeColors}),p.pathname==="/"&&!n&&((N=l.lines)==null?void 0:N[0])&&e(Xt,{})]})}),e(pe,{in:(I=o.error)==null?void 0:I.open,children:c(le,{severity:"error",className:"error-alert",action:((P=o.error)==null?void 0:P.action)&&e(te,{padding:"7px",href:(J=o.error)==null?void 0:J.action.actionHref,target:"_blank",rel:"noopener noreferrer",children:(U=o.error)==null?void 0:U.action.actionText}),onClose:()=>{o.closeBanner("error")},children:[e(Te,{children:(y=o.error)==null?void 0:y.title}),(g=o.error)==null?void 0:g.message]})})]})},$e=x(rr)`
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
`;function nr({className:t,...r}){return e("div",{className:t,children:r.children})}const or=x(nr)`
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
  
`;function sr({className:t}){return i.exports.useEffect(()=>{},[]),e("div",{id:"FOOTER",className:t,children:c(v,{container:!0,rowSpacing:6,columnSpacing:2,children:[c(v,{item:!0,xs:12,sm:4,children:[c(j,{children:[e(Ue,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(L,{component:te,href:"mailto:meturgamusic@gmail.com",children:e(O,{primary:"MeturgaMusic@gmail.com"})}),e(L,{component:te,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(O,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(j,{children:e(L,{component:te,href:"https://basssites.com",className:"built-by",children:e(O,{primary:" \xA9 BassSites 2023 "})})})]}),e(v,{item:!0,xs:12,sm:4})]})})}const ar=x(sr)`
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

`;function ir({className:t,...r}){const n=i.exports.useContext(H);ne();const u=[{name:"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9",url:"/history",icon:e(qe,{className:"side-icons"})},{name:"\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC ",url:"/exercise",icon:e(Ie,{variant:"dot",invisible:!n.badge,color:"error",children:e(Ze,{className:"side-icons"})})},{name:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E8\u05D9\u05DD",url:"/wish-list",icon:e(Ve,{className:"side-icons"}),chip:e(ie,{className:"pages-list-chip",label:"\u05D7\u05D3\u05E9!",color:"error",variant:"outlined",size:"small"})}];return c(j,{className:t,sx:{maxWidth:"320px"},children:[e(le,{severity:"warning",children:"\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D3\u05E2\u05EA: \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD, \u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05E9\u05DE\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9\xA0\u05D1\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA\xA0\u05D0\u05DC\u05D5"}),u.map((a,s)=>e(V,{to:a.url,className:"nav-link",children:c(L,{children:[c(F,{children:[e(re,{children:a.icon}),e(O,{primary:a.name}),a.chip&&a.chip]}),e(Z,{})]})},s)),e(V,{to:"/spotify-extension",className:"nav-link",children:c(L,{sx:{backgroundColor:"lightGray"},children:[c(F,{children:[e(re,{children:e(Xe,{className:"side-icons",sx:{rotate:"-90deg"}})}),e(O,{primary:"\u05EA\u05D5\u05E1\u05E3 \u05DC\u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9",primaryTypographyProps:{style:{color:"black"}}}),e(ie,{className:"pages-list-chip extension-chip",label:"\u05D1\u05E7\u05E8\u05D5\u05D1!",color:"secondary",variant:"outlined",size:"small"})]}),e(Z,{})]})}),c(L,{children:[e(F,{onClick:r.changeColors,sx:{textAlign:"center",justifyContent:"center"},children:e(ie,{icon:e(ze,{changeColors:r.changeColors}),className:"pages-list-chip extension-chip",label:"\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4",color:"secondary",variant:"outlined",size:"large"})}),e(Z,{})]})]})}const lr=x(ir)`

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
`;function ur({className:t,...r}){const n=i.exports.useContext(oe);return e(Le,{className:t,anchor:n.anchor,open:n.open,variant:n.permanent,onClose:()=>{n.closeDrawer()},children:e(R,{className:"drawer-layout",role:"presentation",onClick:()=>{n.closeDrawer()},children:e(lr,{changeColors:r.changeColors})})})}const cr=x(ur)` 

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
`,ue=240,be=t=>({width:ue,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),Se=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),dr=x("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),pr=x(ke,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{marginLeft:ue,width:`calc(100% - ${ue}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),mr=x(Le,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({width:ue,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...r&&{...be(t),"& .MuiDrawer-paper":be(t)},...!r&&{...Se(t),"& .MuiDrawer-paper":Se(t)}}));function gr(){const t=ne(),[r,n]=i.exports.useState(!1),u=()=>{n(!0)},a=()=>{n(!1)};return c(R,{sx:{display:"flex"},children:[e(Ke,{}),e(pr,{position:"fixed",open:r,children:c(Ae,{children:[e(M,{color:"inherit","aria-label":"open drawer",onClick:u,edge:"start",sx:{marginRight:5,...r&&{display:"none"}},children:e(Qe,{})}),e($e,{})]})}),c(mr,{variant:"permanent",open:r,children:[e(dr,{children:e(M,{onClick:a,children:t.direction==="rtl"?e(Ye,{}):e(et,{})})}),e(Z,{}),e(j,{children:["Inbox","Starred","Send email","Drafts"].map((s,l)=>e(L,{disablePadding:!0,sx:{display:"block"},children:c(F,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(re,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:l%2===0?e(fe,{}):e(xe,{})}),e(O,{primary:s,sx:{opacity:r?1:0}})]})},s))}),e(Z,{}),e(j,{children:["All mail","Trash","Spam"].map((s,l)=>e(L,{disablePadding:!0,sx:{display:"block"},children:c(F,{sx:{minHeight:48,justifyContent:r?"initial":"center",px:2.5},children:[e(re,{sx:{minWidth:0,mr:r?3:"auto",justifyContent:"center"},children:l%2===0?e(fe,{}):e(xe,{})}),e(O,{primary:s,sx:{opacity:r?1:0}})]})},s))})]})]})}x(gr)`
  
`;function hr({className:t}){const[r,n]=i.exports.useState(!0),u=()=>{n(!1)};return c(tt,{id:"main-modal-root",className:t,open:r,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(rt,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(nt,{children:e(ot,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(st,{children:e(ee,{onClick:u,children:"Close"})})]})}x(hr)`
  
`;function Dr({className:t,...r}){const[n,u]=i.exports.useState(!0);return e(at,{className:t,open:n,onClose:()=>{u(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}x(Dr)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${t=>t.theme.palette.primary.main};
  }
`;function fr({className:t}){const r=it({target:window,disableHysteresis:!0,threshold:100});return e(lt,{id:"",className:t,in:r,children:e(R,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1300},children:e(ut,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(ct,{htmlColor:"white"})})})})}const xr=x(fr)`
  width: 50px;
  height: 50px;
`;function Er({className:t}){var a;const[r,n]=i.exports.useState(!1),u=i.exports.useContext(W);return ne(),e(B,{children:!r&&u.videoId&&((a=u.lines)==null?void 0:a[0])&&c(dt,{sx:{display:"flex"},className:t,children:[e(R,{sx:{display:"flex",flexDirection:"column"},children:e(R,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:e(M,{onClick:()=>n(!0),children:e(me,{className:"remove-icon"})})})}),e(pt,{children:e("iframe",{src:`https://www.youtube.com/embed/${u.videoId}`,title:"video",allowFullScreen:!1,width:"250",height:"135",rel:"0"}),component:"div",image:"/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]})})}const yr=x(Er)`
   position: fixed;
   bottom: 32px;
   left: 80px;
   z-index: 1300;
   
   @media (max-width: 600px) {
       left: 10px;
   }
`;function br(t){const[r,n]=i.exports.useState(t.theme.palette.primary.main);return i.exports.useEffect(()=>{n(t.theme.palette.primary.main)},[t.theme]),c(mt,{children:[e("title",{children:t.currTitle}),e("meta",{name:"theme-color",content:r}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})}function Sr({className:t,...r}){const[n,u]=i.exports.useState(!1),a=i.exports.useContext(H);i.exports.useEffect(()=>{s()&&u(!0)},[]);const s=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(d=>d.word.toLowerCase()===r.toSave.word.toLowerCase()):!1,l=()=>{try{w.lsSaveWord(r.toSave),u(!0),a.updateBadge(1)}catch(o){o&&console.log(o)}};return e("span",{className:t,children:n?e(B,{children:r.variant==="Bookmark"?e(Ee,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(Ee,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(B,{children:r.variant==="Bookmark"?e(B,{children:e(gt,{className:"book-mark-top-icon",fontSize:"small",onClick:()=>l()})}):c("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>l(),children:[e(ht,{className:"book-mark-bottom-icon",fontSize:"small"}),e("span",{children:" \u05E9\u05DE\u05D5\u05E8 \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC"})]})})})}const Cr=x(Sr)`

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
`;function vr({className:t,...r}){const n=i.exports.useContext(H),u=i.exports.useContext(W),a=()=>{if(r.results[0]){let s="";return r.results.map((l,o)=>{o+1===r.results.length?s+=l:s+=l+", "}),e("p",{className:"tt-p",children:s})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(Dt,{onClickAway:r.tooltipClose,children:c("span",{className:t,children:[e(k,{className:"tt-top",color:"inherit",style:{fontSize:n.fontSize.md-2},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),r.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:n.fontSize.md-2},children:r.results[0]?e(a,{}):e(we,{className:"tt-body-linear",color:"inherit"})}),r.results[0]!=="\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"&&e(Cr,{toSave:{word:r.lyric,results:r.results,title:u.title},variant:"Star"})]})})}const wr=x(vr)`

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

`;function kr({className:t,...r}){const[n,u]=i.exports.useState(!1),[a,s]=i.exports.useState([]);i.exports.useEffect(()=>{},[]);const l=()=>{u(!0),a[0]||d()},o=()=>{u(!1)};function d(){const D="https://musicline-backend.vercel.app";let p=r.lyric.trim().toLowerCase();p=p.replaceAll(/[^a-zA-Z0-9']/g,""),p.slice(-1)==="'"&&(p=p.replaceAll("'","g")),fetch(`${D}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(p),initId:localStorage.getItem("init")})}).then(E=>E.json()).then(E=>{if(E!=null&&E.results[0]){s(E.results);return}else{s(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(E=>{s(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(E)})}return e(B,{children:e(ft,{className:t,title:e(wr,{tooltipClose:o,className:"tt-childs",lyric:r.lyric,results:a}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:3*1e3,PopperProps:{disablePortal:!1},onClose:o,open:n,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:c("span",{children:["\xA0 ",c("p",{className:"single-lyric",onClick:l,children:[" ",r.lyric," "]})]})})})}const Ce=x(kr)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function Nr({className:t,...r}){let[n,u]=_e();const a=i.exports.useContext(W),s=i.exports.useContext(H);i.exports.useEffect(()=>{u(w.titleToParams(a.title))},[a.title]);const l=()=>{a.setAbort(!0),sessionStorage.removeItem("currLines"),a.setLines([]),a.setTitle(""),u("")};return e(xt,{elevation:3,className:t,children:c(v,{container:!0,rowSpacing:1,columnSpacing:0,children:[c(v,{item:!0,xs:12,className:"l-body-top",children:[e(M,{onClick:()=>l(),children:e(me,{className:"remove-icon"})}),a.translatedBy&&e(ie,{className:"trans-by-chip",label:"\u05EA\u05D5\u05E8\u05D2\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA "+a.translatedBy,color:"default",variant:"filled",size:"small"}),e(k,{variant:"h6",component:"h3",style:{fontSize:s.fontSize.lg,direction:"ltr"},children:a.title&&a.title.split(" ").map((o,d)=>e(Ce,{lyric:o,open:!1},Y()))})]}),a.lines.map((o,d)=>{var D;return o.src.includes("[")&&(o.trans="   ",o.src=o.src.replaceAll("[","| "),o.src=o.src.replaceAll("]"," |")),c(v,{item:!0,xs:12,children:[d>0&&o.src.includes("|")&&c(B,{children:[e("br",{}),e("br",{})]}),e(R,{className:"lyrics-line en-line",style:{fontSize:s.fontSize.md},children:o.src.split(" ").map((p,E)=>(p.slice(-1)==="'"&&(p=p.replaceAll("'","g")),e(Ce,{lyric:p,open:d==1&E==1},Y())))}),e(R,{className:"lyrics-line he-line",style:{fontSize:s.fontSize.md},children:e(B,{children:(D=o.trans)!=null&&D.length?o.trans.split(" ").map((p,E)=>{if(o.trans!=="   ")return c("small",{className:"single-trans",children:[p," \xA0"]},Y())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},Y())})]})})}const Ar=x(Nr)`
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
`;function Ir({className:t}){var d,D,p,E;const r=i.exports.useContext(W),n=i.exports.useContext(K),u=i.exports.useContext(oe),[a,s]=_e(),l=a.get("song");i.exports.useEffect(()=>{u.closeDrawer(),n.error&&n.closeBanner("error"),l&&l.includes("_")&&o()},[]);function o(){let C=l;C=C.replaceAll("-"," ");const _={artistName:encodeURI(` ${C.split("_")[0]} `),songName:encodeURI(` ${C.split("_")[1]} `)};C=C.replaceAll("_"," - "),r.getSongLyrics(_,C)}return c("div",{className:t,children:[!((d=r.lines)!=null&&d[0])&&e(Ne,{className:"home-top",maxWidth:!1,children:c(v,{container:!0,className:"home-t-container",children:[!((D=r.lines)!=null&&D[0])&&e(v,{item:!0,xs:12,sm:6,children:c(k,{variant:"h1",className:"page-h1",children:["\u05E9\u05D9\u05E8\u05D9\u05DD ",e("br",{className:"h1-br"}),"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"]})}),c(v,{item:!0,xs:12,sm:6,children:[!((p=r.lines)!=null&&p[0])&&c(k,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-start-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA"}),e("span",{className:"h3-start h3-start-two",children:"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05EA\u05E8\u05D2\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8"}),e("span",{className:"h3-middle",children:"\u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("span",{className:"h3-bottom",children:"\u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8"})]}),e(he,{locat:"main",size:"large"}),e(k,{children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"})]})]})}),((E=r.lines)==null?void 0:E[0])&&c(v,{container:!0,spacing:1,children:[e(v,{item:!0,md:12,lg:9,children:e(Ar,{className:"lyrics-body"})}),e(v,{item:!0,xs:12,lg:3})]})]})}const Tr=x(Ir)`
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
    
`;function Lr({className:t,...r}){const n=()=>{r.deleteOneSong(r.song_id)};return e(L,{className:t,secondaryAction:e(M,{onClick:()=>{n()},edge:"end","aria-label":"delete",children:e(ge,{})}),children:e(O,{primary:e(V,{to:"/"+w.titleToParams(r.title),children:e(F,{children:e(k,{children:r.title})})})})})}const _r=x(Lr)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${t=>t.theme.palette.secondary.dark};
  }
`;function zr({className:t}){const[r,n]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_songs"))||[]),u=s=>{let l=r.filter(o=>o.id!==s);n(l),localStorage.setItem("meturgamm_songs",JSON.stringify(l))},a=()=>{n([]),localStorage.setItem("meturgamm_songs",JSON.stringify([]))};return c("div",{className:t,children:[r[0]&&c(R,{children:[e(ee,{className:"d-all-btn",component:"label",onClick:()=>{a()},variant:"outlined",startIcon:e(Et,{}),children:"\u05DE\u05D7\u05E7 \u05D4\u05DB\u05DC"}),e(j,{sx:{width:"100%"},component:"div",children:e(v,{container:!0,spacing:1,children:r.map((s,l)=>e(v,{item:!0,xs:12,md:6,children:e(_r,{title:s.title,song_id:s.id,deleteOneSong:u})},s.title+l))})})]}),!r[0]&&e(k,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4"})]})}const $r=x(zr)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${t=>t.theme.palette.primary.dark};
   }
`;function Br({className:t}){const[r,n]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_wish"))||[]);function u(s){const l={title:s,id:r.length.toString()};localStorage.getItem("meturgamm_wish")||localStorage.setItem("meturgamm_wish",JSON.stringify([]));const o=JSON.parse(localStorage.getItem("meturgamm_wish"));o.unshift(l),o.length>=500&&r.shift(),localStorage.setItem("meturgamm_wish",JSON.stringify(o)),n(o)}const a=s=>{let l=r.filter(o=>o.id!==s);n(l),localStorage.setItem("meturgamm_wish",JSON.stringify(l))};return c(j,{className:t,subheader:e(he,{addRecordMode:!0,locat:"main",addRecord:u}),children:[e(v,{container:!0,spacing:1,children:r.map((s,l)=>e(v,{item:!0,xs:12,md:6,children:e(L,{secondaryAction:e(M,{onClick:()=>{a(s.id)},edge:"end","aria-label":"deletcoe",children:e(ge,{})}),children:e(O,{sx:{border:"1px solid #e8e8e8",borderRadius:"3px"},children:e(V,{to:"/"+w.titleToParams(s.title),children:c(F,{children:[e(yt,{color:"disabled",fontSize:"inherit",sx:{marginInlineEnd:"4px"}}),e(k,{children:s.title})]})})})},l)},s.title+l))}),!r[0]&&e(k,{sx:{margin:"100px",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05E9\u05D9\u05E8\u05D9\u05DD"})]})}const Or=x(Br)`
  min-height: 70vh;
  padding-top: 3px;

  p{
    color:  ${t=>t.theme.palette.secondary.dark};
  }

  svg{
    color:  ${t=>t.theme.palette.primary.contrastText};
  }
`;function Pr({className:t,...r}){const[n,u]=i.exports.useState(r.lyric),[a,s]=i.exports.useState(!1),l=()=>{s(!a)},o=()=>{r.deleteOneWord(r.lyric.id)},d=()=>{if(n.results[0]){let D="";return n.results.map((p,E)=>{E+1===n.results.length?D+=p:D+=p+", "}),e("span",{className:"inline-results-p",children:D})}else return null};return c("span",{className:t,children:[e(L,{secondaryAction:e(M,{onClick:()=>{o()},edge:"end","aria-label":"delete",children:e(ge,{})}),children:c(F,{onClick:l,children:[e(re,{children:e(bt,{})}),e(O,{primary:n.word}),a?e(St,{}):e(Ct,{})]})}),e(pe,{in:a,timeout:"auto",unmountOnExit:!0,children:e(j,{component:"div",disablePadding:!0,children:e(L,{sx:{pl:4},children:e(O,{primary:e(B,{children:e(k,{sx:{display:"inline"},component:"span",children:e(d,{})})}),secondary:e(F,{component:"span",sx:{mt:"10px"},children:e(V,{to:"/"+w.titleToParams(n.title),children:e(te,{component:"button",children:e("i",{children:n.title})})})})})})})}),e(Z,{})]})}const Mr=x(Pr)`
  *{
    background-color: #e8e8e818;
  } 
`;function Rr({className:t}){const r=i.exports.useContext(H),[n,u]=i.exports.useState(JSON.parse(localStorage.getItem("meturgamm_words"))||[]);i.exports.useEffect(()=>{r.updateBadge(!1)},[]);const a=s=>{let l=n.filter(o=>o.id!==s);u(l),localStorage.setItem("meturgamm_words",JSON.stringify(l))};return c("div",{className:t,children:[n[0]&&e(j,{sx:{width:"100%"},component:"div","aria-labelledby":"nested-list-subheader",children:e(v,{container:!0,spacing:1,children:n.map((s,l)=>e(v,{item:!0,md:3,lg:3,xs:12,children:e(Mr,{lyric:s,deleteOneWord:a})},s.word+l))})}),!n[0]&&e(k,{sx:{margin:"auto",marginTop:"20%",textAlign:"center"},children:"\u05D0\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05D9\u05D2"})]})}const Fr=x(Rr)`
   min-height: 80vh;
`;var jr="/assets/extensionImage.9b86a50e.png";function Jr({className:t}){return e("div",{className:t,style:{backgroundImage:`url(${jr.toString()})`},children:e(v,{container:!0,spacing:4,children:e(v,{item:!0,xs:12,sm:!0,container:!0,children:e(v,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,className:"headers-container",children:c(v,{item:!0,xs:!0,children:[e(k,{gutterBottom:!0,variant:"h2",component:"h1",children:"\u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05DC\u05E0\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05E1\u05E4\u05D5\u05D8\u05D9\u05E4\u05D9\u05D9."}),e(k,{variant:"h2",gutterBottom:!0,className:"middle-h2",children:"\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E1\u05DA \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DC\u05DA \u05D4\u05E9\u05D9\u05E8, \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD, \u05DC\u05DC\u05D0 \u05D0\u05D9\u05D1\u05D5\u05D3 \u05D4\u05DE\u05E7\u05D5\u05E8."}),e(k,{variant:"h3",children:"\u05D1\u05E7\u05E8\u05D5\u05D1!"})]})})})})})}const Hr=x(Jr)`
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

`;function Gr({className:t}){return c("div",{className:t,children:[e(k,{variant:"h2",className:"page-h2",children:"404"}),e(k,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Wr=x(Gr)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;function Ur({className:t}){var _,N;const r=i.exports.useContext(oe);i.exports.useContext(ce);const n=i.exports.useContext(K);ye("(max-width: 600px)");const[u,a]=i.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[s,l]=i.exports.useState(de),o=ye("(prefers-color-scheme: dark)"),d=vt({key:"muirtl",stylisPlugins:[Tt,Lt]});i.exports.useEffect(()=>{D()},[]),i.exports.useEffect(()=>{localStorage.getItem("preferedDark")?localStorage.getItem("preferedDark")==="true"&&l(Q):l(o?Q:de)},[o]);const D=()=>{w.directParamsToHash(),p(),E()},p=()=>{const I="https://musicline-backend.vercel.app";localStorage.getItem("init")||localStorage.setItem("init",JSON.stringify("INITID:"+Y()));let P=localStorage.getItem("init");fetch(`${I}/?initId=`+P)},E=()=>{w.getMobileOS()&&n.createBanner("infoSnackbar","error","","\u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E2\u05DC\u05D5\u05DC \u05E9\u05DC\u05D0 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D0\u05E4\u05DC (\u05D0\u05D9\u05D9\u05E4\u05D5\u05DF, \u05DE\u05E7\u05D1\u05D5\u05E7 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)")},C=()=>{let I=s===Q?de:Q;l(I),localStorage.setItem("preferedDark",I===Q?"true":"false")};return e("div",{className:t,children:e(wt,{theme:s,children:e(kt,{value:d,children:c(Nt,{children:[e(br,{currTitle:u,theme:s}),c(or,{children:[e($e,{className:"header",changeColors:C}),((_=n.main)==null?void 0:_.open)&&c(le,{severity:"warning",className:"main-alert",children:[e(Te,{children:n.main.title}),n.main.message]}),c(At,{children:[e(q,{path:"/",element:e(Tr,{className:"page",rank:1})}),e(q,{path:"/Exercise",element:e(Fr,{className:"page",rank:1})}),e(q,{path:"/History",element:e($r,{className:"page",rank:1})}),e(q,{path:"/Wish-list",element:e(Or,{className:"page",rank:1})}),e(q,{path:"/Spotify-extension",element:e(Hr,{className:"page",rank:1})}),e(q,{path:"*",element:e(Wr,{className:"page"})})]}),r.open&&e(cr,{className:"drawer",changeColors:C}),((N=n.infoSnackbar)==null?void 0:N.open)&&e(It,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(le,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(ar,{}),e(xr,{}),e(yr,{})]})]})})})})}const qr=x(Ur)`
  height: fit-content;
  min-height: 700px;
`,Zr=[$t,Ot,Bt,Yt,Zt];function Vr(t){return e(B,{children:Zr.reduceRight((r,n)=>e(n,{children:r}),t.children)})}_t.render(e(X.StrictMode,{children:e(Vr,{children:e(qr,{className:"app"})})}),document.getElementById("root"));
