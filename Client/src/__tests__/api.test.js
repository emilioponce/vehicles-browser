import mockAxios from 'axios'
import mockTaxiVehicles from '../__mocks__/mockTaxiVehicles'
import mockUberVehicles from '../__mocks__/mockUberVehicles'
import { getTaxis, getUbers } from '../api'
import { ENDPOINT_TAXI, ENDPOINT_UBER } from '../config/constants'

describe('API', () => {
  it('fetches taxi vehicles', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockTaxiVehicles)
    )
    const taxis = await getTaxis()
    expect(taxis).toEqual(mockTaxiVehicles)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(ENDPOINT_TAXI)
  })

  it('fetches uber vehicles', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockUberVehicles)
    )
    const taxis = await getUbers()
    expect(taxis).toEqual(mockUberVehicles)
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    expect(mockAxios.get).toHaveBeenCalledWith(ENDPOINT_UBER)
  })
})
