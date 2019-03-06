angular.module("myApp")
    .directive('slogan',slogan);
function slogan() {
    return{
        restrict: 'EA',
        template: `<div style="position: absolute;
                        bottom: 130px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: rgba(99,99,99,.7);
                        font-size: 38px;
                        z-index: -1;">
                        <p><big>聚金融</big></p><p>简单 · 安全 · 智能</p>
                        </div>`
    }
}