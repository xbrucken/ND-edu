import React, { Component } from 'react'

export default class MemberCard extends Component {
	state = {
		tagSrc: ['']
	}

	render() {
		const { tagSrc, memberName } = this.props
		return (
			<ul>
				<li className="detail-item fl">
					<div className="detail-item-pic">
						{
							tagSrc.length > 0 ? <img src={tagSrc[0]} className="fr" alt="" /> : ''
						}
						{
							tagSrc.length > 1 ? <img src={tagSrc[1]} className="fr" alt="" /> : ''
						}
					</div>
					<div className="mask">
						{
							tagSrc.map((item) => {
								return <img src={item} key={Math.random()} className="fl" alt="" />
							})
						}
					</div>
					<div className="detail-item-name">{memberName}</div>
				</li>
			</ul>
		)
	}
}