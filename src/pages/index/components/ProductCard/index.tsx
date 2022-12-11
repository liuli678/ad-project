import React, { Component } from 'react';
import  MARKETSERVICE_CONFIG  from '@common/constants/productService';
interface IProps{ }
interface IStates{}
export default class ProductCard extends Component<IProps, IStates> {
    handleServiceItemClick = (url:string) => {
        window.location.href=url
    } 
  render() {
    return (
        <div className='product-service-component-box'>
            <div className='title'>营销服务</div>
            {
                MARKETSERVICE_CONFIG.map((productItem,index) => (
                    <div className='marketing-service-item'
                        key={`index-menuItem${index.toString()}`}
                        onClick={()=>{this.handleServiceItemClick(productItem.link)}}
                    >
                        <img src={productItem.marketToolImgUrl} alt="" />
                        <div className='name'>{productItem.marketToolTitle }</div>
                    </div>
                ))
            }
      </div>
    )
  }
}
