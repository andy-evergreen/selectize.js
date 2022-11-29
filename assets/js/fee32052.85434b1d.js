"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5931],{3636:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(7294),n=l(6010),c=l(5742);function a(){return(0,o.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),o.createElement(o.Fragment,null,o.createElement(c.Z,null,o.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),o.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),o.createElement("span",{className:(0,n.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const l=0===t?"active":"";return o.createElement("button",{className:(0,n.Z)(l,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},o.createElement("span",{className:(0,n.Z)(e.icon,"pr-2")}),e.label)}))))}},4719:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var o=l(7462),n=l(7294),c=l(3905),a=l(814),i=l(3636);function s(){return(0,n.useEffect)((()=>{$("select").selectize({create:!0}),$("#select-locked-empty")[0].selectize.lock(),$("#select-locked-single")[0].selectize.lock(),$("#select-locked")[0].selectize.lock()})),n.createElement(n.Fragment,null,n.createElement("div",{style:{marginBottom:"1rem"}},n.createElement(i.Z,null),n.createElement("h4",null,"Control Locking."),n.createElement("p",null,"Selectize controls can be locked to prevent user interaction."),n.createElement("div",{className:"control-group"},n.createElement("label",{htmlFor:"select-locked-empty"},"Locked (empty):"),n.createElement("select",{id:"select-locked-empty",multiple:!0,placeholder:"No input allowed..."},n.createElement("option",{value:"A"},"Option A"),n.createElement("option",{value:"B"},"Option B"),n.createElement("option",{value:"C"},"Option C"))),n.createElement("div",{className:"control-group"},n.createElement("label",{htmlFor:"select-locked-single"},"Locked (single):"),n.createElement("select",{id:"select-locked-single",placeholder:"No input allowed...",defaultValue:"B"},n.createElement("option",{value:"A"},"Option A"),n.createElement("option",{value:"B"},"Option B"),n.createElement("option",{value:"C"},"Option C"))),n.createElement("div",{className:"control-group"},n.createElement("label",{htmlFor:"select-locked"},"Locked:"),n.createElement("select",{id:"select-locked",multiple:!0,placeholder:"No input allowed...",defaultValue:["B","C"]},n.createElement("option",{value:"A"},"Option A"),n.createElement("option",{value:"B"},"Option B"),n.createElement("option",{value:"C"},"Option C"))),n.createElement("div",{className:"control-group"},n.createElement("label",{htmlFor:"select-unlocked"},"Unlocked:"),n.createElement("select",{id:"select-unlocked",multiple:!0,placeholder:"Input allowed..."},n.createElement("option",{value:"A"},"Option A"),n.createElement("option",{value:"B"},"Option B"),n.createElement("option",{value:"C"},"Option C")))),n.createElement(a.Z,{className:"language-html",title:"Html"},'<div class="control-group">\n  <label for="select-locked-empty">Locked (empty):</label>\n  <select id="select-locked-empty" multiple placeholder="No input allowed...">\n    <option value="A">Option A</option>\n    <option value="B">Option B</option>\n    <option value="C">Option C</option>\n  </select>\n</div>\n<div class="control-group">\n  <label for="select-locked-single">Locked (single):</label>\n  <select id="select-locked-single" placeholder="No input allowed...">\n    <option value="A">Option A</option>\n    <option value="B" selected>Option B</option>\n    <option value="C">Option C</option>\n  </select>\n</div>\n<div class="control-group">\n  <label for="select-locked">Locked:</label>\n  <select id="select-locked" multiple placeholder="No input allowed...">\n    <option value="A">Option A</option>\n    <option value="B" selected>Option B</option>\n    <option value="C" selected>Option C</option>\n  </select>\n</div>\n<div class="control-group">\n  <label for="select-unlocked">Unlocked:</label>\n  <select id="select-unlocked" multiple placeholder="Input allowed...">\n    <option value="A">Option A</option>\n    <option value="B">Option B</option>\n    <option value="C">Option C</option>\n  </select>\n</div>'),n.createElement(a.Z,{className:"language-javascript",title:"Javascript"},"$('select').selectize({create: true});\n$('#select-locked-empty')[0].selectize.lock();\n$('#select-locked-single')[0].selectize.lock();\n$('#select-locked')[0].selectize.lock();"))}const r={id:"lock",title:"Control Locking",description:"Selectize controls can be locked to prevent user interaction."},p=void 0,d={unversionedId:"demos/lock",id:"demos/lock",title:"Control Locking",description:"Selectize controls can be locked to prevent user interaction.",source:"@site/docs/demos/lock.mdx",sourceDirName:"demos",slug:"/demos/lock",permalink:"/docs/demos/lock",draft:!1,tags:[],version:"current",frontMatter:{id:"lock",title:"Control Locking",description:"Selectize controls can be locked to prevent user interaction."},sidebar:"demoSidebar",previous:{title:"Using Events",permalink:"/docs/demos/events"},next:{title:"Maximum number of items",permalink:"/docs/demos/max-items"}},m={},u=[],k={toc:u};function v(e){let{components:t,...l}=e;return(0,c.kt)("wrapper",(0,o.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(s,{mdxType:"Lock"}))}v.isMDXComponent=!0}}]);