import React from 'react';

import "./card.css";

export default function MediaCard({img_path, name, description, handleClose}) {
  console.log(img_path);
  return (
      <div className="modal-main">
        { img_path !== "" ? 
          <div className="modal-media">
            <div className="modal-media-inner">
              <img alt={name} src={img_path} className="modal-image"></img>
            </div>
          </div>
         : null}
        <div className="modal-content">
          <h2>
            {name}
          </h2>
          <hr className="hr-modal"></hr>
          <p>
            {description}
          </p>
          <div className="modal-button-container">
            <button className="modal-button" onClick={handleClose}> Fermer </button>
          </div>
        </div>
      </div>
  );
}
