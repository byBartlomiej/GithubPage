(this.webpackJsonpto_do_app=this.webpackJsonpto_do_app||[]).push([[0],{16:function(e,t,a){e.exports=a(25)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),s=a.n(i),r=(a(21),a(22),a(10)),l=a(5),o=a(6),m=a(8),u=a(7),d=a(9),h=a(27),f=a(28),p=(a(23),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.checked,c=e.date;t.length>2?a.props.add(t,c,n)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("Minimum 3 znaki")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",c.a.createElement("div",{className:"container mt-4"},c.a.createElement(h.a,{className:"mb-3 justify-content-center"},c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Text,{className:"bg-main text-white",id:"inputGroup-sizing-sm"},"Nazwa zadania:")),c.a.createElement("input",{type:"text",placeholder:"dodaj zadanie",value:this.state.text,onChange:this.handleText}),c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Radio,{type:"checkbox",checked:this.state.checked,id:"important",onChange:this.handleCheckbox})),c.a.createElement(h.a.Append,null,c.a.createElement(h.a.Text,{className:"bg-main text-white"},"Wa\u017cne"))),c.a.createElement(h.a,{size:"md",className:"mb-3 justify-content-center"},c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Text,{className:"bg-main text-white",id:"inputGroup-sizing-md"},"Wykona\u0107 do: ")),c.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),c.a.createElement(h.a.Append,null,c.a.createElement(f.a,{className:"btn btn-info bg-main",onClick:this.handleClick},"Dodaj"))))}}]),t}(n.Component)),k=a(26),E=function(e){var t=e.task,a=t.text,n=t.date,i=t.id,s=t.active,r=t.important,l=t.finishDate;if(s)return c.a.createElement("div",{className:"my-1"},c.a.createElement("strong",{style:r?{color:"red"}:null},a)," - do ",c.a.createElement("span",null,n," "),c.a.createElement(k.a,{size:"sm",className:"px-2","aria-label":"Basic example"},c.a.createElement(f.a,{className:"btn btn-success bg-main",onClick:function(){return e.change(i)}},"Zosta\u0142o zrobione"),c.a.createElement(f.a,{className:"btn btn-danger",onClick:function(){return e.delete(i)}},"usu\u0144")));var o=new Date(l).toLocaleString();return c.a.createElement("div",{className:"my-1"},c.a.createElement("strong",{className:"doneTask"},a)," - wykonano",c.a.createElement("span",null," ",o),c.a.createElement(f.a,{size:"sm",className:"btn btn-info bg-main mx-2",onClick:function(){return e.delete(i)}},"X"))},g=function(e){var t=e.tasks.filter((function(e){return e.active})),a=e.tasks.filter((function(e){return!e.active}));a.length>=2&&a.sort((function(e,t){return e.finishDate<t.finishDate?1:e.finishDate>t.finishDate?-1:0})),t.length>=2&&t.sort((function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0}));var n=t.map((function(t){return c.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})})),i=a.map((function(t){return c.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"active"},c.a.createElement("h1",{className:"display-4"},"Zadania do zrobienia:"),n.length>0?n:c.a.createElement("p",null,"Wygl\u0105da na to, \u017ce nie masz ju\u017c nic do zrobienia!")),c.a.createElement("div",{className:"done"},c.a.createElement("h3",{className:"display-4"},"Wykonanych zada\u0144: ",c.a.createElement("em",null,a.length)),a.length>5&&c.a.createElement("span",{className:"text-muted mb-2"},"wy\u015bwietlonych jest jedynie 5 ostatnich zada\u0144"),i.slice(0,5)))},b=(a(24),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).counter=2,a.state={tasks:[{id:1,text:"nauczy\u0107 si\u0119 programowania",date:"2020-12-24",important:!0,active:!0,finishDate:null}]},a.deleteTask=function(e){var t=Object(r.a)(a.state.tasks);t=t.filter((function(t){return t.id!==e})),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Array.from(a.state.tasks);t.forEach((function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())})),a.setState({tasks:t})},a.addTask=function(e,t,n){var c={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState((function(e){return{tasks:[].concat(Object(r.a)(e.tasks),[c])}})),!0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,{add:this.addTask}),c.a.createElement(g,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component));s.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d6bcd0f8.chunk.js.map