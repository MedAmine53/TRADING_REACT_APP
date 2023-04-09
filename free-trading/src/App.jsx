import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockDetailPage from './pages/StockDetailPage'
import StockOverViewPage from './pages/StockOverViewPage'

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverViewPage/>} /> 
          <Route path='/detail/:symbol' element={<StockDetailPage />}   />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
