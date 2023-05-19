const menu = document.querySelector('.header__nav');
const menu_c = document.querySelector('.header__consultation');
const burger = document.querySelector('.header__burger');
const burger_c = document.querySelector('.header__project');
const burgernav = document.querySelector('.header__nav_burger');
const burgernav_c = document.querySelector('.header__consultation_burger');
const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const text = document.getElementById('text');
const anchors = document.querySelectorAll(".header__anchor_item")

// start navbar
document.querySelector('.header__burger').addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
  }
  if (burgernav.classList.contains("active")) {
    menu.classList.remove("active");
    burgernav.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu.classList.add("active");
    burgernav.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
  if (burger_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  }
})
document.querySelector('.header__nav_burger').addEventListener('click', function() {
  if (burgernav.classList.contains("active")) {
    menu.classList.remove("active");
    burgernav.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  }
})

document.querySelector('.header__project').addEventListener('click', function() {
  if (burger_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
    menu.classList.remove("active");
    burger.classList.remove("active");
    burgernav.classList.remove("active");
  } else {
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    burgernav.classList.remove("active");
  }
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu_c.classList.add("active");
    burgernav_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
document.querySelector('.header__consultation_burger').addEventListener('click', function() {
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  }
})
for (const anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    if (burgernav_c.classList.contains("active")) {
      menu_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
    if (burgernav.classList.contains("active")) {
      menu.classList.remove("active");
      burgernav.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
  })
}
// end navbar

// start validate form

form.addEventListener('submit', e => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
// trim to remove the whitespaces
const usernameValue = username.value.trim();
const phoneValue = phone.value.trim();
const textValue = text.value.trim();

if(usernameValue === '') {
    setErrorFor(username, 'Обязательное поле');
  } else {
    setSuccessFor(username);
}

if(phoneValue === '') {
    setErrorFor(phone, 'Обязательное поле');
  } else {
    setSuccessFor(phone);
}

if(textValue === '') {
    setErrorFor(text, 'Обязательное поле');
  } else {
    setSuccessFor(text);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'forms__form_control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'forms__form_control success';
}

// function iscontrol(control) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
// }
// end validate form

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {


    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('header__select_list_opened')
  }

  openSelectList() {
    this.selectList.classList.add('header__select_list_opened')
    this.selectArrow.classList.add('header__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.classList.remove('header__select_list_opened')
    this.selectArrow.classList.remove('header__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML
    this.selectInput.value = element.innerHTML
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start hover menu
var hover = document.querySelector('.header__nav_list'),
elemHover = false;

var items = $('.header__subnav_list li');
items.css('opacity', 1);
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 0).animate({ opacity: 0 }, 0);
}

hover.addEventListener('mouseover', function(e) {
  if(elemHover) return;
  var target = e.target.closest('.header__nav_item');
  if(!target) return;

  var items = $('.header__subnav_list li');
  items.css('opacity', 0);
  for (var i = 0; i < items.length; i++) {
    $(items[i]).delay(i * 400).animate({ opacity: 1 }, 400);
  }
  elemHover = target;
  
  var parent = target.closest('.header__nav_list'),
  old = parent.querySelector('.active')
  if(old) old.classList.remove('active')
  target.classList.add('active')
})

hover.addEventListener('mouseout', function(e) {
  if(!elemHover) return
  var target = e.target.closest('.header__nav_item')
  
  elemHover = null;
})

// var itemsl = document.querySelector('.header__subnav_list li');
// itemsl.style.opacity = "0";
// for (var i = 0; i < itemsl.length; i++) {
//   document.querySelector(itemsl[i]).style.transition = (i * 400) + "s";
//   document.querySelector(itemsl[i]).style.opacity = "1";
// }
// end hover menu

// start dark mode
const btnlight = document.querySelector('.button__light');
const btndark = document.querySelector('.button__dark');

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  btndark.classList.add("active");
  btnlight.classList.remove("active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btndark.classList.add("active");
  btnlight.classList.remove("active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btndark.classList.remove("active");
  btnlight.classList.add("active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light";
  if (newColorScheme === "dark") {
    btndark.classList.add("active");
    btnlight.classList.remove("active");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    btndark.classList.remove("active");
    btnlight.classList.add("active");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
});

// Включение ночного режима по кнопке
document.querySelector('.button__light').addEventListener('click', function() {
  if (btndark.classList.contains("active")) {
    btndark.classList.remove("active");
    btnlight.classList.add("active");
  }
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", "light");
})

document.querySelector('.button__dark').addEventListener('click', function() {
  if (btnlight.classList.contains("active")) {
    btnlight.classList.remove("active");
    btndark.classList.add("active");
  }
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "dark");
})
// end dark mode