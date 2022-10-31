import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/register', {replace: true}), [navigate]);

    return (
        <button type="button" onClick={handleOnClick}>
            Register
        </button>
    );
}