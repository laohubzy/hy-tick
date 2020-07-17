


import qs from 'qs'
import md5 from 'md5'
import axios from './axios'

const http = {   
    // 设置签名
    setSign(param) {
        let sign = qs.stringify(param)
        sign = [].from(sign).map(i => i.charCodeAt(0).toString(16)).join('').toUpperCase()
        sign = md5(sign)
        param.sign = sign
    },     
    getBaseData(param) {
        this.setSign(param)

    },

    getSgin() {

    },

    getUrl(url) {

    },

    get (url, data, config = {}) {
        config.params = data
        return this.request('GET', url, config)
    },

    post (url, data, config = {}) {
        config.data = data
        return this.request('post', url, config)
    },

    update() {

    },

    // post 
    request(method, url, config = {}) {
        return axios({
            method,
            url,
            ...config
        })
    }

}

export default http