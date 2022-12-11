import React, { Component } from "react";
import axios from 'axios';
import { Select, DatePicker } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import { ThemeContext, ThemeType } from '@context/theme'
import { RouteComponentProps } from 'react-router-dom';
import TheHeader from "@components/TheHeader";
import DataTrend from "@components/DataTrend";
import PromotionCard from "./components/PromotionCard";
import ProductCard from "./components/ProductCard";
import Account from './components/Account';
import Footer from "@components/Footer";
import './style.scss';
const { Option } = Select;
interface Props extends RouteComponentProps {
    history?: any
}
interface IStates {
    //对theme进行定义属性类型
    theme: ThemeType
}
class IndexPage extends Component<Props, IStates> {
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
    // 动态切换按钮逻辑实现
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
            <ThemeContext.Provider value={theme}>

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
                        <TheHeader history={history}></TheHeader>
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
                                <Account />
                            </div>
                            <div className="index-banner-area">promotion-card</div>
                            <div className="product-news-area">product-car</div>
                        </div>
                    </div>
                    <div className="footer-box">
                        <Footer />
                        <div className="setting-btn">
                            <SettingOutlined
                                style={{ fontSize: 36, color: '#326fff' }}
                                onClick={this.handleContextChange}
                            />
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>





        )
    }
}
export default IndexPage;