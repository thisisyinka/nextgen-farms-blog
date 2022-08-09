import qs from 'qs';
const axios = require('axios').default;

/**
 * Get strapi url from path
 * @param {string} path of the url
 * @returns {string} the full strapi URL
 */

export const getStrapiURL = (path = '') => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api'
  }${path}`;
};

/**
 * Helper function to make GET requests to Strapi endpoints
 * @param {string} path API route path
 * @param {Object} urlParamsObject - Params object that will be stringified
 * @param {Object} options - options to be passed to axios
 * @returns Parsed API call response
 */

export async function getAPI(path) {
  // const mergedOptions = {
  //   params: {
  //     'Content-Type': 'application/json',
  //   },
  //   ...options,
  // };

  try {
    //make api call
    const getURL = getStrapiURL(path);
    const response = await axios.get(getURL);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// export async function getAPI(path, urlParamsObject = {}, options = {}) {
//   //merge user and default options
//   const mergedOptions = {
//     params: {
//       'Content-Type': 'application/json',
//     },
//     ...options,
//   };

//   //Build the request URL
//   const queryString = qs.stringify(urlParamsObject);
//   const getURL = `${getStrapiURL(
//     `/api${path}${queryString ? queryString : ''}`,
//   )}`;

//   try {
//     //make api call
//     const response = axios.get(getURL, mergedOptions);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
