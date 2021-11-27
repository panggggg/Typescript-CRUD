import {Router} from 'express'
import * as userInfoController from '../controllers/userInfo.controller'

const router = Router()

router.route('/users').get(userInfoController.getAllUser)
router.route('/users').post(userInfoController.createNewUserInfo)
router.route('/users/:id').get(userInfoController.getUserById)
router.route('/users/:id').put(userInfoController.updateUserInfo)
router.route('/users/:id').delete(userInfoController.deleteUserInfo)

module.exports = router
