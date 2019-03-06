angular.module('myApp')
    .factory('path',function(){
        return{

            // 登录
            login: '/happywater-admin-ajax/a/rbac/login',

            // 注销
            logout: function(id){
                return '/happywater-admin-ajax/a/rbac/logout/' + id
            },
            //获取模块（侧边栏）
            getModule: function(id){
                return '/happywater-admin-ajax/a/rbac/modules/' + id
            },


            // 后台管理
            // 新增账户
            postAccount: function(){
                return '/happywater-admin-ajax/a/rbac/background/account/account'
            },
            // 编辑/删除账户
            modifyAccount: function(id){
                return '/happywater-admin-ajax/a/rbac/background/account/account/' + id
            },
            //获取所有账户
            getAccounts: function(){
                return '/happywater-admin-ajax/a/rbac/background/account/accounts'
            },
            //查询账户
            searchAccount: function(){
                return '/happywater-admin-ajax/a/rbac/background/account/accountssearch'
            },
            //获取筛选角色列表
            getRoleFilter: function(){
                return '/happywater-admin-ajax/a/rbac/background/account/roles'
            },

            //增删改模块
            modifyModule: function(id){
                return '/happywater-admin-ajax/a/rbac/background/module/module/' + id
            },
            addModule: function(){
                return '/happywater-admin-ajax/a/rbac/background/module/module/'
            },
            //获取所有模块
            getModules: function(){
                return '/happywater-admin-ajax/a/rbac/background/module/modules'
            },
            getModuleDetail: function(id){
                return '/happywater-admin-ajax/a/rbac/background/module/module/' + id
            },
            //查询模块
            searchModule: function () {
                return '/happywater-admin-ajax/a/rbac/background/module/modulessearch'
            },

            //更换密码
            changePassword: function (id) {
                return '/happywater-admin-ajax/a/rbac/background/password/password/' + id
            },

            //获取、添加角色
            getRole: function () {
                return '/happywater-admin-ajax/a/rbac/background/role/role'
            },
            //编辑、修改角色
            modifyRole: function (id) {
                return '/happywater-admin-ajax/a/rbac/background/role/role/' + id
            },
            //获取权限
            getModuleRight: function(){
                return '/happywater-admin-ajax/a/rbac/background/role/module'
            },
            //获取所有角色
            getRoles: function () {
                return '/happywater-admin-ajax/a/rbac/background/role/roles'
            },
            getRoleDetail: function (id) {
                return '/happywater-admin-ajax/a/rbac/background/role/role/' + id
            },
            //查询角色
            searchRole: function(){
                return '/happywater-admin-ajax/a/rbac/background/role/rolessearch'
            },



            //运营管理
            //banner新增
            postBanner: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/banner'
            },
            // banner编辑删除
            modifyBanner: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/banner/' + id
            },
            //banner详情
            getBannerDetail: function(id){
                return 'happywater-admin-ajax/a/operation/background/operation/banner/' + id
            },
            //查询banner
            searchBanner: function(){
                return '/happywater-admin-ajax/a/operation/background/operation/bannerssearch'
            },
            // banner上下架
            putBanner: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/banner/status/' + id
            },

            //查询消息
            searchMessage: function(){
                return '/happywater-8080-ajax/background/operation/messagessearch'
            },
            //获取消息详情
            getMessageDetail: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/message/' + id
            },
            //新增消息
            postMessage: function(){
                return '/happywater-admin-ajax/manager/operation/message'
            },
            //消息编辑、删除
            modifyMessage: function(id){
                return '/happywater-admin-ajax/manager/operation/message/' + id
            },
            //取消发送
            cancelMessage: function(id){
                return '/happywater-admin-ajax/manager/operation/message/cancel/' + id
            },


            //查询推荐（获取列表）
            searchRecommendation: function(){
                return '/happywater-admin-ajax/a/operation/background/operation/recommendationssearch'
            },
            //鼎力推荐详情
            getRecommendationDetail: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/recommendation/' + id
            },
            //新增推荐
            postRecommendation: function(){
                return '/happywater-admin-ajax/a/operation/background/operation/recommendation'
            },
            //推荐编辑、删除
            modifyRecommendation: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/recommendation/' + id
            },
            //推荐上下架
            putRecommendation: function (id) {
                return '/happywater-admin-ajax/a/operation/background/operation/recommedation/status/' + id
            },



            //查询意见
            searchSuggestion: function () {
                return '/happywater-8080-ajax/background/operation/ideassearch'
            },
            //意见详情
            getSuggestDetail: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/idea/' + id
            },
            //查看意见（同上）
            viewSuggestion: function(id){
                return '/happywater-admin-ajax/a/operation/background/operation/idea/' + id
            },
            //意见回复
            getSuggestions: function () {
                return '/happywater-admin-ajax/manager/operation/suggestions'
            },
            //意见删除
            modifySuggestion: function(id){
                return '/happywater-admin-ajax/manager/operation/suggestion/' + id
            },







            // ------------------------------------业务管理-------------------------------


            //------用户管理:

            // 用户冻结
            userLock: function(id){
                return '/happywater-admin-ajax/a/business/business/user/status/' + id
            },
            //模糊查询 用户
            userSearch: function(){
                return '/happywater-admin-ajax/a/business/business/user/usersearching'
            },
            //更换手机 发短信 用户
            userChangePhoneGet: function(){
                return '/happywater-admin-ajax/a/business/business/user/phonemsg'
            },
            //更换手机 用户
            userChangePhonePut: function(id){
                return '/happywater-admin-ajax/a/business/business/user/phone/' + id
            },
            //用户详情 交易记录
            userInfoDeal: function(id){
                return '/happywater-admin-ajax/a/business/business/user/deals/' + id
            },
            //用户详情 合同
            userInfoCompact: function(id){
                return '/happywater-admin-ajax/a/business/business/user/compacts/' + id
            },




            //------产品管理:epelece

            // 产品上架
            lineProduct: function(id){
                return '/happywater-admin-ajax/a/business/business/product/status/' + id
            },
            // 产品删除
            deleteProduct: function(id){
                return '/happywater-admin-ajax/a/business/business/product/product/' + id
            },
            // 产品编辑
            putProduct: function(id){
                return '/happywater-admin-ajax/a/business/business/product/product/' + id
            },
            // 产品新增
            postProduct: function(){
                return '/happywater-admin-ajax/a/business/business/product/product'
            },
            //模糊查询 产品
            productSearch: function(){
                return '/happywater-admin-ajax/a/business/business/product/productssearching'
            },
            //编辑产品 根据id获取
            editorProductGet: function(id){
                return '/happywater-admin-ajax/a/business/business/product/product/' + id
            },




            //------债权管理:

            // 债权删除
            deleteDebt: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compact/' + id
            },
            // 债权编辑
            putDebt: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compact/' + id
            },
            // 债权新增
            postDebt: function(){
                return '/happywater-admin-ajax/a/business/business/company/company'
            },
            //模糊查询 债权
            debtSearch: function(){
                return '/happywater-admin-ajax/a/business/business/company/companiessearching'
            },
            //编辑债权 根据id获取
            editorDebtGet: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compact/' + id
            },
            //债权匹配 推荐债权
            matchingDebtGet: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compactsmatching/' + id
            },
            //确认匹配
            matchingDebtPost: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compactsmatching/' + id
            },
            //债权匹配 查看合同
            checkCompact: function(id){
                return '/happywater-admin-ajax/a/business/business/company/compacts/' + id
            },



        }
    });
