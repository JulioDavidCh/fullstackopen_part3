(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},s=n(3),p=n.n(s),d=function(){return p.a.get("/notes").then(function(t){return t.data})},E=function(t){return p.a.post("/notes",t).then(function(t){return t.data})},b=function(t,e){return p.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},v=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),p=s[0],v=s[1],g=Object(a.useState)(!0),h=Object(i.a)(g,2),O=h[0],j=h[1],S=Object(a.useState)(null),w=Object(i.a)(S,2),k=w[0],y=w[1];Object(a.useEffect)(function(){d().then(function(t){return o(t)})},[]);var N=O?n:n.filter(function(t){return t.important}),C=function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});b(t,a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("Note '".concat(e.content,"' was already removed from server")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})};return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:k}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),r.a.createElement("ul",null,N.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return C(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};E(e).then(function(t){o(n.concat(t)),v("")})}},r.a.createElement("input",{value:p,onChange:function(t){v(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(f,null))};n(38);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b4c60beb.chunk.js.map