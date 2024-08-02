// Login component
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    const user = { email, password };
    // Send POST request to JSON server
    const response = await fetch('http://localhost:5000/login-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      setEmail(''); // Clear the email input field
      setPassword(''); // Clear the password input field
    }
  };

  return (<>
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>


  </>
  );
}

export default Login;
