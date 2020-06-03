const contact = (() => {
  const contactPageRender = () => {
    const createParentEle = document.createElement('div');
    createParentEle.className = 'display-content contact';
    createParentEle.id = 'contact';
    createParentEle.innerHTML = `
    <div class="container">
      <div class="section-heading my-5 text-center">
        <h4>Order a bake?</h4>
        <h1 class="display-4">Contact Us</h1>
      </div>
      <div class="row text-center">
        <div class="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
          <div class="shop-info">
            <i class="far fa-clock mb-3"></i>
            <h1 class="mb-4">Hours of operation</h1>
            <p>Mon to Fri: 8:00am - 6:00pm</p>
            <p>Sat to Sun: 8:00am - 1:00pm</p>
          </div>
        </div>

        <div class="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
          <div class="shop-info">
            <i class="fas fa-map-marked-alt mb-3"></i>
            <h1 class="mb-4">Our location</h1>
            <address>
              1234 First Avenue <br>
              New York City, NY 1231
            </address>
          </div>
        </div>

        <div class="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
          <div class="shop-info">
            <i class="fas fa-mobile-alt mb-3"></i>
            <h1 class="mb-4">Get in touch </h1>
            <p>Phone #: (800) 555-5555</p>
            <p>Email: contact@bakery.com</p>
          </div>
        </div>
      </div>
    </div>`;

    return createParentEle;
  };

  return { contactPageRender };
})();

export { contact as default };
