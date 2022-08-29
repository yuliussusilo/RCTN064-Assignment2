import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.currencyfreaks.com/latest?apikey=352c5fb6fea746fca9c0066187a19cdf'
})