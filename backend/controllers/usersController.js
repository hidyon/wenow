const UserModel = require('../models/user.js')
const moment = require('moment-timezone')

module.exports =  {

  /**
   * すべてのユーザー情報を取得
   */
  doGet : (req, res, next) => {
    UserModel.find(
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
   * 指定グループのユーザー情報を取得
   */
  doGetByGroup : (req, res, next) => {
    const groupName = req.params.group
    UserModel.find(
      { groups : { $elemMatch: { groupName : groupName}}},
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
   * 指定ユーザー情報を取得
   */
  doGetById: (req, res, next) => {
    const id = req.params.id
    UserModel.find(
      { id : id},
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
   * ユーザー情報の新規登録
   */
  doPost : (req, res, next) => {

    let postData = new PersonModel(req.body)
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
   * 指定ユーザー情報の更新
   */
  doPutById : (req, res, next) => {

    let putReqData = req.body
    PersonModel.findOneAndUpdate( 
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


