const DefGroupModel = require('../models/defGroup.js')

module.exports =  {
  /**
   * defGroup　コレクションの全文書を取得する
   *　（登録されている会社名をすべて取得する）
   */
  doGet : (req, res, next) => {
    DefGroupModel.find(
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
   * defGroup　コレクションに文書を追加する
   *　（会社名を追加登録する）
   */
  doPost : (req, res, next) => {

    let postData = new DefGroupModel(req.body)
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
   * defGroup　コレクションの特定文書を更新する
   *　（会社名を更新する）
   */
  doPutById : (req, res, next) => {

    let putReqData = req.body
    DefGroupModel.findOneAndUpdate( 
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
