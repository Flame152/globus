
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/***/ (() => {

var checkAccordion = document.querySelector(".accordion");

if (checkAccordion) {
  var btns = document.querySelectorAll(".accordion__title");
  var accActive = document.querySelectorAll(".accordion__title");
  var accTxt = document.querySelectorAll(".accordion__txt");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("acc-active")) {
        // btns.forEach((btn) => {
        //   btn.classList.remove("acc-active");
        // });
        this.classList.add("acc-active");
      } else {
        this.classList.remove("acc-active");
      }
    });
  });
} // let btns = document.querySelectorAll(".accordion__title");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     if (!this.classList.contains("acc-active")) {
//       this.classList.add("acc-active");
//       openHeight;
//     } else {
//       this.classList.remove("acc-active");
//       closeHeight;
//     }
//   });
// });

/***/ }),

/***/ "./src/blocks/modules/allPlaces/allPlaces.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/allPlaces/allPlaces.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");


function initSwiper() {
  var shopsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".shopSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_shops",
      prevEl: ".arrow-hidden-prev_shops"
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1029: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });


  var enterSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".enterSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_enter",
      prevEl: ".arrow-hidden-prev_enter"
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var foodSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".foodSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_food",
      prevEl: ".arrow-hidden-prev_food"
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var servicesSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".servicesSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
   // freeMode: true,
   // watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_services",
      prevEl: ".arrow-hidden-prev_services"
    },

    pagination: {
        el: ".pagination-services",
        clickable: true,
    },
    breakpoints: {
      644: {
        slidesPerView: 2,
        spaceBetween: 10
      },  
     
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },  
    }
  });
}

initSwiper();
document.querySelectorAll('.allPlacesTabs__title').forEach(function (i) {
  i.addEventListener('click', function () {
    setTimeout(function () {
      if (document.querySelector('.arrow-hidden-prev')) {
        if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_shops')) {
          document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter');
          document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food');
          document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_shops');
          document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter');
          document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food');
          document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_shops');
          document.querySelectorAll('.allPlaces__link').forEach(function (i) {
            i.classList.remove('allPlaces__link_active');
          });
          document.querySelector('.allPlaces__link_shops').classList.add('allPlaces__link_active');
          setTimeout(function () {
            initSwiper();
          }, "200");
        }

        if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_enter')) {
          // document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops');
          // document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food');
          document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_enter');
          // document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops');
          // document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food');
          document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_enter');
          document.querySelectorAll('.allPlaces__link').forEach(function (i) {
            i.classList.remove('allPlaces__link_active');
          });
          document.querySelector('.allPlaces__link_enter').classList.add('allPlaces__link_active');
          setTimeout(function () {
            initSwiper();
          }, "200");
        }

        if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_food')) {
          // document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter');
          // document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops');
          document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_food');
          // document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter');
          // document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops');
          document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_food');
          document.querySelectorAll('.allPlaces__link').forEach(function (i) {
            i.classList.remove('allPlaces__link_active');
          });
          document.querySelector('.allPlaces__link_food').classList.add('allPlaces__link_active');
          setTimeout(function () {
            initSwiper();
          }, "200");
        }
      }

      initSwiper();
    }, 100);
  });
});

/***/ }),

/***/ "./src/blocks/modules/cinema/cinema.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/cinema/cinema.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true
});
var mySwiper2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next_cinema",
    prevEl: ".swiper-button-prev_cinema"
  },
  thumbs: {
    swiper: mySwiper
  }
});

/***/ }),




/***/ "./src/blocks/modules/datePicker/datePicker.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/datePicker/datePicker.js ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-out */ "./node_modules/scroll-out/lib/index.js");
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Splitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Splitting */ "./node_modules/Splitting/dist/splitting.js");
/* harmony import */ var Splitting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Splitting__WEBPACK_IMPORTED_MODULE_1__);

 //burger

// window.addEventListener("DOMContentLoaded", function () {
//   var menu = document.querySelector(".header__list"),
//       menuItem = document.querySelectorAll(".header__link"),
//       hamburger = document.querySelector(".header__burger"),
//       overflowHidden = document.querySelector("body");
//   hamburger.addEventListener("click", function () {
//     hamburger.classList.toggle("burger_active");
//     menu.classList.toggle("menu_active");
//     overflowHidden.classList.toggle("overflow-hidden-y");
//   });
//   menuItem.forEach(function (item) {
//     item.addEventListener("click", function () {
//       hamburger.classList.toggle("burger_active");
//       menu.classList.toggle("menu_active");
//       overflowHidden.classList.toggle("overflow-hidden-y");
//     });
//   });
// }); //Hidden header

var header = document.querySelector(".header");
var scrollPrev = 0;
window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.classList.add("out");
  } else {
    header.classList.remove("out");
  }

  scrollPrev = scrolled;
});

window.onload = function () {
  Splitting__WEBPACK_IMPORTED_MODULE_1___default()();
  scroll_out__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: ".word",
    once: true
  });
};

/***/ }),

/***/ "./src/blocks/modules/main-slider/main-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-slider/main-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var swiperMain = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.main-slider', {
  slidesPerView: 1,
  loop: true,
  speed:800,
  lazyLoading: true,
  autoplay: {
  delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/blocks/modules/popups/popups.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/popups/popups.js ***!
  \*********************************************/
/***/ (() => {

function modalContent(trigger, item) {
  var btn = document.querySelectorAll(trigger),
      pop = document.querySelector(item),
      close = document.querySelectorAll('.popup-close'),
      closeBack = document.querySelectorAll('.popup'),
      activeClass = 'show',
      hideClass = 'hide';

  function showContent() {
    pop.classList.add(activeClass);
    pop.classList.remove(hideClass);
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('resize'));
  }

  function hideContent() {
    pop.classList.remove(activeClass);
    pop.classList.add(hideClass);
    document.body.style.overflow = '';
  }

  function showHideContent(trigger, func) {
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target && e.target.className === item.className) {
          e.preventDefault();
          func();
        }
      });
    });
  }

  showHideContent(btn, showContent);
  showHideContent(close, hideContent);
  showHideContent(closeBack, hideContent);

  function hideScroll() {
    var div = document.createElement('div');
    document.body.append(div);
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    var result = div.offsetWidth - div.clientWidth;
    return result;
  }
}

modalContent('.popup-btn', '.popup_shop-popup');

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/***/ (() => {

// Change option selected
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/

x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener("click", closeAllSelect);

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ (() => {

var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener("click", function (e) {
    var target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

var servicesTabs = document.querySelector(".allPlacesTabs");

if (servicesTabs) {
  tabs(".allPlacesTabs__titles", ".allPlacesTabs__title", ".allPlacesTabs__item", "allPlacesTabs__title_active");
}

var shopsTabs = document.querySelector(".shopsTabs");

if (shopsTabs) {
  tabs(".shops-filter", ".shops-filter__item", ".shopsTabs__item", "shops-filter__item_active");
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-slider/main-slider */ "./src/blocks/modules/main-slider/main-slider.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/popups/popups */ "./src/blocks/modules/popups/popups.js");
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_popups_popups__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_cinema_cinema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/cinema/cinema */ "./src/blocks/modules/cinema/cinema.js");
/* harmony import */ var _modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/datePicker/datePicker */ "./src/blocks/modules/datePicker/datePicker.js");
/* harmony import */ var _modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_allPlaces_allPlaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/allPlaces/allPlaces */ "./src/blocks/modules/allPlaces/allPlaces.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__);











/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
