// faq
// 탭버튼 선택하면 해당 콘텐츠 보이게
let faqTabBtns = document.querySelectorAll('.sub3-tab-btn');
let faqTabCons = document.querySelectorAll('.sub3-tab-content');
// 탭버튼에 클릭 이벤트 추가
faqTabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    faqTabBtns.forEach(function (b) {
      b.classList.remove('active');
    })
    btn.classList.add('active');
    // 클릭한 버튼에 맞는 콘텐츠만 보여주기
    let faqcon = btn.getAttribute('data-faq');
    faqTabCons.forEach(function (c) {
      if (c.id === faqcon) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    })
  })
})

// 반응형 탭메뉴
let mobileTabBtns = document.querySelectorAll('.sub3-tab-btn-mobile');
// console.log(mobileTabBtns);
mobileTabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // active 초기화
    mobileTabBtns.forEach(function (b) {
      b.classList.remove('active');
    })
    btn.classList.add('active');
    let faqcon = btn.getAttribute('data-faq');
    faqTabCons.forEach(function (c) {
      if (c.id === faqcon) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    })
  })
})

// 반응형 탭메뉴 데스크탑에서 마우스 휠로 가로 스크롤 할 수 있게
// 스크롤 되야 하는 영역 선택
let mobileTabMenu = document.querySelector('.sub3-tab-menu-mobile');
// console.log(mobileTabMenu);
mobileTabMenu.addEventListener('wheel', function (e) {
  // 기본 세로 스크롤 방지
  e.preventDefault();
  /*
  deltaY >> 세로 스크롤 양 / 올리면 양수, 내리면 음수
  deltaX >> 가로 스크롤 양 / 가로 스크롤을 하는 요소가 있어야만 쓸 수 있음
  */
  mobileTabMenu.scrollLeft += e.deltaY;
})