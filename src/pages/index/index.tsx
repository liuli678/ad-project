import React, { Component } from "react";
import axios from 'axios';
import {Select,DatePicker} from 'antd'
import { RouteComponentProps } from 'react-router-dom';
import TheHeader from "@components/TheHeader";
import DataTrend from "@components/DataTrend";
import PromotionCard from "./components/PromotionCard";
import ProductCard from "./components/ProductCard";
import Account from './components/Account';
// import { ThemeContext, ThemeType } from 'context/theme'
import './style.scss';
const { Option } = Select;
interface Props extends RouteComponentProps {
    theme: Object;
    history?: Object
}
interface IStates{}
class IndexPage extends Component<Props,IStates> {
    state = {
        theme: {
            buttonType: 'default'
        }
    }
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
    handleContextChange = () => {
        const { theme } = this.state;
        const newButtonType = theme.buttonType === 'primary' ? 'default' : 'primary';
        this.setState({
            theme: {
                buttonType: newButtonType
            }
        })
    }
    render() {
        const { theme } = this.state;
        const { history } = this.props;
        return (
            // <ThemeContext.Provider value={theme}>

                <div className="index-page">
                    <div className="header-box">
                        <div className='Header-box'>
                            <div className='title'>数据趋势</div>
                            <div className="select-area">
                                <Select
                                    defaultValue='0'
                                    style={{ width: '120' }}
                                    size='small'
                                >
                                    <Option value='0'>全部推广产品</Option>
                                    <Option value='1'>搜索推广</Option>
                                    <Option value='2'>一站式推广</Option>
                                    <Option value='3'>合约推广</Option>
                                    <Option value='4'>知识营销</Option>
                                </Select>
                                <DatePicker
                                    size="small"
                                    style={{ marginLeft: 10 }}
                                    placeholder='请选择日期'
                                />
                            </div>
                        </div>
                        <TheHeader></TheHeader>
                    </div>
                    <div className="content-box">
                        <div className="left-content">
                            <div className="chart-area">
                                <DataTrend />
                            </div>
                            <div className="promotion-card-area">
                                <PromotionCard history={history} />

                            </div>
                            <div className="product-card-area">
                                <ProductCard />
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="account-area">
                                <Account></Account>
                            </div>
                            <div className="index-banner-area">promotion-card</div>
                            <div className="product-news-area">product-car</div>
                        </div>
                    </div>
                    <div className="footer-box">
                        footer
                    </div>
                </div>
            // </ThemeContext.Provider>





        )
    }
}
export default IndexPage;