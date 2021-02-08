import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
	render() {
		return (
			<div className="edu-header">
				<div className="edu-nav-container">
					<div className="edu-logo-box fl"></div>
					<div className="edu-nav fl">
						<ul className="edu-nav-list">
							<li className="fl edu-nav-item">
								<a href="###" className="">首页</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">教学管理</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">学习</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">资源超市</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">教育应用</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">新闻</a>
							</li>
							<li className="fl edu-nav-item">
								<a href="###">名师名校</a>
							</li>
							<li className="fl edu-nav-item">
								<div className="edu-newfunction"></div>
							</li>
						</ul>
					</div>
					<div className="edu-nav-search fl">
						<img src="../assets/search.png" alt="" />
					</div>
					<div className="edu-user fl">
						<div className="edu-user-head fl">
							<img src="../assets/head.png" alt=""/>
						</div>
						<span className="edu-user-name fl">
							Coco
                		</span>
					</div>
				</div>
			</div>
		)
	}
}