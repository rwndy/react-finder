import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID 64431b6aad8c89650e8fd20a33298813ff01b0aed34c95f08eece23e1e58411f'
    }
});