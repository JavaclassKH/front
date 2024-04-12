// test12.js
'use strict';

let arr1 = ['문자자료',5,[2,4,6,8],
  {tel : '010-1234-5678'},
  function() {console.log('안녕하세요');}
];

console.log("arr1 : " + arr1);
console.log("arr1 : " + arr1[2]);
console.log("arr1 : " + arr1[4]);
arr1.push(25);
console.log("arr1 : " + arr1);
console.log("============================");

let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,5,7];
arr2[3] = {name: '홍길동'};
arr2[4] = function(){console.log("감사합니다.");};
console.log("arr2 : " + arr2);
console.log("============================");
console.log(arr2);
console.log('');

let str1 = arr2.join('-');
console.log(str1);
console.log("str1 : " + typeof(str1));
console.log("============================");
console.log('');

arr2.forEach((data,i) =>  console.log(data + " / ",i));
console.log('');

arr2.map((data,i) =>  console.log(data + " / ",i));
console.log('');

// 걸러내기 : filter()
arr2.filter(function(data,i) {
  console.log(data + " / " , i);
});
console.log('');

arr2.filter((data,i) => console.log(data + " / " , i));
console.log('');

// filter()를 사용하여 조건을 지정한 추출이 가능하다
// 짝수번째 인덱스 자료만 추출하시오
arr2.filter((data, i) => i % 2 == 0)
    .map((data) => console.log(data))
console.log('==========================================');

let res1 = arr2.filter((data, i) => i % 2 != 0);
console.log("res1 : " , res1);
console.log('');

let res2 = arr2.filter((data, i) => i % 2 == 0).map((data)=> data);
console.log("res2 : " , res2);
console.log(''); console.log('');

console.clear();

let arr3 = [47,1,3,5,7,9,99];
console.log("arr3 : " , arr3);
console.log('');

arr3.forEach((data, i) => console.log((i+1) + '번 : ' + data));
console.log('');

// 오름차순정렬 : sort();
let res3 = arr3.sort();
console.log("res3 : " + res3);
console.log('');

res3.forEach((data, i) => console.log((i+1), data));

// sort((앞의 수 , 뒤의 수) => {a-b < 0[오름차순]});
// sort((앞의 수 , 뒤의 수) => {a-b > 0[내림차순]});

res3 = arr3.sort((a, b) => a - b);
console.log("res3(오름차순) : " + res3);
console.log('');

res3 = arr3.sort((a, b) => b - a);
console.log("res3(내림차순) : " + res3);
console.log('');

arr3 = [47,1,3,5,7,9,99];
console.log("원본 : " + arr3);
console.log('');

// 배열자료를 역순으로 출력 : reverse() ※reverse를 사용 시 원본 배열을 역순으로 바꿔버림!!! 주의!!!!!!!!!
let res4 = arr3.reverse();
console.log("res4 : " + res4);
console.log("arr3 : " + arr3);
res4.forEach((i, data) => console.log((i+1),data));

let max = Math.max(10,5,20,99,43,12,22,77,36);
console.log("max : " + max);

let min = Math.min(10,5,20,99,43,12,22,77,36);
console.log("min : " + min);

let max2 = Math.max(arr3);
console.log("max2 : " + max2);
let min2 = Math.min(arr3);
console.log("min2 : " + min2);

