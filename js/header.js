// 내비게이션
// gnb-item, mega-nav, lnb, header 선택
let gnbItems = document.querySelectorAll('.gnb-item');
let megaNav = document.querySelector('.mega-nav');
let lnbItems = document.querySelectorAll('.lnb');
let header = document.getElementById('header');

// * 메인 내비 텍스트에 호버했을 때, 1) 메가 내비 보이고 2) 헤더 배경색은 불투명하게
// * 메인 내비 텍스트에 호버했을 때, 1) 해당 lnb 배경색 바꾸고, 2) 해당 lnb 글자색 바꾸고
// * 메인 내비 텍스트에 호버 안했을 때, 1) 해당 lnb 배경색 원래대로, 2) 해당 lnb 글자색 원래대로
gnbItems.forEach(function (item) {
  // 메인 내비 텍스트에 호버했을 때,
  item.addEventListener('mouseenter', function () {
    // 검색창 열려 있으면 호버 안되게
    if (searchBox.classList.contains('active')) {
      return;
    };
    megaNav.classList.add('active');
    header.style.backgroundColor = 'var(--white-light)';

    let targetItem = this.dataset.target;
    let targetLnb = document.getElementById(targetItem);
    targetLnb.classList.add('active');
  })
  // 메인 내비 텍스트에 호버 안했을 때,
  item.addEventListener('mouseleave', function () {
    megaNav.classList.remove('active');
    // updateHeader가 배경색을 결정하게
    updateHeader();

    let targetItem = this.dataset.target;
    let targetLnb = document.getElementById(targetItem);
    targetLnb.classList.remove('active');
  })
})

// 메가 내비게이션
// * 메인 내비 - 메가 내비 이어지도록
// * 메가 내비에 호버했을 때, 헤더 배경색 불투명하게
megaNav.addEventListener('mouseenter', function () {
  this.classList.add('active');
  header.style.backgroundColor = 'var(--white-light)';
})
megaNav.addEventListener('mouseleave', function () {
  this.classList.remove('active');
  updateHeader();
})

// 해당 서브 내비게이션
// * 서브 내비에 호버했을 때, 1) 배경색 바꾸고 2) 글자색 바꾸기
lnbItems.forEach(function (sub) {
  sub.addEventListener('mouseenter', function () {
    this.classList.add('active');
    let thisId = this.id;
    gnbItems.forEach(function (e) {
      if (e.dataset.target === thisId) {
        e.classList.add('active');
      }
    })
  })
  sub.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    let thisId = this.id;
    gnbItems.forEach(function (e) {
      if (e.dataset.target === thisId) {
        e.classList.remove('active');
      }
    })
  })
})

// 검색창
let searchBtn = document.querySelector('.search-btn');
let searchBox = document.querySelector('.search-box');
let searchBtnImg = document.querySelector('.search-btn-img');
searchBtn.addEventListener('click', function () {
  searchBox.classList.toggle('active');
  // 검색창 열렸을 때 메가 내비 동시에 드롭다운 안되게
  megaNav.classList.remove('active');
  lnbItems.forEach(function (sub) {
    sub.classList.remove('active');
  });
  if (searchBox.classList.contains('active')) {
    header.style.backgroundColor = 'var(--white-light)';
    searchBtnImg.style.backgroundPosition = 'right';
    searchBtn.style.backgroundColor = 'var(--green-dark)';
    searchBtnImg.style.backgroundColor = 'var(--green-dark)';
  } else {
    updateHeader();
    searchBtnImg.style.backgroundPosition = 'left';
    searchBtn.style.backgroundColor = '';
    searchBtnImg.style.backgroundColor = '';
  }
});
// 빈 공간 눌렀을 때 검색 박스 사라지게
document.addEventListener('click', function (any) {
  if (!searchBox.contains(any.target) && !searchBtn.contains(any.target)) {
    searchBox.classList.remove('active');
    // header.style.backgroundColor = '';
    searchBtnImg.style.backgroundPosition = 'left';
    searchBtn.style.backgroundColor = '';
    searchBtnImg.style.backgroundColor = '';
    updateHeader();
  }
})

// 아코디언 메뉴
let accordionItem = document.querySelectorAll('.accordion-item');
accordionItem.forEach(function (item) {
  // 타이틀 영역, 콘텐츠 영역 선택
  let title = item.querySelector('.accordion-title-warp');
  let content = item.querySelector('.accordion-content');
  // 조건문 >> 타이틀에 active가 포함이 되어있으면 닫기
  title.addEventListener('click', function () {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.display = 'none';
      item.querySelector('.accordion-title-btn').classList.remove('active');
      return;
    };
    // 전체 초기화하고
    accordionItem.forEach(function (e) {
      e.classList.remove('active');
      e.querySelector('.accordion-content').style.display = 'none';
      e.querySelector('.accordion-title-btn').classList.remove('active');
    });
    // 클릭된 건 보이게
    item.classList.add('active');
    content.style.display = 'block';
    item.querySelector('.accordion-title-btn').classList.add('active');
  })
})

// 트리거
let menuIcon = document.querySelector('.trigger');
let accordion = document.querySelector('.accordion');
let donationBtn = document.querySelector('.donation-btn');
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  if (accordion.style.display === 'block') {
    accordion.style.display = 'none';
    donationBtn.style.display = 'block';
    header.style.borderBottom = '';
  } else {
    accordion.style.display = 'block';
    donationBtn.style.display = 'none';
    header.style.borderBottom = '2px solid var(--gray-light)';
  }
})

// 반응형에서만 아코디언 메뉴 보이게
function accordionView() {
  let viewportWidth = window.innerWidth;
  // console.log(viewportWidth);
  if (viewportWidth <= 768 && menuIcon.classList.contains('active')) {
    accordion.style.display = 'block';
    donationBtn.style.display = 'none';
    header.style.borderBottom = '2px solid var(--gray-light)';
  } else if (viewportWidth > 768) {
    accordion.style.display = 'none';
    donationBtn.style.display = 'block';
    header.style.borderBottom = '';
  }
}
accordionView();
window.addEventListener('resize', accordionView);

// 스크롤하면 헤더 배경 불투명하게
function updateHeader() {
  // 검색창 열려 있으면 헤더 무조건 불투명
  if (searchBox.classList.contains('active')) {
    header.style.backgroundColor = 'var(--white-light)';
    header.style.boxShadow = '0 2px 4px var(--gray-light)';
    return;
  }
  let headerScroll = window.scrollY;
  // 문서 전체 높이
  let getHeight = document.documentElement.scrollHeight;
  // 현재 화면 높이
  let getNow = window.innerHeight;
  // 스크롤 가능한 높이
  let getDocumentHeight = getHeight - getNow;

  // 스크롤 진행률
  let getPercent = (headerScroll / getDocumentHeight) * 100;

  if (getPercent > 0) {
    header.style.backgroundColor = 'var(--white-light)';
    header.style.boxShadow = '0 2px 4px var(--gray-light)';
  } else {
    header.style.backgroundColor = '';
    header.style.boxShadow = '';
  }
}
updateHeader();
document.addEventListener('scroll', updateHeader);