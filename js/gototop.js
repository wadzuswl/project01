let gototop = document.getElementById('gototopBtn');
window.addEventListener('scroll', function () {
  let scrollGototop = window.scrollY;

  // 문서 전체 높이
  let fullHeight = document.documentElement.scrollHeight;
  // 현재 화면 높이
  let nowHeight = window.innerHeight;
  // 스크롤 가능한 높이
  let documentHeight = fullHeight - nowHeight;

  // 스크롤 진행률
  let scrollPercent = (scrollGototop / documentHeight) * 100;

  // 성과 섹션부터 보이게
  if (scrollPercent >= 23) {
    gototop.classList.add('show');
  } else {
    gototop.classList.remove('show');
  }

  // 누르면 화면 맨 위로
  gototop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})