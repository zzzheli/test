angular.module('myApp')
    .factory('path',function () {
        return{
            //一、登录注册模块
            //注册-发送短信-验证短信
            registerMsgCode: function () {
                return '/happywater-ajax/u/client/o/user/register/msgcode'
            },
            //注册-设置密码
            settingPassword: function () {
                return '/happywater-ajax/u/client/o/user/register/password'
            },

            //登录
            frontLogin: function () {
                return '/happywater-ajax/u/client/o/user/login/account'
            },

            //重置密码-验证短信
            resetMsgCode: function () {
                return '/happywater-ajax/u/client/o/user/reset/msgcode'
            },
            //重置
            resetPassword: function () {
                return '/happywater-ajax/u/client/o/user/reset/password'
            },

            //退出登录
            logout: function (id) {
                return '/happywater-ajax/u/client/i/user/my/setting/logout/' + id
            },

            //二、首页模块
            //鼎力推荐
            getRecommendation: function () {
                return 'happywater-ajax/u/client/o/user/home/recommendation'
            },
            //Banner
            getBanner: function () {
                return '/happywater-ajax/u/client/o/user/home/banner'
            },

            //三、金融模块
            //获取产品
            getProducts: function (id) {
                return '/happywater-ajax/u/client/i/user/products/' + id
            },
            //产品购买记录
            getProductRecords: function (id) {
                return '/happywater-ajax/u/client/i/user/products/records/' + id
            },
            //获取银行卡信息
            getBankInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/products/investment/' + id
            },
            //确认购买 信息
            buyConfirmInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/products/determination/' + id
            },
            //确认购买发验证码
            buyConfirmGetCode: function (id) {
                return '/happywater-ajax/u/client/i/user/products/payment/msgcode/' + id
            },
            //确认购买验验证码
            buyConfirmPostCode: function (id) {
                return '/happywater-ajax/u/client/i/user/products/payment/' + id
            },


            // 四、用户“我的”模块
            //获取个人信息
            getUserInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/' + id
            },
            //未读消息数
            unreadMsg: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/msg/' + id
            },


            //实名认证
            //认证个人信息
            verifyUserInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/identification/' + id
            },
            //认证卡号信息
            verifyCardInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/identification/card/' + id
            },
            //认证发短信
            getVerifyMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/identification/card/msgcode/' + id
            },
            //短信校验：
            verifyMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/identification/card/verification/' + id
            },


            //更换手机
            //获取手机信息
            changeUserPhone: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/phone/' + id
            },
            //发送短信
            changeMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/phone/msgcode/' + id
            },
            //验证验证码
            changeVerifyMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/phone/msgcode/verification/' + id
            },
            //发送新短信
            newMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/phone/new/msgcode/' + id
            },
            //验证新短信
            verifyNewMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/info/phone/new/msgcode/verification/' + id
            },

            //修改密码
            changeUserPassword: function (id) {
                return '/happywater-ajax/u/client/i/user/my/setting/password/' + id
            },
            //消息中心
            userMessages: function (id) {
                return '/happywater-ajax/u/client/i/user/my/messages/' + id
            },
            //我的理财
            userFinancial: function (id) {
                return '/happywater-ajax/u/client/i/user/my/investment/' + id
            },
            //预约续投
            reserveInvestment: function (id) {
                return '/happywater-ajax/u/client/i/user/my/investment/book/' + id
            },
            //取消续投
            cancelInvestment: function (id) {
                return '/happywater-ajax/u/client/i/user/my/investment/debook/' + id
            },
            //交易记录
            transactionRecord: function (id) {
                return '/happywater-ajax/u/client/i/user/my/transaction/record/' + id
            },
            //意见反馈
            userFeedBack: function (id) {
                return '/happywater-ajax/u/client/i/user/my/idea/' + id
            },

            //银行卡
            //银行卡列表
            getBankIdList: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/' + id
            },
            //银行卡信息
            getBankIdInfo: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/info/' + id
            },
            //获取短信验证码 解绑银行卡
            untieBankGetCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/debook/msgcode/' + id
            },
            //解绑验证
            untieBankDelete: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/debook/msgcode/verification/' + id
            },
            //添加 提交卡号
            addBankCardNum: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/' + id
            },
            //添加 提交手机号
            addBankPhoneNum: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/phone/' + id
            },
            //添加 获取短信验证码
            addBankGetCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/phone/msgcode/' + id
            },
            //添加 验证短信
            addBankMsgCode: function (id) {
                return '/happywater-ajax/u/client/i/user/my/bank/card/phone/msgcode/verification/' + id
            },






            // 附：
            //判断卡类型
            discernCardType: function (cardNo) {
                return 'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=' + cardNo + '&cardBinCheck=true'
            }
        }
    });