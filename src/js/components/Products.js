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
    thisProduct.element2 = utils.createDOMFromHTML(generatedHTML);
    const productsWrapper = document.querySelectorAll(select.containerOf.productsWrapper);
    
    productsWrapper[0].appendChild(thisProduct.element);
    productsWrapper[1].appendChild(thisProduct.element2);
    
  }
}

export default Product;