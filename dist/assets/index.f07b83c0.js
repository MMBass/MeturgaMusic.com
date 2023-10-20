var su=Object.defineProperty,iu=Object.defineProperties;var au=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var uu=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable;var Y=(u,t,r)=>t in u?su(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,g=(u,t)=>{for(var r in t||(t={}))uu.call(t,r)&&Y(u,r,t[r]);if(R)for(var r of R(t))eu.call(t,r)&&Y(u,r,t[r]);return u},b=(u,t)=>iu(u,au(t));var T=(u,t)=>{var r={};for(var o in u)uu.call(u,o)&&t.indexOf(o)<0&&(r[o]=u[o]);if(u!=null&&R)for(var o of R(u))t.indexOf(o)<0&&eu.call(u,o)&&(r[o]=u[o]);return r};import{c as ru,R as M,r as i,j as e,a as p,M as lu,B as cu,b as O,d as Eu,e as du,s as C,L as nu,f as Q,N as X,g as G,h as H,i as pu,A as mu,k as P,I as hu,l as gu,m as fu,C as xu,T as Cu,n as I,o as yu,p as V,q as ou,G as B,t as bu,u as W,v as Au,w as Su,D as vu,x as wu,y as Tu,z as Lu,E as ku,F as Nu,H as Du,J as Bu,K as zu,O as j,P as K,Q as Iu,S as Fu,Z as Mu,U as $u,V as Ou,W as Pu,X as _u,Y as Ru,_ as ju,$ as Gu,a0 as Z,a1 as Hu,a2 as Ju,a3 as qu,a4 as Uu}from"./vendor.9e8b9bb0.js";const Wu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))o(D);new MutationObserver(D=>{for(const a of D)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(D){const a={};return D.integrity&&(a.integrity=D.integrity),D.referrerpolicy&&(a.referrerPolicy=D.referrerpolicy),D.crossorigin==="use-credentials"?a.credentials="include":D.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(D){if(D.ep)return;D.ep=!0;const a=r(D);fetch(D.href,a)}};Wu();const Zu=ru({mode:"light",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),Qu=ru({mode:"dark",direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#darkgray",light:"#white",dark:"#black",contrastText:"#white"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}}),J=M.createContext(void 0);function Vu(u){const[t,r]=i.exports.useState({}),a={openDrawer:(l,n,s="temporary",h)=>{r({open:l,anchor:n,permanent:s,child:h})},closeDrawer:(l,n,s="temporary",h)=>{r({open:l,anchor:n,permanent:s,child:h})}};return e(J.Provider,{value:g(g({},t),a),children:u.children})}const q=M.createContext(void 0);function Ku(u){const[t,r]=i.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),l={createLoader:(n,s)=>{t[n]&&r(b(g({},t),{[n]:void 0})),r(b(g({},t),{[n]:{open:!1,color:s||"inherit"}}))},openLoader:n=>{t[n]?r(b(g({},t),{[n]:b(g({},t[n]),{open:!0})})):console.error("Loader"+n+"does'nt exist")},closeLoader:n=>{t[n]?r(b(g({},t),{[n]:b(g({},t[n]),{open:!1})})):console.error("Loader"+n+"does'nt exist")}};return e(q.Provider,{value:g(g({},t),l),children:u.children})}const _=M.createContext(void 0);function Xu(u){const[t,r]=i.exports.useState({main:{open:!1,severity:"error",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},infoSnackbar:{open:!0,severity:"warning",title:"",message:"\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05DC\u05DB\u05DF \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D5\u05D9\u05E7"}}),l={createBanner:(n,s,h,f)=>{t[n]&&r(b(g({},t),{[n]:void 0})),r(b(g({},t),{[n]:{open:!0,severity:s||"success",title:h||"",message:f||""}}))},openBanner:n=>{t[n]?r(b(g({},t),{[n]:b(g({},t[n]),{open:!0})})):console.error("Banner"+n+"does'nt exist")},closeBanner:n=>{t[n]?r(b(g({},t),{[n]:b(g({},t[n]),{open:!1})})):console.error("Banner"+n+"does'nt exist")}};return e(_.Provider,{value:g(g({},t),l),children:u.children})}function Yu(u){const[t]=i.exports.useState(u.theme.palette.primary.main);return e("div",{className:"wrapper",children:p(lu,{children:[e("title",{children:u.currTitle}),e("meta",{name:"theme-color",content:t}),e("script",{def:"true",src:"https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"})]})})}const u0=u=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("meturgamm_songs"));t.push(u),t.length>=500&&t.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(t))},e0=u=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(r=>r.title.toLowerCase()===u.toLowerCase()):!1,t0=()=>{let u=document.querySelector(".gsst_a");u&&u.dispatchEvent(new Event("click"))},r0=()=>{let u=!1;const t=navigator.userAgent;return/android/i.test(t)?u=!1:(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(u=!0),u},n0=u=>{if(/[\u0590-\u05FF]/.test(u)){var t={\u05E7:"e",\u05E8:"r",\u05D0:"t",\u05D8:"y",\u05D5:"u",\u05DF:"i",\u05DD:"o",\u05E4:"p",\u05E9:"a",\u05D3:"s",\u05D2:"d",\u05DB:"f",\u05E2:"g",\u05D9:"h",\u05D7:"j",\u05DC:"k",\u05DA:"l",\u05D6:"z",\u05E1:"x",\u05D1:"c",\u05E0:"v",\u05E0:"b",\u05DE:"n",\u05E6:"m"};for(let r=0;r<u.length;r++)t[u[r]]?u=u.replace(new RegExp(u[r],"g"),t[u[r]]):u=u.replace(new RegExp(u[r],"g"),"");return console.log(u),u}else return u};function o0(u){let t=/[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;return(u.match(t)||[]).length/u.length>.8}var L={lsSaveSong:u0,lsFindSong:e0,clearGsc:t0,getMobileOS:r0,keyboardHEENSwitcher:n0,isMostlyEnglish:o0};const U=M.createContext(void 0);function D0(u){const t=JSON.parse(localStorage.getItem("fontsize")),[r,o]=i.exports.useState({fontSize:{sm:Number(t==null?void 0:t.sm)||22,md:Number(t==null?void 0:t.md)||25,lg:Number(t==null?void 0:t.lg)||27},colors:"pink"}),D=()=>{r.fontSize.md<60&&(o(b(g({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1,lg:r.fontSize.lg+1}})),l())},a=()=>{r.fontSize.sm>7&&(o(b(g({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1,lg:r.fontSize.lg-1}})),l())};function l(){localStorage.setItem("fontsize",JSON.stringify({sm:r.fontSize.sm,md:r.fontSize.md,lg:r.fontSize.lg}))}function n(){localStorage.setItem("colors_mode",r.colors)}function s(f){o(b(g({},r),{colors:f})),n()}const h={reduceFontSize:a,increaseFontSize:D,setColors:s};return e(U.Provider,{value:g(g({},r),h),children:u.children})}function s0({className:u}){const t=i.exports.useContext(U);return e("div",{id:"",className:u,children:p(cu,{className:"button-group",children:[e(O,{"aria-label":"reduce",onClick:()=>{t.reduceFontSize()},children:e(Eu,{fontSize:"small"})}),e(O,{className:"font-size-disabled",disabled:!0,children:t.fontSize.md}),e(O,{"aria-label":"increase",onClick:()=>{t.increaseFontSize()},children:e(du,{fontSize:"small"})})]})})}const i0=C(s0)`
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

`;function a0(r){var o=r,{className:u}=o,t=T(o,["className"]);const[D,a]=i.exports.useState(0);return i.exports.useEffect(()=>{const l=setInterval(()=>{a(n=>{if(n===100)return 0;const s=Math.random()*10;return Math.min(n+s,100)})},220);return()=>{clearInterval(l)}},[]),e(nu,{variant:"determinate",value:D,color:t.color})}const l0=C(a0)`
  
`,c0=[];function E0(){return e(Q,{children:c0.map((u,t)=>e(X,{to:u.url,children:p(G,{button:!0,children:[e(H,{primary:u.name}),e(pu,{children:e(mu,{})})]},u.name)},t))})}C(E0)`
  
`;const $=M.createContext(void 0);function d0(u){const t=i.exports.useContext(q),r=i.exports.useContext(_),[o,D]=i.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[a,l]=i.exports.useState(""),[n,s]=i.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,f]=i.exports.useState(!1);i.exports.useEffect(()=>{n[0]&&k()},[n,h]);const A="https://musicline-backend.vercel.app",v=(c,m)=>{m=m.replace(/[\])}[{(]/g,"").trim();let E=document.querySelectorAll(".gsc-expansionArea")[0];t.openLoader("main"),!S(m,E)&&fetch(`${A}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:c})}).then(d=>d.json()).then(d=>{if(t.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),E&&(E.style.pointerEvents="all"),(d==null?void 0:d.combined)&&Array.isArray(d==null?void 0:d.combined))D(m),l(d.id),s(d.combined),L.lsSaveSong({title:m,lines:d.combined}),L.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(d.combined)),sessionStorage.setItem("currSongTitle",m);else if(d==null?void 0:d.lyrics){D(m);let z=d.lyrics,w=[];z.split(/(?:\r\n|\r|\n)/g).map(F=>{F.length>=2&&(L.isMostlyEnglish(F)?w.push({src:F.replace(".",""),trans:"",transError:!1}):(console.log("Not supported lang: "+F),w.push({src:"*NOT SUPPORTED TEXT*",trans:"",transError:!1})))}),s(w),L.clearGsc()}else r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(d=>{console.log(d),t.closeLoader("main"),r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),E&&(E.style.pointerEvents="all")})},S=(c,m)=>{let E=L.lsFindSong(c);return E&&Array.isArray(E)?(m&&(m.style.pointerEvents="all"),D(c),s(E.lines),L.clearGsc(),t.closeLoader("main"),sessionStorage.setItem("currLines",JSON.stringify(E.lines)),sessionStorage.setItem("currSongTitle",c),!0):!1},k=()=>{n.every((c,m)=>!c.trans.length||c.transError?(h?x(c.src,m):y(c.src,m),!1):!0)},y=(c,m)=>{fetch(`${A}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:n,song_id:a,title:o})}).then(E=>E.json()).then(E=>{let d=[];(E==null?void 0:E.trans.length)?(E.trans.map((z,w)=>{d[w]={src:n[w].src,trans:z}}),s(d),L.lsSaveSong({title:o,newLines:d}),sessionStorage.setItem("currLines",JSON.stringify(d)),sessionStorage.setItem("currSongTitle",o)):(console.error("status is ok but azure translation missing"),f(!0))}).catch(E=>{console.log(E),f(!0)})},x=(c,m)=>{let E=[...n];fetch(`${A}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(c)})}).then(d=>d.json()).then(d=>{var z,w;(d==null?void 0:d.trans)?(E[m]={src:c,trans:d==null?void 0:d.trans},s(E),((z=n[n.length-1])==null?void 0:z.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(n)),sessionStorage.setItem("currSongTitle",o))):(n[m].trans===void 0?E[m]={src:c,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:n[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(E[m]={src:c,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),s(E),((w=n[n.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(E)),sessionStorage.setItem("currSongTitle",o)))}).catch(d=>{var w;n[m].trans===""?E[m]={src:c,trans:"\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1..",transError:!0}:n[m].trans==="\u05DE\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.."&&(E[m]={src:c,trans:"[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D7\u05E1\u05E8]",transError:!1}),s(E),((w=n[n.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(n)),sessionStorage.setItem("currSongTitle",o),f(!1)),console.log(d)})},N={getSongLyrics:v,getFullTrans:y,checkNextTrans:k,setLines:s};return e($.Provider,{value:g({title:o,lines:n},N),children:u.children})}function p0({className:u}){return i.exports.useContext($),e(P,{className:u,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(r=>e(X,{to:r.url,children:e(O,{sx:{my:2},children:r.name})},r.name))})}C(p0)`
  
`;function m0(r){var o=r,{className:u}=o,t=T(o,["className"]);const D=()=>{t.changeColors()};return e("div",{id:"",className:u,children:e(hu,{onClick:()=>D(),children:e(gu,{className:"mui-rounded-icon"})})})}C(m0)`
text-align: end;
  margin-inline-end: 25px;
  /* height: 30px; */
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${u=>u.theme.mode==="light"?"#000":"#fff"};
    color: ${u=>u.theme.mode==="light"?"#fff":"#000"};
    border-radius: 12px;
  }
`;const h0=r=>{var o=r,{className:u}=o,t=T(o,["className"]);var s,h,f,A;i.exports.useContext(J);const D=i.exports.useContext($),a=i.exports.useContext(_),l=i.exports.useContext(q),n=function(){sessionStorage.removeItem("currLines"),location.reload()};return p(fu,{position:"sticky",className:u,children:[l.main.open&&e(l0,{color:l.main.color}),e(xu,{maxWidth:"xl",children:p(Cu,{disableGutters:!0,children:[e(X,{to:"/",onClick:()=>{n()},children:p(I,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),((s=D.lines)==null?void 0:s[0])&&e(i0,{})]})}),e(yu,{in:(h=a.error)==null?void 0:h.open,children:p(V,{severity:"error",className:"error-alert",onClose:()=>{a.closeBanner("error")},children:[e(ou,{children:(f=a.error)==null?void 0:f.title}),(A=a.error)==null?void 0:A.message]})})]})},g0=C(h0)`
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
`;function f0(r){var o=r,{className:u}=o,t=T(o,["className"]);return e("div",{className:u,children:t.children})}const x0=C(f0)`
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
  
`;function C0({className:u}){return i.exports.useEffect(()=>{window.adsbygoogle=window.adsbygoogle||[]},[]),e("div",{id:"FOOTER",className:u,children:e(B,{container:!0,rowSpacing:6,columnSpacing:2,children:p(B,{item:!0,xs:12,sm:4,children:[p(Q,{children:[e(bu,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(G,{component:W,href:"mailto:meturgamusic@gmail.com",children:e(H,{primary:"MeturgaMusic@gmail.com"})}),e(G,{component:W,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(H,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(Q,{children:e(G,{component:W,href:"https://basssites.com",className:"built-by",children:e(H,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const y0=C(C0)`
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

`;function b0(r){var o=r,{className:u}=o,t=T(o,["className"]);const D=i.exports.useContext(J);return e(Au,{className:u,anchor:D.anchor,open:D.open,variant:D.permanent,onClose:()=>{D.closeDrawer(!1)},children:e(P,{className:"drawer-layout",sx:{width:D.anchor==="top"||D.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{D.closeDrawer(!1)},children:e(D.child,{})})})}const A0=C(b0)`
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
`;function S0({className:u}){const[t,r]=i.exports.useState(!0),o=()=>{r(!1)};return p(Su,{id:"main-modal-root",className:u,open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(vu,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(wu,{children:e(Tu,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Lu,{children:e(O,{onClick:o,children:"Close"})})]})}C(S0)`
  
`;function v0(r){var o=r,{className:u}=o,t=T(o,["className"]);const[D,a]=i.exports.useState(!0);return e(ku,{className:u,open:D,onClose:()=>{a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}C(v0)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function w0({className:u}){return e("div",{id:"",className:u})}const T0=C(w0)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function L0({className:u}){const[t,r]=i.exports.useState(!1),[o,D]=i.exports.useState(""),[a,l]=i.exports.useState(!1),n=i.exports.useContext($),s=i.exports.useContext(_);i.exports.useEffect(()=>{D(n.title)},[n.title]),i.exports.useEffect(()=>{h()},[]);const h=()=>{L.getMobileOS()&&l(!0)};function f(){if(L.getMobileOS()){const y=document.querySelectorAll(".gsc-control-cse")[0];y.style.visibility="visible",y.style.marginTop="90px"}}i.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))f(),A();else{let x=function(){A()};const N=document.querySelector("#gcse-my-wrapper"),c={childList:!0,attributes:!0,subtree:!1};new MutationObserver(x).observe(N,c)}}},[]);function A(){r(!0);const y=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],x={childList:!1,attributes:!0,subtree:!1};function N(){S()}new MutationObserver(N).observe(y,x)}function v(y){if(D(y.target.value),y.nativeEvent.data!==" ")k(y.target.value);else return}const S=()=>{setTimeout(()=>{let y=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");y&&y.forEach((x,N)=>{if(x.innerText.includes("Lyrics")){if(x.innerText.includes("(")){let E=x.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((E==null?void 0:E.includes("live"))||(E==null?void 0:E.includes("mix"))||(E==null?void 0:E.includes("remix"))){x.parentElement.parentElement.parentElement.remove();return}}let c=x.innerText.split("Lyrics")[0];if(c=c.replaceAll("\u2013","-"),!L.isMostlyEnglish(c)){x.parentElement.parentElement.parentElement.remove();return}x.innerHTML=`<strong>${c.split("-")[0]}</strong> - <span>${c.split("-")[1]}</span>`;const m={artistName:encodeURI(c.split("-")[0]),songName:encodeURI(c.split("-")[1])};x.nodeName!=="A"&&x.parentElement.parentElement.parentElement.addEventListener("click",E=>{var d;((d=s.error)==null?void 0:d.open)&&s.closeBanner("error"),x.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",D(c),n.getSongLyrics(m,c)}),x.style.display="block"}else x.innerText.includes("Lyrics")||x.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&x.parentElement.parentElement.parentElement.remove()})},50)};function k(y){s.error&&s.closeBanner("error");let x=document.querySelector("#gsc-i-id1"),N=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(x)if(y.length<=1){let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))}else if(N.test(y)){x.value=y;let c=document.querySelectorAll(".gsc-search-box button")[0];c?setTimeout(()=>{c.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{s.createBanner("error","error"," \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3",""),setTimeout(()=>{let c=document.querySelector(".gsst_a");c&&c.dispatchEvent(new Event("click"))},250);return}else s.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return p("div",{id:"",className:u,children:[!a&&e(Nu,{id:"outlined-search",label:t?"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8":e(Du,{size:18}),type:"search",className:"main-input",onChange:t?v:null,autoFocus:!1,autoComplete:"off",value:o}),e("div",{id:"gcse-my-wrapper",children:e("div",{className:"gcse-search"})})]})}const k0=C(L0)`

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

`;function N0(r){var o=r,{className:u}=o,t=T(o,["className"]);const D=i.exports.useContext(U),a=()=>{if(t.results[0]){let l="";return t.results.map((n,s)=>{s+1===t.results.length?l+=n:l+=n+", "}),e("p",{className:"tt-p",children:l})}else return e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"})};return p("span",{className:u,children:[e(I,{className:"tt-top",color:"inherit",style:{fontSize:D.fontSize.sm>=18?D.fontSize.sm-8:D.fontSize.sm},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD "}),t.results[0]&&e("hr",{}),e("div",{className:"tt-body",style:{fontSize:D.fontSize.sm>=18?D.fontSize.sm-8:D.fontSize.sm},children:t.results[0]?e(a,{}):e(nu,{className:"tt-body-linear",color:"inherit"})})]})}const B0=C(N0)`
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

`;function z0(r){var o=r,{className:u}=o,t=T(o,["className"]);const[D,a]=i.exports.useState(!1),[l,n]=i.exports.useState([]);i.exports.useEffect(()=>{},[]);const s=()=>{a(!0),l[0]||f()},h=()=>{a(!1)};function f(){const A="https://musicline-backend.vercel.app";let v=t.lyric.trim().toLowerCase();v=v.replaceAll(/[^a-zA-Z0-9']/g,""),v.slice(-1)==="'"&&(v=v.replaceAll("'","g")),fetch(`${A}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(v)})}).then(S=>S.json()).then(S=>{if(S==null?void 0:S.results[0]){n(S.results);return}else{n(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]);return}}).catch(S=>{n(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"]),console.log(S)})}return e(Bu,{onClickAway:h,children:e(zu,{className:u,title:e(B0,{className:"tt-childs",results:l}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:h,open:D,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:p("span",{children:["\xA0 ",p("p",{className:"single-lyric",onClick:s,children:[" ",t.lyric," "]})]})})})}const tu=C(z0)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;function I0(r){var o=r,{className:u}=o,t=T(o,["className"]);var l;const D=i.exports.useContext($),a=i.exports.useContext(U);return i.exports.useEffect(()=>{if(!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]')){const s=document.createElement("script");s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",s.def=!0,s.crossorigin="anonymous",s.dataset.overlays="bottom",document.body.appendChild(s)}},[]),e(P,{className:u,children:e(B,{container:!0,spacing:2,children:((l=D.lines)==null?void 0:l[0])&&p("div",{id:"lyrics_body",children:[e(I,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:a.fontSize.lg,direction:"ltr"},children:D.title&&D.title.split(" ").map((n,s)=>e(tu,{lyric:n,open:!1},j()))}),D.lines.map((n,s)=>{var h;return n.src.includes("[")&&(n.trans="   "),p("div",{children:[s>0&&n.src.includes("[")&&p(K,{children:[e("br",{}),e("br",{})]}),e(B,{className:"lyrics-line en-line",item:!0,style:{fontSize:a.fontSize.md},children:n.src.split(" ").map((f,A)=>(f.slice(-1)==="'"&&(f=f.replaceAll("'","g")),e(tu,{lyric:f,open:s==1&A==1},j())))}),e(B,{item:!0,className:"lyrics-line he-line",style:{fontSize:a.fontSize.sm},children:e(K,{children:((h=n.trans)==null?void 0:h.length)?n.trans.split(" ").map((f,A)=>{if(n.trans!=="   ")return p("small",{className:"single-trans",children:[f," \xA0"]},j())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},j())})]})})})}const F0=C(I0)`
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
`;function M0({className:u}){var a,l,n;const t=i.exports.useContext($),{sname:r}=Iu();i.exports.useEffect(()=>{r&&r.includes("_")&&o()},[]);function o(){let s=r;s=s.replaceAll("-"," ");const h={artistName:encodeURI(` ${s.split("_")[0]} `),songName:encodeURI(` ${s.split("_")[1]} `)};s=s.replaceAll("_"," - "),t.getSongLyrics(h,s)}function D(s){s.preventDefault()}return p("div",{className:u,children:[e("div",{className:"home-top",children:p(B,{container:!0,className:"home-t-container",children:[!((a=t.lines)==null?void 0:a[0])&&e(B,{item:!0,xs:12,sm:6,children:e(I,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),p(B,{item:!0,xs:12,sm:6,children:[!((l=t.lines)==null?void 0:l[0])&&p(I,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(P,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:D,className:"search-ctr",children:e(k0,{})})]})]})}),((n=t.lines)==null?void 0:n[0])&&e(F0,{className:"lyrics-body"})]})}const $0=C(M0)`
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
    
`;var O0="/assets/screenshot-1.fe78e4e5.png",P0="/assets/screenshot-2.600f8a12.png",_0="/assets/screenshot-tt.0f8ab6fe.png",R0="/assets/screenshot-tt-2.533f020d.png",j0="/assets/screenshot-changesize.22fea726.png";function G0({className:u}){return p("div",{id:"",className:u,children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",e("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",e("br",{}),e("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",e("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",e("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",e("br",{}),e("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",e("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",e("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",e("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",e("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",e("br",{}),e("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",e("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",e("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",e("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",e("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",e("br",{}),e("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",e("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",e("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",e("br",{}),e("br",{}),e("br",{}),e("p",{children:"\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA \u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"}),e("br",{}),e("img",{src:O0,alt:"1\u05E9\u05D9\u05E8"}),e("img",{src:P0,alt:"2\u05E9\u05D9\u05E8"}),e("br",{}),e("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),e("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),e("img",{src:_0,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),e("img",{src:R0,alt:"2\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),e("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),e("img",{src:j0,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),e("p",{children:"\u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8? - \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 - \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF - \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"}),e("p",{children:"\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5? \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7. \u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"})]})}const H0=C(G0)`
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
`;function J0({className:u}){return p("div",{id:"NO_MATCH_WRAPPER",className:u,children:[e(I,{variant:"h2",className:"page-h2",children:"404"}),e(I,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const q0=C(J0)`

`;function U0({className:u}){const t=Fu({target:window,disableHysteresis:!0,threshold:100});return e(Mu,{id:"",className:u,in:t,children:e(P,{role:"presentation",sx:{position:"fixed",bottom:32,left:32,zIndex:1300},children:e($u,{onClick:()=>{window.scrollTo({top:0,behavior:"auto"})},color:"primary",size:"small","aria-label":"scroll back to top",children:e(Ou,{htmlColor:"white"})})})})}const W0=C(U0)`
  width: 50px;
  height: 50px;
`;function Z0({className:u}){var v,S;const t=i.exports.useContext(J),r=i.exports.useContext(q),o=i.exports.useContext(_),[D,a]=i.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"),[l,n]=i.exports.useState(Zu),s=Pu({key:"muirtl",stylisPlugins:[Ju,qu]});function h(){f()}const f=()=>{const k=document.createElement("script");k.type="text/javascript",k.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",k.defer=!0,document.body.appendChild(k)};return i.exports.useEffect(()=>{h()},[]),e("div",{className:u,children:e(_u,{theme:l,children:p(Ru,{value:s,children:[p(ju,{hashType:"noslash",children:[e(Yu,{currTitle:D,theme:l}),p(x0,{children:[e(g0,{className:"header",changeColors:()=>{n(Qu)}}),((v=o.main)==null?void 0:v.open)&&p(V,{severity:"warning",className:"main-alert",children:[e(ou,{children:o.main.title}),o.main.message]}),p(Gu,{children:[e(Z,{path:"/",element:e($0,{className:"page"})}),e(Z,{path:"/About",element:e(H0,{className:"page"})}),e(Z,{path:"*",element:e(q0,{className:"page"})})]}),t.open&&t.child&&e(A0,{className:"drawer"}),r.circular.open&&e(Du,{color:r.main.color||"primary"}),((S=o.infoSnackbar)==null?void 0:S.open)&&e(Hu,{open:o.infoSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(V,{onClose:()=>{o.closeBanner("infoSnackbar")},severity:o.infoSnackbar.severity,sx:{width:"100%"},children:o.infoSnackbar.message})}),e(y0,{})]})]}),e(T0,{}),e(W0,{})]})})})}const Q0=C(Z0)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
`,V0=[Vu,Xu,Ku,d0,D0];function K0(u){return e(K,{children:V0.reduceRight((t,r)=>e(r,{children:t}),u.children)})}Uu.render(e(M.StrictMode,{children:e(K0,{children:e(Q0,{className:"app"})})}),document.getElementById("root"));
