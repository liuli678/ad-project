import React, { Component } from 'react';
import { CardItemType } from '../DataTrend/components/CardTabs/types';
import CardTabs from './components/CardTabs';
import LineChart from './components/LineChart';
var _ = require('lodash');
const defaultCardData=[
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
interface IProps {
    cardData?:any
 }
interface IStates { }
// DataTrend  父组件
const  data=[
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ]
export default class DataTrend extends Component<IProps, IStates> {
    state = {
        cardData: this.props.cardData || defaultCardData,
        chartData:[
            {
              year: '1991',
              value: 3,
            },
            {
              year: '1992',
              value: 4,
            },
            {
              year: '1993',
              value: 3.5,
            },
            {
              year: '1994',
              value: 5,
            },
            {
              year: '1995',
              value: 4.9,
            },
            {
              year: '1996',
              value: 6,
            },
            {
              year: '1997',
              value: 7,
            },
            {
              year: '1998',
              value: 9,
            },
            {
              year: '1999',
              value: 13,
            },
          ]

    }
 
    handleCardTasChange = (selectedId:string) => {
        const { cardData,chartData } = this.state;
        const newCardData = cardData.map((cardItem: CardItemType) => {
            const tempCardItem = _.cloneDeep(cardItem);
            if (tempCardItem.id===selectedId) {
                tempCardItem.isSelected=true
            } else {
                tempCardItem.isSelected=false
            }
            return tempCardItem
        });
        const newChartData = chartData.map((chartItem) => {
            const tempChartItem = _.cloneDeep(chartItem);
            tempChartItem.value += 2;
            return tempChartItem;
        })
        this.setState({
            cardData: newCardData,
            chartData:newChartData,
        })
    }
    render() {
        const { cardData,chartData } = this.state
        return (
            <div className='data-trend-component-box'>
                
                <div className='card-tabs-box'>
                    <CardTabs
                        cardData={cardData}
                        onChange={(selectedId:string)=>{this.handleCardTasChange(selectedId)}}
                    />
                </div>
                <div className='line-chart-box'>
                    <LineChart chartData={chartData}  />
                </div>
            </div>
        )
    }
}


