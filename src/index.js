import AOS from 'aos';

import home from './home';
import about from './about';
import menu from './menu';
import team from './team';
import contact from './contact';
import nav from './nav';
import footer from './footer';

AOS.init();

const UI = () => {
  const displayContentOnLoad = (content) => {
    const navContent = nav.navRender();
    const footerContent = footer.footerRender();
    const container = document.getElementById('content');
    container.appendChild(navContent);
    container.appendChild(content);
    container.appendChild(footerContent);
  };

  const closeMenuList = (open = true) => {
    const toggle = document.querySelectorAll('.toggle');
    const navList = document.querySelector('.nav-list');
    if (open) {
      navList.classList.toggle('open');
      toggle.forEach((item) => {
        item.classList.toggle('open');
      });
    } else {
      navList.classList.remove('open');
      toggle.forEach((item) => {
        item.classList.remove('open');
      });
    }
  };

  const toggleMenu = () => {
    const hamburger = document.getElementById('hamburger-menu');
    hamburger.addEventListener('click', () => {
      closeMenuList();
    });
  };

  const changeContentOnLinkClick = (button, content) => {
    const navLink = document.getElementById(button);
    const footerNode = document.querySelector('.footer');
    navLink.addEventListener('click', () => {
      const displayContent = document.querySelector('.display-content');
      const { id } = displayContent;
      document.getElementById(id).remove();
      const container = document.getElementById('content');
      container.insertBefore(content, footerNode);
      content.classList.add('display-content');
      closeMenuList(false);
    });
  };

  const onLoad = () => {
    window.addEventListener('load', () => {
      const homePage = home.homePageRender();
      const aboutPage = about.aboutPageRender();
      const menuPage = menu.menuPageRender();
      const teamPage = team.teamPageRender();
      const contactPage = contact.contactPageRender();
      displayContentOnLoad(homePage);

      changeContentOnLinkClick('about-link', aboutPage);
      changeContentOnLinkClick('home-link', homePage);
      changeContentOnLinkClick('menu-link', menuPage);
      changeContentOnLinkClick('team-link', teamPage);
      changeContentOnLinkClick('contact-link', contactPage);
      changeContentOnLinkClick('contact-us', contactPage);
      changeContentOnLinkClick('check-menu', menuPage);

      toggleMenu();
    });
  };
  return { onLoad };
};

const ui = UI();

ui.onLoad();
