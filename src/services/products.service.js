import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000';

class ProductsService {
  getAllProducts() {
    return axios.get(API_URL + '/products');
  }

  getSingleProduct(productId) {
    return axios.get(API_URL + `/products/getproduct/?productId=${productId}`, { headers: authHeader() });
  }

  updateProduct(productId) {
    return axios.get(API_URL + `/products/update/?productId=${productId}`, { headers: authHeader() });
  }

  deleteProduct(productId) {
    return axios.delete(API_URL + `/products/delete/?productId=${productId}`, { headers: authHeader() });
  }
  getAllProductsbyuser(userId) {
    return axios.get(API_URL + '/getusersproduct/'+userId);
  }
  addproducttowishlist(pid){
    return axios.post(API_URL + '/addtowishlist/'+pid, { headers: authHeader() });

  }
}

export default new ProductsService();
