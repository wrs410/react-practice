(this["webpackJsonptodo-project"]=this["webpackJsonptodo-project"]||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),c=a.n(o),r=(a(18),a(1)),i=a(10),m=a(2);var s=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)(),i=Object(m.a)(r,2),s=i[0],u=i[1],d=l.a.createElement("div",null,l.a.createElement("div",{className:"c-cb"},l.a.createElement("input",{onChange:function(){return e.toggleTaskCompleted(e.id)},className:"mr-2",id:e.id,type:"checkbox",defaultChecked:e.completed}),l.a.createElement("label",{className:"todo-label lead",htmlFor:e.id},l.a.createElement("strong",null,"Name: "),e.name.split("/")[0]+" ",l.a.createElement("strong",null,"Time: "),e.name.split("/")[1])),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return c(!0)},type:"button",className:"btn btn-warning mr-3"},"Edit ",l.a.createElement("span",null,e.name.split("/")[0])),l.a.createElement("button",{onClick:function(){return e.removeTask(e.id)},type:"button",className:"btn btn-warning"},"Remove ",l.a.createElement("span",null,e.name.split("/")[0])))),p=l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.editTaskName(e.id,s),u(""),c(!1)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"mr-3",htmlFor:e.id},"New name for ",e.name.split("/")[0]," (Format: Name/Time):"),l.a.createElement("input",{id:e.id,type:"text",value:s,onChange:function(e){u(e.target.value)}})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("button",{onClick:function(){return c(!1)},type:"button",className:"btn btn-warning mr-3"},"Cancel",l.a.createElement("span",null," renaming ",e.name.split("/")[0])),l.a.createElement("button",{type:"submit",className:"btn btn-warning mr-3"},"Save",l.a.createElement("span",null," new name for ",e.name.split("/")[0]))));return l.a.createElement("li",{className:"todo mb-2"},e.visible?o?p:d:l.a.createElement("span",null))};var u=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],c=a[1];return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTask(o),c("")},className:"mb-3"},l.a.createElement("label",{htmlFor:"new-todo-input"},"Enter a New Task (Name/Time)"),l.a.createElement("input",{onChange:function(e){c(e.target.value)},className:"ml-2",type:"text",id:"new-todo-input",name:"text",autoComplete:"off",value:o}),l.a.createElement("button",{className:"btn-lg btn-primary ml-2",type:"submit"},"Add Task"))},d=a(7),p=a(8),b=a(12),f=a(9),v=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{onClick:function(){return e.props.toggleTask(e.props.name)},type:"button",className:"btn btn-info mx-2","aria-pressed":"true"},"Toggle ",this.props.name," Tasks")}}]),a}(l.a.Component),E=a(11);var g=function(e){var t=Object(n.useState)(e.tasks),a=Object(m.a)(t,2),o=a[0],c=a[1],d=o.map((function(e){return l.a.createElement(s,{name:e.name,id:e.id,completed:e.completed,key:e.id,toggleTaskCompleted:f,removeTask:b,editTaskName:g,visible:e.visible})})),p=["All","Incomplete","Complete"].map((function(e){return l.a.createElement(v,{key:e,name:e,toggleTask:h})}));function b(e){var t=o.filter((function(t){return e!==t.id}));c(t)}function f(e){var t=o.map((function(t){return e===t.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));c(t)}function g(e,t){var a=o.map((function(a){return e===a.id?Object(r.a)(Object(r.a)({},a),{},{name:t}):a}));c(a)}function h(e){if("All"===e){var t=o.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{visible:!0})}));c(t)}else if("Incomplete"===e){var a=o.map((function(e){return!1===e.completed?Object(r.a)(Object(r.a)({},e),{},{visible:!e.visible}):e}));c(a)}else if("Complete"===e){var n=o.map((function(e){return!0===e.completed?Object(r.a)(Object(r.a)({},e),{},{visible:!e.visible}):e}));c(n)}}return l.a.createElement("div",{className:"todo-app container"},l.a.createElement("h1",null,"Basic Schedule App"),l.a.createElement(u,{addTask:function(e){var t={id:"todo-"+Object(E.a)(),name:e,completed:!1,visible:!0};c([].concat(Object(i.a)(o),[t]))}}),l.a.createElement("div",{className:"filters mb-3 "},p),l.a.createElement("h4",{id:"list-heading"},"Total of ".concat(d.length," ").concat(1===d.length?"task":"tasks"," remaining, "),"".concat(o.filter((function(e){return!0===e.completed})).length," completed")),l.a.createElement("ul",{role:"list",className:"todo-list","aria-labelledby":"list-heading"},d))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,{tasks:[{id:"todo-0",name:"Buy Shampoo/3pm",completed:!0,visible:!0},{id:"todo-1",name:"Take the dog for a walk/8am",completed:!1,visible:!0},{id:"todo-2",name:"Mail letter/12pm",completed:!1,visible:!0}]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.ff796e6e.chunk.js.map