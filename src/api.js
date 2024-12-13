const API_URL = 'https://127.0.0.1'; // Replace with your API base URL
const API_PORT = '8000'; // Replace with your API base URL

const API_BASE_URL = API_URL + ":" + API_PORT; // Replace with your API base URL

// Helper function to get the token from localStorage
const getToken = () => {
    return localStorage.getItem('userToken');
};

// Helper function to set the token to localStorage
const setToken = (token) => {
    localStorage.setItem('userToken', token);
};

// Helper function to remove the token from localStorage
const removeToken = () => {
    localStorage.removeItem('userToken');
};

// API request function with token handling
const apiRequest = async (endpoint, method = 'GET', token = false, body = null) => {
    let headers = {
        'Content-Type': 'application/json',
    }

    if(token){
        const token = getToken();
        headers.push({'Authorization': `Bearer ${token}`})
    }

    const options = {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) }),
    };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

        if (response.ok) {
            return await response.json();
        } else if (response.status === 401) {
            removeToken();
            return null;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Error during API request:', error);
        return null;
    }
};

const validateToken = async () => {
    const token = getToken();
    if (!token) return false;

    const response = await apiRequest('/validate-token', 'POST', false, { token });

    return [response && response.valid, response.type]; // Assuming the backend returns { valid: true/false }
};

export { apiRequest, setToken, removeToken, validateToken };
