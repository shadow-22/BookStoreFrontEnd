import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('password'); // Example: Hard-coded for simplicity
  
    const handleLogin = async () => {
      try {
        const response = await fetch('/jaxrs-api/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
            const authHeader = response.headers.get('Authorization');
            const token = authHeader && authHeader.split(' ')[1]; 
            
            if (token) {
                localStorage.setItem('jwtToken', token); 
                alert('Login successful!');
                console.log("JWT: " + token);
            } else {
                alert('Token not found in the response!');
            }
        } else if (response.status === 401) {
            alert('Invalid credentials!');
        } else {
            alert('Login failed!');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    };

    return (
        <div className="login-button">
            <button onClick={handleLogin}>
                Login
            </button> 
        </div>
    );
}
 
export default Login;