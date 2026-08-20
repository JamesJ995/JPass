import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JPassApp } from '@jpass/ui'

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <JPassApp />
    </StrictMode>
  )
}
