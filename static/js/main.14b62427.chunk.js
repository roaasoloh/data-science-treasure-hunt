(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),c=n.n(o);n(13);function s(e){let{children:t}=e;return l.a.createElement("div",{className:"border p-4 rounded-lg shadow"},t)}function r(){const[e,t]=Object(a.useState)([]),[n,o]=Object(a.useState)(!1),[c,r]=Object(a.useState)(1);Object(a.useEffect)(()=>(i(),window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)),[]);const m=()=>{window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&i()},i=()=>{n||(o(!0),setTimeout(()=>{const n=Array.from({length:10},(t,n)=>({id:e.length+n+1,text:`Post #${e.length+n+1}`}));e.length+1===25&&(n[0].text="Clue: Download the LEGO Database dataset from Kaggle!",n[0].link="https://www.kaggle.com/datasets/rtatman/lego-database"),t(e=>[...e,...n]),o(!1)},1e3))};return l.a.createElement("div",{className:"p-5"},l.a.createElement("h1",{className:"text-xl font-bold mb-4"},"Infinite Scrolling Clue Hunt"),l.a.createElement("div",{className:"space-y-3"},e.map(e=>l.a.createElement(s,{key:e.id,className:"p-3"},e.text,e.link&&l.a.createElement("a",{href:e.link,className:"text-blue-500 block mt-2"},"Get the Dataset Here")))),n&&l.a.createElement("p",{className:"text-gray-500 mt-4"},"Loading more..."))}var m=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:o,getTTFB:c}=t;n(e),a(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r,null))),m()},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.14b62427.chunk.js.map