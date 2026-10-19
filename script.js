(() => {
 const bar=document.getElementById('progress-bar');
 const update=()=>{const d=document.documentElement;bar.style.width=(100*d.scrollTop/Math.max(1,d.scrollHeight-d.clientHeight))+'%'};
 addEventListener('scroll',update,{passive:true});update();
 if('IntersectionObserver' in window){
 const links=[...document.querySelectorAll('.contents nav a')];
 const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}}},{rootMargin:'-10% 0px -65% 0px'});
 document.querySelectorAll('article>section').forEach(s=>observer.observe(s));
 }
})();
