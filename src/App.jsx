//创建“外壳”组件App
import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AddClass from './pages/AddClass'
import ShowMember from './pages/ShowMember'
import MyClass from './pages/MyClass'

import './App.css'

//创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="edu-main">
					<Sidebar/>
					<div>
						<Switch>
							<Route path="/myClass" component={MyClass}/>
							<Route path="/addClass" component={AddClass}/>
							<Route path="/showMember/:id" component={ShowMember}/>
							<Redirect to="/myClass"/>
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}
