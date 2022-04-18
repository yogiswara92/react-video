import React from "react";
import "./style.css";
import {Player} from 'video-react';
import "./player.css";

export default function App() {
  // referensi:https://video-react.js.org/
  // https://react-pdf.org
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
    
      
  );
}
