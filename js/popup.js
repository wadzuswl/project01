/*
페이지에 들어갔을 때 팝업창 로딩
새로고침했을 때 팝업창 뜨지 않게
브라우저 닫았다가 열면 팝업창 뜨게
*/

// html 다 로드된 후, 팝업창 로딩하는 함수 실행, 안전하게 로드하기 위해서
document.addEventListener('DOMContentLoaded', function () {
  // 팝업 영역, 닫기 버튼 선택
  let popup = document.querySelector('.popup-container');
  let popupCloseBtn = document.querySelector('.popup-delete');
  // console.log(popup, popupCloseBtn);

  // sessionStorage >> 브라우저 열려 있는 동안만 값을 유지 >> 임시 메모장
  // getItem('변수명') >> '변수명'으로 저장된 값을 가져와라 >> 있으면 값 돌려줌, 없으면 null
  let checkPopup = sessionStorage.getItem('checkPopup');
  // console.log(checkPopup); // null >> 초기 상태 >> 팝업이 떠야 함
  // null은 false >> 조건식 결과가 true가 되도록 >> !checkPopup


  // 브라우저 열었을 때만 팝업창 뜨게 >> !checkPopup
  if (!checkPopup) {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }

  // 닫기 버튼
  popupCloseBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    // 세션 기록에 팝업창 봤다는 흔적 남기기 null >> true
    // sessionStorage 문자열만 저장 >> true 말고 'true'
    sessionStorage.setItem('checkPopup', 'true');
  })
})