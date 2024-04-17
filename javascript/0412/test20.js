// test19.js [정규식]
'use strict';

function regexCheck() {
  //정규식 사용시 변수를 미리 만들어놓고 수행한다
  const rex1 = /atom/gm;   // 'atom'이라는 문자열을 포함하는지에 대한 여부 확인 있으면 'true' 없으면 'false' 반환
  const rex2 = /mbc|kbs|sbs|cjb/g;  
  const rex3 = /홍박(사|자)/g; // 홍박사 or 홍길자 가 포함되었는지 확인
  const rex4 = /[a-z]/g;   // 영문 소문자 포함? 
  const rex5 = /[A-Z]/g;   // 영문 대문자 포함? 
  const rex6 = /[가-힣]/g; // 한글포함여부 
  const rex7 = /[^a-z]/g;   // 영문 소문자만 포함?
  const rex8 = /[^a-zA-Z가-힣ㄱ-ㅎ]/g;   // 영문소문자,대문자, 한글만 포함
  const rex9 = /[^a-zA-Z0-9_-]/g;   // 한글 빼고 _,- 포함
  
  const rex21 = /\./g; // .을 포함?
  const rex22 = /\d/g; // 숫자를 포함?
  const rex23 = /\D/g; // 숫자를 포함하지 않음? (대,소문자는 정반대를 의미)
  const rex24 = /\w/g; // 영문자와 숫자 + _  포함?
  const rex25 = /\W/g; // 영문자와 숫자 + _ 만 포함?
  const rex26 = /\s/g; // 문장에 공백(space,tap) 포함?


  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("입력 왜 안함? 손가락 없음?");
    return false;
  }

  // if(!content.match(rex1)) alert("본문에 'atom' 문자열이 포함되지 않았습니다!");
  // if(!content.match(rex2)) alert("본문에 'mbc,kbs,sbs,cjb' 문자열이 포함되지 않았습니다!");
  // if(!content.match(rex3)) alert("본문에 '홍박사' or '홍박자'가 포함되지 않았습니다!");
  // if(!rex4.test(content)) alert("영문 대문자를 포함하고 있지 않습니다!"); 
  // if(!rex5.test(content)) alert("영문 대문자를 포함하고 있지 않습니다!"); 
  // if(!rex6.test(content)) alert("한글을 포함하고 있지 않습니다!"); 
  // if(rex7.test(content)) alert("영문 소문자가 아닌 다른 문자가 있습니다!"); 
  // if(rex8.test(content)) alert("영문 소문자가 아닌 다른 문자가 있습니다!"); 
  // if(rex8.test(content)) alert("영문소문자,대문자, 한글만 포함시키세요!"); 
  // if(rex9.test(content)) alert("정규식 보세여"); 
  // if(!rex21.test(content)) alert("정규식 보세여"); 
  // if(!rex22.test(content)) alert("정규식 보세여"); 
  // if(rex23.test(content)) alert("정규식 보세여"); 
  // if(rex24.test(content))  alert("틀림! 정규식 보세여"); 
  // if(rex25.test(content))  alert("틀림! 정규식 보세여"); 
  if(!rex26.test(content))  alert("틀림! 정규식 보세여"); 
  
  else {
    alert("O");
    // location.href = 'url?변수=값&변수=값'; -> get방식으로 서버에 값을 보내는 방법
    // myform.submit(); -> myform이라는 클래스에 method가 post로 지정 되었다면 서버에 post방식으로 값이 넘어감
  }
  
  
  document.getElementById("content").focus();
}