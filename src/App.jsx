import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TripList from './components/TripList';
import TripDetail from './components/TripDetail'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<TripList />} />
            <Route path="/trip/:tripId" element={<TripDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
