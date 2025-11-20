
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Testing from './components/testing'

import NewBoard from './components/boards'
import TrelloBoard from './components/Trelloboard'
import { Home } from 'lucide-react'
import Homepage from './components/homepage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='test' element={<Testing />} />

        <Route path='boards' element={<NewBoard />} />
        <Route path='board-view' element={<TrelloBoard />} />


      </Routes>
    </>
  )
}

export default App
