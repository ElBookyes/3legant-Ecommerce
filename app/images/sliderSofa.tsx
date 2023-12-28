import React from 'react';
import YourImage from '../images/heroSection.png';
import Image from 'next/image';

const SofaImage = () => {
  return (
    <div>
      <Image className='sofa-image' src={YourImage} alt="Descriptive Alt Text" width={311} height={304} layout='responsive' />
    </div>
  );
};

export default SofaImage;
