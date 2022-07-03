import request from "../request/request"

export const getArticle = () =>
  request({
    url: "/my/cate/list"
  })

export const addArticle = ({ cate_name, cate_alias }) =>
  request({
    url: "/my/cate/add",
    method: "post",
    data: {
      cate_name,
      cate_alias
    }
  })
