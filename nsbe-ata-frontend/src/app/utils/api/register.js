import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
