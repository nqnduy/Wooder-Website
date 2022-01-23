/*******************************************************************************
 ************************* (Add Background Header) *****************************
 *******************************************************************************/

let header = document.querySelector("header");
let slider = document.querySelector(".slider");
let heightHeader = header.offsetHeight;
let heightSlider = slider.offsetHeight;

function addBgHeader() {
   let scrollY = window.pageYOffset;
   if (scrollY > heightSlider - heightHeader - heightHeader) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
}
/*******************************************************************************
 *******************************************************************************
 *******************************************************************************
 *******************************************************************************/

/*******************************************************************************
 ***************************** (Add Back To Top) ******************************
 ******************************************************************************/

let heightWindow = window.innerHeight;
let positionFooter = document.querySelector("footer").offsetTop;
let toTop = document.querySelector(".totop");
document.querySelector(".wrap-content .right").addEventListener("click", function () {
   window.scrollTo({ top: 0 });
});

function addBackToTop() {
   let scrollY = window.pageYOffset;
   if (scrollY > heightWindow - heightHeader && scrollY < positionFooter) {
      toTop.classList.add("active");
   } else {
      toTop.classList.remove("active");
   }
}

toTop.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
   });
});

/*******************************************************************************
 *******************************************************************************
 *******************************************************************************
 *******************************************************************************/

/*********************************** M E N U **********************************
 ************************* (Change Menu When Selected) ************************
 ******************************************************************************/

let menus = document.querySelectorAll("header .menu a");
function removeActiveMenu() {
   menus.forEach(function (menu_element, menu_index) {
      menu_element.classList.remove("active");
   });
}

sections = [];

menus.forEach(function (element, index) {
   let className = element.getAttribute("href").replace("#", "");
   let section = document.querySelector("." + className);
   sections.push(section);
   element.addEventListener("click", function (e) {
      e.preventDefault();
      let positionSection = section.offsetTop;
      window.scrollTo({ top: positionSection - heightHeader });
      removeActiveMenu();
      element.classList.add("active");
   });
});

/*********************************** M E N U **********************************
 ************************* (Change Menu When Scroll) **************************
 ******************************************************************************/

function addActiveWhenScroll() {
   let scrollY = window.pageYOffset;
   sections.forEach(function (section, index) {
      if (scrollY > section.offsetTop - heightHeader - 1 && scrollY < section.offsetTop + section.offsetHeight) {
         removeActiveMenu();
         menus[index].classList.add("active");
      } else {
         menus[index].classList.remove("active");
      }
   });
}

/*******************************************************************************
 *******************************************************************************
 *******************************************************************************
 *******************************************************************************/

/******************************** S L I D E R **********************************
 ********************* (Change Slider When Click Button) ***********************
 *******************************************************************************/

// let listItemSlider = document.querySelectorAll(".slider__list-item");
// currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, index) {
//     if (itemSlider.classList.contains("active")) {
//         currentSlider = index;
//     }
// });

// document
//     .querySelector(".control__btn.next")
//     .addEventListener("click", function () {
//         if (currentSlider < listItemSlider.length - 1) {
//             goTo(currentSlider + 1);
//         } else {
//             goTo(0);
//         }
//     });

// document
//     .querySelector(".control__btn.prev")
//     .addEventListener("click", function () {
//         if (currentSlider > 0) {
//             goTo(currentSlider - 1);
//         } else {
//             goTo(listItemSlider.length - 1);
//         }
//     });

/******************************** S L I D E R **********************************
 ***************** (Change Paging Number + Dots When Click) ********************
 *******************************************************************************/

// let number = document.querySelector(".slider__control span");

// let dotSliderList = document.querySelectorAll(".slider__control ul li");

// dotSliderList.forEach(function (dotSlider, index) {
//     dotSlider.addEventListener("click", function () {
//         goTo(index);
//     });
// });

/******************************** S L I D E R **********************************
 ***************************** G O T O Function ********************************
 *******************************************************************************/

// function goTo(index) {
//     //slider
//     listItemSlider[currentSlider].classList.remove("active");
//     dotSliderList[currentSlider].classList.remove("active");

//     listItemSlider[index].classList.add("active");
//     dotSliderList[index].classList.add("active");

//     currentSlider = index;

//     number.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
// }

/*******************************************************************************
 *******************************************************************************
 *******************************************************************************
 *******************************************************************************/

/********************************* V I D E O ***********************************
 ******************************** Popup video **********************************
 *******************************************************************************/

let btn_video = document.querySelectorAll(".playicon");
let popup_video = document.querySelector(".popup-video");
let iframe = document.querySelector(".popup-video iframe");
let wv = document.querySelector(".watchvideo .btn_watch");

/**3 thumbnail */
btn_video.forEach(function (element, index) {
   element.addEventListener("click", function () {
      let id_video = element.getAttribute("data-video-id");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + id_video + "?autoplay=1");
      popup_video.style.display = "flex";
   });
});
/**slider watch video */

wv.addEventListener("click", function (e) {
   e.preventDefault();
   let id_video = wv.getAttribute("data-video-id");
   iframe.setAttribute("src", "https://www.youtube.com/embed/" + id_video + "?autoplay=1");
   popup_video.style.display = "flex";
});
/**close */
popup_video.addEventListener("click", function (e) {
   iframe.setAttribute("src", "");
   popup_video.style.display = "none";
});

