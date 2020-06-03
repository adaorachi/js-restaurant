const home = (() => {
  const homePageRender = () => {
    const createParentEle = document.createElement('div');
    createParentEle.className = 'display-content home';
    createParentEle.id = 'home';
    createParentEle.innerHTML = `
    <div class="container-fluid main-content">
      <section class="">
        <div class="hero-text w-100 text-white px-2 px-sm-0">
          <h1 class="display-4">Whenever we bake, we bake with our hearts</h1>
          <p class="lead mb-4">Baked goods like you've never seen before</p>
          <div class="d-flex flex-row justify-content-center align-items-center">
            <a href="#" class="btn px-5 mr-2 my-2" id="check-menu">Check our menu</a>
            <a href="#" class="btn px-5 ml-2 my-2" id="contact-us">Contach Us</a>
          </div>
        </div>
      </section>
      </div>`;

    return createParentEle;
  };

  return { homePageRender };
})();

export { home as default };
