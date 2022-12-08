import React, { Component } from 'react';
import { CardItemType } from '../DataTrend/components/CardTabs/types';
import CardTabs from './components/CardTabs';
import LineChart from './components/LineChart'
var _ = require('lodash');

interface IProps extends CardItemType {
 
 }
interface IStates { }
// DataTrend  父组件
export default class DataTrend extends Component<IProps, IStates> {
    state = {
        cardData: [
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
            }
        ]
    }
    handleCardTasChange = (selectedId:string) => {
        const { cardData } = this.state;
        const newCardData = cardData.map((cardItem: CardItemType) => {
            const tempCardItem = _.cloneDeep(cardItem);
            if (tempCardItem.id===selectedId) {
                tempCardItem.isSelected=true
            } else {
                tempCardItem.isSelected=false
            }
            return tempCardItem
        });
        this.setState({
            cardData:newCardData
        })
    }
    render() {
        const { cardData } = this.state
        return (
            <div className='data-trend-component-box'>
                <div className='card-tabs-box'>
                    <CardTabs
                        cardData={cardData}
                        onChange={(selectedId:string)=>{this.handleCardTasChange(selectedId)}}
                    />
                </div>
                <div className='line-chart-box'>
                    <LineChart></LineChart>
                </div>
            </div>
        )
    }
}


