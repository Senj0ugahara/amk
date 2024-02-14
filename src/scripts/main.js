window.addEventListener('DOMContentLoaded', function() {
  scrollingPage();
  openMobileMenu();
  showMoreMembers();
  showMoreAdvantages();
  smoothScroll();
})

window.addEventListener('resize', function() {
  scrollingPage();
  showMoreMembers();
  showMoreAdvantages();
}, true);

const scrollingPage = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 960) {
      if (window.scrollY > 147) {
        header.querySelector('.header-main').classList.add('is-scrolling');
        header.style.height = '147px';
      } else {
        header.querySelector('.header-main').classList.remove('is-scrolling');
        header.style.height = 'auto';
      }
    }
    if (window.innerWidth <= 960) {
      if (window.scrollY > 112) {
        header.querySelector('.header-main').classList.add('is-scrolling');
        header.style.height = '112px';
      } else {
        header.querySelector('.header-main').classList.remove('is-scrolling');
        header.style.height = 'auto';
      }
    }
  })
}

const openMobileMenu = () => {
  const burger = document.querySelector('.header-burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.querySelector('.header-burger__line').classList.toggle('is-open');
    nav.classList.toggle('is-open');
    document.body.classList.toggle('scroll-disable');
  })
}

const showMoreMembers = () => {
  const membersItems = document.querySelectorAll('.members-item[data-hidden]');
  const memberBtnShowMore = document.querySelector('.members__show-more');

  if (window.innerWidth <= 480) {
    memberBtnShowMore.addEventListener('click', showMore);
  
    function hiddenItems() {
      membersItems.forEach(membersItem => membersItem.classList.add('hidden'));
      memberBtnShowMore.textContent = `Показать еще (${membersItems.length})`;
    }
    hiddenItems();
  
    function showMore() {
      if (memberBtnShowMore.textContent != 'Скрыть') {
        membersItems.forEach(membersItem => membersItem.classList.toggle('hidden'));
        memberBtnShowMore.textContent = 'Скрыть';
      } else {
        membersItems.forEach(membersItem => membersItem.classList.toggle('hidden'));
        memberBtnShowMore.textContent = `Показать еще (${membersItems.length})`;
      }
    }
  } else {
    membersItems.forEach(membersItem => membersItem.classList.remove('hidden'));
  }
}

const showMoreAdvantages = () => {
  const advantagesItems = document.querySelectorAll('.advantages-item[data-hidden]');
  const advantagesBtnShowMore = document.querySelector('.advantages__show-more');
  
  if (window.innerWidth <= 480) {
    advantagesBtnShowMore.addEventListener('click', showMore);
  
    function hiddenItems() {
      advantagesItems.forEach(membersItem => membersItem.classList.add('hidden'));
      advantagesBtnShowMore.textContent = `Показать еще (${advantagesItems.length})`;
    }
    hiddenItems();
  
    function showMore() {
      if (advantagesBtnShowMore.textContent != 'Скрыть') {
        advantagesItems.forEach(membersItem => membersItem.classList.toggle('hidden'));
        advantagesBtnShowMore.textContent = 'Скрыть';
      } else {
        advantagesItems.forEach(membersItem => membersItem.classList.toggle('hidden'));
        advantagesBtnShowMore.textContent = `Показать еще (${advantagesItems.length})`;
      }
    }
  } else {
    advantagesItems.forEach(membersItem => membersItem.classList.remove('hidden'));
  }
}

const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });
}