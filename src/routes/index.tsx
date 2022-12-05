// 路由配置文件
import React, { Component } from "react";
import {
    HashRouter as Router, withRouter, BrowserRouter
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


// 页面组件
import App from '../App';
import IndexPage from 'pages/index/index';
import LoginPage from 'pages/login/index';

// 路由配置数组
const allRoutes = [
    {
        path: '/index',
        exact: false,
        component: IndexPage,
        title: ''
    },
    {
        path: '/login',
        exact: false,
        component: LoginPage,
        title: ''
    },
];
//高阶组件的使用
const AppWarp = withRouter(App)
// 路由组件
class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router>
                    <AppWarp>

                        {
                            renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))
                        }
                    </AppWarp>
                </Router>
            </BrowserRouter>





        )
    }
}
export default AppRoute;