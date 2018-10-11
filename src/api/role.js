/**
 * Created by admin on 2018/10/9.
 */
import axios from '../config/axios'


/**
 * 保存
 * @param data
 * @returns {Promise.<TResult>}
 */
function save(data) {
    return axios.post('/api/role', data).then((response) => {
        return response.data;
    });
}


/**
 * 获取角色列表
 * @param page
 * @param size
 * @param data
 * @returns {*}
 */
function list(page, size, data) {
    return axios({
        url: "/api/role/list",
        method: 'post',
        params: {'page': page, 'size': size},
        data: data,
    }).then((response) => {
        return response.data;
    });
}

export default {
    save: save,
    list: list
}