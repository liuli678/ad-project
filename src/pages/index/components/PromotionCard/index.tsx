import React, { Component } from 'react'
import ProCardItem from './ProCardItem'
interface IProps{
    history?:Object
 }
interface IStates{ }
const promotionData = [
    {
        name: '搜索推广',
        cost: 1,
        budget: 100,
        btnStatus: 1,
        desc: '',
        type:1
    },
    {
        name: '信息推广流',
        cost: 1,
        budget: 100,
        btnStatus: 0,
        desc: '信息流推广借助与大数据，用户需要求和智能投放等技术。通过慕课App，慕课贴吧，慕课视频等资讯流帮你触达高潜质用户',
        type:2
    },
    {
        name: '智能推广',
        cost: 1,
        budget: 100,
        btnStatus: 0,
        desc: '',
        type:2
    },
    {
        name: '知识营销',
        cost: 1,
        budget: 100,
        btnStatus: 0,
        desc: '',
        type:2
    }

]
export default class PromotionCard extends Component<IProps, IStates> {
    handleEnder = () => {
        const { history } = this.props;
        history.push('searchProduction')
    }
    render() {
        return (
            <div>
                {
                    promotionData.map((promotionItem,index) => {
                        return (
                            <ProCardItem
                                key={`product-item-${index.toString()}`}
                                name={promotionItem.name}
                                cost={promotionItem.cost}
                                budget={promotionItem.budget}
                                btnStatus={Boolean(promotionItem.btnStatus)}
                                desc={promotionItem.desc}
                                type={promotionItem.type}
                                onEnter={this.handleEnder}
                            />
                            
                        )
                    })
               }
            </div>
        )
    }
}
