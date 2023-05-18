const menu = document.querySelector('.header__nav');
const menu_c = document.querySelector('.header__consultation');
const burger = document.querySelector('.header__burger');
const burger_c = document.querySelector('.header__project');
const burgernav = document.querySelector('.header__nav_burger');
const burgernav_c = document.querySelector('.header__consultation_burger');
const overlay = document.querySelector('.overlay');
const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const text = document.getElementById('text');

// start navbar
document.querySelector('.header__burger').addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
  
  if (burgernav.classList.contains("active")) {
    menu.classList.remove("active");
    burgernav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu.classList.add("active");
    burgernav.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
  
  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    burgernav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  });
})

document.querySelector('.header__nav_burger').addEventListener('click', function() {
  if (burgernav.classList.contains("active")) {
    menu.classList.remove("active");
    burgernav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  }
})

document.querySelector('.header__project').addEventListener('click', function() {
  if (burger_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
  
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  } else {
    menu_c.classList.add("active");
    burgernav_c.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
  
  overlay.addEventListener('click', () => {
    menu_c.classList.remove('active');
    burger_c.classList.remove('active');
    burgernav_c.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  });
})

document.querySelector('.header__consultation_burger').addEventListener('click', function() {
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  }
})
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
    const select = new Select()
    select.init()
  }

  init() {
    if (this.findSelect()) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList()
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

  isCallSelectElement(element) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect() {
    const select = document.querySelector(SELECT)

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

  selectOverlayIsClickedElement(element) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select