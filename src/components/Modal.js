import '../modal.css';
import React from "react";

export const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        <div class="bg-image"></div>
        {children}
    </div>
  );
};