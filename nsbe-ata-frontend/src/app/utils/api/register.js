import axios from 'axios';


export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3001/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
