//封装验证规则 便于全局使用

export function checkPhone(value){
    let regPhone = /^1[3456789]\d{9}$/
    return regPhone.test(value)
}

export function password(value){
    // 6-20数字和字母
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return regPassword.test(value)
}

// 注册：验证码
export function checkCode(value){
    // 6为数字字母组合
    let regCode = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/
    return regCode.test(value)
}
