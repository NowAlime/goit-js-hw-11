import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function m(s){const e=`https://pixabay.com/api/?${new URLSearchParams({key:"43075807-09317d918fe027bf1568df9fe",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(e).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const f=new u("ul.gallery a",{captionsData:"alt"}),p=document.querySelector("ul.gallery");function d(s){if(s.length==0)iziToast.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const o=s.map(e=>`<li class="photos-list-item">
        <a class="photos-list-link" href="${e.largeImageURL}">
        <img class="photo" src="${e.webformatURL}" alt="${e.tags}"/>
        </a>
        <ul class="photo-information-container">
        <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${e.likes}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${e.views}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${e.comments}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${e.downloads}</p></li>
        </ul>
        </li>`).join("");p.insertAdjacentHTML("beforeend",o),f.refresh()}}const h=document.querySelector("input"),g=document.querySelector("form"),l=document.querySelector(".loader"),y=document.querySelector("ul.gallery");function L(){l.classList.remove("hidden")}function c(){l.classList.add("hidden")}c();g.addEventListener("submit",b);function b(s){s.preventDefault(),y.innerHTML="";const o=h.value.trim();o===""&&(a.error({color:"yellow",message:" Please fill in the field for search",position:"topRight"}),L()),o&&m(o).then(e=>d(e.hits)).catch(e=>{console.log(e),a.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>c())}
//# sourceMappingURL=commonHelpers.js.map