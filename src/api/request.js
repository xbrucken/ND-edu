import axios from 'axios'

// 创建axios实例
const axiosInstance = axios.create({
	baseURL: "http://localhost:5000", // api的base_api
	timeout: 65000, // 请求超时
})
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 响应拦截器
axiosInstance.interceptors.response.use(
	response => {
		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
		// 否则的话抛出错误
		if (response.status === 200) {
			return response.data;
		} else if (response.status === 201) {
			return response.data;
		} else {
			return Promise.reject(new Error(response.data.message));
		}
	},
	// 服务器状态码不是2开头的的情况
	error => {
		return Promise.reject(error.response);
	})

export default axiosInstance