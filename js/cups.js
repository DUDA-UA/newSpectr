"use strict";function changeURLLanguage(){var e=select.value;localStorage.setItem("lang",e),location.href=window.location.pathname+"#"+localStorage.getItem("lang"),location.reload()}function changeLanguage(){var e=localStorage.getItem("lang");"ua"==e?(localStorage.setItem("local2","ua"),e=localStorage.getItem("local2"),location.href=window.location.pathname+"#ua"):(localStorage.setItem("local2","ru"),e=localStorage.getItem("local2"),location.href=window.location.pathname+"#ru"),select.value=e,document.querySelector(".read-moreCup1").innerText=langArr["read-moreCup1"][e],document.querySelector(".read-moreCup2").innerText=langArr["read-moreCup2"][e],document.querySelector(".cups-page1").innerHTML=langArr["cups-page1"][e],document.querySelector(".cups-page3").innerHTML=langArr["cups-page3"][e],document.querySelector(".cups-page4").innerHTML=langArr["cups-page4"][e],document.querySelector(".cups-page5").innerHTML=langArr["cups-page5"][e],document.querySelector(".cups-page6").innerHTML=langArr["cups-page6"][e],document.querySelector(".cups-page7").innerHTML=langArr["cups-page7"][e],document.querySelector(".cups-page8").innerText=langArr["cups-page8"][e],document.querySelector(".cups-page8-1").innerText=langArr["cups-page8-1"][e],document.querySelector(".cups-img0-1").innerText=langArr["cups-img0-1"][e],document.querySelector(".cups-img0").innerHTML=langArr["cups-img0"][e],document.querySelector(".cups-img").innerHTML=langArr["cups-img"][e],document.querySelector(".cups-img1").innerHTML=langArr["cups-img1"][e],document.querySelector(".cups-img2").innerHTML=langArr["cups-img2"][e],document.querySelector(".cups-img3").innerHTML=langArr["cups-img3"][e],document.querySelector(".cups-img4").innerHTML=langArr["cups-img4"][e],document.querySelector(".cups-img5").innerHTML=langArr["cups-img5"][e],document.querySelector(".cups-img6").innerHTML=langArr["cups-img6"][e],document.querySelector(".cups-img7").innerHTML=langArr["cups-img7"][e],document.querySelector(".cups-img8").innerText=langArr["cups-img8"][e],document.querySelector(".cups-img9").innerText=langArr["cups-img9"][e],document.querySelector(".cups-img10").innerText=langArr["cups-img10"][e],document.querySelector(".cups-img11").innerHTML=langArr["cups-img11"][e],document.querySelector(".cups-img11-1").innerHTML=langArr["cups-img11-1"][e],document.querySelector(".cups-img12").innerText=langArr["cups-img12"][e],document.querySelector(".cups-img13").innerText=langArr["cups-img13"][e],document.querySelector(".cups-img14").innerHTML=langArr["cups-img14"][e],document.querySelector(".cups-buy0").innerHTML=langArr["cups-buy0"][e],document.querySelector(".cups-buy").innerHTML=langArr["cups-buy"][e],document.querySelector(".cups-buy1").innerHTML=langArr["cups-buy1"][e],document.querySelector(".cups-buy2").innerHTML=langArr["cups-buy2"][e],document.querySelector(".cups-buy3").innerHTML=langArr["cups-buy3"][e],document.querySelector(".cups-buy4").innerHTML=langArr["cups-buy4"][e],document.querySelector(".cups-buy5").innerHTML=langArr["cups-buy5"][e],document.querySelector(".cups-buy6").innerHTML=langArr["cups-buy6"][e],document.querySelector(".cups-buy7").innerHTML=langArr["cups-buy7"][e],document.querySelector(".cups-buy8").innerText=langArr["cups-buy8"][e],document.querySelector(".cups-buy9").innerText=langArr["cups-buy9"][e],document.querySelector(".cups-buy10").innerText=langArr["cups-buy10"][e],document.querySelector(".cups-buy11").innerHTML=langArr["cups-buy11"][e],document.querySelector(".cups-buy12").innerText=langArr["cups-buy12"][e],document.querySelector(".cups-buy13").innerText=langArr["cups-buy13"][e],document.querySelector(".cups-buy14").innerHTML=langArr["cups-buy14"][e],document.querySelector(".cups-buy15").innerText=langArr["cups-buy15"][e],document.querySelector(".cup-clr").innerHTML=langArr["cup-clr"][e],document.querySelector(".cup-box1").innerHTML=langArr["cup-box1"][e],document.querySelector(".cup-box2").innerHTML=langArr["cup-box2"][e],document.querySelector(".cup-box3").innerHTML=langArr["cup-box3"][e],document.querySelector(".cup-box4").innerHTML=langArr["cup-box4"][e],document.querySelector(".cup-gallery").innerHTML=langArr["cup-gallery"][e],document.querySelector(".cup-order1").innerHTML=langArr["cup-order1"][e],document.querySelector(".cup-order2").innerHTML=langArr["cup-order2"][e],document.querySelector(".cup-order3").innerHTML=langArr["cup-order3"][e],document.querySelector(".cup-order4").innerHTML=langArr["cup-order4"][e],document.querySelector(".cup-order5").innerHTML=langArr["cup-order5"][e],document.querySelector(".cup-order6").innerHTML=langArr["cup-order6"][e],document.querySelector(".cup-footer").innerHTML=langArr["cup-footer"][e]}function showItems(){readMore1.classList.add("text-hide"),showItem1.forEach(function(e){return e.classList.add("card-show")})}function showItems1(){readItem.classList.add("text-hide"),showItem2.forEach(function(e){return e.classList.add("card-show")})}var select=document.querySelector("select");select.addEventListener("change",changeURLLanguage),changeLanguage();var showItem1=document.querySelectorAll(".show-item1"),readMore1=document.querySelector(".read-moreCup1"),showItem2=document.querySelectorAll(".show-item2"),readMore2=document.querySelector(".read-moreCup2"),readItem=document.querySelector(".read-item");readMore1.addEventListener("click",showItems),readMore2.addEventListener("click",showItems1);var mask=document.querySelector(".mask");window.addEventListener("load",function(){mask.classList.add("hide"),setTimeout(function(){mask.remove()},600)});