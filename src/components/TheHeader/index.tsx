import React from 'react';
import './style.scss';
import {UserOutlined} from '@ant-design/icons'
import { MENU_INDEX_CONFIG } from '../../common/constants/menu'
import MenuItem from './MenuItem';

interface IProps { }
interface IStates { }

class TheHeader extends React.Component<IProps, IStates> {
    state = {}
    render() {
        const userName='小青青'
        return (
            <div className='header-content-box'>
                <div className='left'>
                    <div className='logo'></div>
                    <div className='menu'>
                        {
                            MENU_INDEX_CONFIG.map((menuItem, index) => (
                                <MenuItem
                                    menuItemInfo={menuItem}
                                    isActive={MenuItem.isActive}
                                    key={`menu-Child${index.toString()}`}   
                                />
                            ))
                        }   
                    </div>
                </div>
                <div className='user-info'>
                    <UserOutlined />
                    <span>{ userName}</span>
                </div>
            </div>
        )
    }
}
export default TheHeader;
