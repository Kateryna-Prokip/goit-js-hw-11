import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
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
    `).join("")}const m="44022186-1b27698d00f0ef58470e0f06e",d="https://pixabay.com/api/",h=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},a=document.querySelector(".gallery"),p=document.querySelector(".search-form"),c=document.querySelector(".loader"),y=document.querySelector(".search-field");function g(s){s.preventDefault();const o=y.value.trim();if(o===""){a.innerHTML="",s.target.reset(),l.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3}),loader.style.display="none";return}a.innerHTML="",c.classList.remove("is-hidden"),h(o).then(r=>{r.totalHits===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML=f(r.hits)}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),c.classList.add("is-hidden")}),input.value="",form.reset()}p.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
