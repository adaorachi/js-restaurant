const footer = (() => {
  const footerRender = () => {
    const footerParent = document.createElement('footer');
    footerParent.className = 'footer text-center py-1';
    footerParent.innerHTML = `
        &copy; Bakery 2020. All rights reserved.`;

    return footerParent;
  };

  return { footerRender };
})();

module.exports = footer;
