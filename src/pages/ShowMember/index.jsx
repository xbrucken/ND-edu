import React, { Component } from 'react'
import MemberCard from '../../components/MemberCard'
import { getMemberCard } from '../../api/api'
import './index.css'

export default class ShowMember extends Component {
	state = {
		id: this.props.match.params.id,
		search:'',
		className:'',
		memberList: [
			{
				imgSrc: '',
				tagSrc: [''],
				memberName: ''
			}
		],
		memberListConst:[],
		parents: [],
		teachers: [],
		students: [],
		paLenth: 0,
		teaLenth: 0,
		stuLenth: 0
	}

	componentDidMount() {
		getMemberCard(this.state.id).then((res) => {
			// console.log(res);
			this.setState({ 
				className:res.className,
				parents: res.parents,
				teachers: res.teachers,
				students: res.students,
				paLenth: res.parents.length,
				teaLenth: res.teachers.length,
				stuLenth: res.students.length
			})
			this.setState({ 
				memberList: res.teachers,
				memberListConst: res.teachers
			})
		}).catch((err) => {
			console.log(err)
		})
	}
    // 回车键搜索
	handleKeyUp = (event)=>{
		const {keyCode,target} = event
		//判断是否是回车按键
		if(keyCode !== 13) return
		this.searchMember(target.value)
	}
    // 按钮搜索
	handleButtonSearch= (event)=>{
		let keyword = event.target.parentNode.children[0].value
		this.searchMember(keyword)
	}

	searchMember = (keyword)=>{
		let newList = this.state.memberListConst.filter((item)=>{
			return item.memberName.includes(keyword)
		})
		this.setState({ memberList:newList })
	}

	//老师/学生/家长
	handleRoleChange = (event) => {
		event.target.parentNode.childNodes.forEach((e) => {
			if (e.classList.contains('options-chosen'))
				e.classList.remove('options-chosen')
		})
		event.target.classList.add('options-chosen')
		if(event.target.id === 'teachers') {
			this.setState({ memberListConst: this.state.teachers,memberList: this.state.teachers})
		} else if(event.target.id === 'students') {
			this.setState({ memberListConst: this.state.students,memberList: this.state.students})
		} else {
			this.setState({ memberListConst: this.state.parents,memberList: this.state.parents})
		}
	}

	render() {
		const { className,memberList, paLenth, teaLenth, stuLenth} = this.state
		return (
			<div className="edu-content fl">
				<div className="edu-content-head">
					<div className="edu-content-title fl">我的班级</div>
					<button className="edu-content-return fr" onClick={() => this.props.history.goBack()}>返回上一级</button>
				</div>
				<div className="edu-content-class">
					<span className="edu-content-classname">{className}</span>
					<div className="edu-content-search fr">
						<input onKeyUp={(event) =>this.handleKeyUp(event)} type="text" className="fl" placeholder="快捷查找" />
						<img onClick={(event) =>this.handleButtonSearch(event)} src="../assets/input-search.png" alt="" className="fl" />
					</div>
				</div>
				<div className="edu-content-detail">
					<div className="edu-content-detail-header">
						<ul onClick={(event) => this.handleRoleChange(event)}>
							<li id="teachers" className="edu-content-detail-options fl options-chosen">
								所有老师（{teaLenth}）
                        	</li>
							<li id="students" className="edu-content-detail-options fl">
								所有学生（{stuLenth}）
                        	</li>
							<li id="parents" className="edu-content-detail-options fl">
								所有家长（{paLenth}）
                        	</li>
						</ul>
					</div>
					<div className="edu-content-detail-bd clearfix">
						<ul>
							{
								memberList.map( (item) => {
									  return <MemberCard key={Math.random()} {...item} />
								  })
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}