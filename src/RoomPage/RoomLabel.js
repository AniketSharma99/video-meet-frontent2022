import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RoomLabel = ({ roomId }) => {
  const copyID = `https://eclectic-buttercream-298f4c.netlify.app/join-room?id=${roomId}`
  return (
    <div className="room_label">
      <p className="room_label_paragraph">ID: {`https://eclectic-buttercream-298f4c.netlify.app/join-room?id=${roomId}`} 
      <CopyToClipboard text={copyID}>
        <button>Copy ID</button>
      </CopyToClipboard></p>
    </div>
  );
};

export default RoomLabel;

// https://eclectic-buttercream-298f4c.netlify.app/join-room?id=${roomId}