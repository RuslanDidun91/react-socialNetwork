(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{383:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},389:function(e,s,a){"use strict";a.r(s);var t=a(5),i=a(159),n=(a(0),a(383)),c=a.n(n),o=a(35),d=a(1),r=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(d.jsx)(o.c,{to:s,children:e.name})})},j=function(e){return Object(d.jsx)("div",{className:c.a.dialog,children:e.message})},l=a(181),g=a(51),u=a(103),b=Object(u.a)(50),m=Object(l.a)({form:"dialog-add-message-form"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(g.c)("Enter your message","newMessageBody",[u.b,b],g.b)}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(d.jsx)(r,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(d.jsx)(j,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:c.a.dialogs,children:[Object(d.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(d.jsx)("div",{className:c.a.messages,children:Object(d.jsx)("div",{children:t})}),Object(d.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},h=a(14),x=a(138),f=a(18),v=["isAuth"],_=function(e){return{isAuth:e.auth.isAuth}};var p=a(17);s.default=Object(p.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(t.a)({},i.a)),(function(e){return Object(h.b)(_,{})((function(s){var a=s.isAuth,i=Object(x.a)(s,v);return a?Object(d.jsx)(e,Object(t.a)({},i)):Object(d.jsx)(f.a,{to:"/login"})}))}))(O)}}]);
//# sourceMappingURL=4.a1d256d5.chunk.js.map