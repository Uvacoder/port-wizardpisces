import{A as n,r as e,o,d as l,i as a,g as t,u as i,m as s,s as r,f as c,k as u,v as g}from"./vendor.65f8cca0.js";import{_ as m,c as x}from"./index.e94a91f1.js";var d={name:"A",props:{check:Number},components:{B:n((()=>m((()=>__import__("./b.a8e60006.js")),["/assets/b.a8e60006.js","/assets/index.e94a91f1.js","/assets/index.6823a0a5.css","/assets/vendor.65f8cca0.js"])))},setup:n=>({check:n.check})};const h=t(" this is A ");d.render=function(n,t,i,s,r,c){const u=e("B");return o(),l("div",null,[h,s.check?(o(),l(u,{key:0,check:s.check-1},null,8,["check"])):a("",!0)])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:d}),p={name:"BlogVueSSr",components:{Circular:d},setup(){let n=i(),{blogContent:e,initBlogByTitle:o,loadingBlog:l}=x();return s((()=>n.params.blogName),(e=>{"Blog"===n.name&&(document.title=e+" | Blog")}),{immediate:!0}),r((()=>{o(n.params.blogName,n.hash).then((e=>{location.hash="",location.hash=n.hash}))})),{blogContent:e,loadingBlog:l,introduction:'<h2 id="&#x535A;&#x5BA2;&#x5185;&#x5BB9;"><a href="#&#x535A;&#x5BA2;&#x5185;&#x5BB9;"></a>&#x535A;&#x5BA2;&#x5185;&#x5BB9;</h2>\n<ul>\n<li>&#x6280;&#x672F;&#x7684;&#x601D;&#x8003;</li>\n<li>&#x8BFB;&#x4E66;&#x7684;&#x601D;&#x8003;</li>\n</ul>\n'}}};const b={class:"blog"},_={class:"page"},f={class:"content"},k=t(" Loading blog .... below is a md2html test:");p.render=function(n,e,t,i,s,r){return o(),l("div",b,[c("main",_,[c("div",f,[i.blogContent&&!i.loadingBlog?(o(),l("p",{key:0,innerHTML:i.blogContent},null,8,["innerHTML"])):a("",!0),u(c("h2",null,[k,c("p",{innerHTML:i.introduction},null,8,["innerHTML"])],512),[[g,!1]])])])])};var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p});export{B as a,A as i};
