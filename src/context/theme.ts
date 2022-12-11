import React from "react";

//使用ts定义类型
export interface ThemeType{
    buttonType:string
}

//定义一个初始默认值
const themeContextDefaultValue:ThemeType = {
    buttonType:'default'
}
//创建一个 Context 对象  暴露出去可以在组件其他地方使用
export const ThemeContext=React.createContext(themeContextDefaultValue) 