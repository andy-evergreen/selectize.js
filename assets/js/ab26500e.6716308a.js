"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5352],{3636:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6010),l=a(5742);function s(){return(0,n.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),n.createElement(n.Fragment,null,n.createElement(l.Z,null,n.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),n.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),n.createElement("span",{className:(0,o.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return n.createElement("button",{className:(0,o.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},n.createElement("span",{className:(0,o.Z)(e.icon,"pr-2")}),e.label)}))))}},7927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(7462),o=a(7294),l=a(3905),s=a(814),i=a(3636);function c(){return(0,o.useEffect)((()=>{$("#autoSelectOnType").selectize({plugins:["auto_select_on_type"]})})),o.createElement("div",null,o.createElement("div",{style:{marginBottom:"1rem"}},o.createElement(i.Z,null),o.createElement("h4",{style:{textAlign:"left",marginBottom:"4rem"}},"A plugin by ",o.createElement("a",{href:"https://github.com/risadams"},"Ris Adams")," for auto select value on ",o.createElement("code",null,"blur")," if exact value available. Try with tipping 'beast' and click outside of input."),o.createElement("select",{id:"autoSelectOnType"},o.createElement("option",{value:""}),o.createElement("option",{value:"1"},"Awesome"),o.createElement("option",{value:"2"},"Beast"),o.createElement("option",{value:"3"},"Compatible"),o.createElement("option",{value:"4"},"Thomas Edison"),o.createElement("option",{value:"5"},"Nikola"),o.createElement("option",{value:"6"},"Selectize"),o.createElement("option",{value:"7"},"Javascript"))),o.createElement(s.Z,{className:"language-html",title:"Html"},"<select id=\"autoSelectOnType\">\n  <option value=''></option>\n  <option value='1'>Awesome</option>\n  <option value='2'>Beast</option>\n  <option value='3'>Compatible</option>\n  <option value='4'>Thomas Edison</option>\n  <option value='5'>Nikola</option>\n  <option value='6'>Selectize</option>\n  <option value='7'>Javascript</option>\n</select>\n              "),o.createElement(s.Z,{className:"language-javascript",title:"Javascript"},'$("#autoSelectOnType").selectize({\n  plugins: ["auto_select_on_type"],\n});'))}const r={id:"auto-select-on-type",title:"Auto Select On Tape",description:"A plugin by Ris Adams for auto select value when is tapping on select input"},u=void 0,p={unversionedId:"plugins/auto-select-on-type",id:"plugins/auto-select-on-type",title:"Auto Select On Tape",description:"A plugin by Ris Adams for auto select value when is tapping on select input",source:"@site/docs/plugins/auto-select-on-type.mdx",sourceDirName:"plugins",slug:"/plugins/auto-select-on-type",permalink:"/docs/plugins/auto-select-on-type",draft:!1,tags:[],version:"current",frontMatter:{id:"auto-select-on-type",title:"Auto Select On Tape",description:"A plugin by Ris Adams for auto select value when is tapping on select input"},sidebar:"demoSidebar",previous:{title:"Auto position",permalink:"/docs/plugins/auto-position"},next:{title:"Clear Button",permalink:"/docs/plugins/clear-button"}},m={},d=[],f={toc:d};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"AutoSelectOnType"}))}v.isMDXComponent=!0}}]);