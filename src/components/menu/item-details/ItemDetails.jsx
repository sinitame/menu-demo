import React from 'react';


export default function ItemDetails({ show, bg_img_path, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
      <div className={showHideClassName}>
        <div className="bg-image" style={{ backgroundImage: `url(${bg_img_path})`}}></div>
        {children}
      </div>
  );
};
