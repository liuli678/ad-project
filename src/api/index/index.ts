//统一存放首页的请求
import axios from "axios";
//index的action对象
const indexApi = {
    //定义接口请求
    getUserBalance:()=>axios.get('ad/user/balance'),
}
//导出
export default indexApi;