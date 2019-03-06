var app = angular.module('myApp',['ui.router','ngMessages','ui.bootstrap','ngCookies','oc.lazyLoad']);

//拦截器
function httpConfig($httpProvider){

    //拦截器，在请求发送之前拦下来给加一个token头
    $httpProvider.interceptors.push(function ($state,$rootScope,$cookies) {
        return {
            request: function(config){
                config.headers = config.headers || {};
                if($cookies.get('token')){
                    config.headers['JWT'] = $cookies.get('token');
                }
                return config;
            },
            response: function (response) {
                if (response.data.code === 1101 || response.data.code === 1102 || response.data.code === 1103 || response.data.code === 1104) {
                    $rootScope.modalAlert('提示', response.data.msg, function () {
                        $cookies.remove('token');
                        $cookies.remove('userData');
                        $state.go('login')
                    })
                } else {
                    return response;
                }
            }
        }
    })
}
//懒加载
function lazyLoadConfig($ocLazyLoadProvider){
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    })
}
app.config(httpConfig);
app.config(lazyLoadConfig);
app.config(['$cookiesProvider','$stateProvider','$urlRouterProvider', '$locationProvider',
    function ($cookiesProvider,$stateProvider,$urlRouterProvider,$locationProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            //登录、主页
            .state('login',{
                url: '/login',
                controller: 'loginCtrl as vm',
                templateUrl: 'View/admin/login.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login.js',
                        'CSS/modules/login.css'
                    ])
                }
            })
            .state('home',{
                url: '/home',
                controller: 'homeCtrl as vm',
                templateUrl: 'View/admin/home.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/home.js',
                        'CSS/modules/home.css'
                    ])
                }
            })

            //业务管理
            .state('home.user',{
                controller:'userCtrl as vm',
                url: '/user?pageNumber&pageSize&serialId&realName&status&phoneNumber',
                templateUrl: 'View/user/user.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/user/user.js',
                    ])
                }
            })
            .state('home.userInform',{
                url: '/userInform?serialId&phoneNum&card?type&realName&idCard&createdAt&balance&profit&id',
                controller: 'userInfoCtrl as vm',
                templateUrl: 'View/user/userInform.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/user/userInfo.js',
                    ])
                }
            })
            .state('home.deal',{
                url: '/deal?id&pageNumber&pageSize',
                controller: 'dealCtrl as vm',
                templateUrl: 'View/user/deal.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/user/deal.js',
                    ])
                }
            })
            .state('home.compact',{
                url: '/compact?id&pageNumber&pageSize&idCard',
                controller: 'compactCtrl as vm',
                templateUrl: 'View/user/compact.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/user/compact.js',
                    ])
                }
            })
            .state('home.seeCompact',{
                url: '/seeCompact?amount&idCard&realName&phoneNum',
                controller: 'seeCompact as vm',
                templateUrl: 'View/user/seeCompact.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/user/seeCompact.js',
                    ])
                }
            })

            .state('home.product',{
                controller:'productCtrl as vm',
                url: '/product?pageNumber&pageSize&serialId&productName&status&createdBy',
                templateUrl: 'View/product/product.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/product/product.js',
                    ])
                }
            })
            .state('home.newProduct',{
                url: '/newProduct?id',
                controller: 'newProductCtrl as vm',
                templateUrl: 'View/product/newProduct.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/product/newProduct.js',
                    ])
                }
            })

            .state('home.company',{
                controller:'debtCtrl as vm',
                url: '/debt?pageNumber&pageSize&serialId&companyName&status&debtPerson',
                templateUrl: 'View/debt/debt.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/debt/debt.js',
                    ])
                }
            })
            .state('home.newDebt',{
                url: '/newDebt?id',
                controller: 'newDebtCtrl as vm',
                templateUrl: 'View/debt/newDebt.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/debt/newDebt.js',
                    ])
                }
            })
            .state('home.matching',{
                url: '/matching?id&serialId&borrowMoney',
                controller: 'matchingCtrl as vm',
                templateUrl: 'View/debt/matching.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/debt/matching.js',
                    ])
                }
            })
            .state('home.checkDebt',{
                url: '/checkDebt?id&serialId',
                controller: 'checkDebtCtrl as vm',
                templateUrl: 'View/debt/checkDebt.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/debt/checkDebt.js',
                    ])
                }
            })

            //运营管理
            .state('home.bannere',{
                url: '/Banner?pageNumber&serialId&title&createdBy&status',
                controller: 'bannerCtrl as vm',
                templateUrl: 'View/banner/banner.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/banner/banner.js',
                    ])
                }
            })
            .state('home.newBanner',{
                url:'/newBanner?id',
                controller: 'newBannerCtrl as vm',
                templateUrl: 'View/banner/newBanner.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/banner/newBanner.js',
                    ])
                }
            })


            .state('home.recommendation',{
                url: '/recommend?pageNumber&pageSize&serialId&title&createdBy&updatedBy',
                controller: 'recommendCtrl as vm',
                templateUrl: 'View/recommend/recommend.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/recommend/recommend.js',
                    ])
                }
            })
            .state('home.newRecommend',{
                url:'/newRecommend?id',
                controller: 'newRecommendCtrl as vm',
                templateUrl: 'View/recommend/newRecommend.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/recommend/newRecommend.js',
                    ])
                }
            })


            .state('home.message',{
                url: '/message?pageNumber&pageSize&keyword&createdBy&status&startAt&endAt',
                controller: 'newsCtrl as vm',
                templateUrl: 'View/message/message.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/message/message.js',
                    ])
                }
            })
            .state('home.newNews',{
                url:'/newMessage?id',
                controller: 'newMessageCtrl as vm',
                templateUrl: 'View/message/newMessage.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/message/newMessage.js',
                    ])
                }
            })
            .state('home.newsDetail',{
                url:'/messageDetail?id',
                controller: 'messageDetailCtrl as vm',
                templateUrl: 'View/message/messageDetail.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/message/detail.js',
                    ])
                }
            })


            .state('home.idea',{
                url: '/opinion?pageNumber&serialId&keyWord&commitBy&phoneNumber',
                controller: 'suggestCtrl as vm',
                templateUrl: 'View/suggestion/suggestion.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/suggestion/suggestion.js',
                    ])
                }
            })
            .state('home.suggestReply',{
                url:'/suggestReply?id',
                controller: 'suggestReplyCtrl as vm',
                templateUrl: 'View/suggestion/suggestReply.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/suggestion/reply.js',
                    ])
                }
            })
            .state('home.suggestDetail',{
                url:'/suggestDetail?id',
                controller: 'suggestDetailCtrl as vm',
                templateUrl: 'View/suggestion/suggestDetail.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/suggestion/detail.js',
                    ])
                }
            })

            //后台管理
            .state('home.password',{
                url: '/password',
                controller: 'passwordCtrl as vm',
                templateUrl: 'View/password/password.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/password.js',
                    ])
                }
            })
            .state('home.account',{
                url: '/Account?pageSize&pageNumber&serialId&roleName&account&createdBy',
                controller: 'accountCtrl as vm',
                templateUrl: 'View/account/account.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/account/account.js',
                    ])
                }
            })
            .state('home.newAccount',{
                url:'/newAccount?id',
                controller: 'newAccountCtrl as vm',
                templateUrl: 'View/account/newAccount.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/account/newAccount.js',
                    ])
                }
            })
            .state('home.module',{
                url: '/Module?pageNumber&pageSize&moduleName&moduleFatherName&serialId&createdBy',
                controller: 'moduleCtrl as vm',
                templateUrl: 'View/module/module.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/module/module.js',
                    ])
                }
            })
            .state('home.newModule',{
                url:'/newModule?id',
                controller: 'newModuleCtrl as vm',
                templateUrl: 'View/module/newModule.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/module/newModule.js',
                    ])
                }
            })
            .state('home.role',{
                url: '/role?pageNumber&pageSize&serialId&roleName&updatedBy&createdBy',
                controller: 'roleCtrl as vm',
                templateUrl: 'View/role/role.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/role/role.js',
                    ])
                }
            })
            .state('home.newRole',{
                url:'/newRole?id',
                controller: 'newRoleCtrl as vm',
                templateUrl:'View/role/newRole.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/role/newRole.js',
                    ])
                }
            })
    }]);
app.run(['$rootScope',function($rootScope){
    //bootbox封装
    $rootScope.modalConfirm = function (titles, content, fn) {
        bootbox.confirm({
            title: titles,
            message: content,
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn-success'
                },
                confirm: {
                    label: '确认',
                    className: 'btn-danger'
                }
            },
            size: 'small',
            callback: fn
        })
    };
    $rootScope.modalAlert = function (titles, content, fn) {
        bootbox.alert({
            title: titles,
            message: content,
            size: 'small',
            callback: fn
        })
    }
}]);




