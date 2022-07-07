import axios from 'axios'

const REACT_APP_API_URL = 'http://localhost:5000/'


const $host = axios.create({
	baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
	baseURL: REACT_APP_API_URL
})


const authInterceptor = (config) => {

	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`

	return config
}


// интерцептор - функция которая параметром принимает конфиг и подставляет наш токен к каждому запросу
// автоматически подставляем токен в хеадер authorization каждый запрос
$authHost.interceptors.request.use(authInterceptor)

export {
	$authHost,
	$host,
}