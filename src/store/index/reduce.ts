// 首页的reducer
// 引入深拷贝工具
var _ = require('lodash');
const indexInitState = {
    userBalanceInfo: {
        balance:0
    }
}
function index(state = {indexInitState}, action: any) {
    // 创建用户信息
    const newState=_.cloneDeep(state)
    switch (action.type) {
        case 'updateUserBalanceInfo':
            newState.userBalanceInfo = action.userBalanceInfo
            return newState;
    
        default:
            return state;
    }
}

//把里面的reducer统一导出
export default index;