import{r as s,o as e,d as l,f as o,B as t,g as a}from"./vendor.fb012022.js";const u={name:"Home",setup(){}},r={class:"home"},i=o("h1",null,"Hello.",-1),n=o("h3",null,"This is a static responsive site based on Vite@2+vue@3+vuex@4+vue-router@4",-1),m=o("h3",null,"Features",-1),d=o("a",{href:"https://github.com/wizardpisces/tiny-sass-compiler"},"tiny-sass-compiler's ",-1),c=a("Demo Page"),f=a("Blog"),h=a("Bookmarks");u.render=function(a,u,p,v,b,g){const k=s("router-link");return e(),l("div",r,[i,n,m,o("ul",null,[o("li",null,[d,o(k,{to:"/sass"},{default:t((()=>[c])),_:1})]),o("li",null,[o(k,{to:"/blog/《系统之美》"},{default:t((()=>[f])),_:1})]),o("li",null,[o(k,{to:"/bookmark"},{default:t((()=>[h])),_:1})])])])};export default u;
