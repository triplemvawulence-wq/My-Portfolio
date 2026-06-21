import Homepage from './pages/Homepage'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <div className='bg-[#0A0F0D] min-h-screen'>
      <Homepage />
      <Analytics />
    </div>
  )
}

export default App
