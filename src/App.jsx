import { useState } from 'react'
import Header from './components/Header'
import MobileSidebar from './components/MobileSidebar'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App
