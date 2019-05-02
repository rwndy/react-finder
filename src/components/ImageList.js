import React from 'react';
import './index.css';
import ImageStyle from './ImageStyle';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageStyle key={image.id} image={image}/>
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;