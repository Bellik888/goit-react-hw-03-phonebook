(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=(n(15),n(16),n(10)),l=n(4),o=n(5),u=n(7),d=n(6),h=(n(17),n(2)),b=n.n(h),m=n(0),j=function(e){var t=e.handleChangeFilter,n=e.filter,a=b()();return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:a,children:"Find contacts by name"}),Object(m.jsx)("input",{id:a,name:n,type:"text",value:n,onChange:t})]})},p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).inputNameID=b()(),e.inputNumberID=b()(),e.state={name:"",number:""},e.handleChangeName=function(t){e.setState({name:t.target.value})},e.handleChangeNumber=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n={id:b()(),name:e.state.name,number:e.state.number};e.state.name&&e.state.number&&(e.setState({contact:n}),e.props.searchDuplicate(n),e.setState({name:"",number:""}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.inputNameID,n=this.inputNumberID,a=this.handleChangeName,c=this.handleChangeNumber,r=this.state,i=r.name,s=r.number;return Object(m.jsx)("section",{children:Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsx)("label",{htmlFor:t,children:"Names"}),Object(m.jsx)("input",{id:t,name:i,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0431\u0443\u043a\u0432\u0438, \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 : \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0438",value:i,onChange:a}),Object(m.jsx)("label",{htmlFor:n,children:"Number"}),Object(m.jsx)("input",{id:n,name:s,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",tittle:"\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e \u0446\u0438\u0444\u0440\u0438! \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 '+' , '-', '()'",value:s,placeholder:"XXX-XX-XX",onChange:c}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),f=function(e){var t=e.children;return{children:t}&&Object(m.jsx)("section",{children:Object(m.jsx)("ul",{children:t})})},O=function(e){var t=e.filter,n=e.contacts,a=e.deleteItem;return Object(m.jsx)(m.Fragment,{children:""===t?n.map((function(e){var t=e.name,n=e.number,c=e.id;return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:[t," : ",n]}),Object(m.jsx)("button",{type:"button",onClick:function(){return a(c)},children:"Delete"})]},c)})):n.map((function(e){var n=e.name,c=e.number,r=e.id;return n.toLowerCase().includes(t.toLowerCase())&&Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:[n," : ",c]}),Object(m.jsx)("button",{type:"button",onClick:function(){return a(r)},children:"Delete"})]},r)}))})},x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.searchDuplicate=function(t){e.state.contacts.map((function(e){return e.name})).includes(t.name)?alert("".concat(t.name," is already in contacts!!!")):e.addNewContact(t)},e.handleChangeFilter=function(t){e.setState({filter:t.target.value})},e.deleteItem=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.addNewContact,t=this.searchDuplicate,n=this.handleChangeFilter,a=this.deleteItem,c=this.state,r=c.contacts,i=c.filter;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(p,{addNewContact:e,searchDuplicate:t,contacts:r}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(j,{filter:i,handleChangeFilter:n}),Object(m.jsx)(f,{children:Object(m.jsx)(O,{contacts:r,filter:i,deleteItem:a})})]})}}]),n}(a.Component),v=x;i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3ce3f176.chunk.js.map