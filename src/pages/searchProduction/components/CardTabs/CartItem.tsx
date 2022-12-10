import React, { Component } from 'react';
import './style.scss'
interface IProps{
    name: string;
    currentValue: string | number;
    contemporaryValue: string | number;
    isSelected: boolean;
    id: string;
    onClick?: (selectedId: string) => void;
}
export default class CartItem extends Component<IProps> {
    handleClick = (id:string) => {
        
    }
    render() {
        const {name,currentValue,contemporaryValue,isSelected,id}=this.props;
      const cardItemStyle= isSelected ?'search-page-card-tabs-component-box ':''
    return (
        <div className={cardItemStyle} onClick={()=>{this.handleClick(id)}}>
            <div className="info">
                <div className="name-present">
                    <div className="name">{name}</div>
                    <div className="present">{currentValue}</div>
                </div>
                <div className="value">
                    <div>
                        <span>当前：{currentValue}</span>
                        <span>同期：{contemporaryValue }</span>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
