var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var G=(e,n,o)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,p=(e,n)=>{for(var o in n||(n={}))J.call(n,o)&&G(e,o,n[o]);if(B)for(var o of B(n))U.call(n,o)&&G(e,o,n[o]);return e},y=(e,n)=>Y(e,Z(n));var C=(e,n)=>{var o={};for(var s in e)J.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&B)for(var s of B(e))n.indexOf(s)<0&&U.call(e,s)&&(o[s]=e[s]);return o};import{R as k,r as u,j as t,c as ee,M as te,a as x,B as ne,b as z,d as re,A as oe,s as f,L as se,N as $,e as ie,f as ae,g as le,h as ce,i as A,k as ue,C as de,T as pe,I as he,l as me,m as S,n as fe,o as ge,D as xe,p as ye,q as De,t as be,u as ve,v as Ce,w as Se,x as Ee,F,y as V,G as R,z as Le,E as we,H as Ne,J as W,K as ke,O as Te,P as _,Q as ze,S as Ae,U as Me,V as Pe,W as Be,X as Fe}from"./vendor.c22934ca.js";const Oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};Oe();const O=k.createContext(void 0);function Ie(e){const[n,o]=u.exports.useState({}),l={openDrawer:(i,a,h="temporary",m)=>{o({open:i,anchor:a,permanent:h,child:m})},closeDrawer:(i,a,h="temporary",m)=>{o({open:i,anchor:a,permanent:h,child:m})}};return t(O.Provider,{value:p(p({},n),l),children:e.children})}const H=k.createContext(void 0);function Re(e){const[n,o]=u.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(a,h)=>{n[a]&&o(y(p({},n),{[a]:void 0})),o(y(p({},n),{[a]:{open:!1,color:h||"primary"}}))},openLoader:a=>{n[a]?o(y(p({},n),{[a]:y(p({},n[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{n[a]?o(y(p({},n),{[a]:y(p({},n[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(H.Provider,{value:p(p({},n),i),children:e.children})}const K=k.createContext(void 0);function _e(e){const[n,o]=u.exports.useState({main:{open:!0,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(a,h,m,g)=>{n[a]&&o(y(p({},n),{[a]:void 0})),o(y(p({},n),{[a]:{open:!1,severity:h||"success",title:m||"",mesaage:g||""}}))},openBanner:a=>{n[a]?o(y(p({},n),{[a]:y(p({},n[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{n[a]?o(y(p({},n),{[a]:y(p({},n[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(K.Provider,{value:p(p({},n),i),children:e.children})}const Q=ee({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#CD5A91",light:"#CD5A91",dark:"#AC4C7A"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function $e(){const[e,n]=u.exports.useState(Q.palette.primary.light);return t("div",{className:"wrapper",children:t(te,{children:t("meta",{name:"theme-color",content:e})})})}const j=k.createContext(void 0);function He(e){const[n,o]=u.exports.useState({fontSize:{sm:Number(localStorage.getItem("font_sm"))||15,md:Number(localStorage.getItem("font_md"))||25}}),s=()=>{n.fontSize.md<60&&(o(y(p({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1}})),l())},r=()=>{n.fontSize.sm>2&&(o(y(p({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1}})),l())};function l(){localStorage.setItem("font_md",n.fontSize.md),localStorage.setItem("font_sm",n.fontSize.sm)}const i={reduceFontSize:r,increaseFontSize:s};return t(j.Provider,{value:p(p({},n),i),children:e.children})}function je({className:e}){const n=u.exports.useContext(j);return t("div",{id:"",className:e,children:x(ne,{className:"button-group",children:[t(z,{"aria-label":"reduce",onClick:()=>{n.reduceFontSize()},children:t(re,{fontSize:"small"})}),t(z,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8"}),t(z,{"aria-label":"increase",onClick:()=>{n.increaseFontSize()},children:t(oe,{fontSize:"small"})})]})})}const qe=f(je)`
  text-align: center;
  height: 30px;
 flex-grow: 2;
  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: #eeededb0;
    color: #5b91ff;
    padding: unset;
  }

  .font-size-disabled{
    color: white !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff6b;
  }

`,Ge=[];function Je(){return t(se,{children:Ge.map((e,n)=>t($,{to:e.url,children:x(ie,{button:!0,children:[t(ae,{primary:e.name}),t(le,{children:t(ce,{})})]},e.name)},n))})}const Ue=f(Je)`
  
`,E=k.createContext(void 0);function We(e){const n=u.exports.useContext(H),[o,s]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[r,l]=u.exports.useState([]),[i,a]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[h,m]=u.exports.useState(0),g="https://musicline-backend-basssites.vercel.app",L=b=>{n.openLoader("main"),fetch(`${g}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{var c,D,w;if(n.closeLoader("main"),(w=(D=(c=d==null?void 0:d.message)==null?void 0:c.body)==null?void 0:D.lyrics)==null?void 0:w.lyrics_body){let v=d.message.body.lyrics.lyrics_body;v=v.substring(0,v.indexOf("..."));let N=[];v.split(/(?:\r\n|\r|\n)/g).map(q=>{q.length>=2&&N.push({src:q,trans:""})}),a(N),s(v),l(v.split(" "));let P=document.querySelector(".gsst_a");P&&P.dispatchEvent(new Event("click"))}})},M=()=>{let b=!1;for(let d=0;d<i.length;d++){let c=i[d];if(b===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."){b=!0,T(c.src,d);break}else continue}},T=(b,d)=>{fetch(`${g}/line-trans`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:i})}).then(c=>c.json()).then(c=>{var w,v;let D=i;(c==null?void 0:c.trans.length)?(c.trans.map((N,P)=>{D[P]={src:b,trans:N}}),a(D),m(h+1)):(c==null?void 0:c.trans)?(D[d]={src:b,trans:c==null?void 0:c.trans},a(D),((w=i[i.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),m(h+1)):(i[d].trans===void 0&&(D[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:b,trans:"[missing]"}),a(D),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),m(h+1))}).catch(c=>{var v;let D=i;i[d].trans===""&&(D[d]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[d].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(D[d]={src:b,trans:"[missing]"}),a(D),((v=i[i.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),m(h+1),console.log(c)})},I={getLines:L,getLinesTrans:T,checkNextTrans:M};return t(E.Provider,{value:p({currLyrics:o,singles:r,lines:i,cou:h},I),children:e.children})}function Ve({className:e}){return u.exports.useContext(E),t(A,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(o=>t($,{to:o.url,children:t(z,{sx:{my:2},children:o.name})},o.name))})}const Ke=f(Ve)`
  
`,Qe=o=>{var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(O),l=u.exports.useContext(E);return t(ue,{position:"static",className:e,children:t(de,{maxWidth:"xl",children:x(pe,{disableGutters:!0,children:[t(A,{sx:{display:{xs:"flex",md:"none"}},children:t(he,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{r.openDrawer(!0,"left","temporary",Ue)},color:"inherit",children:t(me,{})})}),t($,{to:"/",children:t(S,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"})}),l.lines[0]&&t(qe,{}),t(Ke,{className:"nav-bar"})]})})})},Xe=f(Qe)`
  background-color: ${e=>e.theme.palette.primary.dark};
  color: ${e=>e.theme.palette.secondary.main};

  button{
    color: ${e=>e.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }
`;function Ye(o){var s=o,{className:e}=s,n=C(s,["className"]);return t("div",{className:e,children:n.children})}const Ze=f(Ye)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 35px;
  background-color: ${e=>e.theme.palette.primary.light};
`;function et({className:e}){return t("div",{id:"FOOTER",className:e})}const tt=f(et)`
  color: ${e=>e.theme.palette.secondary.dark};
  background-color: ${e=>e.theme.palette.secondary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  li span{
    color: ${e=>e.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function nt(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(O);return t(fe,{className:e,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{r.closeDrawer(!1)},children:t(A,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{r.closeDrawer(!1)},children:t(r.child,{})})})}const rt=f(nt)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.secondary.main};
  }

  svg{
    color: ${e=>e.theme.palette.secondary.main};
  }

  a{
    color: ${e=>e.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function ot({className:e}){const[n,o]=u.exports.useState(!0),s=()=>{o(!1)};return x(ge,{id:"main-modal-root",className:e,open:n,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(xe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ye,{children:t(De,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(be,{children:t(z,{onClick:s,children:"Close"})})]})}f(ot)`
  
`;function st(o){var s=o,{className:e}=s,n=C(s,["className"]);const[r,l]=u.exports.useState(!0);return t(ve,{className:e,open:r,onClose:()=>{l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.children})}f(st)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function it({className:e}){return t("div",{id:"",className:e})}const at=f(it)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function lt({className:e}){const n=u.exports.useContext(E);u.exports.useEffect(()=>{window.onload=()=>{const r=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],l={childList:!1,attributes:!0,subtree:!1};function i(){o()}new MutationObserver(i).observe(r,l)}},[]);let o=()=>{setTimeout(()=>{let r=document.querySelectorAll(".gs-title");r&&r.forEach((l,i)=>{if(l.innerText.includes("Lyrics")){let a=l.innerText.replace("Lyrics | Musixmatch"," ");l.innerText=a;const h={artistName:encodeURI(a.split("-")[0]),songName:encodeURI(a.split("-")[1])};l.addEventListener("click",m=>{n.getLines(h)})}else l.innerText.includes("Lyrics")||l.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&l.parentElement.parentElement.parentElement.remove()})},50)};function s(r){let l=document.querySelector("#gsc-i-id1");if(l)if(r.target.value.length<=1){let i=document.querySelector(".gsst_a");i&&i.dispatchEvent(new Event("click"))}else{l.value=r.target.value;let i=document.querySelectorAll(".gsc-search-box button")[0];i?setTimeout(()=>{i.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):console.error("no gsc loaded, try reload the page")}else console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[t(Ce,{id:"outlined-search",label:"\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:s,autoFocus:!1,autoComplete:"off"}),t("div",{className:"gcse-search"})]})}const ct=f(lt)`
  *,::before,::after{
      background-color: '#ffffff0';
  }
`;function ut(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(E),[l,i]=u.exports.useState(!1),[a,h]=u.exports.useState(5e4),[m,g]=u.exports.useState([]);u.exports.useEffect(()=>{var c;((c=r.lines[r.lines.length-1])==null?void 0:c.trans).length>=1&&h(0)},[r.lines]);const L=()=>{var c;((c=r.lines[r.lines.length-1])==null?void 0:c.trans).length>=1&&(i(!0),T())},M=()=>{i(!1)},T=u.exports.useCallback(()=>{I()},[]);function I(){fetch("https://musicline-backend-basssites.vercel.app/single-trans",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(n.lyric)})}).then(c=>c.json()).then(c=>{(c==null?void 0:c.results[0])?g(c.results):g(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"])}).catch(c=>{console.log(c)})}const b=()=>m[1]?m.map((d,c)=>x(F,{children:[c>0&&t("hr",{}),t("p",{className:"tt-p",children:d})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"});return t(Se,{onClickAway:M,children:t(Ee,{className:e,title:x(F,{children:[t(S,{color:"inherit",children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD:"}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr"},children:m[0]?t(b,{}):t(V,{sx:{margin:"8px"},color:"primary"})})]}),arrow:!0,enterDelay:a,enterTouchDelay:a,leaveTouchDelay:60*1e3,leaveDelay:0,onOpen:()=>{T()},PopperProps:{disablePortal:!1},onClose:M,open:l,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:t("p",{className:"single-lyric",onClick:L,children:n.lyric})})})}const dt=f(ut)`

`;function pt(o){var s=o,{className:e}=s,n=C(s,["className"]);const r=u.exports.useContext(E);return u.exports.useEffect(()=>{r.checkNextTrans()},[r,r.cou]),t(A,{children:t(R,{container:!0,spacing:2,children:r.lines&&t("div",{id:"lyrics_body",className:e,children:r.lines.map((l,i)=>{var a;return x("div",{children:[t(R,{className:"lyrics-line en-line",item:!0,children:l.src.split(" ").map((h,m)=>t(dt,{lyric:h},m))},i.toString()+Math.floor(Math.random()*3e4)),t(R,{item:!0,className:"lyrics-line he-line",children:t(F,{children:((a=l.trans)==null?void 0:a.length)>2?l.trans.split(" ").map((h,m)=>t("small",{onLoad:()=>{r.checkNextTrans()},className:"single-trans",children:h},m)):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})},i.toString()+Math.floor(Math.random()*3e4))]})})})})})}const ht=f(pt)`
   /* max-width: 90%; */
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  padding-inline-start: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
  }

  .en-line p{
    margin: unset;
    display: inline-block;
  }

  .he-line small{
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
  }

  .single-lyric, .single-trans{
    display: inline;
    min-width:unset;
    padding: 0px 2px;
    text-transform: none;
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      /* font-size: 14px; */
      font-size: ${e=>e.fontSize.md-5+"px"};
  }

  .en-line{
      /* font-size: 20px; */
      direction: rtl;
      text-align: left;
      font-size: ${e=>e.fontSize.md+"px"};
  }

  @media (max-width: 600px) {
      .he-line{
        /* font-size: 14px; */
        font-size: ${e=>e.fontSize.md-5+"px"};
      }

      .en-line{
        /* font-size: 20px; */
        font-size: ${e=>e.fontSize.md+"px"};
      }
  }

`;function mt({className:e}){const n=u.exports.useContext(E),o=u.exports.useContext(j);u.exports.useEffect(()=>{},[o]);function s(r){r.preventDefault();let l=document.querySelectorAll(".gsc-search-box button")[0];l?l.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,children:[!n.currLyrics&&x("div",{children:[x(S,{variant:"h2",className:"page-h2",children:["\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",t("br",{}),"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05E9\u05D5\u05E8\u05D4"]}),t(S,{variant:"h3",className:"page-h3",children:"\u05DC\u05D9\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"})]}),t(A,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,children:t(ct,{})}),n.currLyrics&&t(ht,{className:"lyrics-body",fontSize:o.fontSize})]})}const ft=f(mt)`

    .MuiTextField-root { 
        margin-top: 35px;
        width: 460px;
        border-color: white;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: white;
        border-color: white;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function gt({className:e}){return t("div",{className:e,children:t(S,{variant:"h2",className:"page-h2",children:"About Page"})})}const xt=f(gt)`

`;function yt({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(S,{variant:"h2",className:"page-h2",children:"404"}),t(S,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Dt=f(yt)`

`;function bt({className:e}){const n=u.exports.useContext(O),o=u.exports.useContext(H),s=u.exports.useContext(K),r=u.exports.useRef(null),l=Le({key:"muirtl",stylisPlugins:[Me,Pe]});function i(){a()}const a=()=>{const g=document.createElement("script");g.type="text/javascript",g.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",g.defer=!0,document.body.appendChild(g)};u.exports.useEffect(()=>{i()},[]);const h=g=>{s.closeBanner(g)};function m(g){g.preventDefault();let L=document.querySelectorAll(".gsc-search-box button")[0];L?L.dispatchEvent(new Event("click")):console.error("no gsc loaded")}return x("div",{className:e,ref:r,children:[t(we,{value:l,children:x(Ne,{children:[t($e,{}),t(Xe,{className:"header",HandleSubmit:m}),s.main.open&&x(W,{severity:"warning",className:"main-alert",children:[t(ke,{children:s.main.title}),s.main.message]}),t(Ze,{children:x(Te,{children:[t(_,{path:"/",element:t(ft,{className:"page"})}),t(_,{path:"/about",element:t(xt,{className:"page"})}),t(_,{path:"*",element:t(Dt,{className:"page"})})]})}),n.open&&n.child&&t(rt,{className:"drawer"}),o.main.open&&t(V,{color:o.main.color||"primary"}),o.circular.open&&t(ze,{color:o.main.color||"primary"}),s.snackbar.open&&t(Ae,{open:s.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(W,{onClose:()=>{h("snackbar")},severity:s.snackbar.severity,sx:{width:"100%"},children:s.snackbar.message})}),t(tt,{})]})}),t(at,{})]})}const vt=f(bt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${e=>e.theme.palette.secondary.main};

  a{
      color: #fff;
      &hover{
        color: #fff;
      }
  }

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 40px; // 29
    font-weight: 500;
    color: ${e=>e.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 22px;
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
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;
  }


  /* .toolTip-title{
    direction: rtl;
    text-align: center;
  }

  .tt-body *{
    /* text-align: center; */
    /* overflow-y: scroll;
    max-height: 110px; */
  /* } */ 

  .loader{
      padding: 20px;
  }
`,Ct=[He,Ie,_e,Re,We];function St(e){return t(F,{children:Ct.reduceRight((n,o)=>t(o,{children:n}),e.children)})}Be.render(t(k.StrictMode,{children:t(St,{children:t(Fe,{theme:Q,children:t(vt,{className:"app"})})})}),document.getElementById("root"));
