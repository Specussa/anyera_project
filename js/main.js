const menu = document.querySelector('.header__nav');
const menu_c = document.querySelector('.header__consultation');
const burger = document.querySelector('.header__burger');
const burger_c = document.querySelector('.header__project');
const burgernav = document.querySelector('.header__nav_burger');
const burgernav_c = document.querySelector('.header__consultation_burger');
const overlay = document.querySelector('.overlay');
const form = document.getElementById('form');
const username = document.getElementById('username');
const control = document.getElementById('control');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
const controlValue = control.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(usernameValue === '') {
  setErrorFor(username, 'Неверный Логин или Email');
} else {
  setSuccessFor(username);
}

if(controlValue === '') {
  setErrorFor(control, 'Неверное контрольное слово');
} else {
  setSuccessFor(control);
}

if(passwordValue === '') {
  setErrorFor(password, 'Пароль должен быть не менее 6 символов');
} else {
  setSuccessFor(password);
}

if(password2Value === '') {
    setErrorFor(password2, 'Пароли не совпадают');
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Пароли не совпадают');
  } else{
    setSuccessFor(password2);
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