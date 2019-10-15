// node wixkickstart_sms.js '     sms to technichnii     progress daye meni shans na maibutnye    ' 24
// node wixkickstart_sms.js 'sms to technichnii progress daye meni shans na maibutnye' 11
// $ node wixkickstart_sms.js 'sms to technichnii progress daye meni shans na maibutnye' 10

function solution(str, ln){
	var arr = str.split(" ");
	var cnt = 0, sms = 0;

	for(s in arr){
		if (arr[s] === '') continue;
		if ((arr[s].length + (sms ? (sms+1) : sms)) <= ln){
			sms = arr[s].length + (sms ? (sms+1) : sms) ;
		}
		else{
			if ((sms === 0) || (arr[s].length > ln)) return -1;
			cnt++;
			sms = arr[s].length;
		}
		console.log("'" + arr[s] + "' in sms No " + (cnt + 1) + " total amount of symbols = " + sms);
	}
		
	return (cnt + 1);
};

try{
	console.log("min sms count = " + solution(process.argv[2], process.argv[3]));
}
catch(e){
	console.log("Someting went wrong (((((");
}