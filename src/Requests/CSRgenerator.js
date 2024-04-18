import axios from 'axios';
import { corsUrl, Url, token } from './request';

class GetCSR {
    async csrCode(params) {
        const endPoint = "/tools/csr/generate?auth_key=";
        const myHeaders = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        const urlencoded = new URLSearchParams();
        urlencoded.append("csr_commonname", params.pathName);
        urlencoded.append("csr_organization", params.organization);
        urlencoded.append("csr_department", params.department);
        urlencoded.append("csr_city", params.city);
        urlencoded.append("csr_state", params.stateOrRegion);
        urlencoded.append("csr_country", params.country);
        urlencoded.append("csr_email", params.email);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        try {
            const response = await axios.post(`${corsUrl}/${Url}${endPoint}${token}`, requestOptions);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new GetCSR();