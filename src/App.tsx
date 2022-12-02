import React, { Component } from "react";
import './style.scss';

interface Props{}
class App extends Component<Props>{
    render() {
        return (
            <div className="box">
                hello,react
                <span> 使用git操作规范</span>
            </div>
        )
    }
}
export default App;
