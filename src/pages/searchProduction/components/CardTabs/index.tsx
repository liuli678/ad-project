import React, { Component } from 'react';
import './style.scss'
import CartItem from './CartItem';
import { CartItemType } from './types';
interface IProps {
    cartData: CartItemType[];
    onChange?: (selectedId: string) => void;
   
}
interface IStates { }
export default class CardTabs extends Component<IProps, IStates> {
    handleCartItemClick = (selectedId:string) => {
        //获取一下父组件的回调处理函数
        const { onChange } = this.props;
        if (onChange) {
            onChange(selectedId)
        }
    }
    render() {
        const { cartData } = this.props
        return (
            <div className='cardTabs-component-box'>
                {
                    cartData.map((cartDataItem: CartItemType, index: number) => {
                        return (
                            <CartItem
                                name={cartDataItem.name}
                                currentValue={cartDataItem.currentValue}
                                contemporaryValue={cartDataItem.contemporaryValue}
                                isSelected={cartDataItem.isSelected}
                                id={cartDataItem.id}
                                onClick={(selectedId: string) => { this.handleCartItemClick(selectedId) }}
                                key={`cartDataItem${index.toString()}`}

                                
                        />)
                    }
                    )

                }

            </div>
        )
    }
}
