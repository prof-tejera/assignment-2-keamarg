(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s,c,r,o,a,i,j,l,b=n(0),u=n.n(b),d=n(19),m=n.n(d),O=(n(28),n(2)),p=n(10),x=n(5),h=n(3),g=n(4),f=n(1),y=Object(b.createContext)({setBtnState:function(){console.log("setBtnState: Im outside the Timerprovider")},setSettingsState:function(){console.log("setSettingsState: Im outside the Timerprovider")}}),S=function(e){var t=e.children,n=Object(b.useState)(!0),s=Object(g.a)(n,2),c=s[0],r=s[1],o=Object(b.useState)(!0),a=Object(g.a)(o,2),i=a[0],j=a[1],l=Object(b.useState)(!0),u=Object(g.a)(l,2),d=u[0],m=u[1],O=Object(b.useState)(!1),p=Object(g.a)(O,2),x=p[0],h=p[1],S=Object(b.useState)(!0),v=Object(g.a)(S,2),C=v[0],w=v[1],T=Object(b.useState)(!1),k=Object(g.a)(T,2),N=k[0],R=k[1],z=Object(b.useState)(!0),B=Object(g.a)(z,2),D=B[0],M=B[1],F=Object(b.useState)(!1),H=Object(g.a)(F,2),I=H[0],E=H[1],V=Object(b.useState)(!0),P=Object(g.a)(V,2),X=P[0],Y=P[1],A=Object(b.useState)(!1),L=Object(g.a)(A,2),J=L[0],W=L[1],G=Object(b.useState)(0),K=Object(g.a)(G,2),q=K[0],Q=K[1],U=Object(b.useState)(0),Z=Object(g.a)(U,2),$=Z[0],_=Z[1],ee=Object(b.useState)(0),te=Object(g.a)(ee,2),ne=te[0],se=te[1],ce=Object(b.useState)(!1),re=Object(g.a)(ce,2),oe=re[0],ae=re[1],ie=Object(b.useState)(0),je=Object(g.a)(ie,2),le=je[0],be=je[1],ue=Object(b.useState)(!1),de=Object(g.a)(ue,2),me=de[0],Oe=de[1],pe=Object(b.useState)(""),xe=Object(g.a)(pe,2),he=xe[0],ge=xe[1],fe=Object(b.useState)(!1),ye=Object(g.a)(fe,2),Se=ye[0],ve=ye[1],Ce=Object(b.useState)($),we=Object(g.a)(Ce,2),Te=we[0],ke=we[1],Ne=Object(b.useState)(!1),Re=Object(g.a)(Ne,2),ze=Re[0],Be=Re[1],De=Object(b.useState)(!0),Me=Object(g.a)(De,2),Fe=Me[0],He=Me[1],Ie=Object(b.useState)(!1),Ee=Object(g.a)(Ie,2),Ve=Ee[0],Pe=Ee[1];return Object(f.jsx)(y.Provider,{value:{currentRest:Ve,setCurrentRest:Pe,showTimerRounds:Fe,setShowTimerRounds:He,showSettingsMessage:ze,setShowSettingsMessage:Be,currentRound:Te,setCurrentRound:ke,message:he,setMessage:ge,showMessage:Se,setShowMessage:ve,docs:me,setDocs:Oe,savedTime:le,setSavedTime:be,isRunning:oe,setIsRunning:ae,time:q,setTime:Q,rounds:$,setRounds:_,rest:ne,setRest:se,btnState:c,setBtnState:r,settingsState:i,setSettingsState:j,stopwatchTimer:d,setStopwatchTimer:m,stopwatchSettings:x,setStopwatchSettings:h,countdownTimer:C,setCountdownTimer:w,countdownSettings:N,setCountdownSettings:R,xyTimer:D,setXyTimer:M,xySettings:I,setXySettings:E,tabataTimer:X,setTabataTimer:Y,tabataSettings:J,setTabataSettings:W},children:t})},v=h.a.div(s||(s=Object(O.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),C=h.a.div(c||(c=Object(O.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),w=h.a.div(r||(r=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),T=h.a.div(o||(o=Object(O.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),k=h.a.table(a||(a=Object(O.a)([""]))),N=function(e){return Object(f.jsxs)(v,{children:[Object(f.jsx)(w,{children:e.title}),Object(f.jsxs)(C,{children:[Object(f.jsx)(T,{children:e.component}),Object(f.jsxs)(k,{children:[Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Prop"}),Object(f.jsx)("th",{children:"Description"}),Object(f.jsx)("th",{children:"Type"}),Object(f.jsx)("th",{children:"Default value"})]})}),e.propDocs.map((function(e,t){return Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.prop}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:e.type}),Object(f.jsx)("td",{children:Object(f.jsx)("code",{children:e.defaultValue})})]})},t)}))]})]})]})},R={small:10,medium:14,large:20},z=h.a.div(i||(i=Object(O.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),B=h.a.span(j||(j=Object(O.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),D=h.a.div(l||(l=Object(O.a)(["\n  display: flex;\n"]))),M=function(e){var t=R[e.size],n=e.color;return Object(f.jsxs)(z,{children:[Object(f.jsxs)(D,{children:[Object(f.jsx)(B,{size:t,color:n}),Object(f.jsx)(B,{size:t,color:n})]}),Object(f.jsxs)(D,{children:[Object(f.jsx)(B,{size:t,color:n}),Object(f.jsx)(B,{size:t,color:n})]})]})};M.defaultProps={size:"medium",color:"#ffa2bf"};var F,H,I,E,V,P,X,Y,A,L,J,W,G,K,q,Q,U,Z=M,$="#316E94",_="#3FA2E0",ee="#E0BB34",te="#4E1394",ne="#26DB5C",se="#DB4E4E",ce="#2F333B",re="#FAF9F6",oe="#231F20",ae={reset:"bi bi-arrow-counterclockwise",start:"bi bi-play-circle",stop:"bi bi-pause-circle",settings:"bi bi-list",forward:"bi bi-skip-forward-circle"},ie="reset",je="start",le="stop",be="settings",ue="forward",de="Stopwatch",me="Countdown",Oe="XY",pe="Tabata",xe="timer",he="rounds",ge="Well done!",fe="Check your settings",ye="Rest now",Se="Work!",ve="Back to work!",Ce="Almost there!",we="That's more like it!",Te="Ya call that working?",ke="Come on!",Ne="Keep going!",Re=function(e){var t=new Date(1e3*e).toISOString();return t.substr(12,1)+"h "+t.substr(14,2)+"m "+t.substr(17,2)+"s"},ze=h.a.button(F||(F=Object(O.a)(["\n  border-radius: 0.3rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n  transition: 0.2s ease;\n  :hover {\n    opacity: 0.6;\n  }\n\n  background-color: ",";\n"])),re,(function(e){return e.value===je?ne:e.value===le?se:ce})),Be=function e(t){e.defaultProps={styleName:"none",value:"none",onClick:null};var n=t.value,s=t.styleName,c=t.onClick,r=t.inner;return Object(f.jsxs)(ze,{className:s,value:n,onClick:c,children:[r,Object(f.jsx)("i",{className:ae[n]?ae[n]:ae.start})]})},De=h.a.label(H||(H=Object(O.a)(['\n  margin-bottom: 2rem;\n  font-size: 3rem;\n  font-weight: 300;\n  // font-family: "Orbitron", sans-serif;\n  color: white;\n']))),Me=function(){var e=Object(b.useContext)(y).time;return Object(f.jsx)(De,{children:Re(e)})},Fe=h.a.div(I||(I=Object(O.a)(["\n  // border: 1px solid black;\n  width: 20rem;\n  background-color: ",";\n  font-size: 2rem;\n  border-radius: 0rem 0rem 0.3rem 0.3rem;\n"])),(function(e){return e.type===de?_:e.type===me?$:e.type===Oe?ee:te})),He=function e(t){return e.defaultProps={timerType:"Stopwatch"},Object(f.jsx)(Fe,{type:t.timerType,className:"mainPanel",children:t.children})},Ie=h.a.input(E||(E=Object(O.a)(["\n  // border: 1px solid black;\n  color: ",";\n  font-size: 0.8rem;\n  border-radius: 0.5rem;\n  border: 0px;\n"])),(function(e){return e.type===de?_:e.type===me?$:e.type===Oe?ee:te})),Ee=h.a.p(V||(V=Object(O.a)(["\n  font-size: 0.8rem;\n  color: ",";\n  padding-top: 0.5rem;\n"])),re),Ve=h.a.p(P||(P=Object(O.a)(["\n  font-size: 1rem;\n  color: ",";\n  padding-top: 0.5rem;\n  margin-block-start: 0;\n  margin-block-end: 0;\n"])),re),Pe=function e(t){var n=t.timerType;e.defaultProps={timerType:me};var s=Object(b.useContext)(y),c=s.time,r=s.setTime,o=Object(b.useContext)(y),a=o.rounds,i=o.setRounds,j=Object(b.useContext)(y),l=j.rest,u=j.setRest,d=Object(b.useContext)(y).docs,m=function(e){d||(e.target.name===xe?r(e.target.value):e.target.name===he?i(e.target.value):u(e.target.value))};return Object(f.jsxs)("div",{className:"w-75",children:[n!==de?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Ve,{children:[Object(f.jsx)("label",{htmlFor:"timer",children:"Set workout time"}),Object(f.jsx)("br",{}),Re(c)]}),Object(f.jsx)(Ie,{name:"timer",type:"range",min:"0",max:"7200",step:"15",value:c,onChange:m})]}):null,n===Oe||n===pe?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Ve,{children:[Object(f.jsx)("label",{htmlFor:"rounds",children:"Set number of rounds"}),Object(f.jsx)("br",{}),a]}),Object(f.jsx)(Ie,{name:"rounds",type:"range",min:"1",max:"5",step:"1",value:a,onChange:m})]}):null,t.timerType===pe?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Ve,{children:[Object(f.jsx)("label",{htmlFor:"rest",children:"Set rest time"}),Object(f.jsx)("br",{}),Re(l).substr(4,6)]}),Object(f.jsx)(Ie,{name:"rest",type:"range",min:"0",max:"300",step:"5",value:l,onChange:m})]}):null,Object(f.jsx)(Ee,{children:"By Martin Gundtoft"})]})},Xe=function(e){var t=Object(b.useState)(1e3),n=Object(g.a)(t,1)[0],s=Object(b.useContext)(y),c=s.isRunning,r=s.setIsRunning,o=Object(b.useContext)(y),a=o.time,i=o.setTime,j=Object(b.useContext)(y).setBtnState,l=Object(b.useContext)(y).setShowMessage,u=Object(b.useContext)(y).setMessage,d=Object(b.useContext)(y),m=d.currentRound,O=d.setCurrentRound,p=Object(b.useContext)(y).savedTime,x=Object(b.useContext)(y),h=x.currentRest,f=x.setCurrentRest,S=Object(b.useContext)(y).rest;!function(e,t){var n=Object(b.useRef)();Object(b.useEffect)((function(){n.current=e}),[e]),Object(b.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){e===de?i(Number(a)+1):(Number(a)>0?i(Number(a)-1):(r(!1),j(!0),l(!0),u(e===me?ge:function(e){switch(e){case 1:return ge;case 2:return Ce;case 3:return we;case 4:return Te;case 5:return ke;default:return Ne}}(m))),e===Oe&&0===Number(a)&&m>1&&(O((function(e){return e-1})),i(p),r(!0),j(!1)),e===pe&&m>1&&(h||(l(!0),u(Se)),0===Number(a)&&m>1&&(f(!h),u(ye),i(S),r(!0),j(!1),h&&(u(ve),O((function(e){return e-1})),i(p)))))}),c?n:null)},Ye=h.a.h1(X||(X=Object(O.a)(["\n  color: ",";\n"])),re),Ae=h.a.div(Y||(Y=Object(O.a)(["\n  position: relative;\n  height: 15rem;\n  .false {\n    color: ",";\n    animation: pulse 1.2s ease infinite, color 0.3s ease;\n  }\n\n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes color {\n    0% {\n      color: black;\n    }\n    100% {\n      color: ",";\n    }\n  }\n\n  i.stopwatch {\n    font-size: 10rem;\n    opacity: 40%;\n    display: block;\n  }\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    // display: block;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"])),se,se),Le=h.a.div(A||(A=Object(O.a)(["\n  height: 15rem;\n  .ctaBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    background-color: transparent;\n  }\n"]))),Je=h.a.div(L||(L=Object(O.a)(["\n  height: 5rem;\n  padding-top: 4rem;\n  .ctaBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    background-color: transparent;\n    line-height: 1rem;\n  }\n"]))),We=h.a.div(J||(J=Object(O.a)(["\n  position: relative;\n  height: 25rem;\n  .settingsBtn {\n    z-index: 1;\n    font-size: 1.5rem;\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    background-color: transparent;\n  }\n"]))),Ge=h.a.p(W||(W=Object(O.a)(["\n  color: ",";}\n  line-height: 2rem;\n\n"])),re),Ke=function(e){var t=Object(b.useContext)(y),n=t.time,s=t.setTime,c=Object(b.useContext)(y),r=c.isRunning,o=c.setIsRunning,a=Object(b.useContext)(y),i=a.btnState,j=a.setBtnState,l=Object(b.useContext)(y),u=l.settingsState,d=l.setSettingsState,m=Object(b.useContext)(y),O=m.savedTime,p=m.setSavedTime,x=Object(b.useContext)(y).docs,h=Object(b.useContext)(y).rounds,g=Object(b.useContext)(y),S=g.currentRound,v=g.setCurrentRound,C=Object(b.useContext)(y),w=C.message,T=C.setMessage,k=Object(b.useContext)(y),N=k.showMessage,R=k.setShowMessage,z=Object(b.useContext)(y),B=z.showSettingsMessage,D=z.setShowSettingsMessage,M=Object(b.useContext)(y),F=M.showTimerRounds,H=M.setShowTimerRounds,I=e.timerType,E=function(e){if(!x){var t=Number(n);e.currentTarget.value!==je&&e.currentTarget.value!==le||(t||I===de)&&(o(!r),j(!i)),e.currentTarget.value===ie&&(s(O),j(!0),o(!1),R(!1),v(h)),e.currentTarget.value===ue&&t&&(s(0),v(0),T(ge),R(!0)),e.currentTarget.value===be&&(d(!u),j(!0),p(n),o(!1),H(!1),R(!1),v(h),I===me&&(t?(D(!1),H(!0)):(T(fe),D(!0))),I!==Oe&&I!==pe||(!t||h<1?(T(fe),D(!0)):(D(!1),H(!0))))}};return Xe(I),u&&I!==de?Object(f.jsx)(He,{timerType:I,children:Object(f.jsxs)(We,{className:"settingspanel text-center d-flex align-items-center justify-content-center",children:[Object(f.jsx)(Be,{styleName:"settingsBtn",onClick:E,value:be}),Object(f.jsx)(Pe,{styleName:"p-2",timerType:I})]})}):Object(f.jsxs)(He,{timerType:I,children:[Object(f.jsxs)(Ae,{className:"text-center",children:[Object(f.jsx)(Ye,{children:I}),I!==de?Object(f.jsx)(Be,{styleName:"settingsBtn",onClick:E,value:be}):null,Object(f.jsx)("i",{className:"bi bi-stopwatch stopwatch ".concat(!r)})]}),Object(f.jsx)(Je,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row col text-center",children:B?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Be,{styleName:"ctaBtn",onClick:E,value:be,inner:w+" "})}):N?Object(f.jsxs)(Ge,{children:[" ",w]}):Object(f.jsx)(f.Fragment,{})})})}),Object(f.jsx)(Le,{className:"d-flex align-items-center",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row col text-center",children:[F&&S>1&&(I===Oe||I===pe)?Object(f.jsxs)(Ge,{children:[" ",S," rounds left"]}):Object(f.jsx)(Ge,{children:" \xa0"}),F?Object(f.jsx)(Me,{}):Object(f.jsx)(f.Fragment,{})]}),Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)(Be,{styleName:"col-3",value:i?je:le,onClick:E}),Object(f.jsx)(Be,{styleName:"col-3",value:ie,onClick:E}),I!==de?Object(f.jsx)(Be,{styleName:"col-3",value:ue,onClick:E}):Object(f.jsx)(f.Fragment,{})]})]})})]})},qe=h.a.ul(G||(G=Object(O.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0.5rem 0;\n  overflow: hidden;\n  border-radius: 0.3rem 0.3rem 0rem 0rem;\n  width: 20rem;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  .Stopwatch,\n  .Countdown,\n  .XY,\n  .Tabata {\n    background-color: ",";\n    transition: 0.5s;\n  }\n  .Stopwatch:hover {\n    background-color: ",";\n  }\n  .Countdown:hover {\n    background-color: ",";\n  }\n  .Tabata:hover {\n    background-color: ",";\n  }\n  .XY:hover {\n    background-color: ",";\n  }\n\n  li {\n    display: inline;\n    list-style-type: none;\n    text-decoration: none;\n    padding: 0.75rem;\n  }\n  .current {\n    .Stopwatch {\n      background-color: ",";\n    }\n    .Countdown {\n      background-color: ",";\n    }\n    .XY {\n      background-color: ",";\n    }\n    .Tabata {\n      background-color: ",";\n    }\n  }\n  .active {\n    background-color: #04aa6d;\n  }\n"])),re,oe,_,$,te,ee,_,$,ee,te),Qe=[{name:de,path:"/"},{name:me,path:"/countdown"},{name:Oe,path:"/xy"},{name:pe,path:"/tabata"}],Ue=function(){var e=Object(b.useContext)(y).setTime,t=Object(b.useContext)(y).setRounds,n=Object(b.useContext)(y).setRest,s=Object(b.useContext)(y).setIsRunning,c=Object(b.useContext)(y).setBtnState,r=Object(b.useContext)(y).setSettingsState,o=Object(b.useContext)(y).docs,a=Object(b.useContext)(y).setCurrentRound,i=Object(b.useContext)(y).setShowSettingsMessage,j=Object(b.useContext)(y).setShowTimerRounds,l=Object(b.useContext)(y).setShowMessage,u=Object(b.useContext)(y).setSavedTime,d=function(b){o||(e(0),t(0),n(0),s(!1),c(!0),r(!0),a(0),i(!1),l(!1),u(0),"Stopwatch"===b.target.innerHTML&&j(!0))};return Object(f.jsx)(qe,{children:Qe.map((function(e,t){return Object(f.jsx)(p.c,{to:e.path,exact:!0,activeClassName:"current",children:Object(f.jsx)("li",{className:e.name,onClick:d,children:e.name})},t)}))})},Ze=h.a.div(K||(K=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),$e=h.a.div(q||(q=Object(O.a)(["\n  font-size: 2rem;\n"]))),_e=function(){return Object(f.jsx)(Ze,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)($e,{children:"Documentation"}),Object(f.jsx)(N,{title:"Loading spinner ",component:Object(f.jsx)(Z,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(f.jsx)(N,{title:"Button",component:Object(f.jsx)(Be,{}),propDocs:[{prop:"styleName",description:"Has the classNames",type:"String",defaultValue:"none"},{prop:"value",description:"Has the button type",type:"String",defaultValue:"none"},{prop:"onClick",description:"Holds the clickHandler function",type:"function",defaultValue:"null"}]}),Object(f.jsx)(N,{title:"DisplayTime",component:Object(f.jsx)(Me,{}),propDocs:[{}]}),Object(f.jsx)(N,{title:"Panel",component:Object(f.jsx)(He,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"myClass"}]}),Object(f.jsx)(N,{title:"Settings",component:Object(f.jsx)(Pe,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"Countdown"}]}),Object(f.jsx)(N,{title:"Timer",component:Object(f.jsx)(Ke,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"Countdown"}]}),Object(f.jsx)(N,{title:"Navbar",component:Object(f.jsx)(Ue,{}),propDocs:[{prop:"timerType",description:"Has the type of timer",type:"String",defaultValue:"Countdown"}]})]})})},et=function(){return Object(f.jsx)(Ke,{timerType:"Stopwatch"})},tt=function(){return Object(f.jsx)(Ke,{timerType:"Countdown"})},nt=function(){return Object(f.jsx)(Ke,{timerType:"XY"})},st=function(){return Object(f.jsx)(Ke,{timerType:"Tabata"})},ct=h.a.div(Q||(Q=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),rt=function(){var e=[{path:"/",component:et},{path:"/assignment-2-keamarg",component:et},{path:"/Stopwatch",component:et},{path:"/Countdown",component:tt},{path:"/XY",component:nt},{path:"/Tabata",component:st}];return Object(f.jsx)(ct,{children:Object(f.jsxs)(p.a,{children:[Object(f.jsx)(Ue,{}),Object(f.jsx)(x.c,{children:e.map((function(e,t){var n=e.path,s=e.component;return Object(f.jsx)(x.a,{exact:!0,path:n,component:s},t)}))})]})})},ot=h.a.div(U||(U=Object(O.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),at=function(){var e=function(e){"Documentation"===e.target.innerHTML?t(!0):t(!1)},t=Object(b.useContext)(y).setDocs;return Object(f.jsx)(ot,{children:Object(f.jsxs)(p.a,{children:[Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{id:"timers",onClick:e,children:Object(f.jsx)(p.b,{to:"/",children:"Timers"})}),Object(f.jsx)("li",{value:"docs",onClick:e,children:Object(f.jsx)(p.b,{to:"/docs",children:"Documentation"})})]})}),Object(f.jsxs)(x.c,{children:[Object(f.jsx)(x.a,{path:"/docs",children:Object(f.jsx)(_e,{})}),Object(f.jsx)(x.a,{path:"/",children:Object(f.jsx)(rt,{})})]})]})})};m.a.render(Object(f.jsx)(u.a.StrictMode,{children:Object(f.jsx)(S,{children:Object(f.jsx)(at,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.00411810.chunk.js.map