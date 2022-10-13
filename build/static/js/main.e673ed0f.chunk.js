(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,n){},136:function(e,t){},138:function(e,t){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c,o=n(1),a=n.n(o),i=n(43),r=n.n(i),s=(n(82),n(35)),u=n(4),l=n(0),d=function(e){var t=e.createRoomButton,n=void 0!==t&&t,c=e.buttonText,o=e.onClickHandler,a=n?"create_room_button":"join_room_button";return Object(l.jsx)("button",{className:a,onClick:o,children:c})},j=function(){var e=Object(u.f)();return Object(l.jsxs)("div",{className:"connecting_buttons_container",children:[Object(l.jsx)(d,{buttonText:"Join a meeting",onClickHandler:function(){e.push("/join-room")}}),Object(l.jsx)(d,{createRoomButton:!0,buttonText:"Host a meeting",onClickHandler:function(){e.push("/join-room?host=true")}})]})},O=n(12),b={SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",SET_CONNECT_ONLY_WITH_AUDIO:"SET_CONNECT_ONLY_WITH_AUDIO",SET_IDENTITY:"SET_IDENTITY",SET_ROOM_ID:"SET_ROOM_ID",SET_SHOW_OVERLAY:"SET_SHOW_OVERLAY",SET_PARTICIPANTS:"SET_PARTICIPANTS",SET_MESSAGES:"SET_MESSAGES",SET_ACTIVE_CONVERSATION:"SET_ACTIVE_CONVERSATION",SET_DIRECT_CHAT_HISTORY:"SET_DIRECT_CHAT_HISTORY",SET_SOCKET_ID:"SET_SOCKET_ID"},A=function(e){return{type:b.SET_IS_ROOM_HOST,isRoomHost:e}},m=function(e){return{type:b.SET_ROOM_ID,roomId:e}},h=function(e){return{type:b.SET_SHOW_OVERLAY,showOverlay:e}},v=function(e){return{type:b.SET_DIRECT_CHAT_HISTORY,directChatHistory:e}},f=b,p=(n(92),Object(O.b)(null,(function(e){return{setIsRoomHostAction:function(t){return e(A(t))}}}))((function(e){var t=e.setIsRoomHostAction;return Object(o.useEffect)((function(){t(!1)}),[]),Object(l.jsx)("div",{className:"introduction_page_container",children:Object(l.jsxs)("div",{className:"introduction_page_panel",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",className:"introduction_page_image",alt:"img"}),Object(l.jsx)(j,{})]})})}))),g=n(2),T=function(e){var t=e.isRoomHost?"Host meeting":"Join meeting";return Object(l.jsx)("p",{className:"join_room_title",children:t})},I=n(11),C=n(23),S=n(30),E=function(e){var t=e.placeholder,n=e.value,c=e.changeHandler;return Object(l.jsx)("input",{value:n,onChange:c,className:"join_room_input",placeholder:t})},N=function(e){var t=e.roomIdValue,n=e.setRoomIdValue,c=e.nameValue,o=e.setNameValue,a=e.isRoomHost;return Object(l.jsxs)("div",{className:"join_room_inputs_container",children:[!a&&Object(l.jsx)(E,{placeholder:"Enter meeting ID",value:t,changeHandler:function(e){n(e.target.value)}}),Object(l.jsx)(E,{placeholder:"Enter your Name",value:c,changeHandler:function(e){o(e.target.value)}})]})},x=function(e){var t=e.connectOnlyWithAudio,n=e.setConnectOnlyWithAudio;return Object(l.jsxs)("div",{className:"checkbox_container",children:[Object(l.jsx)("div",{className:"checkbox_connection",onClick:function(){n(!t)},children:t&&Object(l.jsx)("img",{className:"checkbox_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7ZHBCQAgCEUdpREaoY0boREaoREawQw8hNShFLz04EOHz8MU4OMKIgZKpkTQwrJG6fMNGoRMN52fjMvltI/ryWaJy01Kn7+5k6p3JqTJ5ACLFE2uuUiriezjywAgdcf6AfL4kwAAAABJRU5ErkJggg==",alt:"checkbox"})}),Object(l.jsx)("p",{className:"checkbox_container_paragraph",children:"Only audio"})]})},H=function(e){var t=e.errorMessage;return Object(l.jsx)("div",{className:"error_message_container",children:t&&Object(l.jsx)("p",{className:"error_message_paragraph",children:t})})},y=function(e){var t=e.buttonText,n=e.cancelButton,c=void 0!==n&&n,o=e.onClickHandler,a=c?"join_room_cancel_button":"join_room_success_button";return Object(l.jsx)("button",{onClick:o,className:a,children:t})},R=function(e){var t=e.handleJoinRoom,n=e.isRoomHost?"Host":"Join",c=Object(u.f)();return Object(l.jsxs)("div",{className:"join_room_buttons_container",children:[Object(l.jsx)(y,{buttonText:n,onClickHandler:t}),Object(l.jsx)(y,{buttonText:"Cancel",cancelButton:!0,onClickHandler:function(){c.push("/")}})]})},w=n(52),k=n.n(w),D="https://video-meeting-backend2022.herokuapp.com/api",U="https://video-meeting-backend2022.herokuapp.com/",B=function(){var e=Object(C.a)(Object(I.a)().mark((function e(t){var n;return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(D,"/room-exists/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(C.a)(Object(I.a)().mark((function e(){var t;return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(D,"/get-turn-credentials"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setConnectOnlyWithAudio:function(t){return e(function(e){return{type:b.SET_CONNECT_ONLY_WITH_AUDIO,onlyWithAudio:e}}(t))},setIdentityAction:function(t){return e(function(e){return{type:b.SET_IDENTITY,identity:e}}(t))},setRoomIdAction:function(t){return e(m(t))}}}))((function(e){var t=e.isRoomHost,n=e.setConnectOnlyWithAudio,c=e.connectOnlyWithAudio,a=e.setIdentityAction,i=e.setRoomIdAction,r=Object(o.useState)(""),s=Object(S.a)(r,2),d=s[0],j=s[1],O=Object(o.useState)(""),b=Object(S.a)(O,2),A=b[0],m=b[1],h=Object(o.useState)(null),v=Object(S.a)(h,2),f=v[0],p=v[1],g=Object(u.f)(),T=function(){var e=Object(C.a)(Object(I.a)().mark((function e(){return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(A),!t){e.next=5;break}y(),e.next=7;break;case 5:return e.next=7,E();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(Object(I.a)().mark((function e(){var t,n,c;return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(d);case 2:t=e.sent,n=t.roomExists,c=t.full,n?c?p("Meeting is full. Please try again later."):(i(d),g.push("/room")):p("Meeting not found. Check your meeting id.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){g.push("/room")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{roomIdValue:d,setRoomIdValue:j,nameValue:A,setNameValue:m,isRoomHost:t}),Object(l.jsx)(x,{setConnectOnlyWithAudio:n,connectOnlyWithAudio:c}),Object(l.jsx)(H,{errorMessage:f}),Object(l.jsx)(R,{handleJoinRoom:T,isRoomHost:t})]})})),Q=(n(111),Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setIsRoomHostAction:function(t){return e(A(t))}}}))((function(e){var t=e.setIsRoomHostAction,n=e.isRoomHost,c=Object(u.g)().search;return Object(o.useEffect)((function(){new URLSearchParams(c).get("host")&&t(!0)}),[]),Object(l.jsx)("div",{className:"join_room_page_container",children:Object(l.jsxs)("div",{className:"join_room_page_panel",children:[Object(l.jsx)(T,{isRoomHost:n}),Object(l.jsx)(Y,{})]})})}))),_=function(){return Object(l.jsx)("div",{className:"chat_label_container",children:Object(l.jsx)("p",{className:"chat_label_paragraph",children:"CHAT"})})},J=function(){return Object(l.jsx)("div",{className:"chat_section_container",children:Object(l.jsx)(_,{})})},M=function(){return Object(l.jsx)("div",{className:"participants_label_container",children:Object(l.jsx)("p",{className:"participants_label_paragraph",children:"PARTICIPANTS"})})},V=function(e){var t=e.identity,n=e.lastItem,c=e.participant,o=e.setActiveConversationAction,a=e.socketId;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"participants_paragraph",onClick:function(){c.socketId!==a&&o(c)},children:t}),!n&&Object(l.jsx)("span",{className:"participants_separator_line"})]})},P=Object(O.b)((function(e){return Object(g.a)({},e)}),(function(e){return{setActiveConversationAction:function(t){return e(function(e){return{type:b.SET_ACTIVE_CONVERSATION,activeConversation:e}}(t))}}}))((function(e){var t=e.participants,n=e.setActiveConversationAction,c=e.socketId;return Object(l.jsx)("div",{className:"participants_container",children:t.map((function(e,o){return Object(l.jsx)(V,{lastItem:t.length===o+1,participant:e,identity:e.identity,setActiveConversationAction:n,socketId:c},e.identity)}))})})),W=function(){return Object(l.jsxs)("div",{className:"participants_section_container",children:[Object(l.jsx)(M,{}),Object(l.jsx)(P,{})]})},K=n.p+"static/media/camera.b50348a3.svg",L=n.p+"static/media/cameraOff.a61d4a02.svg",X=n(28),z=n(74),Z={identity:"",isRoomHost:!1,connectOnlyWithAudio:!1,roomId:null,showOverlay:!0,participants:[],messages:[],activeConversation:null,directChatHistory:[],socketId:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SET_IS_ROOM_HOST:return Object(g.a)(Object(g.a)({},e),{},{isRoomHost:t.isRoomHost});case f.SET_CONNECT_ONLY_WITH_AUDIO:return Object(g.a)(Object(g.a)({},e),{},{connectOnlyWithAudio:t.onlyWithAudio});case f.SET_ROOM_ID:return Object(g.a)(Object(g.a)({},e),{},{roomId:t.roomId});case f.SET_IDENTITY:return Object(g.a)(Object(g.a)({},e),{},{identity:t.identity});case f.SET_SHOW_OVERLAY:return Object(g.a)(Object(g.a)({},e),{},{showOverlay:t.showOverlay});case f.SET_PARTICIPANTS:return Object(g.a)(Object(g.a)({},e),{},{participants:t.participants});case f.SET_MESSAGES:return Object(g.a)(Object(g.a)({},e),{},{messages:t.messages});case f.SET_ACTIVE_CONVERSATION:return Object(g.a)(Object(g.a)({},e),{},{activeConversation:t.activeConversation});case f.SET_DIRECT_CHAT_HISTORY:return Object(g.a)(Object(g.a)({},e),{},{directChatHistory:t.directChatHistory});case f.SET_SOCKET_ID:return Object(g.a)(Object(g.a)({},e),{},{socketId:t.socketId});default:return e}},F=Object(z.a)({reducer:q}),$=F,ee=n(77),te=function(e,t){var n=Object(X.a)($.getState().directChatHistory),c=n.find((function(t){return t.socketId===e}));if(c){var o={isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity},a=Object(g.a)(Object(g.a)({},c),{},{chatHistory:[].concat(Object(X.a)(c.chatHistory),[o])}),i=[].concat(Object(X.a)(n.filter((function(t){return t.socketId!==e}))),[a]);$.dispatch(v(i))}else{var r={socketId:e,chatHistory:[{isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity}]},s=[].concat(Object(X.a)(n),[r]);$.dispatch(v(s))}},ne=null,ce=function(){(ne=Object(ee.a)(U)).on("connect",(function(){var e;console.log("successfully connected with socket io server"),console.log(ne.id),$.dispatch((e=ne.id,{type:b.SET_SOCKET_ID,socketId:e}))})),ne.on("room-id",(function(e){var t=e.roomId;$.dispatch(m(t))})),ne.on("room-update",(function(e){var t=e.connectedUsers;$.dispatch({type:b.SET_PARTICIPANTS,participants:t})})),ne.on("conn-prepare",(function(e){var t=e.connUserSocketId;me(t,!1),ne.emit("conn-init",{connUserSocketId:t})})),ne.on("conn-signal",(function(e){he(e)})),ne.on("conn-init",(function(e){var t=e.connUserSocketId;me(t,!0)})),ne.on("user-disconnected",(function(e){ve(e)})),ne.on("direct-message",(function(e){!function(e){var t=e.isAuthor,n=e.receiverSocketId,c=e.authorSocketId;te(t?n:c,e)}(e)}))},oe=function(e,t){var n={identity:e,onlyAudio:t};ne.emit("create-new-room",n)},ae=function(e,t,n){var c={roomId:t,identity:e,onlyAudio:n};ne.emit("join-room",c)},ie=n(76),re=n.n(ie),se=null,ue=function(){var e=Object(C.a)(Object(I.a)().mark((function e(){var t,n;return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:return n=e.sent,null!==(t=n.token)&&void 0!==t&&t.iceServers&&(se=n.token.iceServers),e.abrupt("return",se);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le={audio:!0,video:{width:"480",height:"360"}},de={audio:!0,video:!1},je=function(){var e=Object(C.a)(Object(I.a)().mark((function e(t,n){var o,a,i,r=arguments;return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.length>2&&void 0!==r[2]?r[2]:null,a=r.length>3?r[3]:void 0,e.next=4,ue();case 4:i=a?de:le,navigator.mediaDevices.getUserMedia(i).then((function(e){console.log("successfuly received local stream"),fe(c=e),$.dispatch(h(!1)),t?oe(n,a):ae(n,o,a)})).catch((function(e){console.log("error occurred when trying to get an access to local stream"),console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Oe={},be=[],Ae=function(){var e=se;return e?{iceServers:[{urls:"stun:stun.l.google.com:19302"}].concat(Object(X.a)(e))}:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]})},me=function(e,t){var n=Ae();Oe[e]=new re.a({initiator:t,config:n,stream:c,channelName:"messenger"}),Oe[e].on("signal",(function(t){!function(e){ne.emit("conn-signal",e)}({signal:t,connUserSocketId:e})})),Oe[e].on("stream",(function(t){console.log("new stream came"),pe(t,e),be=[].concat(Object(X.a)(be),[t])})),Oe[e].on("data",(function(e){var t=JSON.parse(e);Te(t)}))},he=function(e){Oe[e.connUserSocketId].signal(e.signal)},ve=function(e){var t=e.socketId,n=document.getElementById(t),c=document.getElementById("".concat(t,"-video"));n&&c&&(c.srcObject.getTracks().forEach((function(e){return e.stop()})),c.srcObject=null,n.removeChild(c),n.parentNode.removeChild(n),Oe[t]&&Oe[t].destroy(),delete Oe[t])},fe=function(e){var t=document.getElementById("videos_portal");t.classList.add("videos_portal_styles");var n=document.createElement("div");n.classList.add("video_track_container");var c=document.createElement("video");c.autoplay=!0,c.muted=!0,c.srcObject=e,c.onloadedmetadata=function(){c.play()},n.appendChild(c),$.getState().connectOnlyWithAudio&&n.appendChild(ge()),t.appendChild(n)},pe=function(e,t){var n=document.getElementById("videos_portal"),c=document.createElement("div");c.id=t,c.classList.add("video_track_container");var o=document.createElement("video");o.autoplay=!0,o.srcObject=e,o.id="".concat(t,"-video"),o.onloadedmetadata=function(){o.play()},o.addEventListener("click",(function(){o.classList.contains("full_screen")?o.classList.remove("full_screen"):o.classList.add("full_screen")})),c.appendChild(o);var a=$.getState().participants.find((function(e){return e.socketId===t}));console.log(a),null!==a&&void 0!==a&&a.onlyAudio?c.appendChild(ge(a.identity)):c.style.position="static",n.appendChild(c)},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.createElement("div");t.classList.add("label_only_audio_container");var n=document.createElement("p");return n.classList.add("label_only_audio_text"),n.innerHTML="Only audio ".concat(e),t.appendChild(n),t},Te=function(e){var t=$.getState().messages;$.dispatch(function(e){return{type:b.SET_MESSAGES,messages:e}}([].concat(Object(X.a)(t),[e])))},Ie=function(){var e=Object(o.useState)(!1),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?L:K,className:"video_button_image",onClick:function(){var e;e=n,c.getVideoTracks()[0].enabled=!!e,a(!n)},alt:"cam"})})},Ce=function(){return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("button",{className:"video_button_end",onClick:function(){var e=window.location.origin;window.location.href=e},children:"Leave Room"})})},Se=n.p+"static/media/mic.c9c9788e.svg",Ee=n.p+"static/media/micOff.3a72f682.svg",Ne=function(){var e=Object(o.useState)(!1),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?Ee:Se,onClick:function(){var e;e=n,c.getAudioTracks()[0].enabled=!!e,a(!n)},className:"video_button_image",alt:"img"})})},xe=Object(O.b)((function(e){return Object(g.a)({},e)}))((function(e){var t=e.connectOnlyWithAudio;return Object(l.jsxs)("div",{className:"video_buttons_container",children:[Object(l.jsx)(Ne,{}),!t&&Object(l.jsx)(Ie,{}),Object(l.jsx)(Ce,{})]})})),He=function(){return Object(l.jsx)("div",{className:"video_section_container",children:Object(l.jsx)(xe,{})})},ye=function(e){var t=e.roomId;return Object(l.jsx)("div",{className:"room_label",children:Object(l.jsxs)("p",{className:"room_label_paragraph",children:["ID: ",t," "]})})},Re=function(){return Object(l.jsx)("div",{className:"overlay_container",children:Object(l.jsx)("div",{className:"loader"})})},we=(n(147),Object(O.b)((function(e){return Object(g.a)({},e)}))((function(e){var t=e.roomId,n=e.identity,c=e.isRoomHost,a=e.showOverlay,i=e.connectOnlyWithAudio;return Object(o.useEffect)((function(){if(c||t)je(c,n,t,i);else{var e=window.location.origin;window.location.href=e}}),[]),Object(l.jsxs)("div",{className:"room_container",children:[Object(l.jsx)(W,{}),Object(l.jsx)(He,{}),Object(l.jsx)(J,{}),Object(l.jsx)(ye,{roomId:t}),a&&Object(l.jsx)(Re,{})]})})));n(148);var ke=function(){return Object(o.useEffect)((function(){ce()}),[]),Object(l.jsx)(s.a,{children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/join-room",children:Object(l.jsx)(Q,{})}),Object(l.jsx)(u.a,{path:"/room",children:Object(l.jsx)(we,{})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(p,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O.a,{store:F,children:Object(l.jsx)(ke,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,n){},92:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.e673ed0f.chunk.js.map