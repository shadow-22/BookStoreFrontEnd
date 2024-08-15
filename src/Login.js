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
          const data = await response.json();
          const token = data.token; // Assuming your API returns the token under 'token' key
          localStorage.setItem('jwtToken', token); // Store token in local storage
          alert('Login successful!');
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