import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EpisodeList from './components/EpisodeList'
import EpisodeDetail from './components/EpisodeDetail'

function App() {
  return (
    <div>
      <h1>AZShip - Rick and Morty</h1>

      <Router>
        <Routes>
          <Route path="/" element={<EpisodeList />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
