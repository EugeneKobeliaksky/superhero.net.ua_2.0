$(document).ready(function(){$("#btn-down").click(function(t){$("#mobile-bar").css("display","block")}),$("#btn-up").click(function(t){return $("#mobile-bar").css("display","none"),t.stopImmediatePropagation(),!1})});var multiItemSlider=function(t,e){var i=document.querySelector(t),r=i.querySelector(".slider__wrapper"),n=i.querySelectorAll(".slider__item"),o=i.querySelectorAll(".slider__control"),l=i.querySelector(".slider__control_left"),a=i.querySelector(".slider__control_right"),s=parseFloat(getComputedStyle(r).width),c=parseFloat(getComputedStyle(n[0]).width),u=0,d=0,_=c/s*100,m=[];function f(t){if("right"===t){if(p<=u+s/c-1)return;l.classList.contains("slider__control_show")||l.classList.add("slider__control_show"),a.classList.contains("slider__control_show")&&p<=u+s/c&&a.classList.remove("slider__control_show"),u++,d-=_}if("left"===t){if(u<=v)return;a.classList.contains("slider__control_show")||a.classList.add("slider__control_show"),l.classList.contains("slider__control_show")&&u-1<=v&&l.classList.remove("slider__control_show"),u--,d+=_}r.style.transform="translateX("+d+"%)"}function h(t){var e;t.target.classList.contains("slider__control")&&(t.preventDefault(),e=t.target.classList.contains("slider__control_right")?"right":"left",f(e))}n.forEach(function(t,e){m.push({item:t,position:e,transform:0})});var v=0,p=m.length-1;return o.forEach(function(t){t.addEventListener("click",h)}),{right:function(){f("right")},left:function(){f("left")}}},slider=multiItemSlider(".slider");window.scrollBy({top:100,behavior:"smooth"}),function(t){t(window).on("load",function(){t(".content").mCustomScrollbar()})}(jQuery),function(i){"use strict";var e=i('.validate-input input[name="name"]'),r=i('.validate-input input[name="email"]'),n=i('.validate-input input[name="subject"]'),o=i('.validate-input textarea[name="message"]');function l(t){var e=i(t).parent();i(e).addClass("alert-validate")}i(".validate-form").on("submit",function(){var t=!0;return""==i(e).val().trim()&&(l(e),t=!1),""==i(n).val().trim()&&(l(n),t=!1),null==i(r).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)&&(l(r),t=!1),""==i(o).val().trim()&&(l(o),t=!1),t}),i(".validate-form .input1").each(function(){i(this).focus(function(){var t;t=i(this).parent(),i(t).removeClass("alert-validate")})})}(jQuery);
//# sourceMappingURL=main.js.map
