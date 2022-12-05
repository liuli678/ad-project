import React, { Component } from "react";
import { RouteComponentProps } from 'react-router-dom'
import './style.scss';

interface Props extends RouteComponentProps<{}> {
    location: any,
    history: any,
    children: any

}


class App extends Component<Props>{
    // 匹配到/ 根路径时重定向
   handleRoute = () => {
        const { location, history } = this.props;
        const pathname = location;
        console.log('history', history)

        // 自动去首页
        if (pathname === '/') {
            history.push('/index')
            return false;
        }
        return true;

    }
    render() {
        console.log("测试", this.props);
        const { children } = this.props;
        return (
            <>
                {
                    this.handleRoute() ? children : 'other'
                }
            </>



        )
    }
}
export default App;
