import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import dayjs from 'dayjs'
import { Button, DatePicker } from 'antd';
import './style.scss'
interface Props { }

class IndexPage extends Component<Props> {
    componentDidMount(): void {
        axios.get('/ad/index/gray').then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);

        })
    }
    // 处理事件
    // handleDateChange = (data: moment.Moment | null) => {
    //     // moment(data).unix() 获取时间戳
    //     console.log('data改变',moment(data).unix() )

    // }
    render() {
        return (
            <div className="index-page">
                <div className="middle-box">
                    hello,react.
                    <span>首页</span>
                    <Button type="primary">按钮</Button>
                </div>
                <div>
                    {/* <DatePicker onChange={this.handleDateChange} /> */}
                </div>
            </div>

        )
    }
}
export default IndexPage;