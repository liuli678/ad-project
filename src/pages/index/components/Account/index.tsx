import React, { Component } from 'react';
import {Button} from 'antd'
interface IProps { }
interface IStates {
    status: number;
    balance: number;
    creditValue: number;
}
export default class Account extends Component<IProps, IStates> {
    state = {
        status: 0, //0 表示账户金额未到 1表示已到
        balance: 0,
        creditValue: 0

    }
   componentDidMount=(): void =>{
       setTimeout(() => {
           this.setState({
            status: 1, //0 表示账户金额未到 1表示已到
            balance: 220,
            creditValue: 780
          }) 
       },2000)
   }
    render() {
        const { status, balance, creditValue } = this.state;
        return (
            <div className='account-component-box'>
                <div>你好 上古棚</div>
                <div className='examine'>
                    {
                        status===0?(<div className="status">开户金未到</div>):(<div className="status-ok">开户金已到</div>)
                    }
                </div>
                <div className="balance">
                    <div>
                        <div className="text">推广金额</div>
                        <div className="value">{balance}</div>
                    </div>
                    <Button type='primary' size='small' >充值</Button>
                </div>
                <div className="credit">
                    <div>
                        <div className="text">合规信用值</div>
                        <div className="value">{creditValue }</div>
                    </div>
                </div>
            </div>
        )
    }
}
