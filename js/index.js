const navSlide = () => {
  const menu = document.querySelector('.burger');
  const nav = document.querySelector('.nav_container');
  const social = document.querySelector('.socials');

  menu.addEventListener('click', () => {
    nav.classList.toggle('open_burger');
    social.classList.toggle('open_socials');

    menu.classList.toggle('toggle');
  });
};

navSlide();
