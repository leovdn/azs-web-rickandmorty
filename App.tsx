import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EpisodeList from './pages/EpisodeList'
import EpisodeDetail from './pages/EpisodeDetail'
import FavoriteEpisodes from './pages/Favorites'

function App() {
  return (
    <div>
      <h1>AZShip - Rick and Morty</h1>

      <Router>
        <Routes>
          <Route path="/" element={<EpisodeList />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
          <Route path="/favorites" element={<FavoriteEpisodes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
