import{i as c,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="44022186-1b27698d00f0ef58470e0f06e",m="https://pixabay.com/api/",u=r=>{const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})};console.log(u);const y=r=>r.reduce((o,{tags:t,webformatURL:a,largeImageURL:e,likes:s,views:n,comments:d,downloads:f})=>o+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${f}</span>
        </div>
    </div>
</li>
    `,"");u().then(r=>{console.log(r.results)});const i=document.querySelector(".gallery"),g=document.querySelector(".form-search"),l=document.querySelector(".loader");function L(r){r.preventDefault();const o=r.target.elements.searchKeyword.value.trim();if(i.innerHTML="",o==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),fetchPhotos(o).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=y(t.hits),new h(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>console.log(t)).finally(()=>{r.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
