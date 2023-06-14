/*request.js*/
// 引入axios
import axios from "axios";

/**
 * 配置axios
 * @type {axios.AxiosInstance}
 */
const server = axios.create({
    baseURL: 'https://api.map.baidu.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * 封装无token的get请求
 * @param url
 * @returns {Promise<unknown>}
 */
const get = (url) => {
    return new Promise((resolve, reject) => {
        server.get(url).then((r) => {
            resolve(r)
        }).catch((e) => {
            reject(e)
        });
    });
};

/**
 * 封装含有token的get请求
 * @param url
 * @param token
 * @returns {Promise<unknown>}
 */
const getToken = (url, token) => {
    return new Promise((resolve, reject) => {
        server.get(url, {
            headers: {Cookie: 'BAIDUID=82701A2CC4159625F7FA3B3FCD6C6661:FG=1'}
        }).then((r) => {
            resolve(r);
        }).catch((e) => {
            reject(e);
        });
    });
};

/**
 * 封装post请求
 * @param url
 * @param token
 * @param data
 * @returns {Promise<unknown>}
 */
const post = (url, token, data) => {
    return new Promise((resolve, reject) => {
        server.post(url, data, {
            headers: {Authorization: token}
        }).then((r) => {
            resolve(r);
        }).catch((e) => {
            reject(e);
        });
    });
};

/**
 * 封装login请求
 * @param url
 * @param data
 * @returns {Promise<unknown>}
 */
const login = (url, data) => {
    return new Promise((resolve, reject) => {
        server.post(url, data).then((r) => {
            resolve(r);
        }).catch((e) => {
            reject(e);
        });
    });
};

/**
 * 封装put请求
 * @param url
 * @param token
 * @param data
 * @returns {Promise<unknown>}
 */
const put = (url, token, data) => {
    return new Promise((resolve, reject) => {
        server.put(url, data, {
            headers: {Authorization: token}
        }).then((r) => {
            resolve(r);
        }).catch((e) => {
            reject(e);
        });
    });
};


/**
 * 封装delete请求
 * @param url
 * @param token
 * @returns {Promise<unknown>}
 */
const del = (url, token) => {
    return new Promise((resolve, reject) => {
        server.delete(url, {
            headers: {Authorization: token}
        }).then((r) => {
            resolve(r);
        }).catch((e) => {
            reject(e);
        });
    });
};

// 将请求通过解构的方式抛出
export {get, getToken, post, login, put, del};