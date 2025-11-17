
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Testing from './components/testing'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/test' element={<Testing />} />
    
      
      </Routes>
    </>
  )
}

export default App
