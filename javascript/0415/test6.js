// test6.js
'use strict';
class Member {
  // 필드명은 생략이 가능!
  // name;
  // age;

  // 생성자
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // 값의 읽기(Getter)와 쓰기(Setter)
      
  get name() {
      return this._name;
  }
  set name(name) {
      this._name = name;
  }
  
  get age() {
    return this._age - 1;
  }
  set age(age) {
    // this._age = age;
    if (age < 1) age = 1;
    else this._age = age;
  }

  get job() {
    return this._job;
  }
  set job(job) {
    if(job == '살인청부업자' || job == "폭행청부업자" ||  job == "절도청부업자")  job = "청부업자";
    this._job = job;
  }

}
let member = new Member("홍길동",25,"살인청부업자");
console.log(member);
console.log('');
console.log("name : " , member.name , " age : " , member.age , " job : " , member.job);