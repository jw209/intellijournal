import { useState } from 'react';

export default function LoginForm () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = (e) => {
    /* remove this later, for testing purposes */
    e.preventDefault();

    const payload = {
      'name': name,
      'email': email,
      'password': password,
    }

    console.log(payload);
  }

  return (
    <form onSubmit={(e) => handleLoginSubmit(e)}>
      <div className="space-y-5">
        {/* name field */}
        <input 
          id="name" 
          name="name" 
          placeholder="name" 
          className="p-4 rounded-2xl"
          onChange={(e) => setName(e.target.value)}
          required 
        />
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
        {/* confirm password field */}
        <input
          type="password"
          id="confirm-password" 
          name="confirm-password" 
          placeholder="confirm password" 
          className="p-4 rounded-2xl"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required  
        />
        <button className="pl-5" type="submit">Signup</button>
      </div>
    </form>
  )
}