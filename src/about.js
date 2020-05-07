const about = (() => {
  const aboutPageRender = () => {
    const createParentEle = document.createElement('div');
    createParentEle.className = 'display-content about';
    createParentEle.id = 'about';
    createParentEle.innerHTML = `
    <div class="container-fluid main-content">
      <section class="">
        <div class="container w-50">
          <div class="row align-items-lg-center">
            <div class="col-12 col-md-6 text-center text-md-left" data-aos="fade-up">
              <div class="section-heading mb-3">
                <h4>Discover</h4>
                <h1 class="display-4">Our Story</h1>
              </div>
              <p>We’ve baked every item from the core of our heart to serve you. Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of North American living. For many, grilling becomes a routine mealtime activity.</p>
              <a href="#" class="btn mt-4 mb-5 mb-md-0">Find out more</a>
            </div>
            <div class="col-12 col-md-6" data-aos="fade-up">
              <img src="images/about-img.jpg" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </section>
      </div>`;

    return createParentEle;
  };

  return { aboutPageRender };
})();

export { about as default };
