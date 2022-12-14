//引入通用action的类型
import {AnyAction} from 'redux'
//引入saga提供的effect
import { call, put, takeEvery } from 'redux-saga/effects';
//将定义好的api请求接口引入
import indexApi from '@api/index';
//规定类型
import { userBalanceResType } from './types'
//构造函数Generator
function* getUserBalance (action:AnyAction) {
    //接口异步请求
    try {
        const userBalanceRes:userBalanceResType = yield call(indexApi.getUserBalance);
        yield put({
            type: 'updateUserBalanceInfo',
            userBalanceInfo:userBalanceRes.data.data,
        })
    } catch (error:any) {
        console.log(error);
        
    }
}
const searchSagas = [
    takeEvery('updateUserAccount',getUserBalance)
]

export default searchSagas;
