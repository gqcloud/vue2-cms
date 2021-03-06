import request from "../request/request"

export const register = ({ username, password, repassword }) =>
  request({
    url: "/api/reg",
    method: "post",
    data: {
      username,
      password,
      repassword
    }
  })

export const login = ({ username, password }) =>
  request({
    url: "/api/login",
    method: "post",
    data: {
      username,
      password
    }
  })
