import React, { Component } from 'react';
import { Button } from 'antd'
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import './style.scss'
interface IProps{ }
interface IStates{}
export default class Account extends Component<IProps,IStates> {
  render() {
    return (
        <div>
            <div className="search-component-account-component-box">
                <div className="name">账户-上古彭</div>
                <div className="info">
                    <div className="info-item">
                        <span>客户权益</span>
                        <span>
                            <StarFilled />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />                     
                        </span>
                    </div>
                    <div className="info-item">
                        <span>状态</span>
                        <span className='circle'></span>
                        <span>账户金未到</span>
                    </div>
                    <div className="info-item">
                        <span>推广余额</span>
                        <span>0</span>
                        <Button size='small'>充值</Button>
                    </div>
                    <div className="info-item">
                        <span>预算</span>
                        <span>不限定预算</span>
                    </div>
                    <div className="info-item">
                        <span>地域</span>
                        <span>不限定地域</span>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
