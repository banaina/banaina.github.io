// Open a burger menu to access navigation on smaller screens

const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width<40rem)');
const topNavMenu = document.querySelector('.nav-burger')
const main = document.querySelector('main');
const body = document.querySelector('body');

function setupNavBurger(e){
  if (e.matches){
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '')
    topNavMenu.style.transition = 'none';
  }
  else {
    console.log('is desktop');
    // closeMobileMenu(); // close menu if open when switching to desktop
    topNavMenu.removeAttribute('inert');
  }
}

function openMobileMenu(){
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style'); 
  main.setAttribute('inert', ''); // disable main content while menu is open
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus(); // make sure keyboard immediately focuses on close button when menu opens
}

function closeMobileMenu(){
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', ''); 
  main.removeAttribute('inert'); // re-enable main content when menu is closed
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus(); // make sure keyboard immediately focuses on open button when menu closes

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500); // delay so that transition happens after the slide anim is complete
}

// run setupNavBurger function once on page load
setupNavBurger(media);
// run setup anytime the viewport changes as well
media.addEventListener('change', function(e){
  setupNavBurger(e);
});

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);