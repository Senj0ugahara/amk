window.addEventListener('DOMContentLoaded', function() {
  scrollingPage();
  openMobileMenu();
  showMoreMembers();
  showMoreAdvantages();
})

window.addEventListener('resize', function() {
  showMoreMembers();
  showMoreAdvantages();
}, true);

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