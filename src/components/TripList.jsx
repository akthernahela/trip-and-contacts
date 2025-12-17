import { Link } from 'react-router-dom';
import { Trips } from '../assets/Trips';

function TripList() {

    return (
        <div>
            <h1 className="text-center mb-4">Lista dei Viaggi</h1>
            <ul className="list-group">
                {Trips.map(trip => (
                    <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to={`/trip/${trip.id}`} className="text-decoration-none">
                            {trip.destination} – {trip.startDate} a {trip.endDate}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TripList;