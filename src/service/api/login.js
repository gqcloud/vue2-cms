import request from "../request/request"

export const register = () =>
  request({
    url: "/api/reg",
    method: "post",
    data: {
      username: "adminss",
      password: "123456",
      repassword: "123456"
    }
  })
