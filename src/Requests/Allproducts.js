import axios from 'axios'

const Url = 'https://my.gogetssl.com/api/products/ssl?auth_key='
const token = 'de3c2204dfbbddf09998894d39aa712746c12023'

class AllProducts {
    async getProducts() {
        const products = await axios.get(`https://cors.eu.org/${Url + token}`)
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