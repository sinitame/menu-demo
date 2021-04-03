import '../modal.css';
import React from "react";
import MediaCard from "./Card";

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        <MediaCard handleClose={handleClose}/>
    </div>
  );
};