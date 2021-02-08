import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

export default class Sidebar extends Component {
	render() {
		return (
			<div className="edu-sidebar fl">
				<div className="edu-sidebar-title fl">
					<span className="edu-sidebar-title-icon">
						<img src="../assets/left.png" alt="" />
					</span>
					<span className="edu-sidebar-title-font">
						个人中心
					</span>
					<span className="fr">
						<img src="../assets/more.png" alt="" />
					</span>
				</div>
				<ul className="edu-sidebar-list fl">
					<li className="edu-sidebar-item">
						<span className="edu-sidebar-list-icon">
							<img src="../assets/menu1.png" alt="" />
						</span>
						<a href="###">其他内容</a>
					</li>
					<li className="edu-sidebar-item">
						<span className="edu-sidebar-list-icon">
							<img src="../assets/menu2.png" alt="" />
						</span>
						<a href="###">其他内容</a>
					</li>
					<li className="edu-sidebar-item">
						<span className="edu-sidebar-list-icon">
							<img src="../assets/menu3_chosen.png" alt="" />
						</span>
						<NavLink to="/myClass">我的班级</NavLink>
					</li>
					<li className="edu-sidebar-item">
						<span className="edu-sidebar-list-icon">
							<img src="../assets/menu4.png" alt="" />
						</span>
						<a href="###">其他内容</a>
					</li>
				</ul>
			</div>
		)
	}
}