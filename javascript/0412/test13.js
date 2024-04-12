// 문자함수 연습!!
'use strict'

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text2 = "       ABC    BCABC  ABC GHI DEFGHIJK...... LABCP.......  QUABCV... WABCb...   cABCg...";

// length() : 길이
// substring() : 특정문자열의 문자열 출력
// indexOf() : 문자열 검색(인덱스값을 반환, 없으면 -1을 반환)
// includes() : 문자열 포함유무(t , f)
// concat() : 문자열 결합
// slice() : 지정된 인덱스위치부터 문자열 가져오기 
// trim() : 문자열의 앞뒤 공백 삭제
// replace() : 지정한 문자를 입력한 문자로 치환(첫번째 자료)
// replaceAll() : 지정한 문자를 입력한 문자로 치환(모든 자료)
// toUpperCase() : 대문자 변환
// toLowerCase() : 대문자 변환
// charAt() : 문자열중에서 1개씩 추출
// charCodeAt() : 지정된 인덱스번지의 영문자 아스키코드값을 출력
// split() : 지정된 문자로 분리시킨후 배열로 저장한다
// join() : 지정문자로 결합

let str = "01234567890123456789123456789123456798123456789<br/>";
str += text1 + "<br/><br/>";
str += text2 + "<br/><br/>";

str += "substring : " + text1.substring(5,10) + "<br/><br/>";
str += "substring : " + text1.indexOf("abc") + "<br/><br/>";
str += "indexOf : " + text1.indexOf("abd") + "<br/><br/>";
str += "slice : " + text1.slice(5, 10) + "<br/><br/>";
str += "replace : " + text2.replace("ABC" , "XXX") + "<br/><br/>"; // replace사용시 가장 처음 찾은 것만 치환
str += "replaceAll : " + text2.replaceAll("ABC" , "XXX") + "<br/><br/>"; 
str += "charAt : " + text1.charAt(3) + "<br/><br/>"; 
str += "charCodeAt : " + text1.charCodeAt(3) + "<br/><br/>"; 
str += "split : " + text2.split("BC")[0] + "<br/><br/>"; 

let tel = "010-1234-5678";
let tels = tel.split("-");

for(let tel of tels) {
  console.log(tel);
}

tels.forEach((i, data) => {(i+1),data});

























demo.innerHTML = str;




















