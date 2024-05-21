import axios from 'axios'

const Url = 'http://192.168.0.19:8000/products/ssl/'

class AllProducts {
    async getProducts() {
        const products = await axios.get(Url)
            .then(ress => {
                return ress.data.products
            })
            .catch(err => {
                return err
            })
        return products
    }
}

export default new AllProducts()