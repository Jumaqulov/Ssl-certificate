import axios from 'axios'

const baseUrl = 'https://my.gogetssl.com/api'
const token = '3e317d975d4cd3206b13a56167d8bbeaac41a872'

class PerProduct {
    getPerProduct(id) {
        const endPoint = `/products/details/${id}?auth_key=`
        const product = axios.get(baseUrl + endPoint + token)
            .then(ress => {
                return ress.data
            })
            .catch(err => {
                return err
            })
        return product
    }
}

export default new PerProduct()