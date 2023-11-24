export default function LoginForm () {
  return (
    <form>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" required className="p-2 border-2 border-black rounded" />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" id="password" name="password" required className="p-2 border-2 border-black rounded" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
  
}

