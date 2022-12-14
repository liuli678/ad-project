// 引入深拷贝工具
var _ = require('lodash');
// 搜索推广页面初始值
const searchInitState = {
    account: {
        
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

//把里面的reducer统一导出
export default search;