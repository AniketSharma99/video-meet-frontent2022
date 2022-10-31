import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RoomLabel = ({ roomId }) => {
  return (
    <div className="room_label">
      <p className="room_label_paragraph">ID: {roomId} 
      <CopyToClipboard text={roomId}>
        <button>Copy ID</button>
      </CopyToClipboard></p>
    </div>
  );
};

export default RoomLabel;
