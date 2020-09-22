const mongoose = require('mongoose')
/**
 *  勤務タイプの定義のデータモデル 
 */
const DefWorkTypeSchema = new mongoose.Schema({
  // 勤務タイプ
  workType : String,
})

module.exports = mongoose.model("defWorkType", DefWorkTypeSchema)

