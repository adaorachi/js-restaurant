const menu = (() => {
  const menuPageRender = () => {
    const createParentEle = document.createElement('div');
    createParentEle.className = 'display-content menu';
    createParentEle.id = 'menu';
    createParentEle.innerHTML = `
        <div class="container pb-4">
          <div class="section-heading my-5 text-center">
            <h4>Our Tasty Food</h4>
            <h1 class="display-4">The Menu</h1>
          </div>
          <div class="row row-1 menu-row no-gutters" data-aos="fade-down">
            <div class="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1">
              <img src="images/menu-item-1.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2 point-left">
              <div class="menu-item-desc">
                <h6>$12</h6>
                <h1>Butter Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-2 order-sm-4 order-xl-3">
              <img src="images/menu-item-2.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4 point-left">
              <div class="menu-item-desc">
                <h6>$10</h6>
                <h1>Pound Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5">
              <img src="images/menu-item-3.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6 point-left">
              <div class="menu-item-desc">
                <h6>$15</h6>
                <h1>Sponge Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

          </div>

          <div class="row row-2 menu-row no-gutters" data-aos="fade-up">
            <div class="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2">
              <img src="images/menu-item-4.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1 point-right">
              <div class="menu-item-desc">
                <h6>$8</h6>
                <h1>Genoise Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4">
              <img src="images/menu-item-5.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-3 point-right">
              <div class="menu-item-desc">
                <h6>$10</h6>
                <h1>Biscuit Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6">
              <img src="images/menu-item-6.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5 point-right">
              <div class="menu-item-desc">
                <h6>$11</h6>
                <h1>Chiffon Cake</h1>
                <p>This Cake is amazing! I recommend it to everyone</p>
                <a href="#" class="btn mt-3 d-none d-xl-block">Learn more</a>
              </div>
            </div>

          </div>
        </div>`;

    return createParentEle;
  };

  return { menuPageRender };
})();

export { menu as default };
