const mongoose = require('mongoose')
/**
 *  会社定義のデータモデル
 */
const DefCompanySchema = new mongoose.Schema({
  // 会社名
  companyName : String,
})

module.exports = mongoose.model("defCompany", DefCompanySchema)

