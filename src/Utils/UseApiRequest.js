import { useNavigate } from 'react-router-dom';
import { validateToken, getToken, API_BASE_URL, removeToken } from '../Utils/AuthContext';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const useApiRequest = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn, setUserType } = useAuth();

    return async (endpoint, method = 'GET', token = false, body = {}) => {
        let headers = {
            'Content-Type': 'application/json',
        };

        if (token) {
            const validate = await validateToken()
            if (validate[0]) {
                const authToken = getToken();
                headers.Authorization = `Bearer ${authToken}`;
            } else {
                removeToken();
                setIsLoggedIn(false);
                setUserType(0);
                navigate('/');
            }
        }

        const options = {
            method,
            headers,
        };

        if (method !== 'GET') {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
            if (!response.ok) {
                return null
            }
            return await response.json();
        } catch (error) {
            console.error('API Request Error:', error);
            return null;
        }
    };
};

export default useApiRequest;
