import React from 'react';

const ImageList = (props) => {
  let images = ''
  for ( let i = 0; i < props.images.length; i++){
    images = props.images[i];
  }
  
  return(
    <div>Hi</div>
  );
};

export default ImageList;
