(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/room.3f466221.png"},45:function(e,t,a){e.exports=a.p+"static/media/flags.d2b35c0c.png"},46:function(e,t,a){e.exports=a.p+"static/media/shopping.92f18d53.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/smiley.eaa50539.png"},55:function(e,t,a){e.exports=a(69)},60:function(e,t,a){},61:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(20),r=a.n(i),c=(a(60),a(7)),m=a(10),s=a(9),o=a(8),u=a(21),d=a(5),g=a(26),p=a(24),b=a(54),h=(a(61),a(44)),E=a(22);var f=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,{className:"border-top justify-content-between p-3 "},l.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Matthew Liang"),l.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Matt"))))},k=a(71),v=a(39);var w=function(e){return l.a.createElement(k.a,{className:"jumbotron-fluid p-0"},l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,{className:"justify-content-center py-5"},l.a.createElement(E.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-2 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-5 font-weight-light"},e.subTitle),e.gitHubLink&&l.a.createElement("a",{href:e.gitHubLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.a,{class:"github-icon mr-3 mt-1",size:"30px"})),e.gitHubLink&&l.a.createElement("a",{href:e.linkendinLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.b,{class:"linkedin-icon mt-1",size:"30px"}))))))},y=a(38);var N=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return l.a.createElement(y.a.div,{className:"m-card-info text-center",style:t},l.a.createElement("p",{className:"m-card-title"},e.title),l.a.createElement("p",{className:"m-card-subTitle"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var S=function(e){return l.a.createElement("div",{className:"d-inline-block m-card"},l.a.createElement("img",{className:"m-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),l.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(45),L=a.n(j),T=a(46),C=a.n(T),M=a(47),O=a.n(M),x=a(32),H=a.n(x),W=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).makeItems=function(e){return e.map((function(e){return l.a.createElement(S,{item:e,key:e.id})}))},n.state={items:[{id:0,title:"Python",subTitle:"Python program",imgSrc:L.a,link:"https://www.google.com/",selected:!1},{id:1,title:"Mysql",subTitle:"Mysql program",imgSrc:C.a,link:"https://www.google.com/",selected:!1},{id:2,title:"Mongo",subTitle:"mongo program",imgSrc:O.a,link:"https://www.google.com/",selected:!1},{id:3,title:"Wong Wong",subTitle:"Website",imgSrc:H.a,link:"https://www.google.com/",selected:!1},{id:4,title:"Wong Wong",subTitle:"Website",imgSrc:H.a,link:"https://www.google.com/",selected:!1},{id:5,title:"Wong Wong",subTitle:"Website",imgSrc:H.a,link:"https://www.google.com/",selected:!1}]},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var I=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle,gitHubLink:e.gitHubLink,linkendinLink:e.linkendinLink}),l.a.createElement(W,null))};var F=function(e){return l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:8},e.children)))};var _=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(F,null,l.a.createElement("p",null,"I'm an undergraduate at Hunter College majoring in Computer Science and minoring in Media web development."),l.a.createElement("p",null,"I enjoy learning new programming languages, such as Python, MySQL and JavaScript, to create new projects."),l.a.createElement("p",null,"My goal is to land a fullstack developer position."),l.a.createElement("iframe",{title:"myFrame",src:"../assets/images/resume.pdf",width:"100%"})))},B=a(19),G=a(13),J=a(48),P=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.value,l=t.name;n.setState(Object(B.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0,emailSent:!0})},n.state={name:"",email:"",message:"",disable:!1,emailSent:null},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(F,null,l.a.createElement(G.a,{onSubmit:this.handleSubmit},l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(G.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(G.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(G.a.Control,{id:"message",name:"message",as:"textarea",rows:"5",value:this.state.message,onChange:this.handleChange})),l.a.createElement(J.a,{className:"d-inlinee-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Successfully Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline error-msg"},"Email Not Sent"))))}}]),a}(l.a.Component);var q=function(e){return l.a.createElement("div",null,l.a.createElement("embed",{type:"application/pdf",src:"../assets/images/resume.pdf"}))},z=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Matthew Liang",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Hello, I'm Matt!",subTitle:"I'm an aspiring fullstack developer.",gitHubLink:"https://github.com/matter13311?tab=repositories",linkendinLink:"https://www.linkedin.com/in/matthew-liang-854637169/"},about:{title:"Who's Matt?"},contact:{title:"Let's talk"}},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(g.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,null,"Matthew"),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar_toggle"},l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/resume"},"Resume"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,gitHubLink:e.state.home.gitHubLink,linkendinLink:e.state.home.linkendinLink})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(_,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(P,{title:e.state.contact.title})}}),l.a.createElement(d.a,{path:"/resume",render:function(){return l.a.createElement(q,null)}}),l.a.createElement(f,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.34f14763.chunk.js.map