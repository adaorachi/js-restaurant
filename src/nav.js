const nav = (() => {
  const navContent = () => {
    const content = `
      <nav class="d-flex align-items-center justify-content-center justify-content-lg-between">
      <a href="index.html" class="navbar-brand">
        <img class="img-fluid" src="images/logo.png" alt="">
      </a>
      <ul class="nav-list text-center p-0">
        <li class="nav-item">
          <a href="#home" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#about" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#menu" class="nav-link">Menu</a>
        </li>
        <li class="nav-item">
          <a href="#chefs" class="nav-link">Our Team</a>
        </li>
      </ul>
    </nav>`;
    return content;
  };

  return { navContent };
})();

module.exports = nav;