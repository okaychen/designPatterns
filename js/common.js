var ip='http://58.221.168.76:2009/v3/';
var ip2='http://58.221.168.76:2009/ntejservice/';
function getNum(){
	usedAccountInfo = JSON.parse(plus.storage.getItem('usedAccountInfo'))
	$.ajax({
	    type: 'POST',
	    url: ip2+"app/appTaskCount",
	    data: {
	    	accountId:usedAccountInfo.accountId,
	    },
	    success: function(result){
	    //	console.log(JSON.stringify(result))
	    	var m = result.taskCount
		 	BadgeNumber(m)

	    },
	    dataType: "json"
	});
}
function BadgeNumber(m){
	plus.runtime.setBadgeNumber(m);
	console.log(m)
}
function formatMoney(mVal, iAccuracy){  
	if (typeof(iAccuracy) === 'undefined')  {
		iAccuracy = 3;
	}
	if(mVal == 0){
		return 0;
	}else{
		if(!mVal) return "";
		mVal = mVal.toFixed(iAccuracy); // 输出结果为 2.45
		return mVal;
	}
}
//function formatMoney(mVal, iAccuracy){  
//	var fTmp = 0.00;//临时变量  
//	var iFra = 0;//小数部分  
//	var iInt = 0;//整数部分  
//	var aBuf = new Array(); //输出缓存  
//	var bPositive = true; //保存正负值标记(true:正数)  
//	/** 
//	 * 输出定长字符串，不够补0 
//	 * <li>闭包函数</li> 
//	 * @param int iVal 值 
//	 * @param int iLen 输出的长度 
//	 */  
//	function funZero(iVal, iLen){  
//	    var sTmp = iVal.toString();  
//	    var sBuf = new Array();  
//	    for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)  
//	        sBuf.push('0');  
//	        sBuf.push(sTmp);  
//	        return sBuf.join('');  
//	};  
//	  
//	if (typeof(iAccuracy) === 'undefined')  
//	    iAccuracy = 2;  
//	    bPositive = (mVal >= 0);//取出正负号  
//	    fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点  
//	    //所有内容用正数规则处理  
//	    iInt = parseInt(fTmp); //分离整数部分  
//	    iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //分离小数部分(四舍五入)  
//	  
//	    do{  
//	        aBuf.unshift(funZero(iInt % 1000, 3));  
//	    }while((iInt = parseInt(iInt/1000)));  
//	    aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0  
//	    return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));  
//}
