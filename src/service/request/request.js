import router from "@/router"
import store from "@/store"
import axios from "axios"
import { BASE_URL, BASE_TIME } from "./config"
const request = axios.create({
  baseURL: BASE_URL,
  timeout: BASE_TIME
})
// 白名单: 不需要携带token的api地址
const whiteAPIList = ["/api/reg", "/api/login"]
request.interceptors.request.use(
  (config) => {
    if (!whiteAPIList.includes(config.url)) {
      config.headers.Authorization = store.state.token
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
request.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    if (err.response.status === 401) {
      store.commit("updateToken", "")
      router.push("/login")
    }
    return Promise.reject(err)
  }
)
export default request
