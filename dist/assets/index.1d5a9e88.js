var lu=Object.defineProperty,cu=Object.defineProperties;var Eu=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var tu=Object.prototype.hasOwnProperty,ru=Object.prototype.propertyIsEnumerable;var eu=(u,t,o)=>t in u?lu(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o,f=(u,t)=>{for(var o in t||(t={}))tu.call(t,o)&&eu(u,o,t[o]);if(G)for(var o of G(t))ru.call(t,o)&&eu(u,o,t[o]);return u},S=(u,t)=>cu(u,Eu(t));var L=(u,t)=>{var o={};for(var n in u)tu.call(u,n)&&t.indexOf(n)<0&&(o[n]=u[n]);if(u!=null&&G)for(var n of G(u))t.indexOf(n)<0&&ru.call(u,n)&&(o[n]=u[n]);return o};import{c as Du,R as F,r as i,j as e,a as m,M as du,B as pu,b as P,d as mu,e as hu,s as b,L as su,f as X,N as uu,g as q,h as U,i as gu,A as fu,k as R,I as xu,l as Cu,m as yu,C as bu,T as Su,n as $,o as Au,p as Y,q as iu,G as z,t as vu,u as V,v as wu,w as ku,D as Lu,x as Nu,y as Tu,z as Bu,E as zu,F as Iu,H as au,J as _,K as ou,O as $u,P as Mu,Q as _u,S as Fu,U as H,V as Ou,W as Pu,Z as Ru,X as ju,Y as Ju,_ as Gu,$ as Hu,a0 as qu,a1 as Uu,a2 as Wu,a3 as K,a4 as Zu,a5 as Qu,a6 as Vu,a7 as Ku}from"./vendor.8a562567.js";const Xu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))n(D);new MutationObserver(D=>{for(const a of D)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(D){const a={};return D.integrity&&(a.integrity=D.integrity),D.referrerpolicy&&(a.referrerPolicy=D.referrerpolicy),D.crossorigin==="use-credentials"?a.credentials="include":D.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(D){if(D.ep)return;D.ep=!0;const a=o(D);fetch(D.href,a)}};Xu();const Yu=Du({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),u0=Du({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#darkgray",light:"#white",dark:"#black",contrastText:"#white"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),W=F.createContext(void 0);function e0(u){const[t,o]=i.exports.useState({}),a={openDrawer:(l,r,s="temporary",x)=>{o({open:l,anchor:r,permanent:s,child:x})},closeDrawer:(l,r,s="temporary",x)=>{o({open:l,anchor:r,permanent:s,child:x})}};return e(W.Provider,{value:f(f({},t),a),children:u.children})}const Z=F.createContext(void 0);function t0(u){const[t,o]=i.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),l={createLoader:(r,s)=>{t[r]&&o(S(f({},t),{[r]:void 0})),o(S(f({},t),{[r]:{open:!1,color:s||"inherit"}}))},openLoader:r=>{t[r]?o(S(f({},t),{[r]:S(f({},t[r]),{open:!0})})):console.error("Loader"+r+"does'nt exist")},closeLoader:r=>{t[r]?o(S(f({},t),{[r]:S(f({},t[r]),{open:!1})})):console.error("Loader"+r+"does'nt exist")}};return e(Z.Provider,{value:f(f({},t),l),children:u.children})}const j=F.createContext(void 0);function r0(u){const[t,o]=i.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},infoSnackbar:{open:!0,severity:"error",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),l={createBanner:(r,s,x,C)=>{t[r]&&o(S(f({},t),{[r]:void 0})),o(S(f({},t),{[r]:{open:!0,severity:s||"success",title:x||"",message:C||""}}))},openBanner:r=>{t[r]?o(S(f({},t),{[r]:S(f({},t[r]),{open:!0})})):console.error("Banner"+r+"does'nt exist")},closeBanner:r=>{t[r]?o(S(f({},t),{[r]:S(f({},t[r]),{open:!1})})):console.error("Banner"+r+"does'nt exist")}};return e(j.Provider,{value:f(f({},t),l),children:u.children})}function o0(u){const[t]=i.exports.useState(u.theme.palette.primary.main);return e("div",{className:"wrapper",children:m(du,{children:[e("title",{children:u.currTitle}),e("meta",{name:"theme-color",content:t}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}const n0=u=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("meturgamm_songs"));t.push(u),t.length>=500&&t.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(t))},D0=u=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(o=>o.title.toLowerCase()===u.toLowerCase()):!1,s0=()=>{let u=document.querySelector(".gsst_a");u&&u.dispatchEvent(new Event("click"))},i0=()=>{let u=!1;const t=navigator.userAgent;return/android/i.test(t)?u=!1:(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(u=!0),u},a0=u=>{if(/[\u0590-\u05FF]/.test(u)){var t={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let o=0;o<u.length;o++)t[u[o]]?u=u.replace(new RegExp(u[o],"g"),t[u[o]]):u=u.replace(new RegExp(u[o],"g"),"");return console.log(u),u}else return u};function l0(u){let t=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(u.match(t)||[]).length/u.length>.8}var T={lsSaveSong:n0,lsFindSong:D0,clearGsc:s0,getMobileOS:i0,keyboardHEENSwitcher:a0,isMostlyEnglish:l0};const Q=F.createContext(void 0);function c0(u){const t=JSON.parse(localStorage.getItem("fontsize")),[o,n]=i.exports.useState({fontSize:{sm:Number(t==null?void 0:t.sm)||22,md:Number(t==null?void 0:t.md)||25,lg:Number(t==null?void 0:t.lg)||27},colors:"pink"}),D=()=>{o.fontSize.md<60&&(n(S(f({},o),{fontSize:{sm:o.fontSize.sm+1,md:o.fontSize.md+1,lg:o.fontSize.lg+1}})),l())},a=()=>{o.fontSize.sm>7&&(n(S(f({},o),{fontSize:{sm:o.fontSize.sm-1,md:o.fontSize.md-1,lg:o.fontSize.lg-1}})),l())};function l(){localStorage.setItem("fontsize",JSON.stringify({sm:o.fontSize.sm,md:o.fontSize.md,lg:o.fontSize.lg}))}function r(){localStorage.setItem("colors_mode",o.colors)}function s(C){n(S(f({},o),{colors:C})),r()}const x={reduceFontSize:a,increaseFontSize:D,setColors:s};return e(Q.Provider,{value:f(f({},o),x),children:u.children})}function E0({className:u}){const t=i.exports.useContext(Q);return e("div",{id:"",className:u,children:m(pu,{className:"button-group",children:[e(P,{"aria-label":"reduce",onClick:()=>{t.reduceFontSize()},children:e(mu,{fontSize:"small"})}),e(P,{className:"font-size-disabled",disabled:!0,children:t.fontSize.md}),e(P,{"aria-label":"increase",onClick:()=>{t.increaseFontSize()},children:e(hu,{fontSize:"small"})})]})})}const d0=b(E0)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${u=>u.theme.palette.secondary.light};
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

`;function p0(o){var n=o,{className:u}=n,t=L(n,["className"]);const[D,a]=i.exports.useState(0);return i.exports.useEffect(()=>{const l=setInterval(()=>{a(r=>{if(r===100)return 0;const s=Math.random()*10;return Math.min(r+s,100)})},220);return()=>{clearInterval(l)}},[]),e(su,{variant:"determinate",value:D,color:t.color})}const m0=b(p0)`
  
`,h0=[];function g0(){return e(X,{children:h0.map((u,t)=>e(uu,{to:u.url,children:m(q,{button:!0,children:[e(U,{primary:u.name}),e(gu,{children:e(fu,{})})]},u.name)},t))})}b(g0)`
  
`;const O=F.createContext(void 0);function f0(u){const t=i.exports.useContext(Z),o=i.exports.useContext(j),[n,D]=i.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[a,l]=i.exports.useState(""),[r,s]=i.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[x,C]=i.exports.useState(!1),[A,v]=i.exports.useState(!1);i.exports.useEffect(()=>{r[0]&&E()},[r,x]);const N="https://musicline-backend.vercel.app",k=(d,g)=>{v(!0),g=g.replace(/[\])}[{(]/g,"").trim();let p=document.querySelectorAll(".gsc-expansionArea")[0];t.openLoader("main"),!h(g,p)&&fetch(`${N}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:d})}).then(c=>c.json()).then(c=>{if(t.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),p&&(p.style.pointerEvents="all"),(c==null?void 0:c.combined)&&Array.isArray(c==null?void 0:c.combined))D(g),l(c.id),s(c.combined),T.lsSaveSong({title:g,lines:c.combined}),T.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(c.combined)),sessionStorage.setItem("currSongTitle",g);else if(c==null?void 0:c.lyrics){D(g);let I=c.lyrics,w=[];I.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&(T.isMostlyEnglish(M)?w.push({src:M.replace(".",""),trans:"",transError:!1}):(console.log("Not supported lang: "+M),w.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})))}),v(!1),s(w),T.clearGsc()}else v(!1),o.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8","")}).catch(c=>{v(!1),console.log(c),t.closeLoader("main"),o.createBanner("error","error","\u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8",""),p&&(p.style.pointerEvents="all")})},h=(d,g)=>{let p=T.lsFindSong(d);return p&&Array.isArray(p.newLines)?(g&&(g.style.pointerEvents="all"),D(d),s(p.newLines),T.clearGsc(),t.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(p.newLines)),sessionStorage.setItem("currSongTitle",d),!0):!1},E=()=>{A||r.every((d,g)=>!d.trans.length||d.transError?(x?y(d.src,g):B(d.src,g),!1):!0)},B=(d,g)=>{fetch(`${N}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:r,song_id:a,title:n})}).then(p=>p.json()).then(p=>{let c=[];(p==null?void 0:p.trans.length)?(p.trans.map((I,w)=>{c[w]={src:r[w].src,trans:I}}),s(c),T.lsSaveSong({title:n,newLines:c}),sessionStorage.setItem("currLines",JSON.stringify(c)),sessionStorage.setItem("currSongTitle",n)):(console.error("status is ok but azure translation missing"),C(!0))}).catch(p=>{console.log(p),C(!0)})},y=(d,g)=>{let p=[...r];fetch(`${N}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(d)})}).then(c=>c.json()).then(c=>{var I,w;(c==null?void 0:c.trans)?(p[g]={src:d,trans:c==null?void 0:c.trans},s(p),((I=r[r.length-1])==null?void 0:I.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n))):(r[g].trans===void 0?p[g]={src:d,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:r[g].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(p[g]={src:d,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),s(p),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(p)),sessionStorage.setItem("currSongTitle",n)))}).catch(c=>{var w;r[g].trans===""?p[g]={src:d,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:r[g].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(p[g]={src:d,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),s(p),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n),C(!1)),console.log(c)})},J={getSongLyrics:k,getFullTrans:B,checkNextTrans:E,setLines:s};return e(O.Provider,{value:f({title:n,lines:r},J),children:u.children})}function x0({className:u}){return i.exports.useContext(O),e(R,{className:u,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>e(uu,{to:o.url,children:e(P,{sx:{my:2},children:o.name})},o.name))})}b(x0)`
  
