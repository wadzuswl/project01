// 1. 탭버튼, 해당 콘텐츠 선택
let tabBtns = document.querySelectorAll('.doantion-tab-btn');
let contents = document.querySelectorAll('.donation-tap-content');
// 2. 탭버튼에 클릭 이벤트 추가
tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // 3. 모든 버튼에 active 제거
    tabBtns.forEach(function (b) {
      b.classList.remove('active');
    })
    // 4. 클릭한 버튼만 active 추가
    btn.classList.add('active');
    // 5. 모든 콘텐츠 active 삭제
    contents.forEach(function (con) {
      con.classList.remove('active');
    })
    // 6. 클릭한 버튼의 data-donatoinTapCon와 일치하는 id의 콘텐츠만 보여주기
    let targetTap = btn.getAttribute('data-donation');
    contents.forEach(function (con) {
      if (con.id === targetTap) {
        con.classList.add('active');
      } else {
        con.classList.remove('active');
      }
    })
  })
})