import React, { Component } from 'react';
// import {  RouteComponentProps } from 'react-router-dom';
//在组件里面引入Provider
import { observer, Provider } from 'mobx-react'
import TheHeader from '@components/TheHeader';
import Footer from '@components/Footer';
import Account from './components/Account';
import DataTrend from '@components/DataTrend';
// import  DataTrend  from './components/DataTrend';
import UserPortrait from './components/UserPortrait';
import WaveAnalysis from './components/WaveAnalysis';
//使用hook组件，先将autoModal组件引入到父组件
import AutoModal from './components/AutoModal';
//引入search 的store
import searchProductionStore from './searchProduction.store';
//组件中引入全局的store
import globalStore from '@store/global'
const cardData = [
    {
        id: '1',
        name: '消费(元)',
        value: 2000,
        present: 28,
        icon: 'assets/imgs/card-icon1',
        isSelected: true,
    },
    {
        id: '2',
        name: '展现(次)',
        value: 5988,
        present: 88.9,
        icon: 'assets/imgs/card-icon2',
        isSelected: false,
    },
    {
        id: '3',
        name: '点击(次)',
        value: 1999,
        present: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    },
    {
        id: '4',
        name: '点击人数',
        value: 1999,
        present: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    },
    {
        id: '5',
        name: '展现人数',
        value: 1999,
        present: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
    }
]
interface IProps {
    history?: any
}
interface IStates { }
//在class上添加装饰器就行
@observer
export default class SearchProduction extends Component<IProps, IStates> {
    // 父组件设置弹窗是否展示的默认值 
    state = {
        autoModalShow: true
    }
    // 使用mobx
    componentWillMount(): void {
        searchProductionStore.getExpiredPlanList();
    }
    // 父组件中设置点击modal进行处理
    handleAutoModalClick = (type: number, values?: any) => {
        // this.setState({
        //     autoModalShow:false 
        // })
        // searchProductionStore.modalShow=false
    }
    render() {
        const { autoModalShow } = this.state;
        const { history } = this.props;
        //获取mobx里面的属性
        const { modalShow } = searchProductionStore
        return (
            <Provider store={searchProductionStore} globalStore={globalStore}>
                <div className='search-promotion-box'>
                    <div className='header'>
                        <TheHeader history={history} />
                    </div>
                    <div className='content'>
                        <div className="account-box">
                            <Account />
                        </div>
                        <div className="data-trend-box">
                            <div className='data-trend-title'>数据趋势</div>
                            <DataTrend cardData={cardData} />

                        </div>
                        <div className="wave-analysis-box">
                            <div className='title'>波动分析</div>
                            <WaveAnalysis />

                        </div>
                        <div className="user-portrait-box">
                            <div className='title'>用户画像</div>
                            <UserPortrait />
                        </div>
                    </div>
                    <div className='footer'>
                        <Footer />
                    </div>
                    <AutoModal
                        visible={false}
                        // visible={modalShow}
                        // visible={autoModalShow}
                        onBtnClick={this.handleAutoModalClick}
                    />
                </div>
            </Provider>
        )
    }
}
