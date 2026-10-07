import { useEffect, useState } from 'react'
import { login } from './auth'

type Me = {
  firstname: string
  lastname: string
}

function MePage() {
  const [me, setMe] = useState<Me | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/me')
      .then((res) => (res.ok ? res.json() : null))
      .then(setMe)
      .catch(() => setMe(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>

  return me ? (
    <p>
      Hello {me.firstname} {me.lastname}
    </p>
  ) : (
    <button type="button" onClick={login}>
      Login with GitHub
    </button>
  )
}

export default MePage
