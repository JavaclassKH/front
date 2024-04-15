// 날짜함수 연습
'use strict'
let str = "";
let stePre = "";

// 오늘 날짜
const today = new Date();
const year = today.getFullYear();
str += "오늘의 연도는 : " + year + "년 입니다. <br/><br/>" ;

const month = today.getMonth();
str += "이번 달은 : " + month + "월 입니다. <br/><br/>";

const date = today.getDate();
str += "오늘은 : " + date + "일 입니다. <br/><br/>";

const hour = today.getHours();
str += "지금은 : " + hour + "시 입니다. <br/><br/>";

const minute = today.getMinutes();
str += "지금은 : " + minute + "분 입니다. <br/><br/>";

const second = today.getSeconds();
str += "지금은 : " + second + "초 입니다. <br/><br/>";

const yymmdd = year + "년 " + month + "월 " + date + "일 " + + hour + "시 " + minute + "분 " + second + "초"; 
str += "오늘의 날짜는 " + yymmdd;

let weekStr = ["일","월","화","수","목","금","토"];
let weekday = today.getDay();
str += "<hr/>오늘 요일 : " + weekStr[weekday] + "<br/>"; 

let lastDate = new Date(2024, 4, 0);
str += "이번달의 마지막 일자는! " + lastDate;

let monthLastDay = document.getElementById("mm");

// - 내 시도 - 
// function datecheck() {
//   lastDate = new Date(2024, monthLastDay, 0);
//   str += "이번달의 마지막 일자는 " + lastDate.substring(23,25) + "일 입니다";
// }

function datecheck() {
  let yy = document.getElementById("yy").value;
  let mm = document.getElementById("mm").value;
  let strDate = new Date(yy, mm, 0);
  str += `${yy}"년" ${mm}"월 의 마지막 일자는! " , ${strDate.getDate()} , "입니다"`;
}



demo.innerHTML = "<font size='5'><b><i>" + str + "</i></b></font>";