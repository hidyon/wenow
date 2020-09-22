const DefWorkTypeModel = require('../models/defWorkType.js')

module.exports =  {
  /**
   * defWorkType　コレクションの全文書を取得する
   *　（登録されている会社名をすべて取得する）
   */
  doGet : (req, res, next) => {
    DefWorkTypeModel.find(
      (err, result) => {
        if(!err){
          res.send(result)
        } else {
          console.log(err)
          return res.status(500).send('faild: doGet')
        }
      }
    )
  },
  /**
   * defWorkType　コレクションに文書を追加する
   *　（会社名を追加登録する）
   */
  doPost : (req, res, next) => {

    let postData = new DefWorkTypeModel(req.body)
    postData.save((err, result) => {
      if(!err){
        res.send(result)
      } else {
        console.log(err)
        return res.status(500).send('faild: doPost')
      }
    })
  },
  /**
   * defWorkType　コレクションの特定文書を更新する
   *　（会社名を更新する）
   */
  doPutById : (req, res, next) => {

    let putReqData = req.body
    DefWorkTypeModel.findOneAndUpdate( 
      { _id : req.params.id }, 
      {$set: putReqData}, 
      (err, result) =>{
        if(!err){
          res.send(result)
        } else {
          console.log(err)
          return res.status(500).send('faild: doPutById')
        }
      }
    )
  },
}
