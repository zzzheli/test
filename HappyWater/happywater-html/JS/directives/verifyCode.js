angular.module('myApp')
    .directive('verifyCode',verifyCode);
function verifyCode() {
    return{
        restrict: 'EA',
        scope:{
            code: '=code'
        },
        template: `<input type="text"
                       class="form-control font-size-normal"
                       placeholder="请输入验证码"
                       ng-model="code"
                       autocomplete="off"
                       onkeyup="this.value=this.value.replace(/\\W/g,'')"
                       onafterpaste="this.value=this.value.replace(/\\W/g,'')"
                       onafterpaste="this.value=this.value.replace(/\\W/g,'')"
                       ng-minlength="6"
                       maxlength="6"
                       style="width: 100%;display: inline-block;border-radius: 10px;"
                       required>`
    }
}
/*
            <verify-code code="绑定的值"></verify-code>
 */