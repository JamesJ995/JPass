import { useState } from 'react'
import './app.css'

export function JPassApp() {
  const [password, setPassword] = useState('')

  return (
    <main className="jpass">
      <header className="jpass__header">
        <span className="jpass__logo" aria-hidden="true">🔐</span>
        <h1 className="jpass__title">JPass</h1>
      </header>
      <p className="jpass__subtitle">A homegrown password manager</p>
      <form
        className="jpass__form"
        onSubmit={(event) => {
          event.preventDefault()
          console.log('JPass unlock submitted')
        }}
      >
        <input
          className="jpass__input"
          type="password"
          placeholder="Master password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoFocus
        />
        <button className="jpass__button" type="submit">
          Unlock
        </button>
      </form>
    </main>
  )
}
