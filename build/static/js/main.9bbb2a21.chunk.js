(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,n){},136:function(e,t){},138:function(e,t){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var c,o=n(1),a=n.n(o),i=n(43),r=n.n(i),s=(n(82),n(35)),u=n(4),l=n(0),d=function(e){var t=e.createRoomButton,n=void 0!==t&&t,c=e.buttonText,o=e.onClickHandler,a=n?"create_room_button":"join_room_button";return Object(l.jsx)("button",{className:a,onClick:o,children:c})},j=function(){var e=Object(u.f)();return Object(l.jsxs)("div",{className:"connecting_buttons_container",children:[Object(l.jsx)(d,{buttonText:"Join a meeting",onClickHandler:function(){e.push("/join-room")}}),Object(l.jsx)(d,{createRoomButton:!0,buttonText:"Host a meeting",onClickHandler:function(){e.push("/join-room?host=true")}})]})},O=n(12),b={SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",SET_CONNECT_ONLY_WITH_AUDIO:"SET_CONNECT_ONLY_WITH_AUDIO",SET_IDENTITY:"SET_IDENTITY",SET_ROOM_ID:"SET_ROOM_ID",SET_SHOW_OVERLAY:"SET_SHOW_OVERLAY",SET_PARTICIPANTS:"SET_PARTICIPANTS",SET_MESSAGES:"SET_MESSAGES",SET_ACTIVE_CONVERSATION:"SET_ACTIVE_CONVERSATION",SET_DIRECT_CHAT_HISTORY:"SET_DIRECT_CHAT_HISTORY",SET_SOCKET_ID:"SET_SOCKET_ID",SET_VALID:"SET_VALID"},m=function(e){return{type:b.SET_IS_ROOM_HOST,isRoomHost:e}},p=function(e){return{type:b.SET_ROOM_ID,roomId:e}},h=function(e){return{type:b.SET_SHOW_OVERLAY,showOverlay:e}},f=function(e){return{type:"SET_VALID",text:e}},v=function(e){return{type:b.SET_DIRECT_CHAT_HISTORY,directChatHistory:e}},A=b,_=(n(92),Object(O.b)(null,(function(e){return{setIsRoomHostAction:function(t){return e(m(t))}}}))((function(e){var t=e.setIsRoomHostAction;return Object(o.useEffect)((function(){t(!1)}),[]),Object(l.jsx)("div",{className:"introduction_page_container",children:Object(l.jsxs)("div",{className:"introduction_page_panel",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",className:"introduction_page_image",alt:"img"}),Object(l.jsx)(j,{})]})})}))),g=n(2),x=function(e){var t=e.isRoomHost?"Host meeting":"Join meeting";return Object(l.jsx)("p",{className:"join_room_title",children:t})},T=n(11),E=n(23),I=n(26),S=function(e){var t=e.placeholder,n=e.value,c=e.changeHandler;return Object(l.jsx)("input",{value:n,onChange:c,className:"join_room_input",placeholder:t})},y=function(e){var t=e.roomIdValue,n=e.setRoomIdValue,c=e.nameValue,o=e.setNameValue,a=e.isRoomHost;return Object(l.jsxs)("div",{className:"join_room_inputs_container",children:[!a&&Object(l.jsx)(S,{placeholder:"Enter meeting ID",value:t,changeHandler:function(e){n(e.target.value)}}),Object(l.jsx)(S,{placeholder:"Enter your Name",value:c,changeHandler:function(e){o(e.target.value)}})]})},C=function(e){var t=e.connectOnlyWithAudio,n=e.setConnectOnlyWithAudio;return Object(l.jsxs)("div",{className:"checkbox_container",children:[Object(l.jsx)("div",{className:"checkbox_connection",onClick:function(){n(!t)},children:t&&Object(l.jsx)("img",{className:"checkbox_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7ZHBCQAgCEUdpREaoY0boREaoREawQw8hNShFLz04EOHz8MU4OMKIgZKpkTQwrJG6fMNGoRMN52fjMvltI/ryWaJy01Kn7+5k6p3JqTJ5ACLFE2uuUiriezjywAgdcf6AfL4kwAAAABJRU5ErkJggg==",alt:"checkbox"})}),Object(l.jsx)("p",{className:"checkbox_container_paragraph",children:"Only audio"})]})},N=function(e){var t=e.errorMessage;return Object(l.jsx)("div",{className:"error_message_container",children:t&&Object(l.jsx)("p",{className:"error_message_paragraph",children:t})})},k=function(e){var t=e.buttonText,n=e.cancelButton,c=void 0!==n&&n,o=e.onClickHandler,a=c?"join_room_cancel_button":"join_room_success_button";return Object(l.jsx)("button",{onClick:o,className:a,children:t})},H=function(e){var t=e.handleJoinRoom,n=e.isRoomHost?"Host":"Join",c=Object(u.f)();return Object(l.jsxs)("div",{className:"join_room_buttons_container",children:[Object(l.jsx)(k,{buttonText:n,onClickHandler:t}),Object(l.jsx)(k,{buttonText:"Cancel",cancelButton:!0,onClickHandler:function(){c.push("/")}})]})},R=n(52),w=n.n(R),V="https://video-meeting-backend2022.herokuapp.com/api",L="https://video-meeting-backend2022.herokuapp.com/",M=function(){var e=Object(E.a)(Object(T.a)().mark((function e(t){var n;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(V,"/room-exists/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(E.a)(Object(T.a)().mark((function e(){var t;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(V,"/get-turn-credentials"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setConnectOnlyWithAudio:function(t){return e(function(e){return{type:b.SET_CONNECT_ONLY_WITH_AUDIO,onlyWithAudio:e}}(t))},setIdentityAction:function(t){return e(function(e){return{type:b.SET_IDENTITY,identity:e}}(t))},setRoomIdAction:function(t){return e(p(t))}}}))((function(e){var t=e.isRoomHost,n=e.setConnectOnlyWithAudio,c=e.connectOnlyWithAudio,a=e.setIdentityAction,i=e.setRoomIdAction,r=Object(o.useState)(""),s=Object(I.a)(r,2),d=s[0],j=s[1],O=Object(o.useState)(""),b=Object(I.a)(O,2),m=b[0],p=b[1],h=Object(o.useState)(null),f=Object(I.a)(h,2),v=f[0],A=f[1],_=Object(u.f)(),g=function(){var e=Object(E.a)(Object(T.a)().mark((function e(){return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(m),!t){e.next=5;break}S(),e.next=7;break;case 5:return e.next=7,x();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(E.a)(Object(T.a)().mark((function e(){var t,n,c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(d);case 2:t=e.sent,n=t.roomExists,c=t.full,n?c?A("Meeting is full. Please try again later."):(i(d),_.push("/room")):A("Meeting not found. Check your meeting id.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){_.push("/room")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{roomIdValue:d,setRoomIdValue:j,nameValue:m,setNameValue:p,isRoomHost:t}),Object(l.jsx)(C,{setConnectOnlyWithAudio:n,connectOnlyWithAudio:c}),Object(l.jsx)(N,{errorMessage:v}),Object(l.jsx)(H,{handleJoinRoom:g,isRoomHost:t})]})})),J=(n(111),Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setIsRoomHostAction:function(t){return e(m(t))}}}))((function(e){var t=e.setIsRoomHostAction,n=e.isRoomHost,c=Object(u.g)().search;return Object(o.useEffect)((function(){new URLSearchParams(c).get("host")&&t(!0)}),[]),Object(l.jsx)("div",{className:"join_room_page_container",children:Object(l.jsxs)("div",{className:"join_room_page_panel",children:[Object(l.jsx)(x,{isRoomHost:n}),Object(l.jsx)(D,{})]})})}))),G=function(){return Object(l.jsx)("div",{className:"chat_label_container",children:Object(l.jsx)("p",{className:"chat_label_paragraph",children:"CHAT"})})},U=function(){return Object(l.jsx)("div",{className:"chat_section_container",children:Object(l.jsx)(G,{})})},P=function(){return Object(l.jsx)("div",{className:"participants_label_container",children:Object(l.jsx)("p",{className:"participants_label_paragraph",children:"PARTICIPANTS"})})},Q=function(e){var t=e.identity,n=e.lastItem,c=e.participant,o=e.setActiveConversationAction,a=e.socketId;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"participants_paragraph",onClick:function(){c.socketId!==a&&o(c)},children:t}),!n&&Object(l.jsx)("span",{className:"participants_separator_line"})]})},W=Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setActiveConversationAction:function(t){return e(function(e){return{type:b.SET_ACTIVE_CONVERSATION,activeConversation:e}}(t))}}}))((function(e){var t=e.participants,n=e.setActiveConversationAction,c=e.socketId;return Object(l.jsx)("div",{className:"participants_container",children:t.map((function(e,o){return Object(l.jsx)(Q,{lastItem:t.length===o+1,participant:e,identity:e.identity,setActiveConversationAction:n,socketId:c},e.identity)}))})})),Y=function(){return Object(l.jsxs)("div",{className:"participants_section_container",children:[Object(l.jsx)(P,{}),Object(l.jsx)(W,{})]})},F=n.p+"static/media/camera.b50348a3.svg",q=n.p+"static/media/cameraOff.a61d4a02.svg",z=n(29),Z=n(74),X={identity:"",isRoomHost:!1,connectOnlyWithAudio:!1,roomId:null,showOverlay:!0,participants:[],messages:[],activeConversation:null,directChatHistory:[],socketId:null,valid:!0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.SET_IS_ROOM_HOST:return Object(g.a)(Object(g.a)({},e),{},{isRoomHost:t.isRoomHost});case A.SET_CONNECT_ONLY_WITH_AUDIO:return Object(g.a)(Object(g.a)({},e),{},{connectOnlyWithAudio:t.onlyWithAudio});case A.SET_ROOM_ID:return Object(g.a)(Object(g.a)({},e),{},{roomId:t.roomId});case A.SET_IDENTITY:return Object(g.a)(Object(g.a)({},e),{},{identity:t.identity});case A.SET_SHOW_OVERLAY:return Object(g.a)(Object(g.a)({},e),{},{showOverlay:t.showOverlay});case"SET_VALID":return Object(g.a)(Object(g.a)({},e),{},{valid:t.text});case A.SET_PARTICIPANTS:return Object(g.a)(Object(g.a)({},e),{},{participants:t.participants});case A.SET_MESSAGES:return Object(g.a)(Object(g.a)({},e),{},{messages:t.messages});case A.SET_ACTIVE_CONVERSATION:return Object(g.a)(Object(g.a)({},e),{},{activeConversation:t.activeConversation});case A.SET_DIRECT_CHAT_HISTORY:return Object(g.a)(Object(g.a)({},e),{},{directChatHistory:t.directChatHistory});case A.SET_SOCKET_ID:return Object(g.a)(Object(g.a)({},e),{},{socketId:t.socketId});default:return e}},$=Object(Z.a)({reducer:K}),ee=$,te=n(77),ne=function(e,t){var n=Object(z.a)(ee.getState().directChatHistory),c=n.find((function(t){return t.socketId===e}));if(c){var o={isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity},a=Object(g.a)(Object(g.a)({},c),{},{chatHistory:[].concat(Object(z.a)(c.chatHistory),[o])}),i=[].concat(Object(z.a)(n.filter((function(t){return t.socketId!==e}))),[a]);ee.dispatch(v(i))}else{var r={socketId:e,chatHistory:[{isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity}]},s=[].concat(Object(z.a)(n),[r]);ee.dispatch(v(s))}},ce=null,oe=function(){(ce=Object(te.a)(L)).on("connect",(function(){var e;console.log("successfully connected with socket io server"),console.log(ce.id),ee.dispatch((e=ce.id,{type:b.SET_SOCKET_ID,socketId:e}))})),ce.on("room-id",(function(e){var t=e.roomId;ee.dispatch(p(t))})),ce.on("room-update",(function(e){var t=e.connectedUsers;ee.dispatch({type:b.SET_PARTICIPANTS,participants:t})})),ce.on("conn-prepare",(function(e){var t=e.connUserSocketId;he(t,!1),ce.emit("conn-init",{connUserSocketId:t})})),ce.on("conn-signal",(function(e){fe(e)})),ce.on("conn-init",(function(e){var t=e.connUserSocketId;he(t,!0)})),ce.on("user-disconnected",(function(e){ve(e)})),ce.on("direct-message",(function(e){!function(e){var t=e.isAuthor,n=e.receiverSocketId,c=e.authorSocketId;ne(t?n:c,e)}(e)}))},ae=function(e,t){var n={identity:e,onlyAudio:t};ce.emit("create-new-room",n)},ie=function(e,t,n){var c={roomId:t,identity:e,onlyAudio:n};ce.emit("join-room",c)},re=n(76),se=n.n(re),ue=null,le=function(){var e=Object(E.a)(Object(T.a)().mark((function e(){var t,n;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,null!==(t=n.token)&&void 0!==t&&t.iceServers&&(ue=n.token.iceServers),e.abrupt("return",ue);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de={audio:!0,video:{width:"480",height:"360"}},je={audio:!0,video:!1},Oe=function(){var e=Object(E.a)(Object(T.a)().mark((function e(t,n){var o,a,i,r=arguments;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.length>2&&void 0!==r[2]?r[2]:null,a=r.length>3?r[3]:void 0,e.next=4,le();case 4:i=a?je:de,navigator.mediaDevices.getUserMedia(i).then((function(e){console.log("successfuly received local stream"),Ae(c=e),ee.dispatch(h(!1)),t?ae(n,a):ie(n,o,a)})).catch((function(e){console.log(e),ee.dispatch(f(!1))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be={},me=[],pe=function(){var e=ue;return e?{iceServers:[{urls:"stun:stun.l.google.com:19302"}].concat(Object(z.a)(e))}:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]})},he=function(e,t){var n=pe();be[e]=new se.a({initiator:t,config:n,stream:c,channelName:"messenger"}),be[e].on("signal",(function(t){!function(e){ce.emit("conn-signal",e)}({signal:t,connUserSocketId:e})})),be[e].on("stream",(function(t){console.log("new stream came"),_e(t,e),me=[].concat(Object(z.a)(me),[t])})),be[e].on("data",(function(e){var t=JSON.parse(e);xe(t)}))},fe=function(e){be[e.connUserSocketId].signal(e.signal)},ve=function(e){var t=e.socketId,n=document.getElementById(t),c=document.getElementById("".concat(t,"-video"));n&&c&&(c.srcObject.getTracks().forEach((function(e){return e.stop()})),c.srcObject=null,n.removeChild(c),n.parentNode.removeChild(n),be[t]&&be[t].destroy(),delete be[t])},Ae=function(e){var t=document.getElementById("videos_portal");t.classList.add("videos_portal_styles");var n=document.createElement("div");n.classList.add("video_track_container");var c=document.createElement("video");c.autoplay=!0,c.muted=!0,c.srcObject=e,c.onloadedmetadata=function(){c.play()},n.appendChild(c),ee.getState().connectOnlyWithAudio&&n.appendChild(ge()),t.appendChild(n)},_e=function(e,t){var n=document.getElementById("videos_portal"),c=document.createElement("div");c.id=t,c.classList.add("video_track_container");var o=document.createElement("video");o.autoplay=!0,o.srcObject=e,o.id="".concat(t,"-video"),o.onloadedmetadata=function(){o.play()},o.addEventListener("click",(function(){o.classList.contains("full_screen")?o.classList.remove("full_screen"):o.classList.add("full_screen")})),c.appendChild(o);var a=ee.getState().participants.find((function(e){return e.socketId===t}));console.log(a),null!==a&&void 0!==a&&a.onlyAudio?c.appendChild(ge(a.identity)):c.style.position="static",n.appendChild(c)},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.createElement("div");t.classList.add("label_only_audio_container");var n=document.createElement("p");return n.classList.add("label_only_audio_text"),n.innerHTML="Only audio ".concat(e),t.appendChild(n),t},xe=function(e){var t=ee.getState().messages;ee.dispatch(function(e){return{type:b.SET_MESSAGES,messages:e}}([].concat(Object(z.a)(t),[e])))},Te=function(){var e=Object(o.useState)(!1),t=Object(I.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?q:F,className:"video_button_image",onClick:function(){var e;e=n,c.getVideoTracks()[0].enabled=!!e,a(!n)},alt:"cam"})})},Ee=function(){return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("button",{className:"video_button_end",onClick:function(){var e=window.location.origin;window.location.href=e},children:"Leave Room"})})},Ie=n.p+"static/media/mic.c9c9788e.svg",Se=n.p+"static/media/micOff.3a72f682.svg",ye=function(){var e=Object(o.useState)(!1),t=Object(I.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?Se:Ie,onClick:function(){var e;e=n,c.getAudioTracks()[0].enabled=!!e,a(!n)},className:"video_button_image",alt:"img"})})},Ce=Object(O.b)((function(e){return Object(g.a)({},e)}))((function(e){var t=e.connectOnlyWithAudio;return Object(l.jsxs)("div",{className:"video_buttons_container",children:[Object(l.jsx)(ye,{}),!t&&Object(l.jsx)(Te,{}),Object(l.jsx)(Ee,{})]})})),Ne=function(){return Object(l.jsx)("div",{className:"video_section_container",children:Object(l.jsx)(Ce,{})})},ke=function(e){var t=e.roomId;return Object(l.jsx)("div",{className:"room_label",children:Object(l.jsxs)("p",{className:"room_label_paragraph",children:["ID: ",t," "]})})},He=function(){return Object(l.jsx)("div",{className:"overlay_container",children:Object(l.jsx)("div",{className:"loader"})})},Re=(n(147),function(e){var t=e.isOpen;return Object(l.jsx)("div",{className:"popupOuter ".concat(t?"active":""),children:Object(l.jsx)("div",{className:"confirmationPopupContainer",children:Object(l.jsxs)("div",{className:"popupBody",children:[Object(l.jsxs)("p",{className:"popupText",children:[" ",Object(l.jsx)("b",{children:"Error occurred when trying to get an access to your Audio or Video devices"}),". Please get back to home page"]}),Object(l.jsx)("div",{className:"popupBtnGrp",children:Object(l.jsx)("button",{style:{zIndex:"10000000000000"},type:"btn",onClick:function(){window.location.href="https://eclectic-buttercream-298f4c.netlify.app",console.log("click")},alt:"btn",className:"btn-blue",children:"Continue"})})]})})})}),we=(n(148),Object(O.b)((function(e){return Object(g.a)({},e)}))((function(e){var t=e.roomId,n=e.identity,c=e.isRoomHost,a=e.showOverlay,i=e.connectOnlyWithAudio,r=e.valid,s=Object(o.useState)(!1),u=Object(I.a)(s,2),d=u[0],j=u[1];return Object(o.useEffect)((function(){if(c||t)Oe(c,n,t,i),console.log(r);else{var e=window.location.origin;window.location.href=e}}),[]),Object(o.useEffect)((function(){r||i||j(!0)}),[r,i]),Object(l.jsxs)("div",{className:"room_container",children:[Object(l.jsx)(Y,{}),Object(l.jsx)(Re,{isOpen:d}),Object(l.jsx)(Ne,{}),Object(l.jsx)(U,{}),Object(l.jsx)(ke,{roomId:t}),a&&Object(l.jsx)(He,{})]})})));n(149);var Ve=function(){return Object(o.useEffect)((function(){oe()}),[]),Object(l.jsx)(s.a,{children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/join-room",children:Object(l.jsx)(J,{})}),Object(l.jsx)(u.a,{path:"/room",children:Object(l.jsx)(we,{})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(_,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O.a,{store:$,children:Object(l.jsx)(Ve,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,n){},92:function(e,t,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.9bbb2a21.chunk.js.map