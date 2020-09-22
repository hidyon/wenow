const mongoose = require('mongoose')
/**
 *  グループ定義のデータモデル
 */
const DefGroupSchema = new mongoose.Schema({
  // グループ名
  groupName : String,
})

module.exports = mongoose.model("defGroup", DefGroupSchema)

