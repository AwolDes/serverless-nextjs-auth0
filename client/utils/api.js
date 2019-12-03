import rp from 'request-promise';

const createOptions = ({
  endpoint, data, method, token
}) => {
  console.log(`${process.env.API_ENDPOINT}/${endpoint}`);
  const payload = {
    uri: `${process.env.API_ENDPOINT}/${endpoint}`,
    method,
    json: true,
    headers: {
      'User-Agent': 'pearce-cap',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: data
  };

  if (token) payload.headers.Authorization = `Bearer ${token}`;
  return payload;
};

export const get = async (endpoint, token) => rp(
  createOptions({
    endpoint,
    method: 'GET',
    token,
  })
).catch(({ error }) => Promise.reject(error));

export const patch = async (endpoint, data, token) => rp(
  createOptions({
    endpoint,
    method: 'PATCH',
    data,
    token,
  })
).catch(({ error }) => Promise.reject(error));

export const post = async (endpoint, data, token) => rp(
  createOptions({
    endpoint,
    method: 'POST',
    data,
    token,
  })
).catch(({ error }) => Promise.reject(error));

export const httpDelete = async (endpoint, token) => rp(
  createOptions({
    endpoint,
    method: 'DELETE',
    token,
  })
).catch(({ error }) => Promise.reject(error));
