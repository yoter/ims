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
    return axios.post('/api/organization', data).then((response) => {
        return response.data;
    });
}


/**
 * 获取树形列表
 * @param project
 * @returns {Promise.<TResult>}
 */
function list(project) {
    return axios.get('/api/organization/list/tree', {params: {project: project}}).then(function (response) {
        return response.data;
    });
}


export default {
    save: save,
    list: list
}