import axios from 'axios'
import CONF from '../config.json'
//const baseURL = "http://" + CONF.BACKEND_DOMAIN + ":" + CONF.BACKEND_PORT 
const baseURL = "http://" + window.location.hostname + ":" + CONF.BACKEND_PORT 

export default {
/**
  * backend-server から勤務情報を取得する
  */
  async getWork (groupName) {
    let url
    if(groupName == undefined){
      // 全員の情報
      url = baseURL + '/api/works'
    } else {
      if(groupName == 'all'){
        // 全員の情報
        url = baseURL + '/api/works'
      } else {
        // 特定グループの情報
        url = baseURL + '/api/works/' + groupName
      }
    }
    const response = await axios({
      method: 'get',
      url: url,
    })
    return response.data
  },
/**
  * backend-server からグループ定義データを取得する
  */
  async getDefGroups () {
    const response = await axios({
      method: 'get',
      url: baseURL + '/api/defGroups'
    })
    return response.data
  },
/**
  * backend-server から勤務タイプ定義データを取得する
  */
  async getDefWorkTypes () {
    const response = await axios({
      method: 'get',
      url: baseURL + '/api/defWorkTypes'
    })
    return response.data
  },
/**
  * backend-server から会社定義データを取得する
  */
  async getDefCompanies () {
    const response = await axios({
      method: 'get',
      url: baseURL + '/api/defCompanies'
    })
    return response.data
  },
/**
 * 
 */
  async putWorkById (data){
    const response = await axios({
      method: 'put',
      url: baseURL + '/api/users/' + data._id,
      data: data
    })
    return response.data
  }
}