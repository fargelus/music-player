import React from 'react';


const AudioControls = props => {
  return (
    <audio autoPlay controls src={props.song} className={props.className}>
    </audio>
  );
}


export default AudioControls;
