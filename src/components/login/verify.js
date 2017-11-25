
function checkEmail(value) {
    if (value == null || value == "") return 0;
    let regx = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    let res = regx.test(value);
    if (!res) return 1;

    return -1;
}
let checkUser = function (value) {
    if (value == null || value == "") return 0;
    let regx = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,14}$/;
    let res = regx.test(value);
    if (!res) return 1;
    return -1;
}
let checkPassword = function (value) {
    if (value == null || value == "") return 0;
    let regx = /^\w{6,20}$/;
    let res = regx.test(value);
    if (!res) return 1;

    regx = /^(\w)\1{1,}$/;
    res = regx.test(value);
    if (res) return 2;
    return -1;
}
let checkPassword2 = function (v2,v1) {
    if (v2 == null || v2 == "") return 0;
    if (v1 != v2) return 1;
    return -1;
}


export default{
    checkEmail:checkEmail,
    checkPassword:checkPassword,
    checkUser:checkUser,
    checkPassword2:checkPassword2
}