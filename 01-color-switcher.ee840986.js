!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}o.disabled=!0,o.disabled=!0,n.addEventListener("click",(function(){e.style.backgroundColor="".concat(a()),n.disabled=!0,o.disabled=!1,t=setInterval((function(){e.style.backgroundColor="".concat(a())}),1e3)})),o.addEventListener("click",(function(){clearInterval(t),n.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.ee840986.js.map
