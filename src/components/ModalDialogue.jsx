import React, { useState , useEffect } from "react";
import './ModalDialogue.css'

export const ModalDialogue = ( { showModalDialogue , setShowModalDialogue } ) => {

    const closeBox = () => {
        setShowModalDialogue(false);
    }

  return (
   showModalDialogue && <div className="modal-dialogue-main">
      <div className="modal-dialogue-submain">
        <p className="modal-dialogue-child modal-dialogue-message">
          Do You Wanna Get Killed Slambo 🤨?
        </p>
        <button className="modal-dialogue-child modal-dialogue-button" onClick={closeBox}>
          No
        </button>
      </div>
    </div>
  );
}
