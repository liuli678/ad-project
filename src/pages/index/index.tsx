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
                <div className="header-box">
                    header
                </div>
                <div className="content-box">
                    <div className="left-content">
                        <div className="chart-area">chart</div>
                        <div className="promotion-card-area">promotion-card</div>
                        <div className="product-card-area">product-car</div>
                    </div>
                    <div className="right-content">
                        <div className="account-area">chart</div>
                        <div className="index-banner-area">promotion-card</div>
                        <div className="product-news-area">product-car</div>
                    </div>
                </div>
                <div className="footer-box">
                    footer
                </div>
            </div>

        )
    }
}
export default IndexPage;