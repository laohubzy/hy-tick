import http from '@/http'

const BASE_URL = '/user'

const login = (data) => {
    return http.post(BASE_URL + '/login', data)
}

const register = (data) => {
    return http.post(BASE_URL + '/register', data)
}

export default {
    login,
    register
}