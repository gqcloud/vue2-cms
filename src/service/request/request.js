import axios from "axios"
import { BASE_URL, BASE_TIME } from "./config"
const request = axios.create({
  baseURL: BASE_URL,
  timeout: BASE_TIME
})
export default request
