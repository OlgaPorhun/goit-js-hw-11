import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const m="https://pixabay.com/api/",p="43965450-8f7f6d09b5429fd61500b9928";async function y(s){const r=`${m}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}const l=document.getElementById("gallery"),d=document.getElementById("loader"),f=document.getElementById("no-results");let a;function h(){l.innerHTML=""}function g(){d.classList.remove("is-hidden")}function L(){d.classList.add("is-hidden")}function w(){f.style.display="block"}function b(){f.style.display="none"}function E(s){const r=s.map(e=>`
    <a class="gallery-item" href="${e.largeImageURL}">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </a>
  `).join("");l.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new u(".gallery-item")}document.getElementById("search-form").addEventListener("submit",async s=>{s.preventDefault();const r=document.getElementById("search-input").value.trim();if(r===""){c.error({title:"Error",message:"Search query cannot be empty!"});return}h(),b(),g();try{const e=await y(r);e.hits.length===0?w():E(e.hits)}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{L()}});
//# sourceMappingURL=commonHelpers.js.map
