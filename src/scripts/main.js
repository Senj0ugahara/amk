window.addEventListener('DOMContentLoaded', function() {
  scrollingPage();
  openMobileMenu();
})

const scrollingPage = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('is-scrolling');
    } else {
      header.classList.remove('is-scrolling');
    }
  })
}

const openMobileMenu = () => {
  const burger = document.querySelector('.header-burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.querySelector('.header-burger__line').classList.toggle('is-open');
    nav.classList.toggle('is-open');
  })
}

if (window.clientWidth > 480) {
  const showMoreMembers = () => {
    const membersItems = Array.from(document.querySelectorAll('.members-item'));
    const btnShow = document.querySelector('.members__show-more');
  
    function hiddenMembers() {
      for (let i = 6; i < membersItems.length; i++) {
        membersItems[i].style.display = 'none';
      }
    }
    hiddenMembers();
  
    btnShow.addEventListener('click', showMoreMembers)
  
    function showMoreMembers() {
      membersItems.forEach(membersItem => {
        membersItem.style.display = 'block';
      })
    }
  }
  
  showMoreMembers()
}