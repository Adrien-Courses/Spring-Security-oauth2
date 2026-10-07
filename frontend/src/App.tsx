import { login } from './auth'
import MePage from './MePage'

function Home() {
  return (
    <div>
      <button type="button" onClick={login}>
        Login with GitHub
      </button>
      <p>
        <a href="/me">My profile</a>
      </p>
    </div>
  )
}

function App() {
  return window.location.pathname === '/me' ? <MePage /> : <Home />
}

export default App
