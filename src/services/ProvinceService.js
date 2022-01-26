import http from '../http-common'

class ProvinceService {
  getAll() {
    return http.get('/provinces')
  }

  districts(provinceId) {
    return http.get(`/provinces/${provinceId}/districts`)
  }

  communes(districtId) {
    return http.get(`districts/${districtId}/communes`)
  }

  villages(communeId) {
    return http.get(`communes/${communeId}/villages`)
  }
}

export default new ProvinceService()
