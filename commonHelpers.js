import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m=document.querySelector("input");m.value.trim();function p(s){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"43075807-09317d918fe027bf1568df9fe",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(t=>t.json())}const f=document.querySelector(".gallery");function d(s){if(s.length==0)l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const o=s.map(t=>`<li class="photos-list-item">
        <a class="photos-list-link" href="${t.largeImageURL}">
        <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <ul class="photo-information-container">
        <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${t.likes}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${t.views}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${t.comments}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${t.downloads}</p></li>
        </ul>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt"}).refresh()}}const c=document.querySelector(".gallery");let a="";const g=document.querySelector("input"),h=document.querySelector("form");h.addEventListener("submit",s=>{s.preventDefault(),a=g.value.trim(),a&&(c.innerHTML='<div class="loader"></div>',p(a).then(o=>d(o.hits)).catch(o=>{console.log(o),l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})})),c.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
