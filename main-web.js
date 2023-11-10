let isOpenToggle = false

function toggleLanguagelist() {
  const switchToggle = isOpenToggle === true ? 'none' : 'block';
  document.querySelector('._YBogd').style.display = switchToggle;
  isOpenToggle = !isOpenToggle
}

function linkToAnotherLanguage(val) {
  if (val === 'zh') {
    window.location.href = `https://cosmic-biscotti-255d94.netlify.app/index-web.html`
  }

  if (val === 'en') {
    window.location.href = `https://cosmic-biscotti-255d94.netlify.app/index-web-en.html`
  }

  if (val === 'th') {
    window.location.href = `https://cosmic-biscotti-255d94.netlify.app/index-web-th.html`
  }

  if (val === 'vi') {
    window.location.href = `https://cosmic-biscotti-255d94.netlify.app/index-web-vi.html`
  } 
}

// 设置 IntersectionObserver 的选项
let options = {
  root: null, // 相对于视口进行检测
  rootMargin: '0px',
  threshold: 0.1 // 当元素有 10% 出现在视口中时触发回调
};

// 创建 IntersectionObserver 实例
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 检查元素是否出现在视口中
    if (entry.isIntersecting) {
      // 给元素添加 'visible' 类来触发动画
      // document.querySelector(elements[i]).style.opacity = 1;
      entry.target.style.opacity = 1;
      if (entry.target.id === 'comp-l32ry84l') {
        entry.target.style.left = '350px';
      }
      // 一旦动画触发，就不再需要观察这个元素了
      observer.unobserve(entry.target);
    }
  });
}, options);



let elements = ['#comp-l32ry83u1', '#comp-l32ry84l','#comp-kdfwglh9', '#comp-l22zqc4o', 
'#comp-kdfwglhf', '#comp-kdfwglhg2', '#comp-kdfwjhkz', '#comp-kdfwjhl11', 
'#comp-l2311a6i', '#comp-kdh22ls2', '#comp-kdfwjhlv1', '#comp-l23135hv', 
'#comp-l23135h6', '#comp-l23135hj', '#comp-l231b88h', '#comp-l231b89d', '#comp-l231b88y',
'#comp-l234s8pe', '#comp-l234s8pe', '#comp-kdd08iel', '#comp-kdczyuuy', '#comp-l234s8os', "#comp-l32ry840"]

for (let i = 0; i < elements.length; i++) {
  // 开始观察每个元素
  const ele = document.querySelector(elements[i]);
  observer.observe(ele);
}