/*******************************************************************************
 *******************************************************************************
 *******************************************************************************
 *******************************************************************************/

/*************************** N A V I G A T I O N ******************************
 ***************************** Active Navigation *******************************
 *******************************************************************************/

let nav = document.querySelector(".nav");
let hamburger = document.querySelector("header .hamburger");
hamburger.addEventListener("click", function () {
   if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
   } else {
      nav.classList.add("active");
      hamburger.classList.add("active");
   }
});
/********************************** C A L L ************************************
 ******************************** S C R O L L  *********************************
 ********************** ********F U N C T I O N ********************************/

document.addEventListener("scroll", function () {
   addBgHeader();
   addBackToTop();
   addActiveWhenScroll();
});

var initPhotoSwipeFromDOM = function (gallerySelector) {
   var parseThumbnailElements = function (el) {
      var thumbElements = el.childNodes,
         numNodes = thumbElements.length,
         items = [],
         figureEl,
         linkEl,
         size,
         item;
      for (var i = 0; i < numNodes; i++) {
         figureEl = thumbElements[i]; // <figure> element
         if (figureEl.nodeType !== 1) {
            continue;
         }
         linkEl = figureEl.children[0]; // <a> element
         size = linkEl.getAttribute("data-size").split("x");
         item = {
            src: linkEl.getAttribute("href"),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10),
         };
         if (figureEl.children.length > 1) {
            item.title = figureEl.children[1].innerHTML;
         }
         if (linkEl.children.length > 0) {
            // <img> thumbnail element, retrieving thumbnail url
            item.msrc = linkEl.children[0].getAttribute("src");
         }
         item.el = figureEl; // save link to element for getThumbBoundsFn
         items.push(item);
      }
      return items;
   };
   var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
   };
   var onThumbnailsClick = function (e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      var eTarget = e.target || e.srcElement;
      var clickedListItem = closest(eTarget, function (el) {
         return el.tagName && el.tagName.toUpperCase() === "FIGURE";
      });
      if (!clickedListItem) {
         return;
      }
      var clickedGallery = clickedListItem.parentNode,
         childNodes = clickedListItem.parentNode.childNodes,
         numChildNodes = childNodes.length,
         nodeIndex = 0,
         index;
      for (var i = 0; i < numChildNodes; i++) {
         if (childNodes[i].nodeType !== 1) {
            continue;
         }
         if (childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
         }
         nodeIndex++;
      }
      if (index >= 0) {
         openPhotoSwipe(index, clickedGallery);
      }
      return false;
   };
   var photoswipeParseHash = function () {
      var hash = window.location.hash.substring(1),
         params = {};
      if (hash.length < 5) {
         return params;
      }
      var vars = hash.split("&");
      for (var i = 0; i < vars.length; i++) {
         if (!vars[i]) {
            continue;
         }
         var pair = vars[i].split("=");
         if (pair.length < 2) {
            continue;
         }
         params[pair[0]] = pair[1];
      }
      if (params.gid) {
         params.gid = parseInt(params.gid, 10);
      }
      return params;
   };
   var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll(".pswp")[0],
         gallery,
         options,
         items;
      items = parseThumbnailElements(galleryElement);
      options = {
         galleryUID: galleryElement.getAttribute("data-pswp-uid"),
         getThumbBoundsFn: function (index) {
            var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
               pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
               rect = thumbnail.getBoundingClientRect();

            return {
               x: rect.left,
               y: rect.top + pageYScroll,
               w: rect.width,
            };
         },
         showAnimationDuration: 0,
         hideAnimationDuration: 0,
      };
      if (fromURL) {
         if (options.galleryPIDs) {
            for (var j = 0; j < items.length; j++) {
               if (items[j].pid == index) {
                  options.index = j;
                  break;
               }
            }
         } else {
            options.index = parseInt(index, 10) - 1;
         }
      } else {
         options.index = parseInt(index, 10);
      }
      if (isNaN(options.index)) {
         return;
      }
      if (disableAnimation) {
         options.showAnimationDuration = 0;
      }
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
   };
   var galleryElements = document.querySelectorAll(gallerySelector);
   for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute("data-pswp-uid", i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
   }
   var hashData = photoswipeParseHash();
   if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
   }
};

window.onload = (event) => {
   initPhotoSwipeFromDOM(".gallery__list");
};

let $carousel = $(".slider__list");
$carousel.flickity({
   cellAlign: "left",
   contain: true,
   wrapAround: true,
   prevNextButtons: false,
   on: {
      ready: function () {
         let dotted = $(".flickity-page-dots");
         let paging = $(".slider__control .paging .dotted");
         dotted.appendTo(paging);
      },
      change: function (index) {
         let number = $(".slider__control .paging span");
         let indexPage = index + 1;
         number.text(indexPage.toString().padStart(2, 0));
      },
   },
});

$(".slider .control .control__btn.prev").on("click", function () {
   $carousel.flickity("previous");
});
$(".slider .control .control__btn.next").on("click", function () {
   $carousel.flickity("next");
});
