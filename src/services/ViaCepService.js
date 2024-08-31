import axios from 'axios';

const api = axios.create({
    baseURL: "https://viacep.com.br/ws",
});

export default class ViaCepService {
    async getAddress(cep) {
        const URI = `/${cep}/json`;
    
        const response = await api.get(URI);
    
        return response.data;
    }
}