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
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="true" href="#">Trip</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="true" href="#">Participants Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Manage</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h2>{trip.destination}</h2>
                    <p>{trip.startDate} → {trip.endDate}</p>
                    <h3>Partecipanti</h3>
                    <ul>
                        {trip.participants.map(participant => (
                            <li className='list-unstyled' key={participant.id}><Link to={`/trip/${trip.id}/${participant.id}`}>{participant.name}</Link></li>
                        ))}
                    </ul>

                    <Link className="btn btn-dark mt-auto" to="/">Torna alla lista</Link>
                </div>
            </div>
        </>
    );
}

export default TripDetail;