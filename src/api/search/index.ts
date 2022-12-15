//将search页面的请求统一存放，发起请求
import axios from "axios";
import {ExpiredPlanReg,ChartReg} from './types'
const searchProductionApi = {
    fetchExpiredPlan: (params?: ExpiredPlanReg) => axios.get('/ad/plan/expired'),
    // 图表数据的接口请求
    fetchChartData:(params?:ChartReg)=>axios.get('/ad/plan/chart')
}
export default searchProductionApi;

