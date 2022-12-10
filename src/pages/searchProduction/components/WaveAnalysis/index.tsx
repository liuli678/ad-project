import React, { Component } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Radio } from 'antd';
import CardTabs from '../CardTabs';
import { CartItemType } from '../CardTabs/types';
import type { FormInstance } from 'antd/es/form';

import './index.scss'
interface IProps {

}
interface IStates {

}
// 波动分析模块
const columns = [
    {
        title: '排名',
        dataIndex: 'sort',
        key: 'sort',
    },
    {
        title: '推广计划',
        dataIndex: 'playName',
        key: 'playName',
    },
    {
        title: '展现变化量',
        dataIndex: 'showChangeNum',
        key: 'showChangeNum',
    },
    {
        title: '展现变化率',
        key: 'showChangeRatio',
        dataIndex: 'showChangeRatio',
    },
    {
        title: '当期展现',
        key: 'currentShow',
        dataIndex: 'currentShow',
    },
    {
        title: '同期展现',
        key: 'contemporaryShow',
        dataIndex: 'contemporaryShow',
    },
    {
        title: '操作',
        key: 'operation',
        dataIndex: 'operation',
    },
];
const dataSource = [
    {
        key: '1',
        sort: 1,
        playName: '剖析react颞部运行机制推广',
        showChangeNum: 32,
        showChangeRatio: 66,
        currentShow: 121,
        contemporaryShow: 125,
        operation: '暂停推广'
    },
    {
        key: '2',
        sort: 2,
        playName: '慕课营销平台推广',
        showChangeNum: 32,
        showChangeRatio: 66,
        currentShow: 121,
        contemporaryShow: 125,
        operation: '暂停推广'
    },
    {
        key: '3',
        sort: 3,
        playName: '慕课营销平台推广',
        showChangeNum: 32,
        showChangeRatio: 66,
        currentShow: 121,
        contemporaryShow: 125,
        operation: '暂停推广'
    },
    {
        key: '4',
        sort: 4,
        playName: '慕课营销平台推广',
        showChangeNum: 32,
        showChangeRatio: 66,
        currentShow: 121,
        contemporaryShow: 125,
        operation: '暂停推广'
    },
];
// 表单数据
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} 是必填项!',
    types: {
        email: '${label} 不是一个有效的邮箱!',
        number: '${label} 不是一个有效的数字!',
    },
    number: {
        range: '${label} 必须是在 ${min} 和 ${max}之间',
    },
};
export default class WaveAnalysis extends Component<IProps, IStates>  {
    state = {
        //定义CardTabs里面的数据传递出去
        cartData: [
            {
                id: '1',
                name: '展现变化率',
                currentValue: 5988,
                contemporaryValue: 6000,
                isSelected: true,
            },
            {
                id: '2',
                name: '点击变化(次)',
                currentValue: 5988,
                contemporaryValue: 6000,
                isSelected: false,
            },
            {
                id: '3',
                name: '消费变化(次)',
                currentValue: 5988,
                contemporaryValue: 6000,
                isSelected: false,
            }
        ],
        //定义是否开启模态框，初始值关闭状态
        isModalOpen: false,
        initialValues: {
            plan: {
                name: '2',
                autoOpenValue:0,
            }
        }
    }
    // 创建一个formRef
    formRef = React.createRef<FormInstance>();
    // cartTabs
    handleCardChange = (selectedId: string) => {
        // 处理card change
        const { cartData } = this.state;
        const newCartData = cartData.map((cartDataItem: any) => {
            const tempCardItem = JSON.parse(JSON.stringify(cartDataItem));
            // 点击卡片的id和数组里面的id进行匹配
            if (tempCardItem.id === selectedId) {
                tempCardItem.isSelected = true
            } else {
                tempCardItem.isSelected = false
            }
            return tempCardItem

        });
        this.setState({
            cartData: newCartData
        })
    }
    // 模态框确认状态下的回调‘
    handleOk = () => {
        this.formRef.current!.validateFields().then((values: any) => { 
            console.log('values',values);
            // 发送一个接口请求
        }).catch((error:any) => {
            console.log('error',error);
            
        })
        

        this.setState({
            isModalOpen: false
        })
    }
    // 取消按钮的回调
    handleCancel = () => {
        this.setState({
            isModalOpen: false
        })
    }
    // 提交表单成功的回调
    onFinish = (values: any) => {
        console.log(values);
    };
    render() {
        const { cartData, isModalOpen,initialValues } = this.state;
        return (
            <div className="wave-analysis-component-box">
                <div className="card-tabs-box">
                    <CardTabs cartData={cartData} onChange={(selectedId: string) => { this.handleCardChange(selectedId) }} />
                </div>
                <div className="table-box">
                    <div className="title-and-btn">
                        <span>TOP50计划</span>
                        <Button
                            type='primary'
                            size='small'
                            onClick={() => {
                                this.setState({
                                    isModalOpen: true
                                })
                            }}
                        >
                            新建推广计划</Button>
                    </div>
                    <Table columns={columns} dataSource={dataSource} />
                </div>
                <Modal title="新建推广计划"
                    open={isModalOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText='确认'
                    cancelText='取消'
                    width={800}

                >
                    <Form {...layout}
                        name="nest-messages"
                        onFinish={this.onFinish}
                        validateMessages={validateMessages}
                        initialValues={initialValues}
                        ref={this.formRef}
                    >
                        <Form.Item name={['plan', 'name']} label="计划名称" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name={['plan', 'budget']} label="日预算" rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['plan', 'autoOpenValue']} label="自动开启推广" rules={[{ required: true }]}>
                            <Radio.Group>
                                <Radio value={0}>是</Radio>
                                <Radio value={1}>否</Radio>
                              
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name={['plan', 'keyword']} label="推广关键词" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['plan', 'city']} label="推广城市" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                确认
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}