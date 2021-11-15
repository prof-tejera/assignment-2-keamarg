(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r,s,a,c,i,o,l,u,b=n(0),j=n.n(b),d=n(19),p=n.n(d),m=(n(28),n(2)),h=n(10),O=n(4),x=n(3),f=n(1),g=x.a.div(r||(r=Object(m.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),y=x.a.div(s||(s=Object(m.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),S=x.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),v=x.a.div(c||(c=Object(m.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),w=x.a.table(i||(i=Object(m.a)([""]))),T=function(e){return Object(f.jsxs)(g,{children:[Object(f.jsx)(S,{children:e.title}),Object(f.jsxs)(y,{children:[Object(f.jsx)(v,{children:e.component}),Object(f.jsxs)(w,{children:[Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Prop"}),Object(f.jsx)("th",{children:"Description"}),Object(f.jsx)("th",{children:"Type"}),Object(f.jsx)("th",{children:"Default value"})]})}),e.propDocs.map((function(e,t){return Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.prop}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:e.type}),Object(f.jsx)("td",{children:Object(f.jsx)("code",{children:e.defaultValue})})]})},t)}))]})]})]})},C={small:10,medium:14,large:20},k=x.a.div(o||(o=Object(m.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),N=x.a.span(l||(l=Object(m.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),z=x.a.div(u||(u=Object(m.a)(["\n  display: flex;\n"]))),B=function(e){var t=C[e.size],n=e.color;return Object(f.jsxs)(k,{children:[Object(f.jsxs)(z,{children:[Object(f.jsx)(N,{size:t,color:n}),Object(f.jsx)(N,{size:t,color:n})]}),Object(f.jsxs)(z,{children:[Object(f.jsx)(N,{size:t,color:n}),Object(f.jsx)(N,{size:t,color:n})]})]})};B.defaultProps={size:"medium",color:"#ffa2bf"};var R,X,D=B,V="#316E94",F="#3FA2E0",Y="#E0BB34",H="#4E1394",E="#26DB5C",I="#DB4E4E",P="#2F333B",A="#FAF9F6",J="#231F20",M={reset:"bi bi-arrow-counterclockwise",start:"bi bi-play-circle",stop:"bi bi-pause-circle",settings:"bi bi-list"},G=function(e){var t=new Date(1e3*e).toISOString();return t.substr(12,1)+"h "+t.substr(14,2)+"m "+t.substr(17,2)+"s"},L=x.a.button(R||(R=Object(m.a)(["\n  border-radius: 0.3rem;\n  // padding: 0.5rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n  transition: 0.2s ease;\n  :hover {\n    opacity: 0.6;\n  }\n  background-color: ",";\n"])),A,(function(e){return"start"===e.value?E:"stop"===e.value?I:P})),q=function e(t){e.defaultProps={styleName:"",value:"",onClick:null};var n=t.value;return Object(f.jsx)(L,{className:t.styleName,value:t.value,onClick:t.onClick,children:Object(f.jsx)("i",{className:M[n]})})},K=n(6),Q=Object(b.createContext)({setBtnState:function(){console.log("setBtnState: Im outside the Timerprovider")},setSettingsState:function(){console.log("setSettingsState: Im outside the Timerprovider")}}),U=function(e){var t=e.children,n=Object(b.useState)(!0),r=Object(K.a)(n,2),s=r[0],a=r[1],c=Object(b.useState)(!1),i=Object(K.a)(c,2),o=i[0],l=i[1],u=Object(b.useState)(!0),j=Object(K.a)(u,2),d=j[0],p=j[1],m=Object(b.useState)(!1),h=Object(K.a)(m,2),O=h[0],x=h[1],g=Object(b.useState)(!0),y=Object(K.a)(g,2),S=y[0],v=y[1],w=Object(b.useState)(!1),T=Object(K.a)(w,2),C=T[0],k=T[1],N=Object(b.useState)(!0),z=Object(K.a)(N,2),B=z[0],R=z[1],X=Object(b.useState)(!1),D=Object(K.a)(X,2),V=D[0],F=D[1],Y=Object(b.useState)(!0),H=Object(K.a)(Y,2),E=H[0],I=H[1],P=Object(b.useState)(!1),A=Object(K.a)(P,2),J=A[0],M=A[1],G=Object(b.useState)(0),L=Object(K.a)(G,2),q=L[0],U=L[1],W=Object(b.useState)(0),Z=Object(K.a)(W,2),$=Z[0],_=Z[1],ee=Object(b.useState)(0),te=Object(K.a)(ee,2),ne=te[0],re=te[1],se=Object(b.useState)(!1),ae=Object(K.a)(se,2),ce=ae[0],ie=ae[1],oe=Object(b.useState)(0),le=Object(K.a)(oe,2),ue=le[0],be=le[1];return Object(f.jsx)(Q.Provider,{value:{savedTime:ue,setSavedTime:be,isRunning:ce,setIsRunning:ie,time:q,setTime:U,rounds:$,setRounds:_,rest:ne,setRest:re,btnState:s,setBtnState:a,settingsState:o,setSettingsState:l,stopwatchTimer:d,setStopwatchTimer:p,stopwatchSettings:O,setStopwatchSettings:x,countdownTimer:S,setCountdownTimer:v,countdownSettings:C,setCountdownSettings:k,xyTimer:B,setXyTimer:R,xySettings:V,setXySettings:F,tabataTimer:E,setTabataTimer:I,tabataSettings:J,setTabataSettings:M},children:t})},W=n(11),Z=n.n(W),$=x.a.label(X||(X=Object(m.a)(['\n  margin-bottom: 2rem;\n  font-size: 3rem;\n  font-weight: 300;\n  // font-family: "Orbitron", sans-serif;\n  color: white;\n'])));$.propTypes={styleName:Z.a.string};var _,ee,te,ne,re,se,ae,ce,ie,oe,le,ue,be,je=function(e){$.defaultProps={styleName:"myClass"};var t=Object(b.useContext)(Q).time;return Object(f.jsx)($,{className:e.styleName,children:G(t)})},de=x.a.div(_||(_=Object(m.a)(["\n  // border: 1px solid black;\n  width: 20rem;\n  background-color: ",";\n  // color: var(--blue);\n  // padding: 2rem 0 2rem 0;\n  // line-height: 30px;\n  font-size: 2rem;\n  border-radius: 0rem 0rem 0.3rem 0.3rem;\n"])),(function(e){return"Stopwatch"===e.type?F:"Countdown"===e.type?V:"XY"===e.type?Y:H})),pe=function e(t){return e.defaultProps={timerType:"Stopwatch"},Object(f.jsx)(de,{type:t.timerType,className:"mainPanel",children:t.children})},me=x.a.input(ee||(ee=Object(m.a)(["\n  // border: 1px solid black;\n  color: ",";\n  font-size: 0.8rem;\n  border-radius: 0.5rem;\n  border: 0px;\n"])),(function(e){return"Stopwatch"===e.type?F:"Countdown"===e.type?V:"XY"===e.type?Y:H})),he=x.a.p(te||(te=Object(m.a)(["\n  font-size: 0.8rem;\n  color: ",";\n  padding-top: 0.5rem;\n"])),A),Oe=x.a.p(ne||(ne=Object(m.a)(["\n  font-size: 1rem;\n  color: ",";\n  padding-top: 0.5rem;\n  margin-block-start: 0;\n  margin-block-end: 0;\n"])),A),xe=function e(t){e.defaultProps={timerType:"Countdown",placeholder:"hh:mm:ss",placeholderRounds:"hh:mm:ss",placeholderRest:"hh:mm:ss"};var n=Object(b.useContext)(Q),r=n.time,s=n.setTime,a=Object(b.useContext)(Q),c=a.rounds,i=a.setRounds,o=Object(b.useContext)(Q),l=o.rest,u=o.setRest,j=function(e){"timer"===e.target.name?s(e.target.value):"rounds"===e.target.name?i(e.target.value):u(e.target.value)};return Object(f.jsxs)("div",{className:"w-75",children:["Stopwatch"!==t.timerType?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Oe,{children:[Object(f.jsx)("label",{htmlFor:"timer",children:"Set workout time"}),Object(f.jsx)("br",{}),G(r)]}),Object(f.jsx)(me,{name:"timer",type:"range",placeholder:t.placeholder,min:"0",max:"7200",step:"15",value:r,onChange:j})]}):null,"XY"===t.timerType||"Tabata"===t.timerType?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Oe,{children:[Object(f.jsx)("label",{htmlFor:"rounds",children:"Set number of rounds"}),Object(f.jsx)("br",{}),c]}),Object(f.jsx)(me,{name:"rounds",type:"range",placeholder:t.placeholderRounds,min:"0",max:"5",step:"1",value:c,onChange:j})]}):null,"Tabata"===t.timerType?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Oe,{children:[Object(f.jsx)("label",{htmlFor:"rest",children:"Set rest time"}),Object(f.jsx)("br",{}),G(l).substr(4,6)]}),Object(f.jsx)(me,{name:"rest",type:"range",placeholder:t.placeholderRest,min:"0",max:"300",step:"15",value:l,onChange:j})]}):null,Object(f.jsx)(he,{children:"By Martin Gundtoft"})]})},fe=x.a.div(re||(re=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),ge=x.a.div(se||(se=Object(m.a)(["\n  font-size: 2rem;\n"]))),ye=function(){return Object(f.jsx)(fe,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(ge,{children:"Documentation"}),Object(f.jsx)(T,{title:"Loading spinner ",component:Object(f.jsx)(D,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(f.jsx)(T,{title:"Button",component:Object(f.jsx)(q,{}),propDocs:[{prop:"btnState",description:"Starts and stops the timer",type:"boolean",defaultValue:"true"},{prop:"settingsState",description:"Switches between main app and settings",type:"boolean",defaultValue:"false"},{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"settingsBtn"},{prop:"type",description:"Has the type of style for the given timer",type:"String",defaultValue:"Stopwatch"}]}),Object(f.jsx)(T,{title:"DisplayTime",component:Object(f.jsx)(je,{}),propDocs:[{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"myClass"},{prop:"time",description:"Has the timer value",type:"String",defaultValue:"0"}]}),Object(f.jsx)(T,{title:"Panel",component:Object(f.jsx)(pe,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"myClass"}]}),Object(f.jsx)(T,{title:"Settings",component:Object(f.jsx)(xe,{}),propDocs:[{prop:"type",description:"Has the type of timer",type:"String",defaultValue:"Countdown"},{prop:"timerType",description:"Has the type of timer settings",type:"String",defaultValue:"Countdown"},{prop:"placeholder",description:"Has the value of the input field for countdown",type:"String",defaultValue:"input"},{prop:"placeholderRounds",description:"Has the value of the input field for rounds",type:"String",defaultValue:"input"},{prop:"placeholderRest",description:"Has the value of the input field for rest",type:"String",defaultValue:"input"}]})]})})},Se=x.a.h1(ae||(ae=Object(m.a)(["\n  color: ",";\n"])),A),ve=x.a.div(ce||(ce=Object(m.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.stopwatch {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),I,I),we=x.a.div(ie||(ie=Object(m.a)(["\n  height: 15rem;\n"]))),Te=x.a.div(oe||(oe=Object(m.a)(["\n  position: relative;\n  height: 25rem;\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"]))),Ce=function(e){var t=Object(b.useContext)(Q),n=t.time,r=t.setTime,s=Object(b.useContext)(Q),a=s.stopwatchTimer,c=s.setStopwatchTimer,i=Object(b.useContext)(Q),o=i.stopwatchSettings,l=i.setStopwatchSettings,u=Object(b.useContext)(Q),j=u.countdownTimer,d=u.setCountdownTimer,p=Object(b.useContext)(Q),m=p.countdownSettings,h=p.setCountdownSettings,O=Object(b.useContext)(Q),x=O.tabataTimer,g=O.setTabataTimer,y=Object(b.useContext)(Q),S=y.tabataSettings,v=y.setTabataSettings,w=Object(b.useContext)(Q),T=w.xyTimer,C=w.setXyTimer,k=Object(b.useContext)(Q),N=k.xySettings,z=k.setXySettings,B=Object(b.useContext)(Q),R=B.isRunning,X=B.setIsRunning,D=Object(b.useContext)(Q),V=D.btnState,F=D.setBtnState,Y=Object(b.useContext)(Q),H=Y.settingsState,E=Y.setSettingsState,I=Object(b.useContext)(Q),P=I.savedTime,A=I.setSavedTime,J=Object(b.useRef)(),M=Object(b.useRef)(),G=Object(b.useRef)(),L=Object(b.useRef)();switch(e.timerType){case"Stopwatch":J.current=a,M.current=c,G.current=o,L.current=l;break;case"Countdown":J.current=j,M.current=d,G.current=m,L.current=h;break;case"XY":J.current=T,M.current=C,G.current=N,L.current=z;break;case"Tabata":J.current=x,M.current=g,G.current=S,L.current=v;break;default:console.log("no timer selected")}var U=function(t){"Stopwatch"===e.timerType&&A(0),"reset"===t.currentTarget.value&&(r(P),X(!1)),"start"!==t.currentTarget.value&&"stop"!==t.currentTarget.value||(X(!R),F(!V)),"settings"===t.currentTarget.value&&(E(!H),A(n))};return function(e){var t=Object(b.useState)(1e3),n=Object(K.a)(t,1)[0],r=Object(b.useContext)(Q).isRunning,s=Object(b.useContext)(Q),a=s.time,c=s.setTime;!function(e,t){var n=Object(b.useRef)();Object(b.useEffect)((function(){n.current=e}),[e]),Object(b.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){c("Stopwatch"===e?Number(a)+1:Number(a)-1)}),r?n:null)}(e.timerType),H&&"Stopwatch"!==e.timerType?Object(f.jsx)(pe,{timerType:e.timerType,children:Object(f.jsxs)(Te,{className:"settingspanel text-center d-flex align-items-center justify-content-center",children:[Object(f.jsx)(q,{type:"settingsBtn",styleName:"settingsBtn",btnState:J.current,settingsState:G.current,setBtnState:M.current,setSettingsState:L.current,onClick:U,value:"settings"}),Object(f.jsx)(xe,{styleName:"p-2",timerType:e.timerType})]})}):Object(f.jsxs)(pe,{timerType:e.timerType,children:[Object(f.jsxs)(ve,{className:"text-center",children:[Object(f.jsx)(Se,{children:e.timerType}),"Stopwatch"!==e.timerType?Object(f.jsx)(q,{styleName:"settingsBtn",btnState:J.current,settingsState:G.current,setBtnState:M.current,setSettingsState:L.current,onClick:U,value:"settings"}):null,Object(f.jsx)("i",{className:"bi bi-stopwatch stopwatch ".concat(!R)})]}),Object(f.jsx)(we,{className:"d-flex align-items-center",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(je,{styleName:"col text-center"})}),Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)(q,{styleName:"col-5",btnState:J.current,value:V?"start":"stop",setBtnState:M.current,onClick:U}),Object(f.jsx)(q,{styleName:"col-5",btnState:J.current,value:"reset",setBtnState:M.current,onClick:U})]})]})})]})},ke=function(){return Object(f.jsx)(Ce,{timerType:"Stopwatch"})},Ne=function(){return Object(f.jsx)(Ce,{timerType:"Countdown"})},ze=function(){return Object(f.jsx)(Ce,{timerType:"XY"})},Be=function(){return Object(f.jsx)(Ce,{timerType:"Tabata"})},Re=x.a.ul(le||(le=Object(m.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0.5rem 0;\n  overflow: hidden;\n  border-radius: 0.3rem 0.3rem 0rem 0rem;\n  width: 20rem;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  .Stopwatch,\n  .Countdown,\n  .XY,\n  .Tabata {\n    background-color: ",";\n    transition: 0.5s;\n  }\n  .Stopwatch:hover {\n    background-color: ",";\n  }\n  .Countdown:hover {\n    background-color: ",";\n  }\n  .Tabata:hover {\n    background-color: ",";\n  }\n  .XY:hover {\n    background-color: ",";\n  }\n\n  li {\n    display: inline;\n    list-style-type: none;\n    text-decoration: none;\n    padding: 0.75rem;\n  }\n  .current {\n    .Stopwatch {\n      background-color: ",";\n    }\n    .Countdown {\n      background-color: ",";\n    }\n    .XY {\n      background-color: ",";\n    }\n    .Tabata {\n      background-color: ",";\n    }\n  }\n  .active {\n    background-color: #04aa6d;\n  }\n"])),A,J,F,V,H,Y,F,V,Y,H),Xe=[{name:"Stopwatch",path:"/"},{name:"Countdown",path:"/Countdown"},{name:"XY",path:"/XY"},{name:"Tabata",path:"/Tabata"}],De=function(){var e=Object(b.useContext)(Q).setTime,t=Object(b.useContext)(Q).setIsRunning,n=Object(b.useContext)(Q).setBtnState,r=Object(b.useContext)(Q).setSettingsState,s=function(){e(0),t(!1),n(!0),r(!0)};return Object(f.jsx)(Re,{children:Xe.map((function(e,t){return Object(f.jsx)(h.c,{to:e.path,exact:!0,activeClassName:"current",children:Object(f.jsx)("li",{className:e.name,onClick:s,children:e.name})},t)}))})},Ve=x.a.div(ue||(ue=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Fe=function(){var e=[{path:"/",component:ke},{path:"/assignment-2-keamarg",component:ke},{path:"/Stopwatch",component:ke},{path:"/Countdown",component:Ne},{path:"/XY",component:ze},{path:"/Tabata",component:Be}];return Object(f.jsx)(Ve,{children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(U,{children:[Object(f.jsx)(De,{}),Object(f.jsx)(O.c,{children:e.map((function(e,t){var n=e.path,r=e.component;return Object(f.jsx)(O.a,{exact:!0,path:n,component:r},t)}))})]})})})},Ye=x.a.div(be||(be=Object(m.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),He=function(){return Object(f.jsx)(Ye,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(h.b,{to:"/",children:"Timers"})}),Object(f.jsx)("li",{children:Object(f.jsx)(h.b,{to:"/docs",children:"Documentation"})})]})}),Object(f.jsxs)(O.c,{children:[Object(f.jsx)(O.a,{path:"/docs",children:Object(f.jsx)(ye,{})}),Object(f.jsx)(O.a,{path:"/",children:Object(f.jsx)(Fe,{})})]})]})})};p.a.render(Object(f.jsx)(j.a.StrictMode,{children:Object(f.jsx)(He,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ef5a8bcf.chunk.js.map