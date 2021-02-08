import React, { Component } from 'react'
import './index.css'

export default class ClassCard extends Component {
	state = {
		showSeting: false,
		showMark: false,
		imgUrl: ''
	}
	componentDidMount() {
		const type = this.props.type
		if (type === "teach") {
			this.setState({showSeting: true, imgUrl: '../assets/class_crown.png'})
		}
		else {
			this.setState({showMark: true, imgUrl: '../assets/class.png'})
		}
	}
	render() {
		const { grade, className, studentNumber, classTeach } = this.props
		const { showSeting, showMark, imgUrl } = this.state
		return (
			<div className="edu-content-subtitle-box"> 
				{
					showSeting ? <img className="edu-content-subtitle-box-setting" src="../assets/setting.png" alt="设置"/> : ''
				}
				<img className="edu-content-subtitle-box-pic" src={imgUrl} alt="班级图片"/>
				<div className="edu-content-subtitle-box-text">
					<div>{grade}</div>
					<div>
						<span className="edu-content-subtitle-box-text-class">班级 : </span>
						<span>{className}</span>
					</div>
					<div>
						<span className="edu-content-subtitle-box-text-class">班主任 : </span>
						<span className="edu-content-subtitle-box-text-name">{classTeach}</span>
					</div>
					<div>
						<span className="edu-content-subtitle-box-text-class">学生 : </span>
						<span>{studentNumber}</span>
					</div>
				</div>
				{
					showMark ? <div className="edu-content-subtitle-box-sort">行政班</div> : ''
				}
			</div>
		)
	}
}
