(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s,a,i,c,r,o,l,d,j=n(1),p=n.n(j),b=n(19),m=n.n(b),x=(n(28),n(2)),u=n(14),h=n(4),y=n(3),O=n(0),f=y.a.div(s||(s=Object(x.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),S=y.a.div(a||(a=Object(x.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),g=y.a.div(i||(i=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),N=y.a.div(c||(c=Object(x.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),v=y.a.table(r||(r=Object(x.a)([""]))),w=function(e){return Object(O.jsxs)(f,{children:[Object(O.jsx)(g,{children:e.title}),Object(O.jsxs)(S,{children:[Object(O.jsx)(N,{children:e.component}),Object(O.jsxs)(v,{children:[Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Prop"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Type"}),Object(O.jsx)("th",{children:"Default value"})]})}),e.propDocs.map((function(e,t){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.prop}),Object(O.jsx)("td",{children:e.description}),Object(O.jsx)("td",{children:e.type}),Object(O.jsx)("td",{children:Object(O.jsx)("code",{children:e.defaultValue})})]})},t)}))]})]})]})},B={small:10,medium:14,large:20},k=y.a.div(o||(o=Object(x.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),z=y.a.span(l||(l=Object(x.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),C=y.a.div(d||(d=Object(x.a)(["\n  display: flex;\n"]))),T=function(e){var t=B[e.size],n=e.color;return Object(O.jsxs)(k,{children:[Object(O.jsxs)(C,{children:[Object(O.jsx)(z,{size:t,color:n}),Object(O.jsx)(z,{size:t,color:n})]}),Object(O.jsxs)(C,{children:[Object(O.jsx)(z,{size:t,color:n}),Object(O.jsx)(z,{size:t,color:n})]})]})};T.defaultProps={size:"medium",color:"#ffa2bf"};var R,V,D=T,E="#316E94",H="#3FA2E0",P="#E0BB34",X="#4E1394",F="#26DB5C",I="#DB4E4E",A="#2F333B",J="#FAF9F6",M=y.a.button(R||(R=Object(x.a)(["\n  border-radius: 0.3rem;\n  // padding: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n  transition: 0.2s ease;\n  :hover {\n    opacity: 0.6;\n  }\n  background-color: ",";\n"])),J,(function(e){return"Start"===e.type?F:"Stop"===e.type?I:A})),Y=function e(t){e.defaultProps={btnState:!0,settingsState:!1,styleName:"settingsBtn",type:"Stopwatch"};return Object(O.jsx)(M,{className:t.styleName,type:t.type,onClick:function(){"Reset"===t.type?t.sendBtnState(!0):t.sendBtnState(!t.btnState),"settingsBtn"===t.styleName&&t.sendSettingsState(!t.settingsState)},children:"Reset"===t.type?Object(O.jsx)("i",{className:"bi bi-arrow-counterclockwise"}):"Start"===t.type?Object(O.jsx)("i",{className:"bi bi-play-circle"}):"Stop"===t.type?Object(O.jsx)("i",{className:"bi bi-pause-circle"}):"settingsBtn"===t.styleName?Object(O.jsx)("i",{className:"bi bi-list"}):null})},G=n(12),L=n(9),q=n.n(L),K=y.a.label(V||(V=Object(x.a)(['\n  // border-radius: 0.3rem;\n  // padding: 1rem;\n  margin-bottom: 2rem;\n  font-size: 4.5rem;\n  font-weight: 300;\n  // font-family: "Orbitron", sans-serif;\n  color: white;\n  // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n  //   1px 1px 0 #000;\n  // background-color: ',";\n"])),J);K.propTypes={styleName:q.a.string,time:q.a.string};var Q,U,W,Z,$,_,ee,te,ne,se,ae,ie,ce,re,oe,le,de,je=function(e){K.defaultProps={styleName:"myClass",time:"0"};var t=Object(j.useState)(e.time),n=Object(G.a)(t,1)[0];return Object(O.jsx)(K,{className:e.styleName,children:n})},pe=y.a.div(Q||(Q=Object(x.a)(["\n  // border: 1px solid black;\n  width: 20rem;\n  background-color: ",";\n  // color: var(--blue);\n  // padding: 2rem 0 2rem 0;\n  // line-height: 30px;\n  font-size: 2rem;\n  border-radius: 0.5rem;\n"])),(function(e){return"Stopwatch"===e.type?H:"Countdown"===e.type?E:"Xy"===e.type?P:X})),be=function e(t){return e.defaultProps={timerType:"Stopwatch"},Object(O.jsx)(pe,{type:t.timerType,className:"mainPanel",children:t.children})},me=y.a.input(U||(U=Object(x.a)(["\n  // border: 1px solid black;\n  color: ",";\n  font-size: 0.8rem;\n  border-radius: 0.5rem;\n  border: 0px;\n  width: 100%;\n"])),(function(e){return"Stopwatch"===e.type?H:"Countdown"===e.type?E:"XY"===e.type?P:X})),xe=y.a.p(W||(W=Object(x.a)(["\n  font-size: 0.8rem;\n  color: ",";\n"])),J),ue=function e(t){return e.defaultProps={type:"Countdown",timerType:"Countdown",placeholder:"input",placeholderRounds:"input",placeholderRest:"input"},Object(O.jsxs)("div",{className:"w-75",children:["Stopwatch"!==t.type?Object(O.jsx)(me,{type:t.type,className:t.styleName,placeholder:t.placeholder}):null,"Xy"===t.type||"Tabata"===t.type?Object(O.jsx)(me,{type:t.type,className:t.styleName,placeholder:t.placeholderRounds}):null,"Tabata"===t.type?Object(O.jsx)(me,{type:t.type,className:t.styleName,placeholder:t.placeholderRest}):null,Object(O.jsx)(xe,{children:"By Martin Gundtoft"})]})},he=y.a.div(Z||(Z=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),ye=y.a.div($||($=Object(x.a)(["\n  font-size: 2rem;\n"]))),Oe=function(){return Object(O.jsx)(he,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(ye,{children:"Documentation"}),Object(O.jsx)(w,{title:"Loading spinner ",component:Object(O.jsx)(D,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(O.jsx)(w,{title:"Button",component:Object(O.jsx)(Y,{}),propDocs:[{prop:"btnState",description:"Starts and stops the timer",type:"boolean",defaultValue:"true"},{prop:"settingsState",description:"Switches between main app and settings",type:"boolean",defaultValue:"false"},{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"settingsBtn"},{prop:"type",description:"Has the type of style for the given timer",type:"String",defaultValue:"Stopwatch"}]}),Object(O.jsx)(w,{title:"DisplayTime",component:Object(O.jsx)(je,{}),propDocs:[{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"myClass"},{prop:"time",description:"Has the timer value",type:"String",defaultValue:"0"}]}),Object(O.jsx)(w,{title:"Panel",component:Object(O.jsx)(be,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"myClass"}]}),Object(O.jsx)(w,{title:"Settings",component:Object(O.jsx)(ue,{}),propDocs:[{prop:"type",description:"Has the type of timer",type:"String",defaultValue:"Countdown"},{prop:"timerType",description:"Has the type of timer settings",type:"String",defaultValue:"Countdown"},{prop:"placeholder",description:"Has the value of the input field for countdown",type:"String",defaultValue:"input"},{prop:"placeholderRounds",description:"Has the value of the input field for rounds",type:"String",defaultValue:"input"},{prop:"placeholderRest",description:"Has the value of the input field for rest",type:"String",defaultValue:"input"}]})]})})},fe=Object(j.createContext)({setBtnState:function(){console.log("setBtnState: Im outside the Timerprovider")},setSettingsState:function(){console.log("setSettingsState: Im outside the Timerprovider")}}),Se=function(e){var t=e.children,n=Object(j.useState)(!0),s=Object(G.a)(n,2),a=s[0],i=s[1],c=Object(j.useState)(!1),r=Object(G.a)(c,2),o=r[0],l=r[1];return Object(O.jsx)(fe.Provider,{value:{btnState:a,setBtnState:i,settingsState:o,setSettingsState:l},children:t})},ge=y.a.div(_||(_=Object(x.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.stopwatch {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n    padding-top: 2rem;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),I,I),Ne=y.a.div(ee||(ee=Object(x.a)(["\n  height: 15rem;\n"]))),ve=function(){var e="Stopwatch",t=Object(j.useContext)(fe),n=t.btnState,s=t.setBtnState,a=Object(j.useContext)(fe),i=a.settingsState,c=a.setSettingsState;return i?Object(O.jsx)(be,{timerType:e,children:Object(O.jsxs)(ge,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(O.jsx)(Y,{type:i?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:i,sendBtnState:s,sendSettingsState:c}),Object(O.jsx)(ue,{styleName:"p-2",type:"Stopwatch"})]})}):Object(O.jsxs)(be,{timerType:e,children:[Object(O.jsxs)(ge,{className:"text-center",children:[Object(O.jsx)(Y,{type:i?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:i,sendBtnState:s,sendSettingsState:c}),Object(O.jsx)("i",{className:"bi bi-stopwatch stopwatch ".concat(n)})]}),Object(O.jsx)(Ne,{className:"d-flex align-items-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)(je,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(O.jsxs)("div",{className:"row justify-content-around",children:[Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},we=y.a.div(te||(te=Object(x.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n    padding-top: 2rem;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),I,I),Be=y.a.div(ne||(ne=Object(x.a)(["\n  height: 15rem;\n"]))),ke=function(){var e="Countdown",t=Object(j.useContext)(fe),n=t.btnState,s=t.setBtnState,a=function(e){console.log("btnState"+e),s(e)},i=Object(j.useContext)(fe),c=i.settingsState,r=i.setSettingsState,o=function(e){console.log("settingsState"+e),r(e)};return c?Object(O.jsx)(be,{timerType:e,children:Object(O.jsxs)(we,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(O.jsx)(Y,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:a,sendSettingsState:o}),Object(O.jsx)(ue,{styleName:"p-2",placeholder:"Enter countdown time in seconds",type:"Countdown"})]})}):Object(O.jsxs)(be,{timerType:e,children:[Object(O.jsxs)(we,{className:"text-center",children:[Object(O.jsx)(Y,{type:c?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:c,sendBtnState:a,sendSettingsState:o}),Object(O.jsx)("i",{className:"bi bi-stopwatch icon ".concat(n)})]}),Object(O.jsx)(Be,{className:"d-flex align-items-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)(je,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(O.jsxs)("div",{className:"row justify-content-around",children:[Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:a}),Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:a})]})]})})]})},ze=y.a.div(se||(se=Object(x.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n    padding-top: 2rem;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),I,I),Ce=y.a.div(ae||(ae=Object(x.a)(["\n  height: 15rem;\n"]))),Te=function(){var e=Object(j.useContext)(fe),t=e.btnState,n=e.setBtnState,s=Object(j.useContext)(fe),a=s.settingsState,i=s.setSettingsState;return a?Object(O.jsx)(be,{timerType:"Xy",children:Object(O.jsxs)(ze,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(O.jsx)(Y,{type:a?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:t,settingsState:a,sendBtnState:n,sendSettingsState:i}),Object(O.jsx)(ue,{styleName:"p-2",placeholder:"Enter time per round in seconds",placeholderRounds:"Enter number of rounds",type:"Xy"})]})}):Object(O.jsxs)(be,{timerType:"Xy",children:[Object(O.jsxs)(ze,{className:"text-center",children:[Object(O.jsx)(Y,{type:a?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:t,settingsState:a,sendBtnState:n,sendSettingsState:i}),Object(O.jsx)("i",{className:"bi bi-stopwatch icon ".concat(t)})]}),Object(O.jsx)(Ce,{className:"d-flex align-items-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)(je,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(O.jsxs)("div",{className:"row justify-content-around",children:[Object(O.jsx)(Y,{styleName:"col-5",btnState:t,type:t?"Start":"Stop",sendBtnState:n}),Object(O.jsx)(Y,{styleName:"col-5",btnState:t,type:"Reset",sendBtnState:n})]})]})})]})},Re=y.a.div(ie||(ie=Object(x.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.icon {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n    padding-top: 2rem;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),I,I),Ve=y.a.div(ce||(ce=Object(x.a)(["\n  height: 15rem;\n"]))),De=function(){var e="Tabata",t=Object(j.useContext)(fe),n=t.btnState,s=t.setBtnState,a=Object(j.useContext)(fe),i=a.settingsState,c=a.setSettingsState;return i?Object(O.jsx)(be,{timerType:e,children:Object(O.jsxs)(Re,{className:"text-center d-flex align-items-center justify-content-center",children:[Object(O.jsx)(Y,{type:i?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:i,sendBtnState:s,sendSettingsState:c}),Object(O.jsx)(ue,{styleName:"p-2",placeholder:"Enter time per round in seconds",placeholderRounds:"Enter number of rounds",placeholderRest:"Enter rest per round in seconds",type:"Tabata"})]})}):Object(O.jsxs)(be,{timerType:e,children:[Object(O.jsxs)(Re,{className:"text-center",children:[Object(O.jsx)(Y,{type:i?"exitSettings":"enterSettings",styleName:"settingsBtn",btnState:n,settingsState:i,sendBtnState:s,sendSettingsState:c}),Object(O.jsx)("i",{className:"bi bi-stopwatch icon ".concat(n)})]}),Object(O.jsx)(Ve,{className:"d-flex align-items-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)(je,{styleName:"col text-center",time:"0".concat(0,":0",0,":0",0)})}),Object(O.jsxs)("div",{className:"row justify-content-around",children:[Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:n?"Start":"Stop",sendBtnState:s}),Object(O.jsx)(Y,{styleName:"col-5",btnState:n,type:"Reset",sendBtnState:s})]})]})})]})},Ee=y.a.div(re||(re=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),He=y.a.div(oe||(oe=Object(x.a)(["\n  border: 1px solid gray;\n  padding: 20px;\n  margin: 10px;\n  font-size: 1.5rem;\n"]))),Pe=y.a.div(le||(le=Object(x.a)([""]))),Xe=function(){var e=[{title:"Stopwatch",C:Object(O.jsx)(ve,{})},{title:"Countdown",C:Object(O.jsx)(ke,{})},{title:"XY",C:Object(O.jsx)(Te,{})},{title:"Tabata",C:Object(O.jsx)(De,{})}];return Object(O.jsx)(Ee,{children:e.map((function(e,t){return Object(O.jsx)(Se,{children:Object(O.jsxs)(He,{children:[Object(O.jsx)(Pe,{children:e.title}),e.C]})},t)}))})},Fe=y.a.div(de||(de=Object(x.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),Ie=function(){return Object(O.jsx)(Fe,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(u.b,{to:"/",children:"Timers"})}),Object(O.jsx)("li",{children:Object(O.jsx)(u.b,{to:"/docs",children:"Documentation"})})]})}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/docs",children:Object(O.jsx)(Oe,{})}),Object(O.jsx)(h.a,{path:"/",children:Object(O.jsx)(Xe,{})})]})]})})};m.a.render(Object(O.jsx)(p.a.StrictMode,{children:Object(O.jsx)(Ie,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.43124fca.chunk.js.map