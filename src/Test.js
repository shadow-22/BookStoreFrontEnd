const Test = () => {
    const handleTest = async () => {
        const token = localStorage.getItem('jwtToken'); // Get the JWT token from localStorage

        if (!token) {
            alert('You are not logged in!');
            return;
        }

        try {
            const response = await fetch('/jaxrs-api/api/test', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Attach the JWT token to the request
                },
            });

            if (response.ok) {
                const result = await response.text();
                alert(result); // Display the success message
            } else {
                alert('Failed to verify JWT. Please log in.');
            }
        } catch (error) {
            console.error('Error during the test request:', error);
            alert('An error occurred during the test request.');
        }
    };

    return (
        <button onClick={handleTest} className="test-button">
            Test
        </button>
    );
}
 
export default Test;