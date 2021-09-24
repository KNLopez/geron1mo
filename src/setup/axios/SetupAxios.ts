export default function setupAxios(axios: any, store: any) {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  axios.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem('auth')

      if (token) {
        config.headers.Authorization = token
      }

      return config
    },
    (err: any) => {
      return Promise.reject(err)
    }
  )
}
