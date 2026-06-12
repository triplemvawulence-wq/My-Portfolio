import Homepage from './pages/Homepage'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Homepage />
      <Analytics />
    </div>
  )
}

export default App
