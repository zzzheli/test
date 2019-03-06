angular.module("myApp")
    .controller('homeCtrl',['$rootScope', '$state', '$http', 'homeService', '$timeout', homeCtrl]);

function homeCtrl ($rootScope, $state, $http, homeService,$timeout) {
    $rootScope.navCoa = true;
    $rootScope.navCob = false;
    $rootScope.navCoc = false;
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    // console.log(user);
    vm.BannerParams = {
        id: user.id
    };
    homeService.getBanner(vm.BannerParams)
        .then(function (res) {
            // console.log('banner图',res.data);
            if (res.data.status === true) {
                // vm.bannerList = res.data.data;
                vm.bannerList = [
                    {'id':1, 'src':'http://i1.3conline.com/images/piclib/201202/03/batch/1/125616/1328200519998t56s0plvtk.jpg'},
                    {'id':2, 'src':'http://s4.sinaimg.cn/mw690/005NCJobgy6NdcJqTN903&690'},
                    {'id':3, 'src':'https://img0.pconline.com.cn/pconline/diy/graphics/study_gra/1811/201811/15/15422827266278270.jpg'},
                    {'id':4, 'src':'http://s9.sinaimg.cn/mw690/001IiChjgy6Ndmapq5y98&690'},
                    {'id':5, 'src':'http://s10.sinaimg.cn/mw690/005NCJobgy6NdcJofW199&690'}
                ];
                $timeout(function dome() {
                    var swiper = new Swiper('.swiper-container', {
                        pagination: {   //焦点跟随
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        paginationClickable: true,
                        autoplay:{
                            delay:3000,
                            disableOnInteraction:false
                        },
                        loop:true,
                        observe: true,
                        observeParents: true
                    });
                },0);
            }else {
                $rootScope.toaster(res.data.data);
            }
        });
    vm.RecommendParams = {
        id: user.id,
        isNoob: user.isNoob
    };
    homeService.getRecommendation(vm.RecommendParams)
        .then(function (res) {
            // console.log('鼎力推荐',res.data);
            if (res.data.status === true) {
                vm.recommend = res.data.data;
            }else {
                $rootScope.toaster(res.data.data);
            }
        });
}