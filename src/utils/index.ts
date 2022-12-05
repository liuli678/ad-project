// 解析url的函数
function getUrlParam(name: string) {
    const query = window.location.search.substring(1);
    const paramsArr = query.split('&');
    // eslint ++的报错信息
    for (let i = 0; i < paramsArr.length; i++) {
        const pair = paramsArr[i].split('=');
        if (pair[0] === name) {
            return pair[1]
        }
    }
    return false;
}
export default {
    getUrlParam,
}