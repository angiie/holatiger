// 轮播图控制逻辑
class Carousel {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.carousel-slide');
    this.indicators = container.querySelectorAll('.carousel-indicator');
    this.prevBtn = container.querySelector('.carousel-prev');
    this.nextBtn = container.querySelector('.carousel-next');
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5秒自动切换
    
    this.init();
  }
  
  init() {
    // 设置初始状态
    this.updateSlides();
    this.updateIndicators();
    
    // 绑定事件
    this.bindEvents();
    
    // 开始自动播放
    this.startAutoPlay();
    
    // 鼠标悬停时暂停自动播放
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());
  }
  
  bindEvents() {
    // 上一张按钮
    this.prevBtn?.addEventListener('click', () => {
      this.prevSlide();
    });
    
    // 下一张按钮
    this.nextBtn?.addEventListener('click', () => {
      this.nextSlide();
    });
    
    // 指示器点击
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });
    
    // 键盘控制
    document.addEventListener('keydown', (e) => {
      if (this.container.matches(':hover')) {
        if (e.key === 'ArrowLeft') {
          this.prevSlide();
        } else if (e.key === 'ArrowRight') {
          this.nextSlide();
        }
      }
    });
    
    // 触摸滑动支持
    this.addTouchSupport();
  }
  
  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    
    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    this.container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      // 滑动距离大于50px才触发切换
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }
  
  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
    });
  }
  
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add('bg-white');
        indicator.classList.remove('bg-white/60');
      } else {
        indicator.classList.add('bg-white/60');
        indicator.classList.remove('bg-white');
      }
    });
  }
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlides();
    this.updateIndicators();
    this.resetAutoPlay();
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlides();
    this.updateIndicators();
    this.resetAutoPlay();
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlides();
    this.updateIndicators();
    this.resetAutoPlay();
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

// 页面加载完成后初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
  // 查找所有轮播图容器
  const carouselContainers = document.querySelectorAll('.carousel-container');
  
  carouselContainers.forEach(container => {
    // 找到包含轮播图容器的父元素（包含箭头和指示器的容器）
    const carouselWrapper = container.parentElement;
    if (carouselWrapper && carouselWrapper.classList.contains('relative')) {
      new Carousel(carouselWrapper);
    }
  });
});

// 导出类以供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Carousel;
}