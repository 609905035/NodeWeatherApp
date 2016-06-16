var soap = require('soap');
var url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl';
var args = {name: 'до╬╘'};
soap.createClient(url,function(err,client){
	client.getWeatherbyCityName(args,function(err,result){
		console.log(result);
	});
});