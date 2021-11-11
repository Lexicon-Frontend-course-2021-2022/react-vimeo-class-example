/* ============================================================================
 * Imports
 * ========================================================================= */
import { Vimeo } from 'vimeo';
import secrets from './VIMEO_API_SECRETS';

/* ============================================================================
 * Initiate vimeo client
 * ========================================================================= */

const client = new Vimeo(
  secrets.client_id,
  secrets.client_secret,
  secrets.access_token
);

/* ============================================================================
 * Search video
 * ========================================================================= */
const search = async term => {
  return new Promise((resolve, reject) => {
    client.request(
      {
        method: 'GET',
        path: '/videos',
        query: {
          per_page: 5,
          query: term
        }
      },
      (error, body, status_code, headers) => {
        if (error) {
          reject(error);
        }
        resolve(body);
      }
    );
  }

  )
};

search('heilung').then(data => console.log(data));

const exports = { search };
/* ============================================================================
 * Exports
 * ========================================================================= */
export default exports;