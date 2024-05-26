import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sslcertificate.uz/',
    headers: {
        'Content-Type': 'application/json',
    },
});

class AllProducts {
    async getProducts() {
        try {
            const response = await api.get('products/ssl/');
            return response.data.products;
        } catch (error) {
            console.error('Ошибка при получении продуктов:', error);
            return error;
        }
    }
}

export default new AllProducts();