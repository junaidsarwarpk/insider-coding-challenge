import React from "react";
import Play from "../images/media-play.svg"; //Importing the images is better since webpack will cache the images after building
import Pause from "../images/media-pause.svg";

export const GameActions = (props) => <div className="game_actions">
    {
        props.isPlaying && <img alt="Pause button" src={Pause} width="30" />
    }
    {
        !props.isPlaying && <img alt="Play button" src={Play} width="30" /> 
    }
    
    {/* Fallback width is better than CSS width */}
    
</div>