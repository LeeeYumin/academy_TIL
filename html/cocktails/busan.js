import fetchOpenAPI from "./fetchBusanFood.js";

var url = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr'; /*URL*/
//var openAPIKey = /*자신의 API키 입력*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + `${openAPIKey}`;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('400');
queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
// queryParams += '&' + encodeURIComponent('UC_SEQ') + '=' + encodeURIComponent('');


fetchOpenAPI(`${url}${queryParams}`);