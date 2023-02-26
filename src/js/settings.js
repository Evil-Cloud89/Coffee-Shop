export const select = {
  templateOf: {
    products: '#template-product',
  },

  containerOf: {
    productsWrapper: '.products-wrapper',
    pages: '#pages',
  },

  nav: {
    links: '.nav-wrapper a',
  },

  product: {
    wrapper: '.product-box',
    name: '.product-title',
    description: '.product-description',
    roasting: '.product-roasting',
    intensity: '.product-intensity',
    image: '.product-image',
  },
};

export const classNames = {
  product: {
    reverseBox: 'reverse',
    mostPopular: 'most-popular',
  },

  pages: {
    active: 'active',
  },
  
  nav: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};