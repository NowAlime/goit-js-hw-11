import{i as n}from"./assets/vendor-38388549.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function u(s){const r="43075807-09317d918fe027bf1568df9fe",l="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",per_page:30,safesearch:!0}),e=`${l}?${i}`;return fetch(e).then(t=>t.json())}function f(s){const{largeImageURL:r,webformatURL:l,tags:i,likes:e,views:t,comments:o,downloads:p}=s;return`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img
                src="${l}"
                alt="${i}"
                width="360"
                height="200"
                class="gallery-img"
            />
            <ul class="gallery-descript">
            <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
            <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${t}</li>
            <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${o}</li>
            <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${p}</li>
         </ul>
        </a>
    </li>`}function m(s){return s.map(f).join("")}const g=document.querySelector(".gallery");let a;const c=document.querySelector("input"),y=document.querySelector("form"),d=document.querySelector(".loader");function h(){d.classList.remove("is-hidden")}function _(){d.classList.add("is-hidden")}c.addEventListener("input",s=>{s.preventDefault(),a=c.value.trim()});y.addEventListener("submit",s=>{s.preventDefault(),h(),a===""&&n.error({color:"yellow",message:" Please fill in the field for search",position:"topRight"}),a&&u(a).then(r=>m(r.hits)).catch(r=>{console.log(r),n.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>_()),g.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
