import React, { Component } from "react";
import { Button } from 'antd';
import './style.scss'
interface Props { }

class IndexPage extends Component<Props> {
    render() {
        return (
            <div className="index-page">
                <div className="middle-box">
                    hello,react.
                    <span>首页</span>
                </div>

            </div>

        )
    }
}
export default IndexPage;