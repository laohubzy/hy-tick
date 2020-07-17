export default {
    200: {
        code: 200,
        message: '请求成功',
        status: 'SUCCESS'
    },
    0: {
        code: 0,
        message: '请求失败',
        status: 'FAIL'
    },

    1000: {
        code: 1000,
        message: 'token校验不通过',
        status: 'TOKEN_ERROR'
    },
    2000: {
        code: 2000,
        message: '无操作权限',
        status: 'NO_PERMISSION'
    },
    3000: {
        code: 3000,
        message: '参数不得为空',
        status: 'PARAM_ERROR'
    },
    4000: {
        code: 4000,
        message: '参数类型不匹配',
        status: 'PARAM_MATCH_ERROR'
    },    
}