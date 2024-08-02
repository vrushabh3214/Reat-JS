// Signup component
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    // Send POST request to JSON server
    const response = await fetch('http://localhost:5000/signup-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      alert("Signup successful")
      setEmail(''); // Clear the email input field
      setPassword(''); // Clear the password input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Sign UP</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Signup</button>
      </div>

    </form>
  );
}

export default Signup;
