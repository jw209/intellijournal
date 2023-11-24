import { useState } from 'react';

export default function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    /* remove this later, for testing purposes */
    e.preventDefault();

    const payload = {
      'email': email,
      'password': password,
    }

    console.log(payload);
  }

  return (
    <form onSubmit={(e) => handleLoginSubmit(e)}>
      <div className="space-y-5">
        {/* email field */}
        <input 
          id="email" 
          name="email" 
          placeholder="email" 
          className="p-4 rounded-2xl"
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        {/* password field */}
        <input
          type="password"
          id="password" 
          name="password" 
          placeholder="password" 
          className="p-4 rounded-2xl"
          onChange={(e) => setPassword(e.target.value)}
          required  
        />
        <button className="pl-5" type="submit">Login</button>
      </div>
    </form>
  )
}
