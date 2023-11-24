export default function LoginForm () {
  return (
    <form className="space-x-12">
      <input id="email" name="email" placeholder="email" required className="p-4 rounded-2xl" />
      <input id="password" name="password" placeholder="password" required className="p-4 rounded-2xl" />
      <button type="submit">Submit</button>
    </form>
  )
}

