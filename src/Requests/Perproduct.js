import axios from 'axios'

const Url = 'https://my.gogetssl.com/api'
const token = 'de3c2204dfbbddf09998894d39aa712746c12023'

class PerProduct {
    getPerProduct(id) {
        const endPoint = `/products/details/${id}?auth_key=`
        const product = axios.get(`https://cors.eu.org/${Url + endPoint + token}`)
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