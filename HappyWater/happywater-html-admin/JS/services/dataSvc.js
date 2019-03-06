angular.module('myApp')
    .factory('myService',function($http, path){

        return{
            // 登陆注销
            // login
            login: function (data) {
                return $http.post(path.login,data)
            },
            // logout
            logout: function(id){
                return $http.get(path.logout(id))
            },
            // getModule
            getModule: function(id){
                return $http.get(path.getModule(id))
            },

            //后台管理
            // addAccount
            addAccount: function(params){
                return $http.post(path.postAccount(),params)
            },
            // getAccountDetail
            getAccountDetail: function(id){
                return $http.get(path.modifyAccount(id))
            },
            // editAccount
            editAccount: function(id,params){
                return $http.put(path.modifyAccount(id),params)
            },
            // deleteAccount
            deleteAccount: function(id){
                return $http.delete(path.modifyAccount(id))
            },
            // getAccounts
            getAccounts: function(params){
                return $http.get(path.getAccounts(),{
                    params: params
                })
            },
            // searchAccount
            searchAccount: function(params){
                return $http.get(path.searchAccount(),{
                    params: params
                })
            },
            // getRole(账户管理-获取角色列表)
            getRoleFilter: function(){
                return $http.get(path.getRoleFilter())
            },

            // addModule
            addModule: function(data){
                return $http.post(path.addModule(), data)
            },
            // editModule
            editModule: function(id,params){
                return $http.put(path.modifyModule(id),params)
            },
            // deleteModule
            deleteModule: function(id){
                return $http.delete(path.modifyModule(id))
            },
            // getModules
            getModules: function(params){
                return $http.get(path.getModules(),{
                    params: params
                })
            },
            getModuleDetail: function(id){
                return $http.get(path.getModuleDetail(id))
            },
            // searchModule
            searchModule: function(params){
                return $http.get(path.searchModule(),{
                    params: params
                })
            },
            // changePassword
            changePassword: function(id,params,config){
                return $http.put(path.changePassword(id),$.param(params),config)
            },

            // 获取角色信息
            getRoleDetail: function(id){
                return $http.get(path.getRoleDetail(id))
            },
            getModuleRight: function(){
                return $http.get(path.getModuleRight())
            },
            // addRole
            addRole: function(data){
                return $http.post(path.getRole(),data)
            },
            // editRole
            editRole: function(id,data){
                return $http.put(path.modifyRole(id),data)
            },
            // deleteRole
            deleteRole: function(id){
                return $http.delete(path.modifyRole(id))
            },
            // getRoles(角色管理-获取所有角色)
            getRoles: function(params){
                return $http.get(path.getRoles(),{
                    params: params
                })
            },
            // searchRole
            searchRole: function(params){
                return $http.get(path.searchRole(),{
                    params: params
                })
            },

            //运营管理
            // editBanner
            editBanner: function(id,params,config){
                return $http.put(path.modifyBanner(id),$.param(params),config)
            },
            // deleteBanner
            deleteBanner: function(id){
                return $http.delete(path.modifyBanner(id))
            },
            // searchBanner
            searchBanner: function(params){
                return $http.get(path.searchBanner(),{
                    params: params
                })
            },
            // putBanner
            putBanner: function(id,params){
                return $http.put(path.putBanner(id),params)
            },
            // getBannerDetail
            getBannerDetail: function(id){
                return $http.get(path.getBannerDetail(id))
            },
            //addBanner
            addBanner: function(params,config){
                return $http.post(path.postBanner(),$.param(params),config)
            },


            // addMessage
            addMessage: function(){
                return $http.post(path.postMessage)
            },
            // editMessage
            editMessage: function(id){
                return $http.put(path.modifyMessage(id))
            },
            // deleteMessage
            deleteMessage: function(id){
                return $http.delete(path.modifyMessage(id))
            },
            // cancelMessage
            cancelMessage: function(id){
                return $http.put(path.cancelMessage(id))
            },
            // searchMessage
            searchMessage: function(params){
                return $http.get(path.searchMessage(),{
                    params:params
                })
            },
            // getMessageDetail
            getMessageDetail: function(id){
                return $http.get(path.getMessageDetail(id))
            },


            // searchRecommendation(get list)
            searchRecommendation: function(params){
                return $http.get(path.searchRecommendation(), {
                    params:params
                })
            },
            // getRecommendations
            getRecommendationDetail: function(id){
                return $http.get(path.getRecommendationDetail(id))
            },
            // addRecommendation
            addRecommendation: function(params,config){
                return $http.post(path.postRecommendation(),$.param(params),config)
            },
            // editRecommendation
            editRecommendation: function(id,params,config){
                return $http.put(path.modifyRecommendation(id),$.param(params),config)
            },
            // deleteRecommendation
            deleteRecommendation: function(id){
                return $http.delete(path.modifyRecommendation(id))
            },
            // putRecommendation
            putRecommendation: function(id){
                return $http.put(path.putRecommendation(id))
            },



            // searchSuggestion
            searchSuggestion: function(params){
                return $http.get(path.searchSuggestion(),{
                    params: params
                })
            },
            // getSuggestDetail
            getSuggestDetail: function(id){
                return $http.get(path.getSuggestDetail(id))
            },
            // replySuggestion
            replySuggestion: function(id,params){
                return $http.post(path.modifySuggestion(id),params)
            },
            // deleteSuggestion
            deleteSuggestion: function(id){
                return $http.delete(path.modifySuggestion(id))
            },
            // viewSuggestion
            viewSuggestion: function(id){
                return $http.get(path.viewSuggestion(id))
            },






            // ------------------------------------业务管理-------------------------------



            // ------用户管理:

            // 用户冻结
            userLock: function(id,params,config){
                return $http.put(path.userLock(id),$.param(params),config)
                //序列化对象：根据接口形式(RequestParam,www-form)
            },
            //模糊查询 用户
            userSearch: function(params){
                return $http.get(path.userSearch(),{params : params})
            },
            //更换手机 发短信 用户
            userChangePhoneGet: function(params){
                return $http.get(path.userChangePhoneGet(),{params : params})
            },
            //更换手机 用户
            userChangePhonePut: function(id,params,config){
                return $http.put(path.userChangePhonePut(id),$.param(params),config)
            },
            //用户详情 交易记录
            userInfoDeal: function(id,params){
                return $http.get(path.userInfoDeal(id),{params : params})
            },
            //用户详情 合同
            userInfoCompact: function(id,params){
                return $http.get(path.userInfoCompact(id),{params : params})
            },





            //------产品管理:

            // 产品上架
            lineProduct: function(id,params,config){
                return $http.put(path.lineProduct(id),$.param(params),config)
                //序列化对象：根据接口形式(RequestParam www-form)
            },
            // 产品删除
            deleteProduct: function(id){
                return $http.delete(path.deleteProduct(id))
            },
            // 产品编辑
            putProduct: function(id,params){
                return $http.put(path.putProduct(id),params)
            },
            // 产品新增
            postProduct: function(params){
                return $http.post(path.postProduct(),params)
            },
            //模糊查询 产品
            productSearch: function(params){
                return $http.get(path.productSearch(),{params : params})
            },
            //编辑产品 根据id获取
            editorProductGet: function(id){
                return $http.get(path.editorProductGet(id))
            },





            //------债权管理:

            // 债权删除
            deleteDebt: function(id){
                return $http.delete(path.deleteDebt(id))
            },
            // 债权编辑
            putDebt: function(id,params,config){
                return $http.put(path.putDebt(id),$.param(params),config)
                //序列化对象：根据接口形式(RequestParam www-form)
            },
            // 债权新增
            postDebt: function(params,config){
                return $http.post(path.postDebt(),$.param(params),config)
            },
            //模糊查询 债权
            debtSearch: function(params){
                return $http.get(path.debtSearch(),{params : params})
            },
            //编辑债权 根据id获取
            editorDebtGet: function(id){
                return $http.get(path.editorDebtGet(id))
            },
            //债权匹配 推荐债权
            matchingDebtGet: function(id){
                return $http.get(path.matchingDebtGet(id))
            },
            //确认匹配
            matchingDebtPost: function(id,params){
                return $http.post(path.matchingDebtPost(id),params)
            },
            //债权匹配 查看合同
            checkCompact: function(id){
                return $http.get(path.checkCompact(id))
            },

        }

    });
