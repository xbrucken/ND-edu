import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ClassCard from '../../components/ClassCard'
import { getClassList } from '../../api/api'
import './index.css'

export default class MyClass extends Component {
	state = {
		classList: [
			{
				grade: '',
				className: '',
				classTeach: '',
				studentNumber: '',
				type: ''
			}
		]
	}
	componentDidMount() {
		getClassList().then((res) => {
			let newClassList = res;
			this.setState({ classList: newClassList })
		}).catch((err) => {
			console.log(err)
		})
	}
	render() {
		const { classList } = this.state
		return (
			<div className="edu-content fl">
				<div className="edu-content-head">
					<div className="edu-content-title fl">我的班级</div>
					<button className="edu-content-title-button join">加入班级</button>
					<NavLink to="/addClass">
						<button className="edu-content-title-button create">创建班级</button>
					</NavLink>
				</div>
				<div className="edu-content-subtitle">
					行政班是为学生管理和教学管理而设置的班级
        		</div>
				<div className="box">
					{
						classList.map((item, key) => {
							if (item.type === 'admin')
								return (
									<Link to={`/showMember/${item.id}`}>
										<ClassCard key={key} {...item} />
									</Link>
								)
							else
								return ''
						})
					}
				</div>
				<div className="edu-content-subtitle">
					教学班是根据课程教学要求而设置的班级
        		</div>
				<div className="box">
					{
						classList.map((item, key) => {
							if (item.type === 'teach') {
								return (
									<Link to={`/showMember/${item.id}`}>
										<ClassCard key={key} {...item} />
									</Link>
								)
							}
							else
								return ''
						})
					}
				</div>
			</div>
		)
	}
}
