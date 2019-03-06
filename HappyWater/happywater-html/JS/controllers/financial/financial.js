angular.module("myApp")
    .controller("financialCtrl",['$scope','$http','$state','$rootScope',financialCtrl]);

function financialCtrl ($scope,$http,$state,$rootScope) {
    let vm = this;
    $rootScope.navCoa = false;
    $rootScope.navCob = true;
    $rootScope.navCoc = false;

    let loginForm = JSON.parse(localStorage.getItem("loginForm"));

    vm.getFinances = function () {
        $http({
            method: 'GET',
            url: '/happywater-ajax/u/client/i/user/products/' + loginForm.id,
            params: {
            }
        }).then(function success (response) {
            vm.finances = response.data.data;
            // console.log(response);
        })
    };
    vm.getFinances();
    //下拉刷新
    vm.refreshOnce = function () {
        vm.getFinances();
    };

    vm.product = function (item) {
        $state.go("product");
        console.log(item);
        let financesNow = item;
        //获取选中产品的下标，并提出
        financesNow = JSON.stringify(financesNow);
        sessionStorage.setItem("financesNow",financesNow); //产品详情改为通过id获取
    };

}


// -------------------------------financial end-------------------------------------





