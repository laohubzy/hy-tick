// import store from '@/store'
import axios from 'axios'
import HTTP_CODE from './httpCode'
const instance = axios.create({
    baseURL: 'http://192.168.13.121:8888'
})

/**
 * 请求拦截操作
 */
instance.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截操作
 */
instance.interceptors.response.use(response => {
    const code = response.data.code
    console.log(code)
    if (code === 200) {
        return response.data.data
    }

    if(code === 0) {
        alert(response.data.message)
        return Promise.reject()
    }
    
    if(HTTP_CODE[code]) {
        alert(HTTP_CODE[code].message)
        return Promise.reject()
    }
    return response
}, error => {
    alert('系统错误')
    return Promise.reject(error)
})


export default instance