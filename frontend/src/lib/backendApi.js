import axios from 'axios'
import CONF from '../config.json'
const baseURL = "http://" + CONF.BACKEND_DOMAIN + ":" + CONF.BACKEND_PORT 

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
  async getDefGroup () {
    const response = await axios({
      method: 'get',
      url: baseURL + '/api/defGroups'
    })
    return response.data
  },
}