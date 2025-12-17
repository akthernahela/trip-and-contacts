import { useParams, Link } from 'react-router-dom';
import Trips from './assets/Trips';

export default function ClientsDetails() {
    const { participantId } = useParams();
    const id = Number(participantId);
    let participant = null;
    const allParticipants = [];
}