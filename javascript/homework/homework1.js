/*
출력할 구구단의 시작단과 끝단을 입력받고, 또 한 행에 출력할 열의 수를 입력받은후,
조건에 맞도록 구구단을 출력하시오.(단, 시작단이 항상 작도록 처리하시오) */

'use strict';

function gugugilit() {
  let suStart = document.getElementById("suStart").value;
  let suEnd = document.getElementById("suEnd").value;
  let lineNum = document.getElementById("lineNum").value;
  let res = 0 , temp = 0 , cnt = suStart;

  if(suStart > suEnd) {
    suStart = temp;
    temp = suEnd;
    suEnd = suStart;
  }

  for(let i=suStart; i<=suEnd; i++) {
    for(let j=1; j<=9; j++) {
      res = i * j;
      console.log(i , "단: " , i , " X " , j ," = ", res);
      if(cnt == lineNum) console.log('');
    }

  }

  demo.innerHTML = res;
}