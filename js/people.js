/*
숫자가 0부터 증가해야 하는 부분
id="number1" >> 0에서 4까지 : 4명
id="number2" >> 0에서 21까지 : 21명
id="number3" >> 0에서 5까지 : 5명
id="number4" >> 0에서 1700까지 : 1700명
*/

// 연산용 초기값
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

// 숫자 올라가는 거 보여야 하는 부분
let people1 = document.getElementById('number1');
let people2 = document.getElementById('number2');
let people3 = document.getElementById('number3');
let people4 = document.getElementById('number4');

// setInterval값 담는 변수
let countBox1, countBox2, countBox3, countBox4;

// 사람들 섹션에 도달했을 때 타이머 올라가기 시작
window.addEventListener('scroll', function () {
  // 사람들 섹션 시작 부분 스크롤 위치값 가져오기
  let scrollY = this.window.scrollY;
  // console.log('사람들 여기부터', scrollY); // 2300

  // 공동대표
  // 조건1) 스크롤값은 2000px 이상이고
  // 조건2) 타이머 countBox가 중복 실행되지 않게 >> !countBox : 실행 중이 아니고
  // 조건3) 목표까지 도달하면 다시 시작 안하게
  if (scrollY > 1850 && !countBox1 && counter1 < 4) {
    countBox1 = this.setInterval(function () {
      counter1++;
      people1.textContent = `${counter1}명`;
      if (counter1 >= 4) {
        clearInterval(countBox1);
        // 타이머 초기화
        countBox1 = null;
      }
    }, 500)
  }

  // 운영위원
  if (scrollY > 1850 && !countBox2 && counter2 < 21) {
    countBox2 = this.setInterval(function () {
      counter2++;
      people2.textContent = `${counter2}명`;
      if (counter2 >= 21) {
        clearInterval(countBox2);
        countBox2 = null;
      }
    }, 100)
  }

  // 활동가
  if (scrollY > 1850 && !countBox3 && counter3 < 5) {
    countBox3 = this.setInterval(function () {
      counter3++;
      people3.textContent = `${counter3}명`;
      if (counter3 >= 5) {
        clearInterval(countBox3);
        countBox3 = null;
      }
    }, 500)
  }

  // 회원수
  if (scrollY > 1850 && !countBox4 && counter4 < 1700) {
    setTimeout(function () {
      if (!countBox4 && counter4 < 1700) {
        countBox4 = setInterval(function () {
          counter4++;
          people4.textContent = `${counter4}+명`;
          if (counter4 >= 1700) {
            clearInterval(countBox4);
            countBox4 = null;
          }
        }, 1)
      }
    }, 500)
  }
})