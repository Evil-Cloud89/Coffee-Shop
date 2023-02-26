import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {  
  constructor(id, data){
    const thisProduct = this;
  
    thisProduct.id = id;
    thisProduct.data = data;
  
    thisProduct.render();
  }
  
  render(){   
    const thisProduct = this;
  
    const generatedHTML = templates.products(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const productsWrapper = document.querySelector(select.containerOf.productsWrapper);
    productsWrapper.appendChild(thisProduct.element);
    
  }
}

export default Product;