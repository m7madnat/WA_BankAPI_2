import axios from 'axios';

// let myUrl = 'http://localhost:5001/api';

// if (process.env.NODE_ENV === 'production') {
//   myUrl = 'api';
// }
// export const Api = axios.create({
//   baseURL: myUrl,
// });

export function Api(options = {}) {
  const { headers = {} } = options;

  const url =
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5001/api";

  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
}
