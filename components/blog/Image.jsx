import React from 'react';
import NextImage from 'next/image';
import { getStrapiMedia } from '../../lib/media';

const Image = ({ image }) => {
  const { width, height, alternativeText, caption } = image.data;

  return (
    <NextImage
      layout='responsive'
      objectFit='contain'
      width={width || '100%'}
      height={height || '100%'}
      alt={alternativeText || caption || ''}
      src={getStrapiMedia(image)}
    />
  );
};

export default Image;
