import{c as s,j as t,A as a,a as c}from"../app.dist.js";import{R as r,r as d}from"../libs/react.dist.js";const i=()=>{const[e,n]=d.useState(0);return c("button",{onClick:()=>n(o=>o+1),className:"btn btn-dark",children:["count is ",e]})};s.createRoot(document.getElementById("root")).render(t(r.StrictMode,{children:t(a,{Component:i,editCode:"clients/pages/page-index.jsx"})}));