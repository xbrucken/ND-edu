import React, { Component } from 'react'
import { Button, Input, Form, Radio, Select } from 'antd'
import { postNewClass } from '../../api/api'
import './index.css'
const { Option } = Select
// 表单label比例
const layout = {
	labelCol: {
		span: 3,
	},
	wrapperCol: {
		span: 21,
	},
};

export default class AddClass extends Component {
	state = {
		eduBackground: ['小学', '初中', '高中', '大学'],
		eduGrade: [],
		newClass: {
			school: '',
			period: '',
			grade: '',
			className: '',
			type: ''
		}
	}
	//学段更新年级
	handleBgChange = (bg) => {
		let bgIndex = 0;
		this.state.eduBackground.forEach((value, index) => {
			if (value === bg)
				bgIndex = index;
		})
		if (bgIndex === 0)
			this.setState({
				eduGrade: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
			})
		else if (bgIndex === 1)
			this.setState({
				eduGrade: ['初一', '初二', '初三']
			})
		else if (bgIndex === 2)
			this.setState({
				eduGrade: ['高一', '高二', '高三']
			})
		else if (bgIndex === 3)
			this.setState({
				eduGrade: ['大一', '大二', '大三', '大四']
			})
	}
	onFinish = (values) => {
		console.log('Success:', values);
		this.setState({
			newClass: {
				school: values.school,
				period: values.background,
				grade: values.grade,
				className: values.classname,
				type: values.type
			}
		})
		postNewClass(this.state.newClass);
		window.history.back(-1);
	}
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}
	render() {
		// 渲染下拉框
		const bgOptions = this.state.eduBackground.map(background => <Option key={background}>{background}</Option>);
		const gradeOptions = this.state.eduGrade.map(grade => <Option key={grade}>{grade}</Option>);
		return (
			<div className="edu-content fl">
				<div className="edu-content-head">
					<div className="edu-content-title fl">我的班级</div>
					<button className="edu-content-return fr" onClick={() => this.props.history.goBack()}>返回上一级</button>
				</div>
				<div className="edu-content-addclass">
					<span>尊敬的<span style={{ color: '#3ca8f0' }}>老师（刘老师）</span>，请填写班级信息：</span>
					<Form
						{...layout}
						className="edu-content-form"
						name="addClass"
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
					{/* 学校 */}
						<Form.Item
							label="学校"
							name="school"
							className="h36"
						>
							<Input placeholder="请输入学校" style={{ width: 400, height:36 }}/>
						</Form.Item>
					{/* 学段 */}
						<Form.Item
							label="学段"
							name="background"
							rules={[
								{
									required: true,
									message: '请选择学段!',
								},
							]}
						>
							<Select style={{ width: 400, height:36 }} onChange={(bg) => this.handleBgChange(bg)} name="period" placeholder="请选择学段">
								{bgOptions}
							</Select>
						</Form.Item>
					{/* 年级 */}
						<Form.Item
							label="年级"
							name="grade"
							rules={[
								{
									required: true,
									message: '请选择年级!',
								},
							]}
						>
							<Select style={{ width: 400, height:36 }} placeholder="请选择年级">
								{gradeOptions}
							</Select>
						</Form.Item>
					{/* 班级名 */}
						<Form.Item
							label="班级名"
							name="classname"
							className="h36"
							rules={[
								{
									required: true,
									message: '请输入班级名称!',
								},
								{
									max: 20,
									message: '限20个字符!',
								},
								{
									pattern: /[^_%]+$/,
									message: '格式错误，不支持输入_和%!',
								},
							]}
						>
							<Input placeholder="请输入班级名称，限20个字符，不支持输入_和%" style={{ width: 400, height:36 }} />
						</Form.Item>
					{/* 类型 */}
						<Form.Item 
							name="type" 
							label="类型" 
							style={{ margin:'-10px 0px 5px 0px' }} 
							rules={[
								{
									required: true,
									message: '请选择类型!',
								},
							]}>
							<Radio.Group>
								<Radio value="admin">行政班</Radio>
								<Radio value="teach">教学班</Radio>
							</Radio.Group>
						</Form.Item>
					{/* 退出权限设置  */}
						<Form.Item name="radio-group-authority" label="退出权限设置" >
							<Radio.Group>
								<Radio value="p_allow">允许退出</Radio>
								<Radio value="p_examine">通过班级管理员审核后退出</Radio>
								<Radio value="p_ban">禁止退出</Radio>
							</Radio.Group>
						</Form.Item>
					{/* 保存按钮 */}
						<Form.Item>
							<Button type="primary" htmlType="submit" style={{backgroundColor:'#3ca8f0',marginLeft:142}}>
								保存
        			</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
