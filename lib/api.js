import axios from 'axios';
//const instance = axios.create({baseURL: 'https://staging.mainteny.com'})
//axios.options({baseURL: 'https://staging.mainteny.com'})
//let instance;



async function send ({ method, path, data, token }) {
  try {
      // TO DO take the baseURL from process.env.API_BASE_URL
    const response = await axios({
      method,
      //baseURL: 'https://staging.mainteny.com',
      url: path,
      data,
      crossdomain: true,
      headers: {          
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    })
    return new Promise(resolve => resolve(response.data))
  } catch (error) {
    throw error.response.data
  }
}

export function post (path, data, token = null) {
  return send({ method: 'post', path, data, token })
}

export function put (path, data, token = null) {
  return send({ method: 'put', path, data, token })
}

export function del (path, token = null) {
  return send({ method: 'delete', path, token })
}

export function get (path, data = {}, token = null) {
  const params = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
  return send({
    method: 'get',
    path: `${path}${params ? '?' + params : ''}`,
    token
  })
}

// export const setAxiosInstance = () => {
//     instance = axios.create({baseURL: 'https://staging.mainteny.com'})
// }
