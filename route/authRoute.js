const express = require ('express');
const { createUser, loginUser, forgotPassword, resetPassword, getallUsers, updateaUser, logOut, handleRefreshToken, updatePassword, forgotPasswordToken } = require('../controller/userCtrl');
const {authMiddleware} = require ("../middlewares/authMiddleware");
const router = express.Router();


router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password',authMiddleware, updatePassword);

router.post('/login', loginUser);
router.get('/all-users', getallUsers);

router.get('/refresh', handleRefreshToken);
router.get('/logout', logOut);

router.put('/edit-user',authMiddleware, updateaUser);


module.exports = router;