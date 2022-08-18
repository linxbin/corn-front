import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  List = '/task/list',
  Enable = '/task/enable',
  Disable = '/task/disable',
}

export interface changeStatusParams {
  id: number;
}

export function getListApi() {
  return defHttp.request({
    url: Api.List,
    method: 'GET',
  });
}

export function enable(params: changeStatusParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.Enable,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function disable(params: changeStatusParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.Disable,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
