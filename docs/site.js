const gallery = document.querySelector('#gallery');
const figures = [...gallery.querySelectorAll('figure')];
const previous = document.querySelector('#gallery-prev');
const next = document.querySelector('#gallery-next');
const status = document.querySelector('#gallery-status');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let scheduled = false;

function position(index) {
  return figures[index].offsetLeft - figures[0].offsetLeft;
}
function updateGallery() {
  scheduled = false;
  const end = gallery.scrollWidth - gallery.clientWidth;
  const nearest = figures.reduce((best, _, index) => Math.abs(position(index) - gallery.scrollLeft) < Math.abs(position(best) - gallery.scrollLeft) ? index : best, 0);
  current = nearest;
  previous.disabled = gallery.scrollLeft < 2;
  next.disabled = gallery.scrollLeft >= end - 2;
  const first = figures.findIndex((_, index) => position(index) + figures[index].clientWidth > gallery.scrollLeft + 5);
  const last = figures.reduce((result, _, index) => position(index) < gallery.scrollLeft + gallery.clientWidth - 5 ? index : result, first);
  status.textContent = first === last ? `目前瀏覽第 ${first + 1} 張，共 5 張` : `目前瀏覽第 ${first + 1}–${last + 1} 張，共 5 張`;
}
function moveGallery(direction) {
  updateGallery();
  const target = Math.max(0, Math.min(figures.length - 1, current + direction));
  gallery.scrollTo({left:position(target), behavior:reducedMotion.matches ? 'instant' : 'smooth'});
}
previous.addEventListener('click', () => moveGallery(-1));
next.addEventListener('click', () => moveGallery(1));
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1);
  }
});
gallery.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateGallery); }
}, {passive:true});
new ResizeObserver(updateGallery).observe(gallery);
updateGallery();

// Only local release metadata is fetched; downloads still come from GitHub Releases.
fetch('release.json', {cache:'no-cache'})
  .then(response => {if (!response.ok) throw new Error('Release metadata unavailable'); return response.json();})
  .then(release => {
    const keys = ['android', 'windows', 'release', 'checksums'];
    if (!/^\d+\.\d+\.\d+$/.test(release.version) || !keys.every(key => {
      try {const url = new URL(release[key]);return url.origin === 'https://github.com' && url.pathname.startsWith('/JaxHao/CDG-Downloads/releases/');} catch {return false;}
    })) return;
    document.querySelector('#version').textContent = release.version;
    document.querySelectorAll('[data-download]').forEach(link => { link.href = release[link.dataset.download]; });
  })
  .catch(() => { /* Static links remain usable when metadata cannot be fetched. */ });
