import request from '@/utils/request'

// 列表
export function dataList(params) {
  return request.get('/helps', {
    params
  })
}

// 添加 / 修改
export function addOrUpdate({ id, ...data }) {
  let method = 'POST'
  let url = '/helps'

  if (id > 0) {
    method = 'PUT'
    url += `/${id}`
    data.id = id
  }

  return request({ url, method, data })
}
// 删除
export function deleteData(id) {
  return request.delete(`/helps/${id}`)
}
