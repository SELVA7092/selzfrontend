import { useCookies } from 'react-cookie'

export const storeToken = (token) => {
    // Set the token cookie with an expiration date (e.g., 1 day)
  document.cookie = `authToken=${token}; path=/; max-age=${24 * 60 * 60}`;
  console.log(document.cookie);
}

export const getToken = () => {
  // Retrieve the token from cookies
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith('authToken=')) {
      return cookie.substring('authToken='.length, cookie.length);
    }
  }
  return null; 
}

export const clearToken = () => {
  // Clear the token by setting the cookie expiration to the past
  document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
}

