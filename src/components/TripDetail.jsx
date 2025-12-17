import { useParams, Link } from 'react-router-dom';
import { Trips } from '../assets/Trips';

function TripDetail() {
    const { tripId } = useParams();

    return (
        <>
            <Link className="btn btn-dark mt-auto" to="/">Torna alla lista</Link>

        </>
    );
}

export default TripDetail;