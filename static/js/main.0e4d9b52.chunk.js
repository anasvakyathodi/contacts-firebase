(this.webpackJsonplearnapp=this.webpackJsonplearnapp||[]).push([[0],{17:function(e,a,t){e.exports=t(35)},22:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(14),r=t.n(c),o=(t(22),t(23),t(7)),m=t(8),s=t(15),i=t.n(s),u=t(10),d=function(e){var a={fullname:"",mobile:"",email:"",address:""},t=Object(n.useState)(a),c=Object(m.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){""==e.currentId?s(Object(o.a)({},a)):s(Object(o.a)({},e.contactObjects[e.currentId]))}),[e.currentId,e.contactObjects]);var i=function(e){var a=e.target,t=a.name,n=a.value;s(Object(o.a)(Object(o.a)({},r),{},Object(u.a)({},t,n)))};return l.a.createElement("form",{autoComplete:"off",onSubmit:function(a){a.preventDefault(),e.addOrEdit(r)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",placeholder:"Full Name",value:r.fullname,name:"fullname",onChange:i,required:!0})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-6 col-auto form-group"},l.a.createElement("input",{className:"form-control",placeholder:"Mobile",value:r.mobile,name:"mobile",onChange:i})),l.a.createElement("div",{className:"col-md-6 col-auto form-group"},l.a.createElement("input",{className:"form-control",placeholder:"Email",value:r.email,name:"email",onChange:i}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",placeholder:"Address",name:"address",value:r.address,onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:""==e.currentId?"save":"Update"})))},f=t(16).initializeApp({apiKey:"AIzaSyA5t5au_2a44s8vqLZ70unM5NJOTQRKog4",authDomain:"learning-app-ce74f.firebaseapp.com",databaseURL:"https://learning-app-ce74f.firebaseio.com",projectId:"learning-app-ce74f",storageBucket:"learning-app-ce74f.appspot.com",messagingSenderId:"309501596531",appId:"1:309501596531:web:14e75ca5364a992d6feb06",measurementId:"G-MDDF4MJ8WC"}).database().ref(),p=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({}),s=Object(m.a)(r,2),u=s[0],p=s[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),v=E[0],h=E[1];return Object(n.useEffect)((function(){f.child("contacts").on("value",(function(e){null!=e.val()?(p(Object(o.a)({},e.val())),c(!0)):p({})}))}),[]),l.a.createElement(l.a.Fragment,null,!1===t?l.a.createElement("center",{style:{marginTop:"40vh"}},l.a.createElement(i.a,{type:"bars",color:"black"})):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("h2",{className:"text-center"},"Contact Register")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement(d,{addOrEdit:function(e){""===v?f.child("contacts").push(e,(function(e){e?console.log(e):h("")})):f.child("contacts/".concat(v)).set(e,(function(e){e?console.log(e):h("")}))},currentId:v,contactObjects:u})),l.a.createElement("div",{className:"col-md-7",style:{overflow:"auto"}},l.a.createElement("table",{className:"table table-borderless table-striped"},l.a.createElement("thead",{className:"thread-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Full Name"),l.a.createElement("th",null,"Mobile"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,Object.keys(u).map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,u[e].fullname),l.a.createElement("td",null,u[e].mobile),l.a.createElement("td",null,u[e].email),l.a.createElement("td",null,l.a.createElement("a",{className:"btn text-primary",onClick:function(){return h(e)}},l.a.createElement("i",{className:"fas fa-pencil-alt"})),l.a.createElement("a",{className:"btn text-danger",onClick:function(){return a=e,void(window.confirm("Are you sure ?")&&f.child("contacts/".concat(a)).remove((function(e){e?console.log(e):h("")})));var a}},l.a.createElement("i",{className:"fas fa-trash-alt"}))))}))))))))};t(34);var b=function(){return l.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0e4d9b52.chunk.js.map