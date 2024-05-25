import{S as u,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=o=>o.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:a,downloads:m})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${l}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes">Likes: ${e}</small>
        <small class="text-body-views">Views: ${t}</small>
        <small class="text-body-comments">Comments: ${a}</small>
        <small class="text-body-downloads">Dowloads: ${m}</small>
    </div>
 
    </li>s
`).join("");new u(".gallery a",{captionsData:"alt",captionDelay:250});const f="44022186-1b27698d00f0ef58470e0f06e",y="https://pixabay.com/api/",h=o=>{const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},i=document.querySelector(".js-gallery"),p=document.querySelector(".js-search-form"),c=document.querySelector(".js-loader");function g(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(s===""){i.innerHTML="",o.target.reset(),n.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}i.innerHTML="",c.classList.remove("is-hidden"),h(s).then(r=>{r.totalHits===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),i.innerHTML=d(r.hits)}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),c.classList.add("is-hidden")})}p.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
