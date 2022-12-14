import { combineReducers } from "redux";
// 引入深拷贝工具
var _ = require('lodash');
const indexInitState = {
    userBalanceInfo: {
        balance:0
    }
}
// 搜索推广页面初始值
const searchInitState = {
    account: {
        
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
//搜索推广页面

function search(state={searchInitState},action:any) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case 'updateUserAccount':
            newState.account=action.user        
            return newState;
    
        default:
            return state;
    }
}
// 把里面的reducer统一合并
const rootReducer = combineReducers({
    index,
    search
})
//把里面的reducer统一导出
export default rootReducer;