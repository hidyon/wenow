const mongoose = require('mongoose')
/**
 *  勤務者のデータモデル
 */
const UserSchema = new mongoose.Schema({
  // 勤務者Id
  id : String,
  // 勤務者名
  name : String,
  // e-mail
  email : String,
  // 連絡先TEL
  phoneNumber : String,
  // 属するグループ
  groups : [ { groupName : String } ],
  // 勤務情報
  works : [ { date: String, workType: String, workStatus: String}],
  // 属する会社
  companyName : String,
  // 情報更新日時
  update : {type : Date, default : Date.now},
})

module.exports = mongoose.model("user", UserSchema)