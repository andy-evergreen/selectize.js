"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3206],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),r=a(6010),s=a(2389),i=a(7392),o=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:m,groupId:h,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,o.U)(),[N,I]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&I(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),l=b[a].value;l!==N&&(z(t),I(l),null!=h&&w(h,String(l)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:j},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},9568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=a(7462),n=(a(7294),a(3905)),r=a(5488),s=a(5162);const i={},o="Getting Started with Selectize",c={unversionedId:"intro",id:"intro",title:"Getting Started with Selectize",description:"Selectize is a JavaScript library that provides a rich user experience for selecting items from a list. It supports single and multi-value selections, searching, tagging, remote data sets, and infinite scrolling.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Usage",permalink:"/docs/usage"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Install with npm / yarn",id:"install-with-npm--yarn",level:3},{value:"Install with cdn",id:"install-with-cdn",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-selectize"},"Getting Started with Selectize"),(0,n.kt)("p",null,"Selectize is a JavaScript library that provides a rich user experience for selecting items from a list. It supports single and multi-value selections, searching, tagging, remote data sets, and infinite scrolling."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,n.kt)("p",null,"Selectize requires jQuery. We also include styles for bootstrap and provide raw Less and Sass files for you to customize with any framework you like."),(0,n.kt)("p",null,"If you want to use the Drag & Drop plugin, you'll need jQuery UI."),(0,n.kt)("h3",{id:"install-with-npm--yarn"},"Install with npm / yarn"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @selectize/selectize\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @selectize/selectize\n")))),(0,n.kt)("h3",{id:"install-with-cdn"},"Install with cdn"),(0,n.kt)("p",null,"The fastest way to add Selectize to your project is to include the js and css from ",(0,n.kt)("a",{parentName:"p",href:"https://cdnjs.com/libraries/selectize.js"},"cdnjs"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="stylesheet"\n  href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.15.2/css/selectize.default.min.css"\n  integrity="sha512-pTaEn+6gF1IeWv3W1+7X7eM60TFu/agjgoHmYhAfLEU8Phuf6JKiiE8YmsNC0aCgQv4192s4Vai8YZ6VNM6vyQ=="\n  crossorigin="anonymous"\n  referrerpolicy="no-referrer"\n/>\n<script\n  src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.15.2/js/selectize.min.js"\n  integrity="sha512-IOebNkvA/HZjMM7MxL0NYeLYEalloZ8ckak+NDtOViP7oiYzG5vn6WVXyrJDiJPhl4yRdmNAG49iuLmhkUdVsQ=="\n  crossorigin="anonymous"\n  referrerpolicy="no-referrer"\n><\/script>\n')))}m.isMDXComponent=!0}}]);