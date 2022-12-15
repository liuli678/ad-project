// 使用saga
//引入相应的工具
import { all } from 'axios';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga';
// 引入reducer和saga
// import rootReducer from './reducer';
// import rootSaga from './saga';

//处理上下文
let allReducers: any = {}
const allSagas:any=[]   
//优化store中saga和reducer
function importAll(r: any,moudleType:string) {
    // console.log('r',r);
    r.keys().forEach((item: any) => {
        if (moudleType==='reducer') {
            const name = item.split('/')[1]
            const reducerItem = { [name]: r(item).default };
            allReducers={...allReducers,...reducerItem,}
        } else if(moudleType==='saga'){
            allSagas.push(...r(item).default)
        }else {
        // 
        }
        // console.log('r(item)',r(item).default);
        
    });
}
// @ts-ignore忽略
// importAll(require.context('./', true, /reducer\.ts$/,'reducer'))
// // @ts-ignore忽略
// importAll(require.context('./', true, /saga\.ts$/, 'saga'));
//创建reducer
const rootReducer = combineReducers(allReducers);
//创建saga
const rootSaga = function* () {
    yield all(allSagas)
}
//创建sagaMiddleware中间件
const sagaMiddleware=createSagaMiddleWare()
//创建store实例
const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// 运行
sagaMiddleware.run(rootSaga);
//导出实例
export default store;