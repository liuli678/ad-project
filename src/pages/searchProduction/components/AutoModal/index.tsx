import React, { useState, useEffect } from 'react';
import { Modal, Radio, Form, Input, InputNumber, Divider,RadioChangeEvent } from 'antd';
// 引入radioChangeEvent
// import {RadioChangeEvent } from 'antd/lib/radio'
interface IProps {
    visible: boolean;
    onBtnClick?: (type:number,values?:any) => void;
}
// 表单的初始值
const initialValues = () => {
    
}
// Form表单样式
const layout = {
    labelCol:{ span: 4 },
    wrapperCol:{ span: 16 }
}
// 设置验证信息
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
}
export default function AutoModal(props: IProps) {
    //从父组件传递过来
    const { visible } = props;
    // 设置value的默认值
    const [goOnPromotionValue, setGoOnPromotionValue] = useState(0);
    // 当前组件使用useForm生成
    const [form] = Form.useForm();
    //点击【确定】
    const handleOk = () => {
         //点击确认前需要对表单进行校验
        form.validateFields().then((values: any) => { 
            console.log('values',values);
            //从父组件拿到函数
            const { onBtnClick } = props;
            if (onBtnClick) {
                onBtnClick(1,values)
            }

        }).catch((error:any) => {
             console.log('error',error);
             
         })
    }
    // 点击【暂不处理】
    const handleCancel = () => {
        const { onBtnClick } = props;
        if (onBtnClick) {
            onBtnClick(0)
        }
    }
    //单选按钮处理逻辑：点击【暂停推广】不展示表单项，点击【继续推广】展示表单项
    const onRadioChange = (e: RadioChangeEvent) => {
        // 通过setGoOnPromotionValue控制表单回显
        setGoOnPromotionValue(e.target.value);
      
 
    }
    // 表单成功的执行
    const onFinish = () => {
        
    }
    //失败
    const onFinishFailed = (values:any) => {
        console.log(values);
        
    }

    return (
        <div className='auto-modal-component-box'>
            <Modal
                title="是否继续推广"
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                className='auto-modal'
                okText="确定"
                cancelText="暂不处理"
            >
                <div>
                    你的推广计划-xxx已过期，请选择是否继续推广？
                </div>
                <div>
                    <Radio.Group onChange={onRadioChange} value={goOnPromotionValue}>
                        <Radio value={0}>暂停推广</Radio>
                        <Radio value={1}>继续推广</Radio>
                    </Radio.Group>
                </div>
                {
                    goOnPromotionValue === 1 && (
                        <div>
                            <Divider />
                            <Form
                                {...layout}
                                form={form}
                                name="nest-message"
                                initialValues={initialValues}
                                validateMessages={validateMessages}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label='日预算'
                                    name={['plan','budget']}
                                    rules={[{
                                        required: true,
                                        type: 'number',
                                        min: 0,
                                        max:99,
                                        message: '日预算是必填项'
                                    }]}
                                >
                                    <InputNumber />
                                </Form.Item>

                                <Form.Item
                                    label="推广城市"
                                    name={['plan','city']}
                                    rules={[{ required: true, message: '推广城市是必填项!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Form>
                        </div>
                    )
                }
            </Modal>
        </div>
    )
}
