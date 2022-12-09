import React, { Component } from 'react';
import { CardItemType } from './types';
//引入cardItem组件
import CardItem from './CardItem'
interface IProps {
    cardData: CardItemType[];
    onChange?: (isSelectedId: string) => void,

}
interface IStates { }
export default class CardTabs extends Component<IProps, IStates>{
    handleChange= (selectedId: string) => {
        console.log(selectedId);
        
    }
    render() {
        const { cardData } = this.props;
        return (
            <div>
                {
                    cardData.map((cardItem: CardItemType, index: number) => {
                        return (
                            <CardItem
                            name={cardItem.name}
                            value={cardItem.value}
                            present={cardItem.present}
                            icon={cardItem.icon}
                            isSelected={cardItem.isSelected}
                            id={cardItem.id}
                            onClick={(selectedId: string) => {
                                    this.handleChange(selectedId);
                                }}
                            key={`cardItem${index.toString()}`}    

                        />)
                    })
                }
            </div>
        )
    }
}
