import React, { Component } from 'react'
import { CardItemType } from './types'

interface IProps extends CardItemType {
    onClick?: (id: string) => void,
}
interface IStates { }
// 单个按钮封装
export default class CardItem extends Component<IProps> {
    // 点击不同的卡片
    handleClick = (id: string) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(id);
        }
    }
    render() {
        const { name, value, present, icon, id, isSelected } = this.props;
        // 定义样式
        const cardItemStyle = isSelected ? 'cardItem-component-box cardItem-select' : 'cardItem-component-box';
        // 名字样式
        const nameTextStyle = isSelected ? 'name-active' : 'name';
        const presentTextStyle = isSelected ? 'present-active' : 'present';
        const valueTextStyle = isSelected ? 'value-active' : 'value';
        const iconPath = isSelected ? `${icon}-selected.png` : `${icon}.png`
        return (
            <div className={cardItemStyle} onClick={() => { this.handleClick(id) }}>
                <img className='icon' src={iconPath} alt="" />
                <div className='info'>
                    <div className='name-present'>
                        {
                            present && (<div className={presentTextStyle}>{`${present}%`}</div>)
                        }
                    </div>
                    <div className={valueTextStyle}>{value}</div>
                </div>
            </div>
        )
    }
}
