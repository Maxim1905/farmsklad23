import {
	$authHost,
	$host,
} from './index'

export const createType = async (type) => {

	console.log('type', type);

	const { data } = await $authHost.post('api/type', type)

	return data
}

export const getTypes = async () => {

	const { data } = await $host.get('api/type')

	return data

}

export const createBrand = async (brand) => {

	const { data } = await $authHost.post('api/brand', brand)

	return data
}

export const getBrands = async () => {

	const { data } = await $host.get('api/brand')

	return data

}

export const createDevice = async (device) => {

	const { data } = await $authHost.post('api/product', device)

	return data
}

export const getDevices = async (typeId, page, limit) => {
	const { data } = await $host.get('api/product', {
		params: {
			typeId, page, limit
		}
	})
	return data
}

export const getOneDevice = async (id) => {

	const { data } = await $host.get(`api/product/${id}`)

	return data

}
