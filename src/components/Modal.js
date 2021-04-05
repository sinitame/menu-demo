import '../modal.css';
import React from "react";

export const Modal = ({ show, bg_img_path, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
      <div className={showHideClassName}>
        <div class="bg-image" style={{ backgroundImage: `url(${bg_img_path})`}}></div>
        {children}
      </div>
  );
};
