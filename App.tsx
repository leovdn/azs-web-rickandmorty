import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EpisodeList from './pages/EpisodeList'
import EpisodeDetail from './pages/EpisodeDetail'
import FavoriteEpisodes from './pages/Favorites'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<EpisodeList />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
        <Route path="/favorites" element={<FavoriteEpisodes />} />
      </Routes>
    </Router>
  )
}

export default App
