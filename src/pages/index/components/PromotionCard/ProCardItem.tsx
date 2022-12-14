import React, { Component } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Modal, Radio, InputNumber } from 'antd';
import { ThemeContext,ThemeType } from '@context/theme';
interface IProps {
    name: string;
    desc: string;
    type: number;
    btnStatus: boolean;
    cost?: number;//销售
    budget?: number;//预算
    onEnter?: () => void;
    onChange?: (newValue:any) => void;
    history?:any

}
interface IStates {
    editModalShow: boolean,
    budgetOption: number,
    budgetValue: number
}

export default class ProCardItem extends Component<IProps, IStates> {
    state = {
        editModalShow: false,
        budgetOption: 1,
        budgetValue: 0
    }
    // 弹窗
    openEditBudgetModal = () => {
        this.setState({
            editModalShow: true
        })
    }
    // 
    handleBudgetOk = () => {
        this.setState({
            editModalShow: false
        })
    }
    handleBudgetCancel = () => {
        this.setState({
            editModalShow: false
        })
    }
    handleRadioChange = (optionValue: number) => {
        this.setState({
            budgetOption: optionValue
        })
    }
    handleBudgetChange = (newValue: number) => {
        this.setState({
            budgetValue: newValue
        })
    }
    handelClick = () => {
        const { onEnter } = this.props;
        if (onEnter) {
            onEnter()
        }
    }
    render() {
        const { name, desc, type, btnStatus, cost = 0, budget = 0 } = this.props;
        const { editModalShow, budgetOption, budgetValue } = this.state;
        const radioStyle = {
            display: 'block',
            height: '35px',
            lineHeight: '35px',
        }
        return (
            <div className='pro-card-item-component-box'>
                <div className='name'>  {name}</div>
                {
                    type === 1 ? (
                        <div>
                            <div className='wrap'>
                                <div className="label">消费(元)</div>
                                <div className="value">{cost}</div>
                            </div>
                            <div className='wrap'>
                                <div className="label">日预算(元)</div>
                                <div className="value">
                                    {budget}
                                    <EditOutlined
                                        onClick={this.openEditBudgetModal}
                                        style={{ marginLeft: 5 }}
                                    />
                                </div>
                            </div>
                        </div>) : (<div> {desc}</div>)
                }
                {
                    btnStatus ? (

                        <div className='btn-wrap'>
                            <Button
                                // type={this.context.buttonType}
                                size='small'
                                onClick={this.handelClick}
                            >进入</Button>
                        </div>
                    ) : (<div className='btn-wrap'>
                        <Button type='primary' size='small' disabled>不可申请</Button>
                    </div>)
                }
                <Modal
                    title={`${name}预算设置`}
                    open={editModalShow}
                    onOk={this.handleBudgetOk}
                    onCancel={this.handleBudgetCancel}
                    okText='确定'
                    cancelText='取消'
                    className='budget-modal'
                    width={700}
                >
                    <Radio.Group name="radiogroup" onChange={(e) => { this.handleRadioChange(e.target.value) }} value={budgetOption}>
                        <Radio value={1} style={radioStyle}>
                            不限定预算
                        </Radio>
                        <Radio value={2} style={radioStyle}>
                            <span>预算</span>
                            <span className='radio-hint'>当你预算范围内出现余额不足，则可能产生透支消费，欠款将在下次充值价款后自动抵扣</span>
                        </Radio>
                    </Radio.Group>
                    {
                        budgetOption === 2 && (
                            <div className='input-number'>
                                <InputNumber
                                    size='small'
                                    min={1}
                                    max={100000}
                                    defaultValue={budgetValue}
                                    // onChange={(newValue: number) => { this.handleBudgetChange(newValue) }}
                                />
                                <span className='unit'>元</span>
                                <span className='hint'>为了保证您的推广效果，每日预算需&gt;50 元</span>
                            </div>
                        )
                    }
                    <div className="budget-hint">达到预算下线时间：最近30天内，你的账户没有因超出账户预算而下线</div>
                </Modal>
            </div>
        )
    }
}
