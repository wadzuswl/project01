var swiper = new Swiper(".activitySwiper", {
  autoplay: {
    delay: 5000,
  },
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 슬라이드 바뀔 때마다 activity-bar-text-list에 active 추가 삭제
  on: {
    slideChange() {
      // 슬라이드 인덱스 값 선택
      let currentIndex = this.activeIndex;
      // activity-bar-text-list 선택
      let changeList = document.querySelectorAll('.activity-bar-text-list');
      changeList.forEach(function (list, index) {
        // 슬라이드 인덱스랑 activity-bar-text-list 인덱스가 같으면 추가, 아니면 삭제
        if (index === currentIndex) {
          list.classList.add('active');
        } else {
          list.classList.remove('active');
        }
      })
    }
  }
});