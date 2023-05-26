// кнопка career__button
document.querySelector('.career__button').addEventListener('click', function() {
  if (burger_v.classList.contains("active")) {
    menu_v.classList.remove("active");
    burger_v.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    menu.classList.remove("active");
    burger.classList.remove("active");
    burgernav.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
  } else {
    menu_v.classList.add("active");
    burger_v.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    burgernav.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
  }
  if (burgernav_v.classList.contains("active")) {
    menu_v.classList.remove("active");
    burgernav_v.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    menu_v.classList.add("active");
    burgernav_v.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// кнопка закрыть для career__button
document.querySelector('.header__career_burger').addEventListener('click', function() {
  if (burgernav_v.classList.contains("active")) {
    menu_v.classList.remove("active");
    burger_v.classList.remove("active");
    burgernav_v.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
})
// start validate form career
formcareer.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputscareer();
  });
  
  function checkInputscareer() {
  // trim to remove the whitespaces
  const usernamecareerValue = usernamecareer.value.trim();
  const phonecareerValue = phonecareer.value.trim();
  const textcareerValue = textcareer.value.trim();
  
  if(usernamecareerValue === '') {
      setErrorFor(usernamecareer, 'Обязательное поле'); } else { setSuccessFor(usernamecareer);
  }
  if(phonecareerValue === '') {
      setErrorFor(phonecareer, 'Обязательное поле'); } else { setSuccessFor(phonecareer);
  }
  if(textcareerValue === '') {
      setErrorFor(textcareer, 'Обязательное поле'); } else { setSuccessFor(textcareer);
    }
  }
  
  function setErrorFor(input, message) {
    const formcareerControl = input.parentElement;
    const small = formcareerControl.querySelector('small');
    formcareerControl.className = 'header__forms_form_control error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formcareerControl = input.parentElement;
    formcareerControl.className = 'header__forms_form_control success';
  }
  
  // function iscontrol(control) {
  // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
  // }
  // end validate form career