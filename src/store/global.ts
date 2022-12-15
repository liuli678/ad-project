// 全局的store管理
//引入mobx的observable 将state转化为可观察的对象
import { observable,makeAutoObservable } from 'mobx';
//相应的类
class GlobalStore {
    // 版本6之后需要添加constructor
    constructor() {
        makeAutoObservable(this)
    }
// 定义一个全局的@observable  isKAAccount表示当前是否是大客户
    @observable isKAAccount:boolean=true

}
//导出实例
export default new GlobalStore()