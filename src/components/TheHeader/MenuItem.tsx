import { Divider } from 'antd';
import React, { Children, Component } from 'react';
import { MenuItemInfoType } from './types'
interface IProps {
    isActive?: boolean;
    onClick?: (url:string) => void;
    menuItemInfo: MenuItemInfoType;
}
// 导航菜单的逻辑
export default class MenuItem extends Component<IProps> {
    handleMenuClick = (url: string) => {
        const {onClick}=this.props
        if (onClick) {
            onClick(url)
        }
    }
    static isActive: any;
    render() {
        const { isActive, menuItemInfo } = this.props
        return (
            <div className='index-menuItem-component-box'>
                <div className="menu-item-title" onClick={()=>{this.handleMenuClick(menuItemInfo.url)}}>
                    {
                        menuItemInfo.name
                    }
                    {menuItemInfo.menuChildren.length > 0 && (<span className='arrow-icon'></span>)}
                </div>
                <div className="bottom-line">

                </div>
                {isActive && (<div className="bottom-line-active"></div>)}
                {
                    menuItemInfo.menuChildren.length > 0 && (<div className="menu-children-box">
                        {
                            menuItemInfo.menuChildren.map((menuChild, index) => (<div className='menu-Child' key={`menu-Child${index.toString()}`}>
                                <span onClick={() => { this.handleMenuClick(menuChild.url) }}> {menuChild.label}</span>
                            </div>))
                        }
                    </div>)
                }
            </div>
        )
    }
}
