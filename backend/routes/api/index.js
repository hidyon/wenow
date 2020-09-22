/**
 * router for /api
 */

const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/usersController')
const defGroupsController = require('../../controllers/defGroupsController')
const defWorkTypesController = require('../../controllers/defWorkTypesController')
const defCompaniesController = require('../../controllers/defCompaniesController')

// 勤務情報の提供
router.get('/works/', usersController.doGet)
// 指定グループの勤務情報の提供
router.get('/works/:group', usersController.doGetByGroup)
// 指定の勤務者情報の提供
router.get('/users/:id', usersController.doGetById)
// グループ定義の提供
router.get('/defGroups', defGroupsController.doGet)
// 勤務タイプ定義の提供
router.get('/defWorkTypes', defWorkTypesController.doGet)
// 会社定義の提供
router.get('/defCompanies', defCompaniesController.doGet)

module.exports = router

