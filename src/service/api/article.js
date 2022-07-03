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

export const updateArticle = ({ id, cate_name, cate_alias }) =>
  request({
    url: "/my/cate/info",
    method: "put",
    data: {
      id,
      cate_name,
      cate_alias
    }
  })

export const deleteArticle = (id) =>
  request({
    url: `/my/cate/del?id=${id}`,
    method: "delete"
  })
