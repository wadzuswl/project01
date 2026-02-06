// 한 페이지에 보여야 되는 카드 개수 >> 12개
let newsCardsPerPage = 12;
// 전체 카드 선택
let newsCards = document.querySelectorAll('.sub2-news-card');
// console.log(newsCards);
// 페이지 수 계산
let newsCardsLen = newsCards.length;
// console.log(newsCardsLen);
let pageCount = Math.ceil(newsCardsLen / newsCardsPerPage);
// console.log(pageCount);

// 이전 버튼, 다음 버튼
let prevOneBtn = document.querySelector('.sub2-pagination .fa-angle-left');
let nextOneBtn = document.querySelector('.sub2-pagination .fa-angle-right');
// console.log('이전 버튼', prevOneBtn);
// console.log('다음 버튼', nextOneBtn);
// 다음 그룹 앞으로 버튼, 다음 그룹 뒤로 버튼
let prevTenBtn = document.querySelector('.sub2-pagination .fa-angles-left');
let nextTenBtn = document.querySelector('.sub2-pagination .fa-angles-right');
// console.log('완전 이전 버튼', prevTenBtn);
// console.log('완전 다음 버튼', nextTenBtn);

// 페이지 번호 표시하는 부분 한 번에 페이지 개수 몇 개까지 보여줄 건지
let maxPageNum = 10;
// 현재 보고 있는 '페이지 그룹 번호'
let pageActiveIndex = 0;
// 현재 보고 있는 '페이지 번호'
let currentPageNum = 0;

// 페이지네이션 생성
// 페이지 번호 표시할 영역 선택
let pageNumber = document.getElementById('pageNumber');
// console.log(pageNumber);
for (let i = 1; i <= pageCount; i++) {
  pageNumber.innerHTML += `<li><button>${i}</button></li>`;
}

// 생성된 페이지 번호 가져오기
let pageNumberBtn = pageNumber.querySelectorAll('button');
// console.log(pageNumberBtn);
// 버튼에 클릭 이벤트 추가
pageNumberBtn.forEach(function (page, idx) {
  page.addEventListener('click', function () {
    // 상태 정보 업데이트
    // 현재 페이지
    currentPageNum = idx;
    // 몇 번째 그룹에 속해 있는지
    pageActiveIndex = Math.floor(currentPageNum / maxPageNum);
    // 그 페이지에 해당하는 카드 12개 보여주는 함수
    displayNewsCards(currentPageNum);
    // 페이지 그룹 표시하는 함수
    displayPage(pageActiveIndex);
    // 한 페이지 이동하는 버튼 스타일 조정하는 함수
    OneBtnStyle();
  })
})

// 한 페이지에 카드 12개 보여주는 함수
// idx >> 페이지 인덱스
function displayNewsCards(idx) {
  // 해당 페이지의 시작 인덱스
  let startIdx = idx * newsCardsPerPage;
  // 해당 페이지의 끝 인덱스
  let endIdx = startIdx + newsCardsPerPage;
  // console.log(startIdx, endIdx);

  // 묶여있는 걸 하나하나 펼치고 새로운 배열에 복사해서 담기 >> 스프레드 연산자
  // 스프레드 연산자 >> 배열에서 사용할 수 있는 것 쓸 수 있음
  let newsCardsArray = [...newsCards];
  // console.log(newsCardsArray);

  // 다 숨기고
  for (ca of newsCardsArray) {
    ca.style.display = 'none';
  }
  // 현재 페이지에 해당하는 카드 12개만 표시
  let newNewsCards = newsCardsArray.slice(startIdx, endIdx);
  // console.log(newNewsCards);
  for (nc of newNewsCards) {
    nc.style.display = '';
  }
  // 선택된 페이지 active 클래스 추가
  // 다 지우고
  for (nb of pageNumberBtn) {
    nb.classList.remove('active');
  }
  // 선택된 페이지만 active 추가
  pageNumberBtn[idx].classList.add('active');
}
// 첫 화면에 첫 페이지
displayNewsCards(0);

