// 스크롤바
// 움직여야 되는 부분 선택
let pageScrollBar = document.querySelectorAll('.side-scroll-bar-text-list');
// console.log(pageScrollBar);
// 해당 지점에 도착할 때마다 변화 >> active 클래스 추가
// 스크롤값 구하기
window.addEventListener('scroll', function () {
  let subPageScroll = window.scrollY;
  // console.log(subPageScroll);

  // 문서 전체 높이
  let subFullH = document.documentElement.scrollHeight;
  // 현재 화면 높이
  let subNowH = window.innerHeight;
  // 스크롤 가능한 높이
  let subDocumentH = subFullH - subNowH;

  // 스크롤 진행률
  let subScrollPercent = (subPageScroll / subDocumentH) * 100;
  // console.log(subScrollPercent);

  // 대전충남녹색연합 파트
  if (subScrollPercent >= 0 && subScrollPercent <= 30) {
    pageScrollBar.forEach(function () {
      pageScrollBar[0].classList.add('active');
    })
  } else {
    pageScrollBar.forEach(function () {
      pageScrollBar[0].classList.remove('active');
    })
  }
  // 4대강령 파트
  if (subScrollPercent >= 30 && subScrollPercent <= 77) {
    pageScrollBar.forEach(function () {
      pageScrollBar[1].classList.add('active');
    })
  } else {
    pageScrollBar.forEach(function () {
      pageScrollBar[1].classList.remove('active');
    })
  }
  // 정관재정수칙 파트
  if (subScrollPercent >= 77 && subScrollPercent <= 100) {
    pageScrollBar.forEach(function () {
      pageScrollBar[2].classList.add('active');
    })
  } else {
    pageScrollBar.forEach(function () {
      pageScrollBar[2].classList.remove('active');
    })
  }
})

// 아코디언 선택
let policyAcc = document.querySelectorAll('.policy-acc');
// 아코디언 타이틀 클릭하면 해당 아코디언 열리게
let policyAccTitle = document.querySelectorAll('.policy-acc-title');
policyAccTitle.forEach(function (title, index) {
  title.addEventListener('click', function () {
    let isActive = policyAcc[index].classList.contains('active');
    // active 붙어 있으면 안되니까 전체 초기화
    policyAcc.forEach(function (e) {
      e.classList.remove('active');
    });
    // 클릭한 것만 active 추가
    if (!isActive) { policyAcc[index].classList.add('active'); }
  });
});

// 탭메뉴 선택하면 해당 콘텐츠 나오게
// 탭버튼, 해당 콘텐츠 선택
let subTabBtn = document.querySelectorAll('.sub-page-tab-btn');
let subTabCon = document.querySelectorAll('.sub-page-tab-content');
// 탭버튼에 클릭 이벤트 추가
subTabBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // 모든 버튼에 있는 active 삭제
    subTabBtn.forEach(function (b) {
      b.classList.remove('active');
    })
    // 클릭한 버튼만 active 추가
    btn.classList.add('active');
    // 모든 콘텐츠에 있는 active 삭제
    subTabCon.forEach(function (con) {
      con.classList.remove('active');
    })
    // data-tap이랑 id랑 일치하는 콘텐츠만 active 추가
    let showCon = btn.getAttribute('data-tab');
    subTabCon.forEach(function (c) {
      if (c.id === showCon) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    })
  })
})

// 지역조직 파트
// 지역 카테고리 선택, 지역조직 설명 선택
let regions = document.querySelectorAll('.region-category');
let regionDescs = document.querySelectorAll('.region-desc');
// 지역 카테고리 선택하면 해당 지역 설명 박스 안에 뜨도록
regions.forEach(function (r) {
  r.addEventListener('click', function () {
    // 이미 추가 되어 있는 거 삭제, 초기화
    regions.forEach(function (e) {
      e.classList.remove('active');
    })
    // 클릭한 거만 선택되게
    r.classList.add('active');
    // data-region이랑 같은 id만 보이게
    // 값 받아오기
    let targerRegion = r.getAttribute('data-region');
    regionDescs.forEach(function (d) {
      if (d.id === targerRegion) {
        d.classList.add('active');
      } else {
        d.classList.remove('active');
      }
    })
  })
})

// 주요활동성과 아코디언
// 타이틀 옆에 있는 버튼을 누르면 디테일 영역 열리도록
let resultTitleBtn = document.querySelectorAll('.sub-result-card-btn');
let resultDetail = document.querySelectorAll('.sub-result-card-detail');
resultTitleBtn.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    // 이미 열려 있으면 초기화
    if (resultDetail[index].classList.contains('active')) {
      resultDetail[index].classList.remove('active');
      btn.textContent = '▲';
    } else {
      // 전체 초기화
      resultDetail.forEach(function (d) {
        d.classList.remove('active');
      })
      resultTitleBtn.forEach(function (b) {
        b.textContent = '▲';
      })
      // 클릭한 거 열기
      resultDetail[index].classList.add('active');
      btn.textContent = '▼';
    }
  })
})

// 반응형일 때, 해당 탭 콘텐츠 보여주기
// 반응형 아코디언 메뉴 선택
let subAccMenu = document.querySelectorAll('.accordion-li-sub1');
// console.log(subAccMenu);
// 보여줘야되는 콘텐츠 subTabCon >> NodeList
// 클릭 이벤트 추가
subAccMenu.forEach(function (m) {
  m.addEventListener('click', function () {
    let showTabCon = m.getAttribute('data-tab');
    // console.log(showTabCon);
    subTabCon.forEach(function (s) {
      if (s.id === showTabCon) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
        document.getElementById('accordion').style.display = 'none';
        document.querySelector('.trigger').classList.remove('active');
      }
    })
  })
})

let subLnbMenu = document.querySelectorAll('.lnb-li-sub1');
// console.log(subLnbMenu);
subLnbMenu.forEach(function (m) {
  m.addEventListener('click', function (e) {
    // a태그 동작 막기
    e.preventDefault();
    let showTabCon = m.getAttribute('data-tab');
    // console.log(showTabCon);
    subTabCon.forEach(function (s) {
      if (s.id === showTabCon) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    })
  })
})