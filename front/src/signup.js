import React, { useState } from 'react';

function Signup({ toggle }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            setMessage('Signup successful, please login');
            toggle();
        } else {
            setMessage('Signup failed');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            <p>{message}</p>
            <p>Already registered? <button onClick={toggle}>Login</button></p>
        </div>
    );
}

export default Signup;
