import React, { useEffect,useState } from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import RoomLabel from "./RoomLabel";
import { connect } from "react-redux";
import * as webRTCHandler from "../utils/webRTCHandler";
import Overlay from "./Overlay";
import ErrorPopup from "../Popup/ErrorPopup";
import "./RoomPage.css";


const RoomPage = ({
  roomId,
  identity,
  isRoomHost,
  showOverlay,
  connectOnlyWithAudio,
  valid,
  showChat,
  showParticipants
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!isRoomHost && !roomId) {
      const siteUrl = window.location.origin;
      window.location.href = siteUrl;
    } else {
     webRTCHandler.GetLocalPreviewAndInitRoomConnection(
        isRoomHost,
        identity,
        roomId,
        connectOnlyWithAudio
      )
      console.log(valid);  
    }
    // eslint-disable-next-line
  }, []);

useEffect(()=>{
  if(!valid && !connectOnlyWithAudio){
    setShow(true)
  }
},[valid,connectOnlyWithAudio])


window.addEventListener('popstate', function(){
  		window.location.reload()
  	}, false);
  
 
  return (
    <div className="room_container">
      { showParticipants && <ParticipantsSection />}
      <ErrorPopup isOpen={show}/>
      <VideoSection roomId={roomId}  />
      {showChat && <ChatSection />}
      {/* <RoomLabel roomId={roomId} /> */}
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
