(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,n){},137:function(e,t){},139:function(e,t){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var c,a=n(1),o=n.n(a),r=n(43),i=n.n(r),s=(n(83),n(35)),u=n(4),l=n(0),d=function(e){var t=e.createRoomButton,n=void 0!==t&&t,c=e.buttonText,a=e.onClickHandler,o=n?"create_room_button":"join_room_button";return Object(l.jsx)("button",{className:o,onClick:a,children:c})},j=function(){var e=Object(u.f)();return Object(l.jsxs)("div",{className:"connecting_buttons_container",children:[Object(l.jsx)(d,{buttonText:"Join a meeting",onClickHandler:function(){e.push("/join-room")}}),Object(l.jsx)(d,{createRoomButton:!0,buttonText:"Host a meeting",onClickHandler:function(){e.push("/join-room?host=true")}})]})},O=n(10),b={SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",SET_CONNECT_ONLY_WITH_AUDIO:"SET_CONNECT_ONLY_WITH_AUDIO",SET_IDENTITY:"SET_IDENTITY",SET_ROOM_ID:"SET_ROOM_ID",SET_SHOW_OVERLAY:"SET_SHOW_OVERLAY",SET_PARTICIPANTS:"SET_PARTICIPANTS",SET_MESSAGES:"SET_MESSAGES",SET_ACTIVE_CONVERSATION:"SET_ACTIVE_CONVERSATION",SET_DIRECT_CHAT_HISTORY:"SET_DIRECT_CHAT_HISTORY",SET_SOCKET_ID:"SET_SOCKET_ID",SET_VALID:"SET_VALID"},m=function(e){return{type:b.SET_IS_ROOM_HOST,isRoomHost:e}},p=function(e){return{type:b.SET_ROOM_ID,roomId:e}},f=function(e){return{type:b.SET_SHOW_OVERLAY,showOverlay:e}},v=function(e){return{type:"SET_VALID",text:e}},h=function(e){return{type:b.SET_DIRECT_CHAT_HISTORY,directChatHistory:e}},g=b,A=(n(93),Object(O.b)(null,(function(e){return{setIsRoomHostAction:function(t){return e(m(t))}}}))((function(e){var t=e.setIsRoomHostAction;return Object(a.useEffect)((function(){t(!1)}),[]),Object(l.jsx)("div",{className:"introduction_page_container",children:Object(l.jsxs)("div",{className:"introduction_page_panel",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",className:"introduction_page_image",alt:"img"}),Object(l.jsx)(j,{})]})})}))),_=n(2),x=function(e){var t=e.isRoomHost?"Host meeting":"Join meeting";return Object(l.jsx)("p",{className:"join_room_title",children:t})},y=n(6),T=n(20),E=n(13),S=function(e){var t=e.placeholder,n=e.value,c=e.changeHandler;return Object(l.jsx)("input",{value:n,onChange:c,className:"join_room_input",placeholder:t})},I=function(e){var t=e.roomIdValue,n=e.setRoomIdValue,c=e.nameValue,a=e.setNameValue,o=e.isRoomHost;return Object(l.jsxs)("div",{className:"join_room_inputs_container",children:[!o&&Object(l.jsx)(S,{placeholder:"Enter meeting ID",value:t,changeHandler:function(e){n(e.target.value)}}),Object(l.jsx)(S,{placeholder:"Enter your Name",value:c,changeHandler:function(e){a(e.target.value)}})]})},C=function(e){var t=e.connectOnlyWithAudio,n=e.setConnectOnlyWithAudio;return Object(l.jsxs)("div",{className:"checkbox_container",children:[Object(l.jsx)("div",{className:"checkbox_connection",onClick:function(){n(!t)},children:t&&Object(l.jsx)("img",{className:"checkbox_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7ZHBCQAgCEUdpREaoY0boREaoREawQw8hNShFLz04EOHz8MU4OMKIgZKpkTQwrJG6fMNGoRMN52fjMvltI/ryWaJy01Kn7+5k6p3JqTJ5ACLFE2uuUiriezjywAgdcf6AfL4kwAAAABJRU5ErkJggg==",alt:"checkbox"})}),Object(l.jsx)("p",{className:"checkbox_container_paragraph",children:"Only audio"})]})},N=function(e){var t=e.errorMessage;return Object(l.jsx)("div",{className:"error_message_container",children:t&&Object(l.jsx)("p",{className:"error_message_paragraph",children:t})})},k=function(e){var t=e.buttonText,n=e.cancelButton,c=void 0!==n&&n,a=e.onClickHandler,o=c?"join_room_cancel_button":"join_room_success_button";return Object(l.jsx)("button",{onClick:a,className:o,children:t})},H=function(e){var t=e.handleJoinRoom,n=e.isRoomHost?"Host":"Join",c=Object(u.f)();return Object(l.jsxs)("div",{className:"join_room_buttons_container",children:[Object(l.jsx)(k,{buttonText:n,onClickHandler:t}),Object(l.jsx)(k,{buttonText:"Cancel",cancelButton:!0,onClickHandler:function(){c.push("/")}})]})},w=n(52),R=n.n(w),M="https://video-meeting-backend2022.herokuapp.com/api",V="https://video-meeting-backend2022.herokuapp.com/",B=function(){var e=Object(T.a)(Object(y.a)().mark((function e(t){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M,"/room-exists/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(T.a)(Object(y.a)().mark((function e(){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M,"/get-turn-credentials"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=Object(O.b)((function(e){return Object(_.a)({},e)}),(function(e){return{setConnectOnlyWithAudio:function(t){return e(function(e){return{type:b.SET_CONNECT_ONLY_WITH_AUDIO,onlyWithAudio:e}}(t))},setIdentityAction:function(t){return e(function(e){return{type:b.SET_IDENTITY,identity:e}}(t))},setRoomIdAction:function(t){return e(p(t))}}}))((function(e){var t=e.isRoomHost,n=e.setConnectOnlyWithAudio,c=e.connectOnlyWithAudio,o=e.setIdentityAction,r=e.setRoomIdAction,i=Object(a.useState)(""),s=Object(E.a)(i,2),d=s[0],j=s[1],O=Object(a.useState)(""),b=Object(E.a)(O,2),m=b[0],p=b[1],f=Object(a.useState)(null),v=Object(E.a)(f,2),h=v[0],g=v[1],A=Object(u.f)(),_=function(){var e=Object(T.a)(Object(y.a)().mark((function e(){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(m),!t){e.next=5;break}S(),e.next=7;break;case 5:return e.next=7,x();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(T.a)(Object(y.a)().mark((function e(){var t,n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(d);case 2:t=e.sent,n=t.roomExists,c=t.full,n?c?g("Meeting is full. Please try again later."):(r(d),A.push("/room")):g("Meeting not found. Check your meeting id.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){A.push("/room")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(I,{roomIdValue:d,setRoomIdValue:j,nameValue:m,setNameValue:p,isRoomHost:t}),Object(l.jsx)(C,{setConnectOnlyWithAudio:n,connectOnlyWithAudio:c}),Object(l.jsx)(N,{errorMessage:h}),Object(l.jsx)(H,{handleJoinRoom:_,isRoomHost:t})]})})),J=(n(112),Object(O.b)((function(e){return Object(_.a)({},e)}),(function(e){return{setIsRoomHostAction:function(t){return e(m(t))}}}))((function(e){var t=e.setIsRoomHostAction,n=e.isRoomHost,c=Object(u.g)().search;return Object(a.useEffect)((function(){new URLSearchParams(c).get("host")&&t(!0)}),[]),Object(l.jsx)("div",{className:"join_room_page_container",children:Object(l.jsxs)("div",{className:"join_room_page_panel",children:[Object(l.jsx)(x,{isRoomHost:n}),Object(l.jsx)(D,{})]})})}))),G=function(){return Object(l.jsx)("div",{className:"chat_label_container",children:Object(l.jsx)("p",{className:"chat_label_paragraph",children:"CHAT"})})},U=function(e){var t=e.author,n=e.content,c=e.sameAuthor,a=e.messageCreatedByMe,o=a?"message_align_right":"message_align_left",r=a?"You":t,i=a?"message_right_styles":"message_left_styles";return Object(l.jsxs)("div",{className:"message_container ".concat(o),children:[!c&&Object(l.jsx)("p",{className:"message_title",children:r}),Object(l.jsx)("p",{className:"message_content ".concat(i),children:n})]})},P=Object(O.b)((function(e){return Object(_.a)({},e)}))((function(e){var t=e.messages;return Object(l.jsx)("div",{className:"messages_container",children:t.map((function(e,n){var c=n>0&&e.identity===t[n-1].identity;return Object(l.jsx)(U,{author:e.identity,content:e.content,sameAuthor:c,messageCreatedByMe:e.messageCreatedByMe},"".concat(e.content).concat(n))}))})})),Y=n.p+"static/media/sendMessageButton.9add4f6d.svg",Q=n(29),W=n(74),F={identity:"",isRoomHost:!1,connectOnlyWithAudio:!1,roomId:null,showOverlay:!0,participants:[],messages:[],activeConversation:null,directChatHistory:[],socketId:null,valid:!0},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SET_IS_ROOM_HOST:return Object(_.a)(Object(_.a)({},e),{},{isRoomHost:t.isRoomHost});case g.SET_CONNECT_ONLY_WITH_AUDIO:return Object(_.a)(Object(_.a)({},e),{},{connectOnlyWithAudio:t.onlyWithAudio});case g.SET_ROOM_ID:return Object(_.a)(Object(_.a)({},e),{},{roomId:t.roomId});case g.SET_IDENTITY:return Object(_.a)(Object(_.a)({},e),{},{identity:t.identity});case g.SET_SHOW_OVERLAY:return Object(_.a)(Object(_.a)({},e),{},{showOverlay:t.showOverlay});case"SET_VALID":return Object(_.a)(Object(_.a)({},e),{},{valid:t.text});case g.SET_PARTICIPANTS:return Object(_.a)(Object(_.a)({},e),{},{participants:t.participants});case g.SET_MESSAGES:return Object(_.a)(Object(_.a)({},e),{},{messages:t.messages});case g.SET_ACTIVE_CONVERSATION:return Object(_.a)(Object(_.a)({},e),{},{activeConversation:t.activeConversation});case g.SET_DIRECT_CHAT_HISTORY:return Object(_.a)(Object(_.a)({},e),{},{directChatHistory:t.directChatHistory});case g.SET_SOCKET_ID:return Object(_.a)(Object(_.a)({},e),{},{socketId:t.socketId});default:return e}},z=Object(W.a)({reducer:q}),Z=z,K=n(78),X=function(e,t){var n=Object(Q.a)(Z.getState().directChatHistory),c=n.find((function(t){return t.socketId===e}));if(c){var a={isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity},o=Object(_.a)(Object(_.a)({},c),{},{chatHistory:[].concat(Object(Q.a)(c.chatHistory),[a])}),r=[].concat(Object(Q.a)(n.filter((function(t){return t.socketId!==e}))),[o]);Z.dispatch(h(r))}else{var i={socketId:e,chatHistory:[{isAuthor:t.isAuthor,messageContent:t.messageContent,identity:t.identity}]},s=[].concat(Object(Q.a)(n),[i]);Z.dispatch(h(s))}},$=null,ee=function(){($=Object(K.a)(V)).on("connect",(function(){var e;console.log("successfully connected with socket io server"),console.log($.id),Z.dispatch((e=$.id,{type:b.SET_SOCKET_ID,socketId:e}))})),$.on("room-id",(function(e){var t=e.roomId;Z.dispatch(p(t))})),$.on("room-update",(function(e){var t=e.connectedUsers;Z.dispatch({type:b.SET_PARTICIPANTS,participants:t})})),$.on("conn-prepare",(function(e){var t=e.connUserSocketId;Oe(t,!1),$.emit("conn-init",{connUserSocketId:t})})),$.on("conn-signal",(function(e){be(e)})),$.on("conn-init",(function(e){var t=e.connUserSocketId;Oe(t,!0)})),$.on("user-disconnected",(function(e){me(e)})),$.on("direct-message",(function(e){!function(e){var t=e.isAuthor,n=e.receiverSocketId,c=e.authorSocketId;X(t?n:c,e)}(e)}))},te=function(e,t){var n={identity:e,onlyAudio:t};$.emit("create-new-room",n)},ne=function(e,t,n){var c={roomId:t,identity:e,onlyAudio:n};$.emit("join-room",c)},ce=n(76),ae=n.n(ce),oe=null,re=function(){var e=Object(T.a)(Object(y.a)().mark((function e(){var t,n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return n=e.sent,null!==(t=n.token)&&void 0!==t&&t.iceServers&&(oe=n.token.iceServers),e.abrupt("return",oe);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie={audio:!0,video:{width:"480",height:"360"}},se={audio:!0,video:!1},ue=function(){var e=Object(T.a)(Object(y.a)().mark((function e(t,n){var a,o,r,i=arguments;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3?i[3]:void 0,e.next=4,re();case 4:r=o?se:ie,navigator.mediaDevices.getUserMedia(r).then((function(e){console.log("successfuly received local stream"),pe(c=e),Z.dispatch(f(!1)),t?te(n,o):ne(n,a,o)})).catch((function(e){console.log(e),Z.dispatch(v(!1))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le={},de=[],je=function(){var e=oe;return e?{iceServers:[{urls:"stun:stun.l.google.com:19302"}].concat(Object(Q.a)(e))}:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]})},Oe=function(e,t){var n=je();le[e]=new ae.a({initiator:t,config:n,stream:c,channelName:"messenger"}),le[e].on("signal",(function(t){!function(e){$.emit("conn-signal",e)}({signal:t,connUserSocketId:e})})),le[e].on("stream",(function(t){console.log("new stream came"),fe(t,e),de=[].concat(Object(Q.a)(de),[t])})),le[e].on("data",(function(e){var t=JSON.parse(e);Ae(t)}))},be=function(e){le[e.connUserSocketId].signal(e.signal)},me=function(e){var t=e.socketId,n=document.getElementById(t),c=document.getElementById("".concat(t,"-video"));n&&c&&(c.srcObject.getTracks().forEach((function(e){return e.stop()})),c.srcObject=null,n.removeChild(c),n.parentNode.removeChild(n),le[t]&&le[t].destroy(),delete le[t])},pe=function(e){var t=document.getElementById("videos_portal");t.classList.add("videos_portal_styles");var n=document.createElement("div");n.classList.add("video_track_container");var c=document.createElement("video");c.autoplay=!0,c.muted=!0,c.srcObject=e,c.onloadedmetadata=function(){c.play()},n.appendChild(c),Z.getState().connectOnlyWithAudio&&n.appendChild(ve()),t.appendChild(n)},fe=function(e,t){var n=document.getElementById("videos_portal"),c=document.createElement("div");c.id=t,c.classList.add("video_track_container");var a=document.createElement("video");a.autoplay=!0,a.srcObject=e,a.id="".concat(t,"-video"),a.onloadedmetadata=function(){a.play()},a.addEventListener("click",(function(){a.classList.contains("full_screen")?a.classList.remove("full_screen"):a.classList.add("full_screen")})),c.appendChild(a);var o=Z.getState().participants.find((function(e){return e.socketId===t}));console.log(o),null!==o&&void 0!==o&&o.onlyAudio?c.appendChild(ve(o.identity)):c.style.position="static",n.appendChild(c)},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.createElement("div");t.classList.add("label_only_audio_container");var n=document.createElement("p");return n.classList.add("label_only_audio_text"),n.innerHTML="Only audio ".concat(e),t.appendChild(n),t},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ge(e?c:t)},ge=function(e){for(var t in le)for(var n in le[t].streams[0].getTracks())for(var c in e.getTracks())if(le[t].streams[0].getTracks()[n].kind===e.getTracks()[c].kind){le[t].replaceTrack(le[t].streams[0].getTracks()[n],e.getTracks()[c],le[t].streams[0]);break}},Ae=function(e){var t=Z.getState().messages;Z.dispatch(function(e){return{type:b.SET_MESSAGES,messages:e}}([].concat(Object(Q.a)(t),[e])))},_e=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],o=function(){n.length>0&&(!function(e){var t=Z.getState().identity;Ae({content:e,identity:t,messageCreatedByMe:!0});var n={content:e,identity:t},c=JSON.stringify(n);for(var a in le)le[a].send(c)}(n),c(""))};return Object(l.jsxs)("div",{className:"new_message_container",children:[Object(l.jsx)("input",{className:"new_message_input",value:n,onChange:function(e){c(e.target.value)},placeholder:"Type your message ...",type:"text",onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),o())}}),Object(l.jsx)("img",{className:"new_message_button",src:Y,onClick:o,alt:"img"})]})},xe=function(){return Object(l.jsxs)("div",{className:"chat_section_container",children:[Object(l.jsx)(G,{}),Object(l.jsx)(P,{}),Object(l.jsx)(_e,{})]})},ye=function(){return Object(l.jsx)("div",{className:"participants_label_container",children:Object(l.jsx)("p",{className:"participants_label_paragraph",children:"PARTICIPANTS"})})},Te=function(e){var t=e.identity,n=e.lastItem,c=e.participant,a=e.setActiveConversationAction,o=e.socketId;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"participants_paragraph",onClick:function(){c.socketId!==o&&a(c)},children:t}),!n&&Object(l.jsx)("span",{className:"participants_separator_line"})]})},Ee=Object(O.b)((function(e){return Object(_.a)({},e)}),(function(e){return{setActiveConversationAction:function(t){return e(function(e){return{type:b.SET_ACTIVE_CONVERSATION,activeConversation:e}}(t))}}}))((function(e){var t=e.participants,n=e.setActiveConversationAction,c=e.socketId;return Object(l.jsx)("div",{className:"participants_container",children:t.map((function(e,a){return Object(l.jsx)(Te,{lastItem:t.length===a+1,participant:e,identity:e.identity,setActiveConversationAction:n,socketId:c},e.identity)}))})})),Se=function(){return Object(l.jsxs)("div",{className:"participants_section_container",children:[Object(l.jsx)(ye,{}),Object(l.jsx)(Ee,{})]})},Ie=n.p+"static/media/camera.b50348a3.svg",Ce=n.p+"static/media/cameraOff.a61d4a02.svg",Ne=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],o=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?Ce:Ie,className:"video_button_image",onClick:function(){var e;e=n,c.getVideoTracks()[0].enabled=!!e,o(!n)},alt:"cam"})})},ke=function(){return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("button",{className:"video_button_end",onClick:function(){var e=window.location.origin;window.location.href=e},children:"Leave Room"})})},He=n.p+"static/media/mic.c9c9788e.svg",we=n.p+"static/media/micOff.3a72f682.svg",Re=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],o=t[1];return Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:n?we:He,onClick:function(){var e;e=n,c.getAudioTracks()[0].enabled=!!e,o(!n)},className:"video_button_image",alt:"img"})})},Me=n.p+"static/media/switchToScreenSharing.900d9338.svg",Ve=function(e){var t=e.stream,n=Object(a.useRef)();return Object(a.useEffect)((function(){var e=n.current;e.srcObject=t,e.onloadedmetadata=function(){e.play()}}),[t]),Object(l.jsx)("div",{className:"local_screen_share_preview",children:Object(l.jsx)("video",{muted:!0,autoPlay:!0,ref:n})})},Be={audio:!1,video:!0},Le=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),r=Object(E.a)(o,2),i=r[0],s=r[1],u=function(){var e=Object(T.a)(Object(y.a)().mark((function e(){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=14;break}return t=null,e.prev=2,e.next=5,navigator.mediaDevices.getDisplayMedia(Be);case 5:t=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error occurred when trying to get an access to screen share stream");case 11:t&&(s(t),he(n,t),c(!0)),e.next=18;break;case 14:he(n),c(!1),i.getTracks().forEach((function(e){return e.stop()})),s(null);case 18:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"video_button_container",children:Object(l.jsx)("img",{src:Me,onClick:u,className:"video_button_image",alt:"img"})}),n&&Object(l.jsx)(Ve,{stream:i})]})},De=Object(O.b)((function(e){return Object(_.a)({},e)}))((function(e){var t=e.connectOnlyWithAudio;return Object(l.jsxs)("div",{className:"video_buttons_container",children:[Object(l.jsx)(Re,{}),!t&&Object(l.jsx)(Ne,{}),Object(l.jsx)(ke,{}),!t&&Object(l.jsx)(Le,{})]})})),Je=function(){return Object(l.jsx)("div",{className:"video_section_container",children:Object(l.jsx)(De,{})})},Ge=n(77),Ue=function(e){var t=e.roomId;return Object(l.jsx)("div",{className:"room_label",children:Object(l.jsxs)("p",{className:"room_label_paragraph",children:["ID: ",t,Object(l.jsx)(Ge.CopyToClipboard,{text:t,children:Object(l.jsx)("button",{children:"Copy ID"})})]})})},Pe=function(){return Object(l.jsx)("div",{className:"overlay_container",children:Object(l.jsx)("div",{className:"loader"})})},Ye=(n(151),function(e){var t=e.isOpen;return Object(l.jsx)("div",{className:"popupOuter ".concat(t?"active":""),children:Object(l.jsx)("div",{className:"confirmationPopupContainer",children:Object(l.jsxs)("div",{className:"popupBody",children:[Object(l.jsxs)("p",{className:"popupText",children:[" ",Object(l.jsx)("b",{children:"Error occurred when trying to get an access to your Audio or Video devices"}),". Please get back to home page"]}),Object(l.jsx)("div",{className:"popupBtnGrp",children:Object(l.jsx)("button",{style:{zIndex:"10000000000000"},type:"btn",onClick:function(){window.location.href="https://eclectic-buttercream-298f4c.netlify.app",console.log("click")},alt:"btn",className:"btn-blue",children:"Continue"})})]})})})}),Qe=(n(152),Object(O.b)((function(e){return Object(_.a)({},e)}))((function(e){var t=e.roomId,n=e.identity,c=e.isRoomHost,o=e.showOverlay,r=e.connectOnlyWithAudio,i=e.valid,s=Object(a.useState)(!1),u=Object(E.a)(s,2),d=u[0],j=u[1];return Object(a.useEffect)((function(){if(c||t)ue(c,n,t,r),console.log(i);else{var e=window.location.origin;window.location.href=e}}),[]),Object(a.useEffect)((function(){i||r||j(!0)}),[i,r]),Object(l.jsxs)("div",{className:"room_container",children:[Object(l.jsx)(Se,{}),Object(l.jsx)(Ye,{isOpen:d}),Object(l.jsx)(Je,{}),Object(l.jsx)(xe,{}),Object(l.jsx)(Ue,{roomId:t}),o&&Object(l.jsx)(Pe,{})]})})));n(153);var We=function(){return Object(a.useEffect)((function(){ee()}),[]),Object(l.jsx)(s.a,{children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/join-room",children:Object(l.jsx)(J,{})}),Object(l.jsx)(u.a,{path:"/room",children:Object(l.jsx)(Qe,{})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(A,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O.a,{store:z,children:Object(l.jsx)(We,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,n){},93:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.99b2cc06.chunk.js.map