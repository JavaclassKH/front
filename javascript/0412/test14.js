// 숫자함수 연습!!
'use strict'

let su1 = 10;
let su2 = -20;
let su3 = 3.14159265358979323846264338327950288469;
let su4 = -3.141592;
let su5 = 31.5;

let num = 0;

// max() : 최대
// min() :  최소
// ceil() : 무조건 올림 (정수로 출력)
// floor() : 무조건 버림
// trunc() : 잘라내기 후 (정수로 출력)
// pow() : 거듭제곱
// abs() : 절댓값
// sqrt() : 제곱근 
// toFixed() : 소수 이하자리 출력(반올림)
// random() : 난수 발생(0 <= random <= 1 실수형 난수)

num = "max : " + Math.max(su1,su2,su3,su4,su5) + "<br/><br/>";
num += "min : " + Math.min(su1,su2,su3,su4,su5) + "<br/><br/>";
num += "ceil : " + Math.ceil(su3) + "<br/><br/>";
num += "ceil : " + Math.ceil(su4) + "<br/><br/>";
num += "floor : " + Math.floor(su3) + "<br/><br/>";
num += "floor : " + Math.floor(su4) + "<br/><br/>";
num += "trunc : " + Math.trunc(su4) + "<br/><br/>";
num += "trunc : " + Math.trunc(su2) + "<br/><br/>";
num += "pow : " + Math.pow(2,5) + "<br/><br/>";
num += "abs(su4) : " + Math.abs(su4) + "<br/><br/>";
num += "sqrt(25) : " + Math.sqrt(25) + "<br/><br/>"; // 25는 5의 제곱이니 5를 출력함

num += "toFixed(su3) : " + su3.toFixed(2) + "<br/>";
num += "toFixed(su3) : " + su3.toFixed(8) + "<br/><br/>";


num += "Math.random : " + (Math.random() * 10) + "<br/>";
// parseInt : 정수 치환
// num += "Math.random : " + parseInt((Math.random() * 10) + 1); 문자열+숫자는 문자열이 됨!
num = parseInt((Math.random() * 10) + 1) + " => Math.random <br/><br/>";

num += "Math.random : " + (Math.random() * (15-5+1)) + 5;

demo.innerHTML = num;




















