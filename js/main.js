const menu = document.querySelector('.header__nav');
const menu_c = document.querySelector('.header__consultation');
const menu_v = document.querySelector('.header__career');
const burger = document.querySelector('.header__burger');
const burger_c = document.querySelector('.header__project');
const burger_v = document.querySelector('.career__button');
const burgernav = document.querySelector('.header__nav_burger');
const burgernav_c = document.querySelector('.header__consultation_burger');
const burgernav_v = document.querySelector('.header__career_burger');
const form = document.getElementById('form');
const formcareer = document.getElementById('formcareer');
const username = document.getElementById('username');
const usernamecareer = document.getElementById('usernamecareer');
const phone = document.getElementById('phone');
const phonecareer = document.getElementById('phonecareer');
const text = document.getElementById('text');
const textcareer = document.getElementById('textcareer');
const linkcareer = document.getElementById('linkcareer');
const anchors = document.querySelectorAll(".header__anchor_item")
const filtercategory = document.querySelector('.filter__category');
const elsliderphoto = document.querySelector('.team__photo');
const elsliderreview = document.querySelector('.team__review');
var preview = document.querySelector('.showreel__button'),
video = document.querySelector('#showreel__video'),
modal = document.querySelector('.showreel__modal'),
modalClose = document.querySelector('.showreel__modal_close');

