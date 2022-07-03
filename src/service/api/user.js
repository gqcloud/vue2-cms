import store from "@/store"
import request from "../request/request"
export const getUserInfo = () =>
  request({
    url: "/my/userinfo",
    headers: {
      Authorization: store.state.token
    }
  })

export const getMenus = () =>
  request({
    url: "/my/menus",
    headers: {
      Authorization: store.state.token
    }
  })

export const updateUserInfo = ({ id, username, nickname, email, user_pic }) =>
  request({
    url: "/my/userinfo",
    method: "put",
    data: {
      id,
      username,
      nickname,
      email,
      user_pic
    }
  })

export const updateUserAvatar = (avatar) =>
  request({
    url: "/my/update/avatar",
    method: "patch",
    data: {
      avatar
    }
  })

export const updatePwd = ({ old_pwd, new_pwd, re_pwd }) =>
  request({
    url: "/my/updatepwd",
    method: "patch",
    data: {
      old_pwd,
      new_pwd,
      re_pwd
    }
  })
