import axios from '../config/axios'


/**
 * 获取项目列表
 * @param page
 * @param size
 * @param data
 * @returns {*}
 */
function list(page, size, data) {
    return axios({
        url: "/api/project/list",
        method: 'post',
        params: {'page': page, 'size': size},
        data: data,
    }).then((response) => {
        return response.data;
    });
}


/**
 * 保存
 * @param data
 * @returns {Promise.<TResult>}
 */
function save(data) {
    return axios.post('/api/project', data).then((response) => {
        return response.data;
    });
}


/**
 * 删除项目
 * @param id
 * @returns {Promise.<TResult>}
 */
function del(id) {
    return axios.delete('/api/project/' + id).then((response) => {
        return response.data;
    });
}

export default {
    list: list,
    save: save,
    del: del
}

