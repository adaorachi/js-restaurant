import nav from './nav';

const home = (() => {
  const pageOnLoad = () => {
    window.addEventListener('load', () => {
      const container = document.getElementById('content');
      const createParentEle = document.createElement('header');
      createParentEle.innerHTML = `
      <div class="container">
        <div class="hamburger-menu">
          <i class="fas fa-bars toggle"></i>
          <i class="fas fa-times toggle"></i>
        </div>
       ${nav.navContent()}
        <div class="hero-text w-100 text-white px-2 px-sm-0">
          <h1 class="display-4">Welcome</h1>
          <p class="lead mb-4">Baked goods like you've never seen before</p>
          <a href="#" class="btn px-5 mr-2">Explore</a>
          <a href="#" class="btn px-5 ml-2">Find a store</a>
        </div>
      </div>`;

      container.append(createParentEle);
    });
  };

  return { pageOnLoad };
})();

export default home;
