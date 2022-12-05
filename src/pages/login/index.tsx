import React, { Component } from "react";
import  utilsIndex  from '../../utils/index'

interface Props{}
class LoginPage extends Component<Props> {
    componentDidMount(): void {
        const id = utilsIndex.getUrlParam('id');
        console.log(id);
        
    }
    render() {
        return (
            <div>
                hello,react.
                <span>登录</span>
            </div>

        )
    }
}
export default LoginPage;