import{H as n,r as o,o as e,d as l,i as t,g as a,u as s,s as i,f as r,l as c,x as u}from"./vendor.3c273c44.js";import{_ as x,c as g}from"./index.929fb1a8.js";var h={name:"A",props:{check:Number},components:{B:n((()=>x((()=>__import__("./b.48f8d6af.js")),["/assets/b.48f8d6af.js","/assets/index.929fb1a8.js","/assets/index.b7922bde.css","/assets/vendor.3c273c44.js"])))},setup:n=>({check:n.check})};const d=a(" this is A ");h.render=function(n,a,s,i,r,c){const u=o("B");return e(),l("div",null,[d,i.check?(e(),l(u,{key:0,check:i.check-1},null,8,["check"])):t("",!0)])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h}),m={name:"BlogVueSSr",components:{Circular:h},setup(){let n=s(),{blogContent:o,initBlogByTitle:e,loadingBlog:l}=g();return i((()=>{e(n.params.blogName,n.hash).then((o=>{location.hash="",location.hash=n.hash}))})),{blogContent:o,loadingBlog:l,introduction:'<h2 id="&#x535A;&#x5BA2;&#x5185;&#x5BB9;"><a href="#&#x535A;&#x5BA2;&#x5185;&#x5BB9;"></a>&#x535A;&#x5BA2;&#x5185;&#x5BB9;</h2>\n<ul>\n<li>&#x6280;&#x672F;&#x7684;&#x601D;&#x8003;</li>\n<li>&#x8BFB;&#x4E66;&#x7684;&#x601D;&#x8003;</li>\n</ul>\n'}}};const p={class:"blog"},b={class:"page"},_={class:"content"},f=a(" Loading blog .... below is a md2html test:");m.render=function(n,o,a,s,i,x){return e(),l("div",p,[r("main",b,[r("div",_,[s.blogContent&&!s.loadingBlog?(e(),l("p",{key:0,innerHTML:s.blogContent},null,8,["innerHTML"])):t("",!0),c(r("h2",null,[f,r("p",{innerHTML:s.introduction},null,8,["innerHTML"])],512),[[u,!1]])])])])};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});export{B as a,k as i};
