var app = angular.module("myApp",['ui.router', 'oc.lazyLoad',  'ui.bootstrap', 'ngCookies', 'scroll-load', 'scroll-refresh']);


//拦截器
function httpConfig($httpProvider){
    //拦截器，在请求发送之前拦下来给加一个token头
    $httpProvider.interceptors.push(function ($rootScope,$cookies) {
        return {
            request: function(config){
                config.headers = config.headers || {};
                if($cookies.get('userToken')){
                    config.headers['JWT'] = $cookies.get('userToken');
                }
                return config;
            },
            response: function (response) {
                // console.log('请求结束……');
                // cookie/jwt失效
                if (response.data.code == -2) {
                    if (localStorage.loginForm) {
                        //清除个人信息
                        localStorage.removeItem("loginForm");
                    }
                    $rootScope.alert(response.data.code);
                    $rootScope.$state.go('login')
                } else {
                    return response;
                }
            }
        }
    })
}
function lazyLoadConfig($ocLazyLoadProvider){
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    })
}
app.config(httpConfig);
app.config(lazyLoadConfig);
app.config(['$cookiesProvider','$stateProvider','$locationProvider','$urlRouterProvider','$httpProvider',
    function ($cookiesProvider,$stateProvider,$locationProvider,$urlRouterProvider) {

        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/nav/home');
        $stateProvider
            .state("nav",{
                url:"/nav",
                controller:"navCtrl as vm",
                templateUrl:"View/nav.html",
            })

            .state("login",{
                url:"/login",
                controller:"loginCtrl as vm",
                templateUrl:"View/login/login.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login/login.js',
                    ])
                }
            })
            .state("registe",{
                url:"/registe",
                controller:"registeCtrl as vm",
                templateUrl:"View/login/registe.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login/registe.js',
                    ])
                }
            })
            .state("registeSet",{
                url:"/registeSet?phoneNumber",
                controller:"regsetCtrl as vm",
                templateUrl:"View/login/registeSet.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login/regSet.js',
                    ])
                }
            })
            .state("userAgrt",{
                url:"/userAgrt",
                templateUrl:"View/userAgrt.html"
            })
            .state("payment",{
                url:"/payment",
                templateUrl:"View/financial/payment.html"
            })
            .state("forget",{
                url:"/forget",
                controller:"forgetCtrl as vm",
                templateUrl:"View/login/forget.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login/forget.js',
                    ])
                }
            })
            .state("forgetSet",{
                url:"/forgetSet?phoneNumber",
                controller:"forsetCtrl as vm",
                templateUrl:"View/login/forgetSet.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/login/forSet.js',
                    ])
                }
            })

            .state("nav.financial",{
                url:"/financial",
                controller:"financialCtrl as vm",
                templateUrl:"View/financial/financial.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'CSS/module/financial.css',
                        'JS/controllers/financial/financial.js',
                        'JS/directives/refresh.js'
                    ])
                }
            })
            .state("product",{
                url:"/product",
                controller:"productCtrl as vm",
                templateUrl:"View/financial/product.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'CSS/module/financial.css',
                        'JS/directives/load.js',
                        'JS/controllers/financial/product.js'
                    ])
                }
            })
            .state("buyNow",{
                url:"/buyNow",
                controller:"buyNowCtrl as vm",
                templateUrl:"View/financial/buyNow.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'CSS/module/financial.css',
                        'JS/controllers/financial/buyNow.js'
                    ])
                }
            })
            .state("buyConfirm",{
                url:"/buyConfirm?moneyAmount?cardInfo",
                controller:"buyConCtrl as vm",
                templateUrl:"View/financial/buyConfirm.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'CSS/module/financial.css',
                        'JS/controllers/financial/buyConfirm.js'
                    ])
                }
            })

            .state("nav.home",{
                url:"/home",
                controller:"homeCtrl as vm",
                templateUrl:"View/home/home.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/home.js',
                        'JS/directives/banner.js'
                    ])
                }
            })
            .state("nav.myInfo",{
                url:"/Info",
                controller:"myInfoCtrl as vm",
                templateUrl:"View/myInfo/myInfo.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo.js'
                    ])
                }
            })
            .state("information",{
                url:"/information",
                controller:"informationCtrl as vm",
                templateUrl:"View/myInfo/information/information.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })


            .state("verify_step1",{
                url:"/verify_step1?productId",
                controller:"verifyCtrl as vm",
                templateUrl:"View/myInfo/information/verify-step1.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })
            .state("verify_step2",{
                url:"/verify_step2?bank",
                controller:"verifyCtrl as vm",
                templateUrl:"View/myInfo/information/verify-step2.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })
            .state("verify_step3",{
                url:"/verify_step3?phoneNum",
                controller:"verifyCtrl as vm",
                templateUrl:"View/myInfo/information/verify-step3.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })


            .state("changeTel_step1",{
                url:"/changeTel_step1",
                controller:"changeTelCtrl as vm",
                templateUrl:"View/myInfo/information/changeTel-step1.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })
            .state("changeTel_step2",{
                url:"/changeTel_step2",
                controller:"changeTelCtrl as vm",
                templateUrl:"View/myInfo/information/changeTel-step2.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/information.js'
                    ])
                }
            })


            .state("bankCard",{
                url:"/BankCard",
                controller:"bankCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/bankCard.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/bankCard.js'
                    ])
                }
            })
            .state("deleteCard",{
                url:"/deleteCard?cardId&cardType&cardNumber",
                controller:"deleteCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/deleteCard.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/deleteCard.js'
                    ])
                }
            })
            .state("deleteCardVerify",{
                url:"/delete_card_verify?cardId",
                controller:"deleteCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/deleteCard_verify.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/deleteCard.js'
                    ])
                }
            })
            .state("support",{
                url:"/support",
                controller:'supportCardCtrl as vm',
                templateUrl:"View/myInfo/bankCard/supportBank.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/deleteCard.js'
                    ])
                }
            })


            .state("addCard_step1",{
                url:"/addCard_step1",
                controller:"addCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/addBankCard_step1.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/addCard.js'
                    ])
                }

            })
            .state("addCard_step2",{
                url:"/addCard_step2?bank",
                controller:"addCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/addBankCard_step2.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/addCard.js'
                    ])
                }
            })
            .state("addCard_step3",{
                url:"/addCard_step3?phoneNum",
                controller:"addCardCtrl as vm",
                templateUrl:"View/myInfo/bankCard/addBankCard_step3.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/addCard.js'
                    ])
                }
            })


            .state("messages",{
                url:"/messages",
                controller:"msgsCtrl as vm",
                templateUrl:"View/myInfo/messages.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/message.js'
                    ])
                }
            })
            .state("viewMessage",{
                url:"/viewMessage",
                controller:"viewMsgCtrl as vm",
                templateUrl:"View/myInfo/viewMessage.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/message.js'
                    ])
                }
            })


            .state("myFinance",{
                url:"/myFinance",
                controller:"myFinanceCtrl as vm",
                templateUrl:"View/myInfo/myFinance/myFinance.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/myFinance.js'
                    ])
                }
            })
            .state("myCompact",{
                url:"/myCompact?amount?createdAt",
                controller:"myCompactCtrl as vm",
                templateUrl:"View/myInfo/myFinance/myCompact.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/myFinance.js'
                    ])
                }
            })
            .state("record",{
                url:"/record",
                controller:"recordCtrl as vm",
                templateUrl:"View/myInfo/record.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo.js'
                    ])
                }
            })
            .state("suggest",{
                url:"/suggest",
                controller:"suggestCtrl as vm",
                templateUrl:"View/myInfo/suggest.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo.js'
                    ])
                }
            })
            .state("usingHelp",{
                url:"/help",
                controller:"usingHelpCtrl as vm",
                templateUrl:"View/myInfo/usingHelp.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/directives/load.js'
                    ])
                }
            })
            .state("setting",{
                url:"/setting",
                controller:"settingCtrl as vm",
                templateUrl:"View/myInfo/setting/setting.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/setting.js'
                    ])
                }
            })
            .state("changePassword",{
                url:"/changePassword",
                controller:"changePwdCtrl as vm",
                templateUrl:"View/myInfo/setting/changePassword.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/setting.js'
                    ])
                }
            })
            .state("aboutUs",{
                url:"/about",
                templateUrl:"View/myInfo/setting/aboutUs.html",
                resolve: {
                    loadMyFile: _lazyLoad([
                        'JS/controllers/myInfo/setting.js'
                    ])
                }
            })

}]);

