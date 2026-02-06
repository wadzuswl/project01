window.onload = function () {
  function updateProgressBar(swiper) {
    let noticeSlideIndex = swiper.activeIndex;
    let noticeSlideLen = swiper.slides.length - 3;
    let currentPercent = ((noticeSlideIndex + 1) / noticeSlideLen) * 100;
    document.querySelector('.notice-progress-bar-fill').style.width = `${currentPercent}%`;
  }

  const swiper1 = new Swiper(".noticeSwiper1", {
    slidesPerView: 'auto',
    freeMode: true,
    on: {
      init() {
        updateProgressBar(this);
      },
      slideChange() {
        updateProgressBar(this);
      }
    }
  });

  const swiper2 = new Swiper(".noticeSwiper2", {
    slidesPerView: 'auto',
    freeMode: true,
    on: {
      init() {
        updateProgressBar(this);
      },
      slideChange() {
        updateProgressBar(this);
      }
    }
  });

  const swiper3 = new Swiper(".noticeSwiper3", {
    slidesPerView: 'auto',
    freeMode: true,
    on: {
      init() {
        updateProgressBar(this);
      },
      slideChange() {
        updateProgressBar(this);
      }
    }
  });

  const swipers = [swiper1, swiper2, swiper3];
  let currentSwiper = swiper1;

  // 버튼 요소
  const nextBtn = document.querySelector('.notice-slide-btn-next');
  const prevBtn = document.querySelector('.notice-slide-btn-prev');

  // 버튼에 직접 이벤트 연결
  function connectButtons(swiper) {
    currentSwiper = swiper;
    nextBtn.onclick = () => swiper.slideNext();
    prevBtn.onclick = () => swiper.slidePrev();
  }

  // 초기 버튼 연결
  connectButtons(swiper1);

  let noticeTabBtns = document.querySelectorAll('.notice-tab-btn');

  noticeTabBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      let noticeTarget = this.getAttribute('data-notice');

      noticeTabBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');

      document.querySelectorAll('.noticeSwiper').forEach(function (s) {
        s.classList.remove('active');
      });
      document.getElementById(noticeTarget).classList.add('active');

      // 버튼을 현재 Swiper에 연결
      connectButtons(swipers[index]);

      let progressReset = (1 / 6) * 100;
      document.querySelector('.notice-progress-bar-fill').style.width = `${progressReset}%`;
    });
  });
}