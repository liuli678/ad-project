import React, { Component } from 'react';
import {Divider, Empty } from 'antd'
import axios from 'axios';
interface IProps{ 

}
interface IStates{ }
//用户画像
export default class UserPortrait extends Component<IProps, IStates>  {
    state = {
        //展示空组件的初始值
        isEmpty:true
    }
    // componentWillMount(): void {
    //     axios.get('ad/ddd').then(() => {
    //         this.setState({
    //             isEmpty:false
    //         })
    //     })
    // }

    render() {
      const {isEmpty}=this.state
    return (
        <div className='user-portrait-component-box'>
            {isEmpty ? (
                < Empty
                    description='您的广告展现积累用户较少，无法得出精准的画像'
                />
            ) : (
                <div>用户画像信息</div>
            )}
      </div>
    )
  }
}