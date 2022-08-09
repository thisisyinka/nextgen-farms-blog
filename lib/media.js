import React from 'react';
import { getStrapiURL } from './api';

export const getStrapiMedia = (media) => {
  const { url } = media.data.attributes;
  const imageURL = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageURL;
};