// start navbar
// кнопка header__burger
document.querySelector('.header__burger').addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
  }
  if (burger_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
})
// кнопка header__project
document.querySelector('.header__project').addEventListener('click', function() {
  if (burger_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    menu.classList.remove("active");
    burger.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
  } else {
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
  }
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    menu_c.classList.add("active");
    burgernav_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// кнопка закрыть для header__project
document.querySelector('.header__consultation_burger').addEventListener('click', function() {
  if (burgernav_c.classList.contains("active")) {
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
})
// закрыть все оверлеии при нажатии на nav menu
for (const anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    if (burger.classList.contains("active")) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
    if (burger_c.classList.contains("active")) {
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
    if(!burgernav_v){} else {
      if (burgernav_v.classList.contains("active")) {
        menu_v.classList.remove("active");
        burger_v.classList.remove("active");
        burgernav_v.classList.remove("active");
        document.body.style.overflow = "visible";
        document.body.style.height = "100%";
      }
    }
  })
}
// end navbar

// start validate form project
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
    setErrorFor(username, 'Обязательное поле'); } else { setSuccessFor(username);
}
if(phoneValue === '') {
    setErrorFor(phone, 'Обязательное поле'); } else { setSuccessFor(phone);
}
if(textValue === '') {
    setErrorFor(text, 'Обязательное поле'); } else { setSuccessFor(text);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'header__forms_form_control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'header__forms_form_control success';
}

// function iscontrol(control) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
// }
// end validate form project

// start career
if(!burger_v){} else {
  // кнопка career__button
  burger_v.addEventListener('click', function() {
    if (burger_v.classList.contains("active")) {
      menu_v.classList.remove("active");
      burger_v.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
      menu.classList.remove("active");
      burger.classList.remove("active");
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
  burgernav_v.addEventListener('click', function() {
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
}
// end career


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

hover.addEventListener('mouseover', function(e) {
  if(elemHover) return;
  var target = e.target.closest('.header__nav_item');
  if(!target) return;
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

// start accordion
var acc = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(e) {
    var accordion = this.nextElementSibling;
    var courseAccordion = document.getElementsByClassName("accordion__panel");
    var courseAccordionActive = document.getElementsByClassName("accordion__button active");

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
      this.classList.remove("active");
      accordion.classList.remove("active");
    } else {
      for (var q = 0; q < courseAccordionActive.length; q++) {
        courseAccordionActive[q].classList.remove("active");
        courseAccordion[q].classList.remove("active");
      }
      for (var p = 0; p < courseAccordion.length; p++) {
        this.classList.remove("active");
        courseAccordion[p].classList.remove("active");
        courseAccordion[p].style.maxHeight = null;
      }
      accordion.style.maxHeight = (accordion.scrollHeight + 40) + "px";
      accordion.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end accordion

// start счетчик для всех листов

const subnav = document.querySelectorAll('.header__subnav_list'); 
[...subnav].forEach(function (li) { 
  for (let [index, elem] of [...li.children].entries()){ 
    elem.style.setProperty('--inc-step', index+1); 
  } 
});

// end счетчик для всех листов

// start filter projects
if(!filtercategory){} else {
	var filterCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
	var clear = document.querySelector("#clear");
	var filterFunc = function(start=false){
		var selectedFilters = {};
		filterCheckboxes.filter(a=>a.checked).forEach(a=>{
			if (!selectedFilters.hasOwnProperty(a.name)) {
			  selectedFilters[a.name] = [];
			}
			selectedFilters[a.name].push(a.value);
		});
		clear.style.display=Object.keys(selectedFilters).length>0?"":"none";
		var filteredResults = Array.from(document.querySelectorAll('.projects__item'));
		Object.entries(selectedFilters).forEach(a=>{
			filteredResults = filteredResults.filter(b=>{
				var matched = false,
				currentFilterValues = b.getAttribute("data-category").split(' ');
				currentFilterValues.forEach(currentFilterValue=>{
					if (a[1].indexOf(currentFilterValue) != -1) {
						matched = true;
						return false;
					}
				});
			  return matched;
			});
		});
		document.querySelectorAll('.projects__item').forEach(a=>a.style.display="none");
		filteredResults.forEach(a=>a.style.display="");
		if(this.tagName){
			document.querySelectorAll(".button__number").forEach(a=>{
				let cl = a.closest(".filter__category");
				if(cl)cl.classList[cl.contains(this)?"add":"remove"]("active");	
			});	
			let th = this.closest(".filter__label");
			if(th)th.classList[this.checked?"add":"remove"]("active");
			filterCheckboxes.forEach(a=>{
				let ob = a.checked;
				a.checked=true;
				let l = a.closest("label"); 
				let r = filterFunc();
				a.dataset.c=r.filter(c=>c.getAttribute("data-category").indexOf(a.value)!=-1).length;
				l.classList[["add","remove"][Number(a.dataset.c>0)]]("hidden");
				l.classList[["remove","add"][Number(a.dataset.c>0)]]("visible");
				l=l.querySelector(".button__number");
				if(l)l.textContent=a.dataset.c;
				a.checked=ob;
				filterFunc();
			}); 
			document.querySelectorAll('.filter__form').forEach(a=>{
				let s = a.previousElementSibling;
				if(s)s=s.querySelector(".button__number");
				if(s)s.textContent=Array.from(a.querySelectorAll("input")).reduce((a, b) => a + parseInt(b.dataset.c), 0);		 
			});
			const subnav = document.querySelectorAll('.filter__form '); 
			[...subnav].forEach(function (visible) { 
				let i = 0;
				for (let [index, elem] of [...visible.children].entries()){ 
					elem.style.setProperty('--inc-step', elem.classList.contains("visible")?++i:0); 
				} 
			});
			let save = {};
			filterCheckboxes.forEach(a=>save[a.id]=a.checked);
			console.log(save);
			localStorage.setItem("save",JSON.stringify(save));

		}
		return filteredResults;
	}

	filterCheckboxes.forEach(a=>a.addEventListener('change', filterFunc));   
	let cf = ()=>{
		filterCheckboxes.forEach(a=>a.checked=false);
		document.querySelectorAll(".active").forEach(a=>a.classList.remove("active"));
		filterFunc.bind(clear)();
	};
	clear.addEventListener("click",cf);
	let load = JSON.parse(localStorage.getItem('save'));console.log(load);
	for(let a in load){
		let e = document.getElementById(a);
		e.checked=load[a];
		filterFunc.bind(e)();
	}
	let fb = document.querySelectorAll(".filter__button");
	fb.forEach(a=>a.onclick=b=>fb.forEach(c=>c.parentNode.classList[c==b.target?"toggle":"remove"]("selected")));
}
// end filter projects

// start team photo slider
if(!elsliderphoto){} else {
  const itemListParent = document.querySelector('.team__photo_slider');
  const itemList = document.querySelectorAll('.team__photo_item');
  window.addEventListener('resize', onResizeHandler, false);
  if (document.documentElement.clientWidth >= 960) {
    itemListParent.insertBefore(itemList[0], itemList[3]);
  } else {
    itemListParent.insertBefore(itemList[0], itemList[2]);
  };
  function onResizeHandler() {
    if (document.documentElement.clientWidth >= 960) {
      itemListParent.insertBefore(itemList[0], itemList[3]);
    } else {
      itemListParent.insertBefore(itemList[0], itemList[2]);
    };
  }
  const sliderSelector = '.team__photo',
  options = {
    grabCursor: true,
    autoplay: false,
    init: false,
    // loop: true,
    // centerSlides: true,
    slidesPerView: 5, // or 'auto'
    spaceBetween: 0,
    // centeredSlides : true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows : false, // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    navigation: {
      nextEl: '.team__photo_next',
      prevEl: '.team__photo_prev',
    },
    breakpoints: {
      959: {
        slidesPerView: 3,
        spaceBetween: 0,
        arrow: false,
      }
    },
    on: {
      imagesReady: function(){
        this.el.classList.remove('loading');
      }
    }
  };
  const mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();
}
if(!elsliderreview){} else {
  const sliderSelector = '.team__review',
  options = {
    grabCursor: true,
    autoplay: false,
    init: false,
    // loop: true,
    // centerSlides: true,
    slidesPerView: 3, // or 'auto'
    spaceBetween: 0,
    // centeredSlides : true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 0, // Effect multipler
      slideShadows : false, // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.team__review_next',
      prevEl: '.team__review_prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 0,
        arrow: false,
      },
      639: {
        slidesPerView: 1,
        spaceBetween: 0,
        arrow: false,
      }
    },
    on: {
      imagesReady: function(){
        this.el.classList.remove('loading');
      }
    }
  };
  const mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();
}
// end team photo slider

// start video
if(!showreel__video){} else {
  preview.onclick = function(e) {
  e.preventDefault();
  modal.classList.add('showreel__modal_visible');
  video.play();
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";
  }
  modalClose.onclick = function() {
  modal.classList.remove('showreel__modal_visible');
  video.pause();
  video.currentTime = 0;
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
  }
}
// end video