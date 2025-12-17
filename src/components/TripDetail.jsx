import { useParams, Link } from 'react-router-dom';
import { Trips } from '../assets/Trips';

function TripDetail() {
    const { tripId } = useParams();
    const trip = Trips.find(trip => trip.id === Number(tripId));

    return (
        <>
            <h2>{trip.destination}</h2>
            <p>{trip.startDate} → {trip.endDate}</p>

            <Link className="btn btn-dark mt-auto" to="/">Torna alla lista</Link>

        </>
    );
}

export default TripDetail;