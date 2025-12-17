import { useParams, Link } from 'react-router-dom';
import { Trips } from '../assets/Trips';

function TripDetail() {
    const { tripId } = useParams();
    const trip = Trips.find(trip => trip.id === Number(tripId));

    return (
        <>
            <h2>{trip.destination}</h2>
            <p>{trip.startDate} → {trip.endDate}</p>
            <h3>Partecipanti</h3>
            <ul>
                {trip.participants.map(participant => (
                    <li key={participant.id}>{participant.name}</li>
                ))}
            </ul>

            <Link className="btn btn-dark mt-auto" to="/">Torna alla lista</Link>

        </>
    );
}

export default TripDetail;