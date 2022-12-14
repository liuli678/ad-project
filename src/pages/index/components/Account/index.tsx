import React, { Component } from 'react';
import { Button } from 'antd';
//使用store
import { connect } from 'react-redux'
import { ThemeContext, ThemeType } from '@context/theme';
interface IProps {
    // theme:ThemeType
    userBalance: any,
    fetchBalance:any
}
interface IStates {
    // status: number;
    // balance: number;
    // creditValue: number;
}
class Account extends Component<IProps, IStates> {
    // state = {
    //     status: 0, //0 表示账户金额未到 1表示已到
    //     balance: 0,
    //     creditValue: 0

    // }
    //mock数据
    componentWillMount(): void {
        const params = { name: 'jack' };
        //获取fetchBalance函数
        const { fetchBalance } = this.props;
        //判断是否存在
        if (fetchBalance) {
            fetchBalance(params)
        }
    }
    componentDidMount = (): void => {
        // setTimeout(() => {
        //     this.setState({
        //         status: 1, //0 表示账户金额未到 1表示已到
        //         balance: 220,
        //         creditValue: 780
        //     })
        // }, 2000)
    }
    //子组件中使用context,给contextType赋值后就可以使用
    //  static contextType = ThemeContext;
    render() {
        // const { status, balance, creditValue } = this.state;
        const buttonType = this.context;
        // console.log('theme',theme);
        //使用状态机
        const { userBalance } = this.props;
        //解构赋值更好一点
        const {name='',balance=0,status=0,credit=0 } = userBalance;

        return (
            <div className='account-component-box'>
                <div>你好 {name}</div>
                <div className='examine'>
                    {
                        status === 0 ? (<div className="status">开户金未到</div>) : (<div className="status-ok">开户金已到</div>)
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
                        <div className="value">{credit}</div>
                    </div>
                </div>
            </div>
        )
    }
}

//子组件中使用context,给contextType赋值后就可以使用
// Account.contextType = ThemeContext;
//将state映射到组件中
const mapStateToProps = (state: any) => {
    return {
        userBalance: state.index.userBalanceInfo

    }
}
//将dispatch方法映射到当前组件
const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchUserBalance: (params: any) => {
            dispatch({
                type: 'updateUserBalanceInfo',//注意：这里的type要和saga里，下面的type一样
                params,
            })
         }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);