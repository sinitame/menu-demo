import React from 'react';

import "../modal.css";
import Button from "./Button";
import {ButtonSizes, ButtonTypes} from "./buttonTypes";

export default function MediaCard({img_path, name, description, handleClose}) {
  console.log(img_path)
  return (
      <div className="modal-main">
        <div className="modal-media">
          <div className="modal-media-inner">
            <img alt={name} src={img_path} className="modal-image"></img>
          </div>
        </div>
        <div className="modal-content">
          <h2>
            {name}
          </h2>
          <hr className="hr-modal"></hr>
          <p>
            {description}
          </p>
          <div className="button-container">
            <Button
                size={ButtonSizes.SMALL}
                label="Close"
                onClickHandler={handleClose}
                type={ButtonTypes.SECONDARY}
            />
          </div>
        </div>
      </div>
  );
}
