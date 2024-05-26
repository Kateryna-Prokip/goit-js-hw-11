import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${n}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${t}</span></li>
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${u}</span></li>
            </ul>
          </a>
        </li>
    `).join("")}const d="44022186-1b27698d00f0ef58470e0f06e",h="https://pixabay.com/api/",p=s=>{const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},a=document.querySelector(".gallery"),y=document.querySelector(".search-form"),l=document.querySelector(".loader"),g=document.querySelector(".search-field"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){s.preventDefault();const o=g.value.trim();if(o===""){a.innerHTML="",s.target.reset(),c.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3}),l.style.display="none";return}a.innerHTML="",l.classList.remove("is-hidden"),p(o).then(r=>{r.totalHits===0?(c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML=""):(a.innerHTML=m(r.hits),L.refresh())}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}y.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
