(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),s=(n(35),n(13)),i=n(14),u=n(16),l=n(15),b=n(5),j=n(2),d=n(8),f=(n(42),n(9)),O=n(19),h=(n(44),n(45),n(10)),m=n.n(h),p=n(3),v=Object(p.b)("contacts/addRequest"),x=Object(p.b)("contacts/addSuccess"),g=Object(p.b)("contacts/addError"),_=Object(p.b)("contacts/deleteRequest"),N=Object(p.b)("contacts/deleteSuccess"),C=Object(p.b)("contacts/deleteError"),y=Object(p.b)("contacts/getRequest"),w=Object(p.b)("contacts/getSuccess"),k=Object(p.b)("contacts/getError");m.a.defaults.baseURL="https://61fb905c87801d0017a2c5b6.mockapi.io";var I=n(1),S={name:"",number:""},L=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state=Object(d.a)({},S),t.nameId=Object(f.a)(),t.numberId=Object(f.a)(),t.reset=function(){return t.setState(Object(d.a)({},S))},t.onInputHandler=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(j.a)({},c,a))},t.addContact=function(e){t.props.addContact(e),Object(O.info)({text:"Contact successfully added",delay:700})},t.onSubmitHandler=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name})))Object(O.info)({text:"".concat(t.state.name," is already in contacts."),delay:700});else{var n={name:t.state.name,number:t.state.number,id:Object(f.a)()};t.addContact(n),t.reset()}},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("form",{className:"form",onSubmit:this.onSubmitHandler,children:[Object(I.jsxs)("label",{className:"form__title",htmlFor:this.nameId,children:[Object(I.jsx)("h3",{className:"phonebook__headline",children:"Name"}),Object(I.jsx)("input",{className:"form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.nameId,value:this.state.name,onChange:this.onInputHandler})]}),Object(I.jsxs)("label",{className:"form__title",htmlFor:this.numberId,children:[Object(I.jsx)("h3",{className:"phonebook__headline",children:"Number"}),Object(I.jsx)("input",{className:"form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.numberId,value:this.state.number,onChange:this.onInputHandler})]}),Object(I.jsx)("button",{className:"form__submit",type:"submit",children:"Add contact"})]})}}]),n}(c.Component),A=Object(b.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{addContact:function(e){return t((n=e,function(t){t(v()),m.a.post("/contacts",n).then((function(e){var n=e.data;t(x(n))})).catch((function(e){return t(g(e))}))}));var n}}}))(L);n(65);function F(t){var e=t.name,n=t.number,c=t.deleteContact;return Object(I.jsxs)("li",{className:"list__item",children:[Object(I.jsxs)("p",{className:"list__text",children:[Object(I.jsxs)("span",{children:[e," :"]})," ",n]}),Object(I.jsx)("button",{className:"list__btn",onClick:c,type:"button",children:"Delete"})]})}var q,E,H,z=n(6),R=n(20),J=Object(p.c)([],(q={},Object(j.a)(q,x,(function(t,e){var n=e.payload;return[].concat(Object(R.a)(t),[n])})),Object(j.a)(q,N,(function(t,e){var n=e.payload;return Object(R.a)(t.filter((function(t){return t.id!==n})))})),Object(j.a)(q,w,(function(t,e){return e.payload})),q)),M=Object(p.c)(!1,(E={},Object(j.a)(E,v,(function(){return!0})),Object(j.a)(E,g,(function(){return!1})),Object(j.a)(E,x,(function(){return!1})),Object(j.a)(E,_,(function(){return!0})),Object(j.a)(E,C,(function(){return!1})),Object(j.a)(E,N,(function(){return!1})),Object(j.a)(E,y,(function(){return!0})),Object(j.a)(E,k,(function(){return!1})),Object(j.a)(E,w,(function(){return!1})),E)),P=Object(p.c)("",(H={},Object(j.a)(H,v,(function(){return""})),Object(j.a)(H,g,(function(){return"Opps, we have some troubles with adding contact"})),Object(j.a)(H,x,(function(){return""})),Object(j.a)(H,_,(function(){return""})),Object(j.a)(H,C,(function(){return"Opps, we have some troubles with deleting contact"})),Object(j.a)(H,N,(function(){return""})),Object(j.a)(H,y,(function(){return""})),Object(j.a)(H,k,(function(){return"Opps, we have some troubles with loading contacts"})),Object(j.a)(H,w,(function(){return""})),H)),Z=Object(p.b)("contacts/filter"),B=Object(p.c)("",Object(j.a)({},Z.type,(function(t,e){return e.payload}))),D=Object(z.b)({items:J,filter:B,loading:M,error:P}),T=function(t,e){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))};var U=Object(b.b)((function(t){var e=t.contacts;return{contacts:T(e.filter,e.items)}}),(function(t){return{deleteContact:function(e){return t((n=e,function(t){t(_()),m.a.delete("/contacts/".concat(n)).then((function(e){var c=e.data;t(N(n)),console.log(c)})).catch((function(e){return t(C(e))}))}));var n},getContactList:function(){return t((function(t){t(y()),m.a.get("/contacts").then((function(e){var n=e.data;t(w(n))})).catch((function(e){return t(k(e))}))}))}}}))((function(t){var e=t.contacts,n=t.deleteContact,a=t.getContactList;return Object(c.useEffect)((function(){return a()}),[a]),Object(I.jsx)("ul",{className:"list",children:e.map((function(t){return Object(I.jsx)(F,{deleteContact:function(){return n(t.id)},name:t.name,number:t.number},t.id)}))})})),$=(n(66),Object(f.a)());var G=Object(b.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){var n=e.target;return t(Z(n.value))}}}))((function(t){var e=t.onChange,n=t.value;return Object(I.jsxs)("div",{className:"filter",children:[Object(I.jsx)("h3",{className:"phonebook__headline",children:"Find contact by name"}),Object(I.jsx)("label",{className:"filter__title",htmlFor:$,children:Object(I.jsx)("input",{value:n,onChange:e,className:"filter__input",type:"text",name:"filter",id:$})})]})}));n(67);var K=Object(b.b)((function(t){var e=t.contacts;return{filter:e.filter,filteredContacts:T(e.filter,e.items)}}),null)((function(t){var e=t.filter,n=t.filteredContacts;return e&&Object(I.jsx)("h3",{className:"message__headline",children:0===n.length?"Opps, no contacts found":"Filtered results:"})})),Q=(n(68),document.querySelector("#root-modal")),V=function(t){return Object(r.createPortal)(Object(I.jsx)("div",{className:"Overlay",children:Object(I.jsx)("div",{className:"Modal",children:t.children})}),Q)},W=n(30),X=(n(69),n(70),function(){return Object(I.jsx)("div",{className:"loader",children:Object(I.jsx)(W.a,{height:"100",width:"100",color:"#4778ff",arialLabel:"Loading..."})})}),Y=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(V,{children:Object(I.jsx)(X,{})})})},tt=(n(71),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.error,n=t.loading;return Object(I.jsxs)(I.Fragment,{children:[n&&Object(I.jsx)(Y,{}),e&&Object(I.jsx)("h2",{className:"error",children:e}),Object(I.jsxs)("div",{className:"phonebook__wrapper",children:[Object(I.jsxs)("div",{className:"form-wrapper",children:[Object(I.jsx)("h1",{className:"headline",children:"Phonebook"}),Object(I.jsx)("h2",{children:"Add new contact"}),Object(I.jsx)(A,{})]}),Object(I.jsxs)("div",{className:"list-wrapper",children:[Object(I.jsx)("h2",{children:"Contacts"}),Object(I.jsx)(G,{}),Object(I.jsx)(K,{}),Object(I.jsx)(U,{})]})]})]})}}]),n}(c.Component)),et=Object(b.b)((function(t){var e=t.contacts;return{loading:e.loading,error:e.error}}),null)(tt),nt=Object(z.b)({contacts:D}),ct=Object(p.a)({reducer:nt,devTools:!1});o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(b.a,{store:ct,children:Object(I.jsx)(et,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.adf82332.chunk.js.map