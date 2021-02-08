import request from './request'

export function getClassList() {
	return request({
		url: '/list',
		method: 'get'
	})
}

export function getMemberCard(params) {
	return request({
		url: '/list/' + params,
		method: 'get'
	})
}

export function postNewClass(params) {
	return request({
		url: '/list',
		method: 'post',
		data: params
	})
}