// 페이지 그룹 보여주는 함수
function displayPage(num) {
  // 다 숨기고
  for (nb of pageNumberBtn) {
    // console.log(nb);
    nb.style.display = 'none';
  }
  // 페이지 그룹 개수 계산 >> 한 그룹당 페이지 10개
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  let pageArr = [...pageNumberBtn];
  let startIdx = num * maxPageNum;
  let endIdx = startIdx + maxPageNum;
  let pageListArr = pageArr.slice(startIdx, endIdx);
  // 선택된 페이지 그룹 표시
  for (la of pageListArr) {
    la.style.display = 'block';
  }
  // 이전 다음 그룹 버튼
  // 첫번째 그룹일 때만 비활성화
  if (pageActiveIndex === 0) {
    prevTenBtn.style.opacity = '0.5';
    prevTenBtn.disabled = true;
    prevTenBtn.style.cursor = 'not-allowed';
  } else {
    prevTenBtn.style.opacity = '1';
    prevTenBtn.disabled = false;
    prevTenBtn.style.cursor = 'pointer';
  }
  // 다음 다음 그룹 버튼
  // 마지막 그룹일 때만 비활성화
  if (pageActiveIndex === totalPageCount - 1) {
    nextTenBtn.style.opacity = '0.5';
    nextTenBtn.disabled = true;
    nextTenBtn.style.cursor = 'not-allowed';
  } else {
    nextTenBtn.style.opacity = '1';
    nextTenBtn.disabled = false;
    nextTenBtn.style.cursor = 'pointer';
  }
}
displayPage(0);

// 이전으로 1페이지 이동하는 버튼
prevOneBtn.addEventListener('click', function () {
  // 인덱스 번호가 0이상일 때만 감소하게
  if (currentPageNum > 0) {
    --currentPageNum;
  }
  // 현재 페이지 번호가 몇번째 그룹에 속하는지
  pageActiveIndex = Math.floor(currentPageNum / maxPageNum);
  // 지금 페이지의 콘텐츠 보여주기
  displayNewsCards(currentPageNum);
  // 현재 페이지에 맞는 페이지 그룹 보여주기
  displayPage(pageActiveIndex);
  OneBtnStyle();
});
// 다음으로 1페이지 이동하는 버튼
nextOneBtn.addEventListener('click', function () {
  // 인덱스 번호가 마지막 인덱스 이하일 때만 증가하게
  if (currentPageNum < pageCount - 1) {
    ++currentPageNum;
  }
  // 현재 페이지 번호가 몇번째 그룹에 속하는지
  pageActiveIndex = Math.floor(currentPageNum / maxPageNum);
  // 지금 페이지의 콘텐츠 보여주기
  displayNewsCards(currentPageNum);
  // 현재 페이지에 맞는 페이지 그룹 보여주기
  displayPage(pageActiveIndex);
  OneBtnStyle();
});

// 페이지 하나씩 움직이는 버튼 스타일 조정하는 함수
function OneBtnStyle() {
  if (currentPageNum === 0) {
    prevOneBtn.style.opacity = '0.3';
    prevOneBtn.disabled = true;
    prevOneBtn.style.cursor = 'not-allowed';
  } else {
    prevOneBtn.style.opacity = '1';
    prevOneBtn.disabled = false;
    prevOneBtn.style.cursor = 'pointer';
  }
  if (currentPageNum === (pageCount - 1)) {
    nextOneBtn.style.opacity = '0.3';
    nextOneBtn.disabled = true;
    nextOneBtn.style.cursor = 'not-allowed';
  } else {
    nextOneBtn.style.opacity = '1';
    nextOneBtn.disabled = false;
    nextOneBtn.style.cursor = 'pointer';
  }
}
OneBtnStyle();

// 이전 페이지 그룹으로 넘어가는 버튼 클릭 이벤트 추가
prevTenBtn.addEventListener('click', function () {
  // 이전 페이지 그룹 시작 번호 가져오기
  let prevPageBtn = pageActiveIndex * maxPageNum - maxPageNum;
  --pageActiveIndex;
  displayNewsCards(prevPageBtn);
  displayPage(pageActiveIndex);
  OneBtnStyle();
})
// 다음 페이지 그룹으로 넘어가는 버튼 클릭 이벤트 추가
nextTenBtn.addEventListener('click', function () {
  let nextPageBtn = pageActiveIndex * maxPageNum + maxPageNum;
  ++pageActiveIndex;
  displayNewsCards(nextPageBtn);
  displayPage(pageActiveIndex);
  OneBtnStyle();
})