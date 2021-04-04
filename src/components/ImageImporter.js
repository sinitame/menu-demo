import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export default Images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  