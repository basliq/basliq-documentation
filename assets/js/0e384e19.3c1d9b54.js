"use strict";(self.webpackChunkluna_documentation=self.webpackChunkluna_documentation||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Luna is a simple project-management tool (in fact the world's simplest project management tool ever) which helps you to:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/basliq/luna-documentation/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Project Definition",permalink:"/docs/category/project-definition"}},u={},s=[{value:"About this documentation",id:"about-this-documentation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Goals",id:"goals",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Luna is a simple project-management tool ",(0,r.kt)("strong",{parentName:"p"},"(in fact the world's simplest project management tool ever)")," which helps you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"manage your work"),(0,r.kt)("li",{parentName:"ul"},"have control over your tasks"),(0,r.kt)("li",{parentName:"ul"},"orchestrate your team"),(0,r.kt)("li",{parentName:"ul"},"or just make plans for your life")),(0,r.kt)("p",null,"You can use Luna from your terminal, Telegram messenger or a modern browser."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Luna is still under development and doesn't have a stable and working release.")),(0,r.kt)("h2",{id:"about-this-documentation"},"About this documentation"),(0,r.kt)("p",null,"This documentation contains information about general engineering discussions and application-specific developer guides. If you are looking for a user manual kind of documentation to see how Luna is best used, you can visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/basliq/luna-manual"},"luna-manual"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/basliq/luna-manual"},"luna-manual")," for Luna's user manual documentation.")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can head over to different code repositories of the Luna project and there you can read about how to install each application. Luna is going to be served online in a near future, but you can host it on your computer or server too. You can view the code from these following repositories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-server repo")," (\ud83d\udea7 under development)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-web repo")," (\ud83d\udea7 under development)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-cli repo")," (\u26a0\ufe0f not started yet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-telegram repo")," (\u26a0\ufe0f not started yet)")),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"You can also read about their implementation details and developer guides in the following sections of this documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/project-definition/definition"},"luna project definition")," (\ud83d\udea7 under development)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/luna-server/intro"},"luna-server docs")," (\ud83d\udea7 under development)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/luna-web/intro"},"luna-web docs")," (\ud83d\udea7 under development)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-cli docs")," (\u26a0\ufe0f not started yet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"luna-telegram docs")," (\u26a0\ufe0f not started yet)")),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"Here in this ",(0,r.kt)("a",{parentName:"p",href:"../blog/why-luna-was-created"},"blog post")," you can read about the initial goals and motives of creating this project and why this project exists in the first place."),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/atareversei"},"Amirata Faraji")," (Developer)")))}d.isMDXComponent=!0}}]);