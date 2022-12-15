// 搜索平台的store管理
//引入mobx的observable 将state转化为可观察的对象
import { observable, runInAction,makeAutoObservable, action,computed } from 'mobx';
//searchProductionApi导出
import searchProductionApi from '@api/search/index'
//相应的类
class SearchProductionStore {
    // 版本6之后需要添加constructor
    constructor() {
        makeAutoObservable(this)
    }

    // @observable modalShow: boolean = false;
    @observable expiredPlanData = [];
    // 增加图标的可观察对象
    @observable dataTrendData=[]
    //触发actions 改变modalShow的值
    async getExpiredPlanList() {
        try {
            await searchProductionApi.fetchExpiredPlan().then((res: any) => {
                const expiredPlanList = res.data.data;
                runInAction(() => {
                    // this.modalShow = expiredPlanList.length > 0;
                    this.expiredPlanData = expiredPlanList;
                });
            })
        } catch (error) {
            console.log('error', error);

        }
    }
    //图表数据的action
    async getChartData() {
        try {
            await searchProductionApi.fetchChartData().then((res: any) => {
                runInAction(() => {
                    this.dataTrendData = res.data.data;;
                });
            })
        } catch (error) {
            console.log('error', error);

        }
    }
    // 也可以在这里写一个函数 第二种
    // @action
    // changeModalShow = () => {
    //     this.modalShow=false
    // }
    @computed get modalShow() {
        return this.expiredPlanData.length>0
    }
}
//导出实例
export default new SearchProductionStore()