(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RYUt:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return u}));var o=n("OMvp");const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?s(e,t,o):l(e,t))},a=e=>e===e.getRootNode().activeElement,s=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c="input, textarea, [no-blur]",d=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},u=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),u=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,f=new WeakMap,w=async e=>{e.componentOnReady&&await e.componentOnReady();const t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),c=e.closest("ion-content"),d=c?null:e.closest("ion-footer");if(l){if(c&&s&&!p.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{a(t)&&i(e,t,n)},s=()=>i(e,t,!1),l=()=>r(!0),c=()=>r(!1);return Object(o.a)(n,"ionScrollStart",l),Object(o.a)(n,"ionScrollEnd",c),t.addEventListener("blur",s),()=>{Object(o.b)(n,"ionScrollStart",l),Object(o.b)(n,"ionScrollEnd",c),t.addEventListener("ionBlur",s)}})(e,l,c);p.set(e,t)}if((c||d)&&r&&!f.has(e)){const t=((e,t,n,r,s)=>{let l;const c=e=>{l=Object(o.m)(e)},d=c=>{if(!l)return;const d=Object(o.m)(c);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,l,d)||a(t)||(c.preventDefault(),c.stopPropagation(),(async(e,t,n,o,r)=>{if(!n&&!o)return;const a=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-i,c=s-r,d=Math.round(l<0?-l:c>0?-c:0),u=Math.min(d,r-a),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||o,r);if(n&&Math.abs(a.scrollAmount)<4)t.focus();else if(i(e,t,!0,a.inputSafeY),t.focus(),"undefined"!=typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,a.scrollAmount,a.scrollDuration),i(e,t,!1,a.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement();if(a.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}})(e,t,n,r,s))};return e.addEventListener("touchstart",c,!0),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",d,!0)}})(e,l,c,d,n);f.set(e,t)}}};l&&(()=>{let e=!0,t=!1;const n=document;Object(o.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(c))return;const i=o.target;i!==r&&(i.matches(c)||i.closest(c)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),u&&(e=>{const t=document;t.addEventListener("focusin",t=>{d(t.target,e)}),t.addEventListener("focusout",e=>{d(e.target,0)})})(n);for(const o of m)w(o);t.addEventListener("ionInputDidLoad",e=>{w(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(s){const t=p.get(e);t&&t(),p.delete(e)}if(r){const t=f.get(e);t&&t(),f.delete(e)}})(e.detail)})}}}]);