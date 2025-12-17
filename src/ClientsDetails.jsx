import { useParams, Link } from 'react-router-dom';
import Trips from './assets/Trips';

export default function ClientsDetails() {
    const { tripId, participantId } = useParams();
    const trip = Trips.find(t => t.id === Number(tripId));
    const participant = trip?.participants.find(participante => participante.id == participantId);
    if (!participant) {
        return (
            <div>
                <p>Partecipante non trovato</p>
                <Link className="btn btn-dark" to="/">Torna alla lista viaggi</Link>
            </div>
        );
    }

    return (
        <div className='card p-4'>
            <h2>{participant.name}</h2>
            <p>Email: {participant.email}</p>
            <p>Phone: {participant.phone}</p>
            <p>Emergency Contact: {participant.emergencyContact}</p>
            <div className="mt-3">
                <Link className="btn btn-dark me-2" to={`/trip/${tripId}`}>
                    Torna al Viaggio
                </Link>
                <Link className="btn btn-dark" to="/">Torna alla Home</Link>
            </div>
        </div>
    );
}