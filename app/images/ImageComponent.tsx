import React from 'react';

const ReusableImage = ({ src, alt, className, width, height, onClick, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
    />
  );
};

export default ReusableImage;
