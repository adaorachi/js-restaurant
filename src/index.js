import home from './home';
import about from './about';
import nav from './nav';
import footer from './footer';

const displayContent = (content) => {
  const navContent = nav.navRender();
  const footerContent = footer.footerRender();
  const container = document.getElementById('content');
  container.appendChild(navContent);
  container.appendChild(content);
  container.appendChild(footerContent);
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
  });
};

window.addEventListener('load', () => {
  const homePage = home.homePageRender();
  const aboutPage = about.aboutPageRender();
  displayContent(homePage);

  changeContentOnLinkClick('about-link', aboutPage);
  changeContentOnLinkClick('home-link', homePage);
});
