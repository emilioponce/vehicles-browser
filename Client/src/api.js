import axios from 'axios'

import { ENDPOINT_TAXI, ENDPOINT_UBER } from './config/constants'

const getData = url => {
  return axios.get(url).catch(error => {
    console.log('Error calling endpoint:', url)
  })
}

export const getTaxis = () => getData(ENDPOINT_TAXI)

export const getUbers = () => getData(ENDPOINT_UBER)
