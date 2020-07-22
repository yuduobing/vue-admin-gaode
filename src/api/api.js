/**   (>‿◠)✌ ☜(ˆ▽ˆ)
 * User: ydb/1510557673@qq.com
 * Date: 2020/7/13 10:42
 * Content:接口整合
 **/
import {get,post} from './request';

export function login(params) {
    return get(
        '/api/user/login',

        params
    )
}
//登陆用
export function login2(params) {
    return get(
        '/api/user/login2',
          params
    )
}
//获取菜单
export function hqcd(params) {
    return post(
        '/QYYZMY/ModuleController/getModule',
             params
    )
}
post()
