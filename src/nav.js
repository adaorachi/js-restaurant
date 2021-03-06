const nav = (() => {
  const navRender = () => {
    const navParent = document.createElement('header');
    navParent.classList.add('header');
    navParent.innerHTML = `
        <div class="hamburger-menu" id="hamburger-menu">
          <i class="fas fa-bars toggle"></i>
          <i class="fas fa-times toggle"></i>
        </div>
        <nav class="d-flex align-items-center justify-content-center justify-content-lg-between px-4">
        <a href="index.html" class="navbar-brand">
          <img class="img-fluid" src="images/logo.png" alt="">
        </a>
        <ul class="nav-list text-center p-0" id="nav-list">
          <li class="nav-item" id="home-link">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item" id="about-link">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item" id="menu-link">
            <a href="#" class="nav-link">Menu</a>
          </li>
          <li class="nav-item" id="team-link">
            <a href="#" class="nav-link">Team</a>
          </li>
          <li class="nav-item" id="contact-link">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </nav>`;

    return navParent;
  };

  return { navRender };
})();

module.exports = nav;
