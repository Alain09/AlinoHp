import{r as v}from"./index-B5QHra9J.js";var S=new Map,h=new WeakMap,A=0,x=void 0;function M(e){return e?(h.has(e)||(A+=1,h.set(e,A.toString())),h.get(e)):"0"}function O(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?M(e.root):e[t]}`).toString()}function T(e){const t=O(e);let n=S.get(t);if(!n){const u=new Map;let c;const i=new IntersectionObserver(s=>{s.forEach(r=>{var o;const g=r.isIntersecting&&c.some(d=>r.intersectionRatio>=d);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=g),(o=u.get(r.target))==null||o.forEach(d=>{d(g,r)})})},e);c=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:u},S.set(t,n)}return n}function _(e,t,n={},u=x){if(typeof window.IntersectionObserver>"u"&&u!==void 0){const o=e.getBoundingClientRect();return t(u,{isIntersecting:u,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:c,observer:i,elements:s}=T(n),r=s.get(e)||[];return s.has(e)||s.set(e,r),r.push(t),i.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(s.delete(e),i.unobserve(e)),s.size===0&&(i.disconnect(),S.delete(c))}}function C({threshold:e,delay:t,trackVisibility:n,rootMargin:u,root:c,triggerOnce:i,skip:s,initialInView:r,fallbackInView:o,onChange:g}={}){var d;const[b,V]=v.useState(null),l=v.useRef(),[R,p]=v.useState({inView:!!r,entry:void 0});l.current=g,v.useEffect(()=>{if(s||!b)return;let a;return a=_(b,(E,I)=>{p({inView:E,entry:I}),l.current&&l.current(E,I),I.isIntersecting&&i&&a&&(a(),a=void 0)},{root:c,rootMargin:u,threshold:e,trackVisibility:n,delay:t},o),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,b,c,u,i,s,n,o,t]);const w=(d=R.entry)==null?void 0:d.target,y=v.useRef();!b&&w&&!i&&!s&&y.current!==w&&(y.current=w,p({inView:!!r,entry:void 0}));const f=[V,R.inView,R.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}export{C as u};
