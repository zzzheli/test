angular.module('myApp')
    .factory('cardType',function ($http, path) {
        return {
            discernCardType: function (cardNo) {
                return $http.get(path.discernCardType(cardNo));
            }
        }
    })
// 一、登录注册模块
    .factory('loginService',function ($http, path) {
        return{
            //注册-发送短信
            registerMsgCode: function (params) {
                return $http.get(path.registerMsgCode(), {params: params});
            },
            //验证短信
            verifyRegisterCode: function (params,config) {
                return $http.post(path.registerMsgCode(),params,config);
            },
            //注册-设置密码
            settingPassword: function (params,config) {
                return $http.post(path.settingPassword(),params,config);
            },
            //登录
            frontLogin: function (params,config) {
                return $http.post(path.frontLogin(),params,config);
                //requestParam formData写法
            },
            //重置-发短信
            resetMsgCode: function (params) {
                return $http.get(path.resetMsgCode(),{params: params});
            },
            //验证重置短信
            verifyResetCode: function (params,config) {
                return $http.post(path.resetMsgCode(),params,config);
            },
            //重置密码
            resetPassword: function (params,config) {
                return $http.post(path.resetPassword(),params,config);
            },
            //退出登录
            logout: function (id) {
                return $http.get(path.logout(id));
            }
        }
    })
// 二、首页模块
    .factory('homeService',function ($http, path) {
        return{
            //鼎力推荐
            getRecommendation: function (params) {
                return $http.get(path.getRecommendation(),{
                    params:params
                });
            },
            //Banner
            getBanner: function (params) {
                return $http.get(path.getBanner(),{
                    params:params
                });
            }
        }
    })
// 三、金融模块
    .factory('financialService',function ($http, path) {
        return{
            //获取产品
            getProducts: function (id) {
                return $http.get(path.getProducts(id));
            },
            //产品购买记录
            getProductRecords: function (id, params) {
                return $http.get(path.getProductRecords(id),{params: params})
            },
            //获取银行卡信息
            getBankInfo: function (id) {
                return $http.get(path.getBankInfo(id))
            },
            //确认购买 信息
            buyConfirmInfo: function (id,params,config) {
                return $http.post(path.buyConfirmInfo(id),params,config)
            },
            //确认购买发验证码
            buyConfirmGetCode: function (id,params) {
                return $http.get(path.buyConfirmGetCode(id),{params: params})
                //get请求 带参 (接口形式 params)
            },
            //确认购买验验证码
            buyConfirmPostCode: function (id,params,config) {
                return $http.post(path.buyConfirmPostCode(id),$.param(params),config)
                //序列化对象：根据接口形式(RequestParam,www-form)
            },

        }
    })
// 四、用户“我的”模块
    .factory('userService',function ($http, path) {
        return{
            // 获取个人信息
            getUserInfo: function (id) {
                return $http.get(path.getUserInfo(id));
            },
            //未读消息数
            unreadMsg: function (id) {
                return $http.get(path.unreadMsg(id));
            },


            //认证个人信息
            verifyUserInfo: function (id, data, config) {
                return $http.post(path.verifyUserInfo(id),data,config);
            },
            //认证卡号信息
            verifyCardInfo: function (id, params, config) {
                return $http.post(path.verifyCardInfo(id),params,config);
            },
            //认证发短信
            getVerifyMsgCode: function (id, params) {
                return $http.get(path.getVerifyMsgCode(id),{
                    params:params
                });
            },
            //短信校验
            verifyMsgCode: function (id, params, config) {
                return $http.post(path.verifyMsgCode(id),params,config);
            },


            //更换手机-获取手机信息
            changeUserPhone: function (id) {
                return $http.get(path.changeUserPhone(id));
            },
            //发送短信
            changeMsgCode: function (id, params) {
                return $http.get(path.changeMsgCode(id),{
                    params:params
                });
            },
            //验证短信
            changeVerifyMsgCode: function (id, params, config) {
                return $http.post(path.changeVerifyMsgCode(id),params,config);
            },
            //发送新短信
            newMsgCode: function (id, params) {
                return $http.get(path.newMsgCode(id),{
                    params:params
                });
            },
            //验证新短信
            verifyNewMsgCode: function (id, params, config) {
                return $http.post(path.verifyNewMsgCode(id),params,config);
            },


            //修改密码
            changeUserPassword: function (id, params, config) {
                return $http.post(path.changeUserPassword(id),params,config);
            },
            //消息中心
            userMessages: function (id) {
                return $http.get(path.userMessages(id));
            },
            //我的理财
            userFinancial: function (id) {
                return $http.get(path.userFinancial(id));
            },
            //预约续投
            reserveInvestment: function (id, params,config) {
                return $http.post(path.reserveInvestment(id),params,config);
            },
            //取消续投
            cancelInvestment: function (id, params,config) {
                return $http.post(path.cancelInvestment(id),params,config);
            },
            //交易记录
            transactionRecord: function (id) {
                return $http.get(path.transactionRecord(id));
            },
            //意见反馈
            userFeedBack: function (id, data, config) {
                return $http.post(path.userFeedBack(id), data, config);
            },
            //银行卡列表
            getBankIdList: function (id) {
                return $http.get(path.getBankIdList(id));
            },
            //银行卡信息
            getBankIdInfo: function (id) {
                return $http.get(path.getBankIdInfo(id));
            },
            //获取短信验证码 解绑银行卡
            untieBankGetCode: function (id,params) {
                return $http.get(path.untieBankGetCode(id),{params:params});
            },
            //解绑验证（delete formData 同 get params?）
            // untieBankDelete: function (id,params,config) {
            //     return $http.delete(path.untieBankDelete(id),params,config);
            // },
            untieBankDelete: function (id,params) {
                return $http.delete(path.untieBankDelete(id),{params:params});
            },
            //添加 提交卡号
            addBankCardNum: function (id,params,config) {
                return $http.post(path.addBankCardNum(id),params,config);
            },
            //添加 提交手机号
            addBankPhoneNum: function (id,params,config) {
                return $http.post(path.addBankPhoneNum(id),params,config);
            },
            //添加 获取短信验证码
            addBankGetCode: function (id) {
                return $http.post(path.addBankGetCode(id));
            },
            //添加 验证短信
            addBankMsgCode: function (id,params,config) {
                return $http.post(path.addBankMsgCode(id),params,config);
            },
        }
    });
