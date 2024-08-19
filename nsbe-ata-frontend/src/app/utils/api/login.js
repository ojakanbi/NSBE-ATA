import axios from 'axios';

export const loginUser = async (userData) => {
    try {
        const apiUrl = process.env.NODE_ENV === 'production'
                ? process.env.NEXT_PUBLIC_API_URL
                : process.env.NEXT_PUBLIC_DEV_API_URL;

            const response = await axios.post(`${apiUrl}/login`, userData);
            return response.data
    // Optionally store the token in local storage
    localStorage.setItem('token', response.data.access_token);

    // Redirect or update UI based on successful login
    console.log("Login successful!");
} catch (error) {
    console.error('Error logging in:', error);
}
};
