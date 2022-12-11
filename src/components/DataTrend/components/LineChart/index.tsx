import React, { Component } from 'react';
import { Line } from '@ant-design/charts';
import { CardItemType } from '@components/DataTrend/components/CardTabs/types';


interface IProps { 
    chartData:any
}

interface IStates {
    
 }

export default class LineChart extends Component<IProps, IStates> {

    state = {
       
    }

    render() {
        const { chartData} = this.props;
        const chartConfig = {
            title: {
              visible: true,
              text: '配置折线数据点样式',
            },
            description: {
              visible: true,
              text: '自定义配置趋势线上数据点的样式',
            },
            // padding: 'auto',
            forceFit: true,
            data:chartData,
            xField: 'year',
            yField: 'value',
            label: {
              visible: true,
              type: 'point',
            },
            point: {
              visible: true,
              size: 5,
              shape: 'diamond',
              style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
              },
            },
          }
        return (
            
              <div className='line-chart-component-box'>
               < Line   {...chartConfig} />
            </div>
        )
    }
}
