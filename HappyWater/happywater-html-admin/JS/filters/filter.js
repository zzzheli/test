//状态转换
app.filter('status', function() {
    return function(status) {
        switch (status) {
            case false :
                return '下线';
                break;
            case true :
                return '上线';
                break;
        }
    }
});

//上架 下架
app.filter('line', function() {
    return function(status) {
        switch (status) {
            case false :
                return '上线';
                break;
            case true :
                return '下线';
                break;
        }
    }
});

//禁用状态
app.filter('disabled', function() {
    return function(status) {
        switch (status) {
            case false :
                return '回复';
                break;
            case true :
                return '已回复';
                break;
        }
    }
});

//禁用状态
app.filter('pushStatus', function() {
    return function(status) {
        switch (status) {
            case 10 :
                return '待推送';
                break;
            case 20 :
                return '已推送';
                break;
            case 30 :
                return '已取消';
        }
    }
});

//消息管理禁用查看
app.filter('viewMessage',function () {
    return function (status) {
        switch (status) {
            case 10 :
                return false;
                break;
            case 20 :
                return true;
                break;
            case 30 :
                return true;
                break;
        }
    }
});

// 大小转换
app.filter('unit', function () {
    return function (size) {
        // var
        if (!isNaN(size))
            return (size/1024/1024).toFixed(2) + 'MB';

    }
});
app.filter('merry',function(){
    return function(merry){
        switch(merry){
            case 0 :
                return '否';
                break;
            case 1 :
                return '是';
                break;
        }
    }
});
app.filter('lock',function () {
    return function (locked) {
        switch(locked){
            case true :
                return '禁用';
                break;
            case false :
                return '启用';
                break;
        }
    }
});


//金额大小写
app.filter('Chinese',function(){
    return function(input){
        let numberValue=new String(Math.round(input*100)); // 数字金额
        let chineseValue=""; // 转换后的汉字金额
        let String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
        let String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
        let len=numberValue.length; // numberValue 的字符串长度
        let Ch1; // 数字的汉语读法
        let Ch2; // 数字位的汉字读法
        let nZero=0; // 用来计算连续的零值的个数
        let String3; // 指定位置的数值
        if(len>15){
            alert("超出计算范围");
            return "";
        }
        if (numberValue==0){
            chineseValue = "零元整";
            return chineseValue;
        }

        String2 = String2.substr(String2.length-len, len); // 取出对应位数的STRING2的值
        for(let i=0; i<len; i++){
            String3 = parseInt(numberValue.substr(i, 1),10); // 取出需转换的某一位的值
            if ( i != (len - 3) && i != (len - 7) && i != (len - 11) && i !=(len - 15) ){
                if ( String3 == 0 ){
                    Ch1 = "";
                    Ch2 = "";
                    nZero = nZero + 1;
                }
                else if ( String3 != 0 && nZero != 0 ){
                    Ch1 = "零" + String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else{
                    Ch1 = String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
            }
            else{ // 该位是万亿，亿，万，元位等关键位
                if( String3 != 0 && nZero != 0 ){
                    Ch1 = "零" + String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else if ( String3 != 0 && nZero == 0 ){
                    Ch1 = String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else if( String3 == 0 && nZero >= 3 ){
                    Ch1 = "";
                    Ch2 = "";
                    nZero = nZero + 1;
                }
                else{
                    Ch1 = "";
                    Ch2 = String2.substr(i, 1);
                    nZero = nZero + 1;
                }
                if( i == (len - 11) || i == (len - 3)){ // 如果该位是亿位或元位，则必须写上
                    Ch2 = String2.substr(i, 1);
                }
            }
            chineseValue = chineseValue + Ch1 + Ch2;
        }

        if ( String3 == 0 ){ // 最后一位（分）为0时，加上“整”
            chineseValue = chineseValue + "整";
        }

        return chineseValue;

    };
});


//用户管理 合同状态
app.filter('comStatus', function() {
    return function(status) {
        switch (status) {
            case 10 :
                return '首次投资';
                break;
            case 20 :
                return '续投';
                break;
            case 30 :
                return '已退出';
        }
    }
});

//用户管理 交易方式
app.filter('dealType', function() {
    return function(status) {
        switch (status) {
            case 10 :
                return '付款';
                break;
            case 20 :
                return '回款';
                break;
        }
    }
});

//用户管理 用户状态
app.filter('lockedUse', function() {
    return function(status) {
        switch (status) {
            case 0 :
                return '正常';
                break;
            case 1 :
                return '冻结';
                break;
        }
    }
});

//用户管理 用户状态（操作）
app.filter('lockedUser', function() {
    return function(status) {
        switch (status) {
            case 0 :
                return '冻结';
                break;
            case 1 :
                return '解冻';
                break;
        }
    }
});

//产品管理 还款方式
app.filter('repayWay', function() {
    return function(status) {
        switch (status) {
            case "10" :
                return '本息还款';
                break;
            case "20" :
                return '先本后息';
                break;
        }
    }
});

//产品管理 上下架
app.filter('upPro', function() {
    return function(status) {
        switch (status) {
            case 1 :
                return '上架';
                break;
            case 0 :
                return '下架';
                break;
        }
    }
});

//产品管理 上下架(操作)
app.filter('upProduct', function() {
    return function(status) {
        switch (status) {
            case 1 :
                return '下架';
                break;
            case 0 :
                return '上架';
                break;
        }
    }
});

//债权管理 匹配
app.filter('match', function() {
    return function(status) {
        switch (status) {
            case 10 :
                return '匹配';
                break;
            case 20 :
                return '未匹配';
                break;
            case 30 :
                return '已匹配';
                break;
        }
    }
});