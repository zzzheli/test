app.filter('encrypt', function() {
    return function(card) {
        if (card) {
            var cardNum;
            var reg = /^\d+(\d{4})$/;
            cardNum = card.replace(reg,"**** **** **** $1");
            return cardNum;
        }
    }
});
app.filter('phoneNum', function() {
    return function(p) {
        if (p) {
            var phoneNum;
            var reg = /^(\d{3})\d+(\d{4})$/;
            phoneNum = p.replace(reg,"$1****$2");
            return phoneNum;
        }
    }
});
app.filter('ID', function() {
    return function(id) {
        if (id) {
            var ID;
            var reg = /^(\d{6})\d+(\d{3}[0-9xX])$/;
            ID = id.replace(reg,"$1********$2");
            return ID;
        }
    }
});
app.filter('bankNum', function() {
    return function(id) {
        if (id) {
            var num;
            var reg = /[\s \u4E00-\u9FA5]/g;
            num = id.replace(reg,"");
            return num;
        }
    }
});
app.filter('bankType', function() {
    return function(id) {
        if (id) {
            var num;
            var reg = /[\s 0-9*]/g;
            num = id.replace(reg,"");
            return num;
        }
    }
});
app.filter('unread', function () {
    return function (read) {
        switch (read) {
            case 0 :
                return '未读';
                break;
            case 1 :
                return '已读';
                break;
        }
    }
});
//我的理财预约续投
app.filter('Res', function () {
    return function (read) {
        switch (read) {
            case 10 :
                return '预约续投';
                break;
            case 20 :
                return '取消续投';
                break;
            case 30 :
                return '已退出';
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
//银行类型
app.filter('cardType', function () {
    return function (type) {
        switch (type) {
            case 'ICBC' :
                return '中国工商银行';
                break;
            case 'ABC' :
                return '中国农业银行';
                break;
            case 'BOC' :
                return '中国银行';
                break;
            case 'CCB' :
                return '中国建设银行';
                break;
            case 'PSBC' :
                return '中国邮政储蓄银行';
                break;
            case 'COMM' :
                return '交通银行';
                break;
            case 'CMB' :
                return '招商银行';
                break;
            case 'CMBC' :
                return '中国民生银行';
                break;
            case 'CITIC' :
                return '中信银行';
                break;
            case 'CEB' :
                return '中国光大银行';
                break;
            case 'CDB' :
                return '国家开发银行';
                break;
            default:
                return '其他银行';
                break;
        }
    }
});