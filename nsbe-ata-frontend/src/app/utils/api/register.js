import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const apiUrl = process.env.NODE_ENV === 'production'
            ? process.env.NEXT_PUBLIC_PROD_API_URL
            : process.env.NEXT_PUBLIC_DEV_API_URL;

        const response = await axios.post(`${apiUrl}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
