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
      // 一旦动画触发，就不再需要观察这个元素了
      observer.unobserve(entry.target);
    }
  });
}, options);



let elements = ['.comp-kdfwglh3', '.comp-kdfwglhj1', '.comp-l2304nvk', '.comp-l230bg1b', '.comp-l230c3p2', '.comp-l230c8w4']

for (let i = 0; i < elements.length; i++) {
  // 开始观察每个元素
  const ele = document.querySelector(elements[i]);
  observer.observe(ele);
}

let isOpenToggle = false

function toggleMenu() {
  if (isOpenToggle) {
    document.querySelector('#container-MENU_AS_CONTAINER').style.opacity = 0;
    document.querySelector('#container-MENU_AS_CONTAINER').style.top = '-50px';
    document.querySelector('#QUICK_ACTION_BAR').style.display = 'block';
    document.querySelector('.dgPk4k').classList.remove('qQAcOx');
    document.querySelector('.a9Lpus').classList.remove('a5ALYC');
  } else {
    document.querySelector('#container-MENU_AS_CONTAINER').style.opacity = 1;
    document.querySelector('#container-MENU_AS_CONTAINER').style.top = 0;
    document.querySelector('#QUICK_ACTION_BAR').style.display = 'none';
    document.querySelector('.dgPk4k').classList.add('qQAcOx');
    document.querySelector('.a9Lpus').classList.add('a5ALYC');
  }  
  isOpenToggle = !isOpenToggle
}

function linkToAnotherLanguage(val) {
  if (val === 'zh') {
    window.location.href = `http://${window.location.hostname}:5500/index-web.html`
  }

  if (val === 'en') {
    window.location.href = `http://${window.location.hostname}:5500/index-web-en.html`
  }

  if (val === 'th') {
    window.location.href = `http://${window.location.hostname}:5500/index-web-th.html`
  }

  if (val === 'vi') {
    window.location.href = `http://${window.location.hostname}:5500/index-web-vi.html`
  }
}

  // 获取 select 元素
  var languageSelect = document.getElementById('languageSelect');

  // 监听 select 的变化
  languageSelect.addEventListener('change', function() {
    var selectedValue = this.value; // 获取被选中的 option 的值
    linkToAnotherLanguage(selectedValue); // 调用函数并传递选中的值
  });

  // 根据选中的语言值进行跳转的函数
  function linkToAnotherLanguage(val) {
    // 这里根据语言值进行操作，例如跳转到对应语言的页面
    // 以下为示例，根据实际需要进行修改
    if (val === 'zh') {
      window.location.href = `http://${window.location.hostname}:5500/index-h5.html`
    }
  
    if (val === 'en') {
      window.location.href = `http://${window.location.hostname}:5500/index-h5-en.html`
    }
  
    if (val === 'th') {
      window.location.href = `http://${window.location.hostname}:5500/index-h5-th.html`
    }
  
    if (val === 'vi') {
      window.location.href = `http://${window.location.hostname}:5500/index-h5-vi.html`
    }
  }

