(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(3),r=t.n(n),c=(t(13),t(1)),o=t(4),m=t(5),i=t(7),d=t(6),u=(t(14),function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={email:null,password:null,emailError:null,passwordError:null,passwordS:null},e}return Object(m.a)(t,[{key:"value",value:function(){if(!this.state.email.includes("@")&&this.state.password.length<5)this.setState({passwordError:"invalid Password",emailError:"invalid Email (should contain @)"});else if(this.state.email.includes("@")){if(!(this.state.password.length<5))return!0;this.setState({passwordError:"invalid Password"})}else this.setState({emailError:"invalid Email (should contain @)"})}},{key:"valid",value:function(){if(!this.state.email.includes("@")&&this.state.password.length<5)this.setState({passwordS:"password should be more than 5 characters",emailError:"invalid Email (should contain @)"});else if(this.state.email.includes("@")){if(!(this.state.password.length<5))return!0;this.setState({passwordS:"password should be more than 5 characters"})}else this.setState({emailError:"invalid Email (should contain @)"})}},{key:"show",value:function(){this.value()&&(this.setState({emailError:"",passwordError:""}),alert("submitted"))}},{key:"sign",value:function(){this.valid()&&(this.setState({passwordS:"",emailError:""}),alert("submitted"))}},{key:"render",value:function(){var e,a=this;return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark "},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("a",{className:"navbar-brand",href:"/"},"Home"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link ","aria-current":"page",href:"/"},"About Us")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"/"},"Conact Us")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link "},"Link"))),s.a.createElement("button",{style:{color:"black"},type:"button",className:"btn btn-light mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Log In"),s.a.createElement("div",{className:"modal fade ",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title text-primary",id:"exampleModalLabel"},"Log In"),s.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{class:"mb-3 row"},s.a.createElement("label",{for:"staticEmail",class:"col-sm-2 col-form-label"},"Email"),s.a.createElement("div",{class:"col-sm-10"},s.a.createElement("input",{onChange:function(e){a.setState({email:e.target.value})},type:"text",name:"email",class:" form-control"}),s.a.createElement("p",{style:{color:"red"}},this.state.emailError))),s.a.createElement("div",{class:"mb-3 row"},s.a.createElement("label",{for:"inputPassword",class:"col-sm-2 col-form-label"},"Password"),s.a.createElement("div",{class:"col-sm-10"},s.a.createElement("input",{onChange:function(e){a.setState({password:e.target.value})},type:"password",class:"form-control",id:"inputPassword"}),s.a.createElement("p",{style:{color:"red"}},this.state.passwordError)))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),s.a.createElement("button",{onClick:function(){a.show()},type:"button",className:"btn btn-primary"},"Submit"))))),s.a.createElement("button",{style:{color:"black"},type:"button",className:"btn btn-light","data-bs-toggle":"modal","data-bs-target":"#signupModal"},"Sign Up"),s.a.createElement("div",{className:"modal fade",id:"signupModal",tabindex:"-1","aria-labelledby":"signupModalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title text-primary",id:"signupModalLabel "},"Sign Up"),s.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",{class:"row g-3"},s.a.createElement("div",{class:"col-md-6"},s.a.createElement("label",{for:"inputEmail4",class:"form-label"},"Email"),s.a.createElement("input",{onChange:function(e){a.setState({email:e.target.value})},type:"email",class:"form-control",id:"inputEmail4"}),s.a.createElement("p",{style:{color:"red"}},this.state.emailError)),s.a.createElement("div",{class:"col-md-6"},s.a.createElement("label",{for:"inputPassword4",class:"form-label"},"Password"),s.a.createElement("input",{onChange:function(e){a.setState({password:e.target.value})},type:"password",class:"form-control",id:"inputPassword4"}),s.a.createElement("p",{style:{color:"red"}},this.state.passwordS)),s.a.createElement("div",{class:"col-12"},s.a.createElement("label",{for:"inputAddress",class:"form-label"},"Address"),s.a.createElement("input",{type:"text",class:"form-control",id:"inputAddress",placeholder:"1234 Main St"})),s.a.createElement("div",{class:"col-12"},s.a.createElement("label",{for:"inputAddress2",class:"form-label"},"Address 2"),s.a.createElement("input",{type:"text",class:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor"})),s.a.createElement("div",{class:"col-md-6"},s.a.createElement("label",{for:"inputCity",class:"form-label"},"City"),s.a.createElement("input",{type:"text",class:"form-control",id:"inputCity"})),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("label",{for:"inputState",class:"form-label"},"State"),s.a.createElement("select",{id:"inputState",class:"form-select"},s.a.createElement("option",{selected:!0},"Choose..."),s.a.createElement("option",null,"..."))),s.a.createElement("div",{class:"col-md-2"},s.a.createElement("label",{for:"inputZip",class:"form-label"},"Zip"),s.a.createElement("input",{type:"text",class:"form-control",id:"inputZip"})))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),s.a.createElement("button",{onClick:function(){a.sign()},type:"button",className:"btn btn-primary"},"Submit")))))))),s.a.createElement("div",null,s.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel"},s.a.createElement("div",{className:"carousel-indicators"},s.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),s.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),s.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})),s.a.createElement("div",{className:"carousel-inner"},s.a.createElement("div",{className:"carousel-item active"},s.a.createElement("img",{src:"https://source.unsplash.com/1400x400/?code,program",className:"d-block w-100",alt:"..."}),s.a.createElement("div",{className:"carousel-caption d-none d-md-block "},s.a.createElement("h5",{className:"text-dark "},"Welcome"),s.a.createElement("div",{className:"my-1"},s.a.createElement("p",{className:" text-dark  "},"How are You ?")))),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",{src:"https://source.unsplash.com/1400x400/?code,hacker",className:"d-block w-100",alt:"..."}),s.a.createElement("div",{className:"carousel-caption d-none d-md-block "},s.a.createElement("h5",{className:" text-dark "},"Get some Tips"),s.a.createElement("div",{className:"my-1"},s.a.createElement("p",{className:"text-dark "},"Best Bloggers are here!")))),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",(e={className:"faded",src:"https://source.unsplash.com/1400x400/?office,boss"},Object(c.a)(e,"className","d-block w-100"),Object(c.a)(e,"alt","..."),e)),s.a.createElement("div",{className:"carousel-caption d-none d-md-block"},s.a.createElement("h5",{className:" text-dark"},"Want to learn"),s.a.createElement("div",{className:"my-1"},s.a.createElement("p",{className:"text-dark"},"You are at the right place"))))),s.a.createElement("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"},s.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"visually-hidden"},"Previous")),s.a.createElement("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"},s.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"visually-hidden"},"Next")))),s.a.createElement("div",{className:"container my-2 "},s.a.createElement("div",{className:"row mb-2"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},s.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},s.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},"World"),s.a.createElement("h3",{className:"mb-0"},"Introduction"),s.a.createElement("div",{className:"mb-1 text-muted"},"Dec 22"),s.a.createElement("p",{className:"card-text mb-auto"},"the earth, together with all of its countries and peoples.a particular region or group of countries."),s.a.createElement("a",{href:"#",className:"stretched-link"},"Continue reading")),s.a.createElement("div",{className:"col-auto d-none d-lg-block img-fluid "},s.a.createElement("img",{className:"responsive",src:"https://source.unsplash.com/200x200/?world",alt:""})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},s.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},s.a.createElement("strong",{className:"d-inline-block mb-2 text-success"},"FOREST"),s.a.createElement("h3",{className:"mb-0"},"Introduction"),s.a.createElement("div",{className:"mb-1 text-muted"},"Dec 23"),s.a.createElement("p",{className:"mb-auto"},'a large number or dense mass of vertical or tangled objects. a forest of high-rise apartments"'),s.a.createElement("a",{href:"#",className:"stretched-link"},"Continue reading")),s.a.createElement("div",{className:"col-auto d-none d-lg-block"},s.a.createElement("img",{src:"https://source.unsplash.com/200x200/?forest",alt:""})))))),s.a.createElement("div",{className:"container my-2"},s.a.createElement("div",{className:"row mb-2"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},s.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},s.a.createElement("strong",{className:"d-inline-block mb-2 text-danger"},"STRATEGY"),s.a.createElement("h3",{className:"mb-0"},"Introduction"),s.a.createElement("div",{className:"mb-1 text-muted"},"Dec 20"),s.a.createElement("p",{className:"card-text mb-auto"},"the art of planning and directing overall military operations and movements in a war or battle."),s.a.createElement("a",{href:"#",className:"stretched-link"},"Continue reading")),s.a.createElement("div",{className:"col-auto d-none d-lg-block "},s.a.createElement("img",{src:"https://source.unsplash.com/200x200/?book",alt:""})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},s.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},s.a.createElement("strong",{className:"d-inline-block mb-2 text-warning"},"SPORTS"),s.a.createElement("h3",{className:"mb-0"},"Introduction"),s.a.createElement("div",{className:"mb-1 text-muted"},"Dec 21"),s.a.createElement("p",{className:"mb-auto"},"an activity involving physical exertion and skill in which an individual or team competes against another or others for entertainment."),s.a.createElement("a",{href:"#",className:"stretched-link"},"Continue reading")),s.a.createElement("div",{className:"col-auto d-none d-lg-block"},s.a.createElement("img",{src:"https://source.unsplash.com/200x200/?sports",alt:""})))))))}}]),t}(s.a.Component)),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(function(a){var t=a.getCLS,l=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),l(e),s(e),n(e),r(e)})};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),p()},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ca041060.chunk.js.map