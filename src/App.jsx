import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TripList from './components/TripList';
import TripDetail from './components/TripDetail'
import Header from './assets/Header';
import ClientsDetails from './ClientsDetails';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<TripList />} />
            <Route path="/trip/:tripId" element={<TripDetail />} />
            <Route path="/trip/:tripId/:participantId" element={<ClientsDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
