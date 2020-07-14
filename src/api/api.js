/**   (>‿◠)✌ ☜(ˆ▽ˆ)
 * User: ydb/1510557673@qq.com
 * Date: 2020/7/13 10:42
 * Content:接口整合
 **/
import request from './request'

export function login(params) {
    return request.get({
        url: '/api/user/login',

        params
    })
}
