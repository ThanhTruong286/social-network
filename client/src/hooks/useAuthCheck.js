import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const useAuthCheck = () => {
    const { auth, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!auth) {
                navigate('/login'); // Chuyển hướng nếu không có token
            }
        }
    }, [auth, loading, navigate]);
};

export default useAuthCheck;