`;function C0(o){var n=o,{className:u}=n,t=L(n,["className"]);const D=()=>{t.changeColors()};return e("div",{id:"",className:u,children:e(xu,{onClick:()=>D(),children:e(Cu,{className:"mui-rounded-icon"})})})}b(C0)`
text-align: end;
  margin-inline-end: 25px;
  /* height: 30px; */
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${u=>u.theme.mode==="light"?"#000":"#fff"};
    color: ${u=>u.theme.mode==="light"?"#fff":"#000"};
    border-radius: 12px;
  }
`;const y0=o=>{var n=o,{className:u}=n,t=L(n,["className"]);var s,x,C,A;i.exports.useContext(W);const D=i.exports.useContext(O),a=i.exports.useContext(j),l=i.exports.useContext(Z),r=function(){sessionStorage.removeItem("currLines"),location.reload()};return m(yu,{position:"sticky",className:u,children:[l.main.open&&e(m0,{color:l.main.color}),e(bu,{maxWidth:"xl",children:m(Su,{disableGutters:!0,children:[e(uu,{to:"/",onClick:()=>{r()},children:m($,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),((s=D.lines)==null?void 0:s[0])&&e(d0,{})]})}),e(Au,{in:(x=a.error)==null?void 0:x.open,children:m(Y,{severity:"error",className:"error-alert",onClose:()=>{a.closeBanner("error")},children:[e(iu,{children:(C=a.error)==null?void 0:C.title}),(A=a.error)==null?void 0:A.message]})})]})},b0=b(y0)`
  background-color: ${u=>u.theme.palette.primary.dark};
  color: ${u=>u.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${u=>u.theme.palette.primary.main};
  }

  a{
    color: ${u=>u.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${u=>u.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${u=>u.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${u=>u.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }
`;function S0(o){var n=o,{className:u}=n,t=L(n,["className"]);return e("div",{className:u,children:t.children})}const A0=b(S0)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${u=>u.theme.palette.secondary.light};

  color: ${u=>u.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    font-size: 140px; 
    font-weight: 100;
    color: ${u=>u.theme.palette.primary.contrastText};
    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 46px;
      font-weight: 300;
    }
  }

  .page-h3{
    margin: 40px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 400;
    color: ${u=>u.theme.palette.primary.contrastText};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 0px  0px;
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
    background-color: ${u=>u.theme.palette.secondary.dark};
    color: ${u=>u.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
  
`;function v0({className:u}){return i.exports.useEffect(()=>{window.adsbygoogle=window.adsbygoogle||[]},[]),e("div",{id:"FOOTER",className:u,children:e(z,{container:!0,rowSpacing:6,columnSpacing:2,children:m(z,{item:!0,xs:12,sm:4,children:[m(X,{children:[e(vu,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(q,{component:V,href:"mailto:meturgamusic@gmail.com",children:e(U,{primary:"MeturgaMusic@gmail.com"})}),e(q,{component:V,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(U,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(X,{children:e(q,{component:V,href:"https://basssites.com",className:"built-by",children:e(U,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const w0=b(v0)`
  /* color: ${u=>u.theme.palette.primary.contrastText}; */
  background-color: ${u=>u.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: unset;
  }

  li span{
    color: white;
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: ${u=>u.theme.palette.secondary.dark};
    color: white;
    margin: unset;
  }

  .built-by{
    color: white;
  }

`;function k0(o){var n=o,{className:u}=n,t=L(n,["className"]);const D=i.exports.useContext(W);return e(wu,{className:u,anchor:D.anchor,open:D.open,variant:D.permanent,onClose:()=>{D.closeDrawer(!1)},children:e(R,{className:"drawer-layout",sx:{width:D.anchor==="top"||D.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{D.closeDrawer(!1)},children:e(D.child,{})})})}const L0=b(k0)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${u=>u.theme.palette.primary.light};
    color: ${u=>u.theme.palette.secondary.main};
  }

  svg{
    color: ${u=>u.theme.palette.secondary.main};
  }

  a{
    color: ${u=>u.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function N0({className:u}){const[t,o]=i.exports.useState(!0),n=()=>{o(!1)};return m(ku,{id:"main-modal-root",className:u,open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(Lu,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(Nu,{children:e(Tu,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Bu,{children:e(P,{onClick:n,children:"Close"})})]})}b(N0)`
  
`;function T0(o){var n=o,{className:u}=n,t=L(n,["className"]);const[D,a]=i.exports.useState(!0);return e(zu,{className:u,open:D,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}b(T0)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function B0({className:u}){return e("div",{id:"",className:u})}const z0=b(B0)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function I0({className:u}){const[t,o]=i.exports.useState(!1),[n,D]=i.exports.useState(""),[a,l]=i.exports.useState(!1),r=i.exports.useContext(O),s=i.exports.useContext(j);i.exports.useEffect(()=>{D(r.title)},[r.title]),i.exports.useEffect(()=>{x()},[]);const x=()=>{T.getMobileOS()&&l(!0)};function C(){if(T.getMobileOS()){const h=document.querySelectorAll(".gsc-control-cse")[0];h.style.visibility="visible",h.style.marginTop="90px"}}i.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))C(),A();else{let E=function(){A()};const B=document.querySelector("#gcse-my-wrapper"),y={childList:!0,attributes:!0,subtree:!1};new MutationObserver(E).observe(B,y)}}},[]);function A(){o(!0);const h=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],E={childList:!1,attributes:!0,subtree:!1};function B(){N()}new MutationObserver(B).observe(h,E)}function v(h){if(D(h.target.value),h.nativeEvent.data!==" ")k(h.target.value);else return}const N=()=>{setTimeout(()=>{let h=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");h&&h.forEach((E,B)=>{if(E.innerText.includes("Lyrics")){if(E.innerText.includes("(")){let d=E.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((d==null?void 0:d.includes("live"))||(d==null?void 0:d.includes("mix"))||(d==null?void 0:d.includes("remix"))){E.parentElement.parentElement.parentElement.remove();return}}let y=E.innerText.split("Lyrics")[0];if(y=y.replaceAll("\u2013","-"),!T.isMostlyEnglish(y)){E.parentElement.parentElement.parentElement.remove();return}E.innerHTML=`<strong>${y.split("-")[0]}</strong> - <span>${y.split("-")[1]}</span>`;const J={artistName:encodeURI(y.split("-")[0]),songName:encodeURI(y.split("-")[1])};E.nodeName!=="A"&&E.parentElement.parentElement.parentElement.addEventListener("click",d=>{var g;((g=s.error)==null?void 0:g.open)&&s.closeBanner("error"),E.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",D(y),r.getSongLyrics(J,y)}),E.style.display="block"}else E.innerText.includes("Lyrics")||E.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&E.parentElement.parentElement.parentElement.remove()})},50)};function k(h){s.error&&s.closeBanner("error");let E=document.querySelector("#gsc-i-id1"),B=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(E)if(h.length<=1){let y=document.querySelector(".gsst_a");y&&y.dispatchEvent(new Event("click"))}else if(B.test(h)){E.value=h;let y=document.querySelectorAll(".gsc-search-box button")[0];y?setTimeout(()=>{y.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{s.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let y=document.querySelector(".gsst_a");y&&y.dispatchEvent(new Event("click"))},250);return}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return m("div",{id:"",className:u,children:[!a&&e(Iu,{id:"outlined-search",label:t?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8":e(au,{size:18}),type:"search",className:"main-input",onChange:t?v:null,autoFocus:!1,autoComplete:"off",value:n}),e("div",{id:"gcse-my-wrapper",children:e("div",{className:"gcse-search"})})]})}const $0=b(I0)`

  .main-input{
    direction: rtl; // will turn to LTR, mui settings replace to opposite
  }

  *,::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  input, fieldset, label{
    color: ${u=>u.theme.palette.primary.main+"!important"};
    border-color: ${u=>u.theme.palette.secondary.contrastText+"!important"};

    font-weight: 600;
    border-width: medium;
  }

`;function M0(o){var n=o,{className:u}=n,t=L(n,["className"]);const[D,a]=i.exports.useState(t.saved),l=()=>{localStorage.getItem("meturgamm_words")||localStorage.setItem("meturgamm_words",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_words"));r.push(t.toSave),r.length>=1e3&&r.shift(),localStorage.setItem("meturgamm_words",JSON.stringify(r)),a(!0)};return e("span",{className:u,children:D?e(_,{children:t.variant==="Bookmark"?e(ou,{className:"book-mark-top-icon bm-disabled"}):e("div",{className:"book-mark-bottom-icon-wrapper bm-disabled",children:e(ou,{className:"book-mark-bottom-icon",fontSize:"small"})})}):e(_,{children:t.variant==="Bookmark"?e($u,{className:"book-mark-top-icon",onClick:()=>l()}):e("div",{className:"book-mark-bottom-icon-wrapper",onClick:()=>l(),children:e(Mu,{className:"book-mark-bottom-icon",fontSize:"small"})})})})}const _0=b(M0)`

    .book-mark-bottom-icon-wrapper{
        margin-bottom: -10px;
        margin-top: 10px;
        height: 15px;
        text-align: center;
        padding: 0.6em;
        background-color: #df808ea8;
        border-radius: 0 0 5px 3px;
        box-shadow: 0 10px 10px -8px rgba(0, 0, 0,.7);

        @media (max-width: 600px){
            padding: 0.4em;
        }

        .book-mark-bottom-icon{
            margin-top: -2px
        }

        :hover{
            background-color: ${u=>u.theme.palette.primary.main};
        }
    }

    .book-mark-top-icon{
        position: absolute;
        top: -10px;

        font-size: 12px;

        :hover{
            background-color: ${u=>u.theme.palette.primary.dark};
        }
    }

    .bm-disabled{
        pointer-events: none;
        background-color: ${u=>u.theme.palette.primary.main};
    }
`;function F0(o){var n=o,{className:u}=n,t=L(n,["className"]);const D=i.exports.useContext(Q),a=()=>{if(t.results[0]){let l="";return t.results.map((r,s)=>{s+1===t.results.length?l+=r:l+=r+", "}),e("p",{className:"tt-p",children:l})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return e(_u,{onClickAway:t.tooltipClose,children:m("span",{className:u,children:[e($,{className:"tt-top",color:"inherit",style:{fontSize:D.fontSize.sm>=18?D.fontSize.sm-8:D.fontSize.sm},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),t.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:D.fontSize.sm>=18?D.fontSize.sm-8:D.fontSize.sm},children:t.results[0]?e(a,{}):e(su,{className:"tt-body-linear",color:"inherit"})}),e(_0,{toSave:{word:t.lyric,results:t.results},saved:t.bmSaved,variant:"Star"})]})})}const O0=b(F0)`
    padding: 5px;

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

`;function P0(o){var n=o,{className:u}=n,t=L(n,["className"]);const[D,a]=i.exports.useState(!1),[l,r]=i.exports.useState([]),[s,x]=i.exports.useState(!1);i.exports.useEffect(()=>{},[]),i.exports.useEffect(()=>{C()&&x(!0)},[]);const C=()=>localStorage.getItem("meturgamm_words")?JSON.parse(localStorage.getItem("meturgamm_words")).find(h=>h.word.toLowerCase()===t.lyric.toLowerCase()):!1,A=()=>{a(!0),l[0]||N()},v=()=>{a(!1)};function N(){const k="https://musicline-backend.vercel.app";let h=t.lyric.trim().toLowerCase();h=h.replaceAll(/[^a-zA-Z0-9']/g,""),h.slice(-1)==="'"&&(h=h.replaceAll("'","g")),fetch(`${k}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(h)})}).then(E=>E.json()).then(E=>{if(E==null?void 0:E.results[0]){r(E.results);return}else{r(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(E=>{r(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(E)})}return e(_,{children:e(Fu,{className:u,title:e(O0,{tooltipClose:v,className:"tt-childs",lyric:t.lyric,results:l,bmSaved:s}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:v,open:D,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:m("span",{children:["\xA0 ",m("p",{className:"single-lyric",onClick:A,children:[" ",t.lyric," "]})]})})})}const nu=b(P0)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function R0(o){var n=o,{className:u}=n,t=L(n,["className"]);var l;const D=i.exports.useContext(O),a=i.exports.useContext(Q);return i.exports.useEffect(()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const s=document.createElement("script");s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",s.def=!0,s.crossorigin="anonymous",s.dataset.overlays="bottom",document.body.appendChild(s)}},[]),e(R,{className:u,children:e(z,{container:!0,spacing:2,children:((l=D.lines)==null?void 0:l[0])&&m("div",{id:"lyrics_body",children:[e($,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:a.fontSize.lg,direction:"ltr"},children:D.title&&D.title.split(" ").map((r,s)=>e(nu,{lyric:r,open:!1},H()))}),D.lines.map((r,s)=>{var x;return r.src.includes("[")&&(r.trans="   "),m("div",{children:[s>0&&r.src.includes("[")&&m(_,{children:[e("br",{}),e("br",{})]}),e(z,{className:"lyrics-line en-line",item:!0,style:{fontSize:a.fontSize.md},children:r.src.split(" ").map((C,A)=>(C.slice(-1)==="'"&&(C=C.replaceAll("'","g")),e(nu,{lyric:C,open:s==1&A==1},H())))}),e(z,{item:!0,className:"lyrics-line he-line",style:{fontSize:a.fontSize.sm},children:e(_,{children:((x=r.trans)==null?void 0:x.length)?r.trans.split(" ").map((C,A)=>{if(r.trans!=="   ")return m("small",{className:"single-trans",children:[C," \xA0"]},H())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},H())})]})})})}const j0=b(R0)`
#lyrics_body{
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 500;
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;

  background-color: ${u=>u.theme.palette.primary.light};
  color:  ${u=>u.theme.palette.primary.contrastText};
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 #7c7c7c;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
    padding-inline-end: 15px;
  }
  
  h3{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    white-space: break-spaces;

    @media (max-width: 600px) {
      font-size: 19px;
    }
  }

  .en-line p, .he-line small{
    margin: unset;
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
  }

  .single-lyric, .single-trans{
    display: inline;
    min-width: unset;
    padding: 0px 2px;
    text-transform: none;
  }

  .en-line{
      margin-top: 8px;
      direction: rtl;
      text-align: left;
  }
}
`;function J0({className:u}){var a,l,r;const t=i.exports.useContext(O),{sname:o}=Ou();i.exports.useEffect(()=>{o&&o.includes("_")&&n()},[]);function n(){let s=o;s=s.replaceAll("-"," ");const x={artistName:encodeURI(` ${s.split("_")[0]} `),songName:encodeURI(` ${s.split("_")[1]} `)};s=s.replaceAll("_"," - "),t.getSongLyrics(x,s)}function D(s){s.preventDefault()}return m("div",{className:u,children:[e("div",{className:"home-top",children:m(z,{container:!0,className:"home-t-container",children:[!((a=t.lines)==null?void 0:a[0])&&e(z,{item:!0,xs:12,sm:6,children:e($,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),m(z,{item:!0,xs:12,sm:6,children:[!((l=t.lines)==null?void 0:l[0])&&m($,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(R,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:D,className:"search-ctr",children:e($0,{})})]})]})}),((r=t.lines)==null?void 0:r[0])&&e(j0,{className:"lyrics-body"})]})}const G0=b(J0)`
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

        color: ${u=>u.theme.palette.primary.main};
        font-size: 25px;
        margin-bottom: 15px;
    }

    .small-two{
        word-spacing: -0.5px;
    }

    .MuiTextField-root { 
        margin-top: 35px;
        /* margin-inline-start: 10px; */
        width: 450px;
        border-color: ${u=>u.theme.palette.primary.dark};;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: ${u=>u.theme.palette.primary.dark};;
        border-color: ${u=>u.theme.palette.primary.dark};;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;var H0="/assets/screenshot-1.fe78e4e5.png",q0="/assets/screenshot-2.600f8a12.png",U0="/assets/screenshot-tt.0f8ab6fe.png",W0="/assets/screenshot-tt-2.533f020d.png",Z0="/assets/screenshot-changesize.22fea726.png";function Q0({className:u}){return m("div",{id:"",className:u,children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",e("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",e("br",{}),e("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",e("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",e("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",e("br",{}),e("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",e("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",e("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",e("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",e("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",e("br",{}),e("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",e("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",e("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",e("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",e("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",e("br",{}),e("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",e("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",e("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",e("br",{}),e("br",{}),e("br",{}),e("p",{children:"\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA \u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"}),e("br",{}),e("img",{src:H0,alt:"1\u05E9\u05D9\u05E8"}),e("img",{src:q0,alt:"2\u05E9\u05D9\u05E8"}),e("br",{}),e("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),e("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),e("img",{src:U0,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),e("img",{src:W0,alt:"2\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),e("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),e("img",{src:Z0,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),e("p",{children:"\u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8? - \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 - \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF - \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"}),e("p",{children:"\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5? \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7. \u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"})]})}const V0=b(Q0)`
  padding: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p{
    padding: 10px;
  }

  img{
    margin: 15px;
    border: 1px solid gray;
    width: 25vw;
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;function K0({className:u}){return m("div",{id:"NO_MATCH_WRAPPER",className:u,children:[e($,{variant:"h2",className:"page-h2",children:"404"}),e($,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const X0=b(K0)`

`;function Y0({className:u}){const t=Pu({target:window,disableHysteresis:!0,threshold:100});return e(Ru,{id:"",className:u,in:t,children:e(R,{role:"presentation",sx:{position:"fixed",bottom:32,left:32,zIndex:1300},children:e(ju,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(Ju,{htmlColor:"white"})})})})}const ue=b(Y0)`
  width: 50px;
  height: 50px;
`;function ee({className:u}){var v,N;const t=i.exports.useContext(W),o=i.exports.useContext(Z),n=i.exports.useContext(j),[D,a]=i.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[l,r]=i.exports.useState(Yu),s=Gu({key:"muirtl",stylisPlugins:[Qu,Vu]});function x(){C()}const C=()=>{const k=document.createElement("script");k.type="text/javascript",k.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",k.defer=!0,document.body.appendChild(k)};return i.exports.useEffect(()=>{x()},[]),e("div",{className:u,children:e(Hu,{theme:l,children:m(qu,{value:s,children:[m(Uu,{hashType:"noslash",children:[e(o0,{currTitle:D,theme:l}),m(A0,{children:[e(b0,{className:"header",changeColors:()=>{r(u0)}}),((v=n.main)==null?void 0:v.open)&&m(Y,{severity:"warning",className:"main-alert",children:[e(iu,{children:n.main.title}),n.main.message]}),m(Wu,{children:[e(K,{path:"/",element:e(G0,{className:"page"})}),e(K,{path:"/About",element:e(V0,{className:"page"})}),e(K,{path:"*",element:e(X0,{className:"page"})})]}),t.open&&t.child&&e(L0,{className:"drawer"}),o.circular.open&&e(au,{color:o.main.color||"primary"}),((N=n.infoSnackbar)==null?void 0:N.open)&&e(Zu,{open:n.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(Y,{onClose:()=>{n.closeBanner("infoSnackbar")},severity:n.infoSnackbar.severity,sx:{width:"100%"},children:n.infoSnackbar.message})}),e(w0,{})]})]}),e(z0,{}),e(ue,{})]})})})}const te=b(ee)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
`,re=[e0,r0,t0,f0,c0];function oe(u){return e(_,{children:re.reduceRight((t,o)=>e(o,{children:t}),u.children)})}Ku.render(e(F.StrictMode,{children:e(oe,{children:e(te,{className:"app"})})}),document.getElementById("root"));