//modal box
app.run(['$rootScope',function($rootScope){
    //bootbox封装
    $rootScope.modalConfirm = function (content, fn) {
        bootbox.confirm({
            // title: titles,
            message: content,
            buttons: {
                cancel: {
                    label: '取 消',
                    className: 'btn-default modal-btn'
                },
                confirm: {
                    label: '确 认',
                    className: 'btn-warning modal-btn'
                }
            },
            callback: fn
        })
    };
    $rootScope.modalAlert = function (content, fn) {
        bootbox.dialog({
            // title: titles,
            message: content,
            buttons: {
                ok: {
                    label:'确 定',
                    className:'btn-warning modal-btn',
                    callback: fn
                }
            }
        })
    };
    $rootScope.modalPrompt = function (titles,inputType,inputOptions,fn) {
        bootbox.prompt({
            title: titles,
            inputType: inputType,
            inputOptions: inputOptions,
            callback: fn,
            buttons: {
                cancel: {
                    label: '取 消',
                    className: 'btn-default modal-btn'
                },
                confirm: {
                    label: '确 认',
                    className: 'btn-success modal-btn'
                }
            },
        })
    }
}]);
//toast弹框
app.run(['$rootScope','$timeout',function ($rootScope, $timeout) {
    $rootScope.toaster = function (tips) {
        let toaster = `<div class="toaster">${tips}</div>`;
        angular.element('body').append(toaster);
        $timeout(function () {
            angular.element('.toaster').remove();
        },1500);
    }
}]);

