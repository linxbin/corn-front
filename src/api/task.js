import request from '@/utils/request'

const api = {
  list: '/task/list'
}

export function getTaskList (parameter) {
  return request({
    url: api.list,
    method: 'get',
    params: parameter
  })
}
