(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s,a,c,i,r,o,l,d,p=n(1),j=n.n(p),b=n(19),m=n.n(b),u=(n(28),n(2)),h=n(10),x=n(4),O=n(3),y=n(0),f=O.a.div(s||(s=Object(u.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),S=O.a.div(a||(a=Object(u.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),g=O.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),N=O.a.div(i||(i=Object(u.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),w=O.a.table(r||(r=Object(u.a)([""]))),v=function(e){return Object(y.jsxs)(f,{children:[Object(y.jsx)(g,{children:e.title}),Object(y.jsxs)(S,{children:[Object(y.jsx)(N,{children:e.component}),Object(y.jsxs)(w,{children:[Object(y.jsx)("tbody",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Prop"}),Object(y.jsx)("th",{children:"Description"}),Object(y.jsx)("th",{children:"Type"}),Object(y.jsx)("th",{children:"Default value"})]})}),e.propDocs.map((function(e,t){return Object(y.jsx)("tbody",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.prop}),Object(y.jsx)("td",{children:e.description}),Object(y.jsx)("td",{children:e.type}),Object(y.jsx)("td",{children:Object(y.jsx)("code",{children:e.defaultValue})})]})},t)}))]})]})]})},k={small:10,medium:14,large:20},B=O.a.div(o||(o=Object(u.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),T=O.a.span(l||(l=Object(u.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),z=O.a.div(d||(d=Object(u.a)(["\n  display: flex;\n"]))),C=function(e){var t=k[e.size],n=e.color;return Object(y.jsxs)(B,{children:[Object(y.jsxs)(z,{children:[Object(y.jsx)(T,{size:t,color:n}),Object(y.jsx)(T,{size:t,color:n})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(T,{size:t,color:n}),Object(y.jsx)(T,{size:t,color:n})]})]})};C.defaultProps={size:"medium",color:"#ffa2bf"};var R,V,D=C,E="#316E94",X="#3FA2E0",H="#E0BB34",P="#4E1394",Y="#26DB5C",F="#DB4E4E",I="#2F333B",A="#FAF9F6",J="#231F20",M=O.a.button(R||(R=Object(u.a)(["\n  border-radius: 0.3rem;\n  // padding: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n  transition: 0.2s ease;\n  :hover {\n    opacity: 0.6;\n  }\n  background-color: ",";\n"])),A,(function(e){return"Start"===e.type?Y:"Stop"===e.type?F:I})),G=function e(t){e.defaultProps={btnState:!0,settingsState:!1,styleName:"settingsBtn",type:"Stopwatch"};return Object(y.jsx)(M,{className:t.styleName,type:t.type,onClick:function(){"Reset"===t.type?t.sendBtnState(!0):t.sendBtnState(!t.btnState),"settingsBtn"===t.styleName&&t.sendSettingsState(!t.settingsState)},children:"Reset"===t.type?Object(y.jsx)("i",{className:"bi bi-arrow-counterclockwise"}):"Start"===t.type?Object(y.jsx)("i",{className:"bi bi-play-circle"}):"Stop"===t.type?Object(y.jsx)("i",{className:"bi bi-pause-circle"}):"settingsBtn"===t.styleName?Object(y.jsx)("i",{className:"bi bi-list"}):null})},L=n(12),q=n(9),K=n.n(q),Q=O.a.label(V||(V=Object(u.a)(['\n  // border-radius: 0.3rem;\n  // padding: 1rem;\n  margin-bottom: 2rem;\n  font-size: 4.5rem;\n  font-weight: 300;\n  // font-family: "Orbitron", sans-serif;\n  color: white;\n  // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n  //   1px 1px 0 #000;\n  // background-color: ',";\n"])),A);Q.propTypes={styleName:K.a.string,time:K.a.string};var U,W,Z,$,_,ee,te,ne,se,ae,ce,ie,re,oe,le,de,pe,je,be,me,ue=function(e){Q.defaultProps={styleName:"myClass",time:"0"};var t=Object(p.useState)(e.time),n=Object(L.a)(t,1)[0];return Object(y.jsx)(Q,{className:e.styleName,children:n})},he=O.a.div(U||(U=Object(u.a)(["\n  // border: 1px solid black;\n  width: 20rem;\n  background-color: ",";\n  // color: var(--blue);\n  // padding: 2rem 0 2rem 0;\n  // line-height: 30px;\n  font-size: 2rem;\n  border-radius: 0rem 0rem 0.3rem 0.3rem;\n"])),(function(e){return"Stopwatch"===e.type?X:"Countdown"===e.type?E:"XY"===e.type?H:P})),xe=function e(t){return e.defaultProps={timerType:"Stopwatch"},Object(y.jsx)(he,{type:t.timerType,className:"mainPanel",children:t.children})},Oe=O.a.input(W||(W=Object(u.a)(["\n  // border: 1px solid black;\n  color: ",";\n  font-size: 0.8rem;\n  border-radius: 0.5rem;\n  border: 0px;\n  width: 100%;\n"])),(function(e){return"Stopwatch"===e.type?X:"Countdown"===e.type?E:"XY"===e.type?H:P})),ye=O.a.p(Z||(Z=Object(u.a)(["\n  font-size: 0.8rem;\n  color: ",";\n  padding-top: 0.5rem;\n"])),A),fe=function e(t){return e.defaultProps={type:"Countdown",timerType:"Countdown",placeholder:"input",placeholderRounds:"input",placeholderRest:"input"},Object(y.jsxs)("div",{className:"w-75",children:["Stopwatch"!==t.type?Object(y.jsx)(Oe,{type:t.type,className:t.styleName,placeholder:t.placeholder}):null,"Xy"===t.type||"Tabata"===t.type?Object(y.jsx)(Oe,{type:t.type,className:t.styleName,placeholder:t.placeholderRounds}):null,"Tabata"===t.type?Object(y.jsx)(Oe,{type:t.type,className:t.styleName,placeholder:t.placeholderRest}):null,Object(y.jsx)(ye,{children:"By Martin Gundtoft"})]})},Se=O.a.div($||($=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),ge=O.a.div(_||(_=Object(u.a)(["\n  font-size: 2rem;\n"]))),Ne=function(){return Object(y.jsx)(Se,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(ge,{children:"Documentation"}),Object(y.jsx)(v,{title:"Loading spinner ",component:Object(y.jsx)(D,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(y.jsx)(v,{title:"Button",component:Object(y.jsx)(G,{}),propDocs:[{prop:"btnState",description:"Starts and stops the timer",type:"boolean",defaultValue:"true"},{prop:"settingsState",description:"Switches between main app and settings",type:"boolean",defaultValue:"false"},{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"settingsBtn"},{prop:"type",description:"Has the type of style for the given timer",type:"String",defaultValue:"Stopwatch"}]}),Object(y.jsx)(v,{title:"DisplayTime",component:Object(y.jsx)(ue,{}),propDocs:[{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"myClass"},{prop:"time",description:"Has the timer value",type:"String",defaultValue:"0"}]}),Object(y.jsx)(v,{title:"Panel",component:Object(y.jsx)(xe,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"myClass"}]}),Object(y.jsx)(v,{title:"Settings",component:Object(y.jsx)(fe,{}),propDocs:[{prop:"type",description:"Has the type of timer",type:"String",defaultValue:"Countdown"},{prop:"timerType",description:"Has the type of timer settings",type:"String",defaultValue:"Countdown"},{prop:"placeholder",description:"Has the value of the input field for countdown",type:"String",defaultValue:"input"},{prop:"placeholderRounds",description:"Has the value of the input field for rounds",type:"String",defaultValue:"input"},{prop:"placeholderRest",description:"Has the value of the input field for rest",type:"String",defaultValue:"input"}]})]})})},we=Object(p.createContext)({setBtnState:function(){console.log("setBtnState: Im outside the Timerprovider")},setSettingsState:function(){console.log("setSettingsState: Im outside the Timerprovider")}}),ve=function(e){var t=e.children,n=Object(p.useState)(!0),s=Object(L.a)(n,2),a=s[0],c=s[1],i=Object(p.useState)(!1),r=Object(L.a)(i,2),o=r[0],l=r[1],d=Object(p.useState)(!0),j=Object(L.a)(d,2),b=j[0],m=j[1],u=Object(p.useState)(!1),h=Object(L.a)(u,2),x=h[0],O=h[1];return Object(y.jsx)(we.Provider,{value:{btnState:a,setBtnState:c,settingsState:o,setSettingsState:l,stopwatchTimer:b,setStopwatchTimer:m,stopwatchSettings:x,setStopwatchSettings:O},children:t})},ke=O.a.h1(ee||(ee=Object(u.a)(["\n  color: ",";\n"])),A),Be=O.a.div(te||(te=Object(u.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.stopwatch {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),F,F),Te=O.a.div(ne||(ne=Object(u.a)(["\n  height: 15rem;\n"]))),ze=function(){var e="Stopwatch",t=Object(p.useContext)(we),n=t.stopwatchTimer,s=t.setStopwatchTimer,a=Object(p.useContext)(we),c=a.stopwatchSettings,i=a.setStopwatchSettings;return c?Object(y.jsx)(xe,{timerType:e,children:Object(y.jsxs)(Be,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)(fe,{styleName:"p-2",type:"Stopwatch"})]})}):Object(y.jsxs)(xe,{timerType:e,children:[Object(y.jsxs)(Be,{className:"text-center",children:[Object(y.jsx)(ke,{children:"Stopwatch"}),Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)("i",{className:"bi bi-stopwatch stopwatch ".concat(n)})]}),Object(y.jsx)(Te,{className:"d-flex align-items-center",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(ue,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(y.jsxs)("div",{className:"row justify-content-around",children:[Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},Ce=O.a.h1(se||(se=Object(u.a)(["\n  color: ",";\n"])),A),Re=O.a.div(ae||(ae=Object(u.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),F,F),Ve=O.a.div(ce||(ce=Object(u.a)(["\n  height: 15rem;\n"]))),De=function(){var e="Countdown",t=Object(p.useContext)(we),n=t.btnState,s=t.setBtnState,a=Object(p.useContext)(we),c=a.settingsState,i=a.setSettingsState;return c?Object(y.jsx)(xe,{timerType:e,children:Object(y.jsxs)(Re,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)(fe,{styleName:"p-2",placeholder:"Enter countdown time in seconds",type:"Countdown"})]})}):Object(y.jsxs)(xe,{timerType:e,children:[Object(y.jsxs)(Re,{className:"text-center",children:[Object(y.jsx)(Ce,{children:e}),Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)("i",{className:"bi bi-stopwatch icon ".concat(n)})]}),Object(y.jsx)(Ve,{className:"d-flex align-items-center",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(ue,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(y.jsxs)("div",{className:"row justify-content-around",children:[Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},Ee=O.a.h1(ie||(ie=Object(u.a)(["\n  color: ",";\n"])),A),Xe=O.a.div(re||(re=Object(u.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),F,F),He=O.a.div(oe||(oe=Object(u.a)(["\n  height: 15rem;\n"]))),Pe=function(){var e="XY",t=Object(p.useContext)(we),n=t.btnState,s=t.setBtnState,a=Object(p.useContext)(we),c=a.settingsState,i=a.setSettingsState;return c?Object(y.jsx)(xe,{timerType:e,children:Object(y.jsxs)(Xe,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)(fe,{styleName:"p-2",placeholder:"Enter time per round in seconds",placeholderRounds:"Enter number of rounds",type:"Xy"})]})}):Object(y.jsxs)(xe,{timerType:e,children:[Object(y.jsxs)(Xe,{className:"text-center",children:[Object(y.jsx)(Ee,{children:e}),Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)("i",{className:"bi bi-stopwatch icon ".concat(n)})]}),Object(y.jsx)(He,{className:"d-flex align-items-center",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(ue,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(y.jsxs)("div",{className:"row justify-content-around",children:[Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},Ye=O.a.h1(le||(le=Object(u.a)(["\n  color: ",";\n"])),A),Fe=O.a.div(de||(de=Object(u.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),F,F),Ie=O.a.div(pe||(pe=Object(u.a)(["\n  height: 15rem;\n"]))),Ae=function(){var e="Tabata",t=Object(p.useContext)(we),n=t.btnState,s=t.setBtnState,a=Object(p.useContext)(we),c=a.settingsState,i=a.setSettingsState;return c?Object(y.jsx)(xe,{timerType:e,children:Object(y.jsxs)(Fe,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)(fe,{styleName:"p-2",placeholder:"Enter time per round in seconds",placeholderRounds:"Enter number of rounds",placeholderRest:"Enter rest per round in seconds",type:"Tabata"})]})}):Object(y.jsxs)(xe,{timerType:e,children:[Object(y.jsxs)(Fe,{className:"text-center",children:[Object(y.jsx)(Ye,{children:e}),Object(y.jsx)(G,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:s,sendSettingsState:i}),Object(y.jsx)("i",{className:"bi bi-stopwatch icon ".concat(n)})]}),Object(y.jsx)(Ie,{className:"d-flex align-items-center",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(ue,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(y.jsxs)("div",{className:"row justify-content-around",children:[Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(y.jsx)(G,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},Je=O.a.ul(je||(je=Object(u.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0.5rem 0;\n  overflow: hidden;\n  border-radius: 0.3rem 0.3rem 0rem 0rem;\n  width: 20rem;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  .Stopwatch,\n  .Countdown,\n  .XY,\n  .Tabata {\n    background-color: ",";\n    transition: 0.5s;\n  }\n  .Stopwatch:hover {\n    background-color: ",";\n  }\n  .Countdown:hover {\n    background-color: ",";\n  }\n  .Tabata:hover {\n    background-color: ",";\n  }\n  .XY:hover {\n    background-color: ",";\n  }\n\n  li {\n    display: inline;\n    list-style-type: none;\n    text-decoration: none;\n    padding: 0.75rem;\n  }\n  .current {\n    .Stopwatch {\n      background-color: ",";\n    }\n    .Countdown {\n      background-color: ",";\n    }\n    .XY {\n      background-color: ",";\n    }\n    .Tabata {\n      background-color: ",";\n    }\n  }\n  .active {\n    background-color: #04aa6d;\n  }\n"])),A,J,X,E,P,H,X,E,H,P),Me=[{name:"Stopwatch",path:"/"},{name:"Countdown",path:"/Countdown"},{name:"XY",path:"/XY"},{name:"Tabata",path:"/Tabata"}],Ge=function(){return Object(y.jsx)(Je,{children:Me.map((function(e,t){return Object(y.jsx)(h.c,{to:e.path,exact:!0,activeClassName:"current",children:Object(y.jsx)("li",{className:e.name,children:e.name})},t)}))})},Le=O.a.div(be||(be=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),qe=function(){var e=[{path:"/",component:ze},{path:"/Stopwatch",component:ze},{path:"/Countdown",component:De},{path:"/XY",component:Pe},{path:"/Tabata",component:Ae}];return Object(y.jsx)(Le,{children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(Ge,{}),Object(y.jsx)(x.c,{children:Object(y.jsx)(ve,{children:e.map((function(e,t){var n=e.path,s=e.component;return Object(y.jsx)(x.a,{exact:!0,path:n,component:s},t)}))})})]})})},Ke=O.a.div(me||(me=Object(u.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),Qe=function(){return Object(y.jsx)(Ke,{children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)("nav",{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/",children:"Timers"})}),Object(y.jsx)("li",{children:Object(y.jsx)(h.b,{to:"/docs",children:"Documentation"})})]})}),Object(y.jsxs)(x.c,{children:[Object(y.jsx)(x.a,{path:"/docs",children:Object(y.jsx)(Ne,{})}),Object(y.jsx)(x.a,{path:"/",children:Object(y.jsx)(qe,{})})]})]})})};m.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(Qe,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fbd02f58.chunk.js.map