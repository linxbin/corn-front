import { defHttp } from '/@/utils/http/axios';

enum Api {
  BaseUrl = '/tasks',
}

export function getListApi() {
  return defHttp.request({
    url: Api.BaseUrl,
    method: 'GET',
  });
}
