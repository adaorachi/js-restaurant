const team = (() => {
  const teamPageRender = () => {
    const createParentEle = document.createElement('div');
    createParentEle.className = 'display-content team';
    createParentEle.id = 'team';
    createParentEle.innerHTML = `
    <section class="chefs">
    <div class="container">
      <div class="section-heading text-center">
        <h4>Meet</h4>
        <h1 class="display-4">Our Chefs</h1>
      </div>
      <div class="row text-center">
        <div class="col-12 col-md-4" data-aos="fade-up">
          <img src="images/chef-1.png" alt="" class="img-fluid">
          <div class="card-body">
            <h1>Olivia Logan</h1>
            <h6>Cupcake Specialist</h6>
            <p>Oivia is an awesome pastry chef!</p>
          </div>
        </div>

        <div class="col-12 col-md-4" data-aos="fade-up">
          <img src="images/chef-3.png" alt="" class="img-fluid">
          <div class="card-body">
            <h1>James Holt</h1>
            <h6>Cake Specialist</h6>
            <p>James is an awesome pastry chef!</p>
          </div>
        </div>

        <div class="col-12 col-md-4" data-aos="fade-up">
          <img src="images/chef-2.png" alt="" class="img-fluid">
          <div class="card-body">
            <h1>Jessica Lewis</h1>
            <h6>Master Baker</h6>
            <p>Jessica is an awesome pastry chef!</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

    return createParentEle;
  };

  return { teamPageRender };
})();

export { team as default };
