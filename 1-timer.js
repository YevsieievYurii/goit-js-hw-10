import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as l}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let i,u=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){u=t[0],u<=new Date?(a.disabled=!0,l.warning({title:"Caution",message:"Please choose a date in the future"})):a.disabled=!1}};f(s,b);function q(){a.disabled=!0,s.disabled=!0,i=setInterval(()=>{const e=u-new Date;if(e<=0){clearInterval(i),d(0,0,0,0),l.info({title:"Hello",message:"Час вийшов!"}),s.disabled=!1;return}const{days:n,hours:o,minutes:c,seconds:m}=C(e);d(n,o,c,m)},1e3)}function d(t,e,n,o){h.textContent=r(t),y.textContent=r(e),p.textContent=r(n),S.textContent=r(o)}function C(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}function r(t){return String(t).padStart(2,"0")}a.addEventListener("click",q);
//# sourceMappingURL=1-timer.js.map
