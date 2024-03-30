import api_request from '../utils/axios'
import { errorNotify } from '../utils/toastUtils'
import { getReportsUrl } from './ApiUrl'

export const getData = async (params = null, url = getReportsUrl) => {
  try {
    const response = await api_request.get(url, { params })
    return response.data
  } catch (errors) {
    const errorMessages = errors.inner.map((error) => error.message)
    errorNotify(errorMessages.join('\n'))
    
  }
}

export const Login = async (params = null, url = getReportsUrl) => {
  try {
    const response = await api_request.get(url, { params })
    return response.data
  } catch (errors) {
    const errorMessages = errors.inner.map((error) => error.message)
    errorNotify(errorMessages.join('\n'))
  }
}