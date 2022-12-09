import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import  TheHeader  from '@components/TheHeader';
import Account from './components/Account';
import DataTrend from '@components/DataTrend';
// import  DataTrend  from './components/DataTrend';
import  UserPortrait  from './components/UserPortrait';
import WaveAnalysis from './components/WaveAnalysis';
const cardData=[
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
interface IProps extends RouteComponentProps { }
interface IStates { }
export default class SearchProduction extends Component<IProps, IStates> {
    render() {
        return (
            <div className='search-promotion-box'>
                <div className='header'>
                <TheHeader />
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
                    <WaveAnalysis />
                    
                    </div>
                    <div className="user-portrait-box">
                        <UserPortrait />
                    </div>
                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
}
