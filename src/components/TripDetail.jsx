import { useParams, Link } from 'react-router-dom';
import Trips from '../assets/Trips';

function TripDetail() {
    const { tripId } = useParams();
    const trip = Trips.find(trip => trip.id === Number(tripId));

    if (!trip) {
        return <p>Viaggio non trovato</p>;
    }

    return (
        <>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="#">Trip</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Participants Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Manage</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h2>{trip.destination}</h2>
                    <p>{trip.startDate} → {trip.endDate}</p>
                    <h3>Partecipanti</h3>
                    <ul>
                        {trip.participants.map(participant => (
                            <li className='list-unstyled' key={participant.id}>{participant.name}</li>
                        ))}
                    </ul>

                    <Link className="btn btn-dark mt-auto" to="/">Torna alla lista</Link>
                </div>
            </div>
        </>
    );
}

export default TripDetail;